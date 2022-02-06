import notifee, {
  TriggerType,
  TimestampTrigger,
  Notification,
  AndroidImportance,
  AndroidVisibility,
  IOSAuthorizationStatus,
  EventType,
} from '@notifee/react-native';
import { Alert } from 'react-native';
import { categories } from './categories';

/* Timestamp Date */
const getTimestamp = (delay: number) => {
  const timestampDate = new Date(Date.now());
  timestampDate.setSeconds(timestampDate.getSeconds() + delay);
  return timestampDate.getTime();
};

const getTimestampTrigger = (delay: number): TimestampTrigger => {
  return { timestamp: getTimestamp(delay), type: TriggerType.TIMESTAMP };
};

export const cancelAllTriggerNotifications = (notificationIds?: string[]) => {
  notifee.cancelAllNotifications(notificationIds);
}

export const triggerNotification = async (title: string, body: string, delay: number) => {
  const notification: Notification = {
    title,
    body,
    android: {
      channelId: 'default',
      pressAction: {
        id: 'default',
      },
    },
    ios: {
      sound: 'default',
    },
  };

  await notifee.deleteChannel(notification.android?.channelId || 'default');
  // Create a channel
  await notifee.createChannel({
    id: notification.android?.channelId || 'default',
    name: notification.android?.channelId || 'default',
    importance: notification.android?.importance || AndroidImportance.DEFAULT,
    visibility: notification.android?.visibility || AndroidVisibility.PRIVATE,
    vibration: true,
    sound: notification.android?.sound || 'default',
  });
  const channel = await notifee.getChannel(
    notification.android?.channelId || 'default',
  );
  console.log('notification.channel', channel);
  /* Change the trigger */
  const trigger = getTimestampTrigger(delay);

  await notifee.createTriggerNotification(notification, trigger);
  console.log('Trigger created: ', notification, trigger);
};

export const requestUserPermission = async () => {
  // iOS only
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
    console.log('Permission settings:', settings);
  } else {
    console.log('User declined permissions');
  }
};

export const checkAndAlertForBattery = async () => {
  // Android only
  // 1. checks if battery optimization is enabled
  const batteryOptimizationEnabled = await notifee.isBatteryOptimizationEnabled();
  if (batteryOptimizationEnabled) {
    // 2. ask your users to disable the feature
    Alert.alert(
      'Notification restrictions detected',
      'To ensure you know when Rest is over, please disable battery optimization for the app.',
      [
        // 3. launch intent to navigate the user to the appropriate screen
        {
          text: 'OK, open settings',
          onPress: async () => await notifee.openBatteryOptimizationSettings(),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
  } else {
    // Android only
    // 1. get info on the device and the Power Manager settings
    const powerManagerInfo = await notifee.getPowerManagerInfo();
    if (powerManagerInfo.activity) {
      // 2. ask your users to adjust their settings
      Alert.alert(
        'Notification restrictions detected',
        'To ensure you know when Rest is over, please adjust your settings to prevent the app from being killed',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'OK, open settings',
            onPress: async () => await notifee.openPowerManagerSettings(),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
        ],
        { cancelable: false }
      );
    }
  }
}

export const setupForegroundEventHandling = async () => {
  notifee.setNotificationCategories(categories);
  return notifee.onForegroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
    const pressActionLabel = pressAction
      ? `, press action: ${pressAction?.id}`
      : '';
    console.log(
      `[onForegroundEvent] notification id: ${notification?.id},  event type: ${EventType[type]}${pressActionLabel}`,
    );

    switch (type) {
      case EventType.DISMISSED:
        console.log(
          '[onForegroundEvent] User dismissed notification',
          notification,
        );
        break;
      case EventType.PRESS:
        console.log(
          '[onForegroundEvent] User pressed notification',
          notification,
        );
        break;
      case EventType.ACTION_PRESS:
        console.log(
          '[onForegroundEvent] User pressed an action',
          notification,
          detail.pressAction,
        );

        // if (detail.pressAction?.id === 'first_action_reply') {
        //   // perform any server calls here and cancel notification
        //   if (notification?.id) {
        //     await notifee.cancelDisplayedNotification(notification.id);
        //   }
        // }
        break;
    }
  });
};

export const setupBackgroundEventHandling = async () => {
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
    console.log(
      `[onBackgroundEvent] notification id: ${notification?.id},  event type: ${EventType[type]}, press action: ${pressAction?.id}`,
    );
    // Check if the user pressed the "Mark as read" action
    // if (
    //   type === EventType.ACTION_PRESS &&
    //   pressAction?.id === 'first_action_reply'
    // ) {
    //   console.log('[onBackgroundEvent] ACTION_PRESS: first_action_reply');

    //   // Remove the notification
    //   if (notification?.id) {
    //     await notifee.cancelNotification(notification?.id);
    //   }
    // }
  });
}
