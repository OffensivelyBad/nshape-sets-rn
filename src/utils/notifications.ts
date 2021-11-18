import notifee, {
  TriggerType,
  TimestampTrigger,
  Notification,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';

/* Timestamp Date */
const getTimestamp = (delay: number) => {
  const timestampDate = new Date(Date.now());
  timestampDate.setSeconds(timestampDate.getSeconds() + delay);
  return timestampDate.getTime();
};

const getTimestampTrigger = (delay: number): TimestampTrigger => {
  return { timestamp: getTimestamp(delay), type: TriggerType.TIMESTAMP };
};

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