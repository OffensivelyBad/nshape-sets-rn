# NShape Sets

## Releasing for Android

Generally follow the steps in from [React Native Docs](https://reactnative.dev/docs/signed-apk-android).

Ensure you have the keystore for Google Play dev account in `android/app`, e.g. `android/app/my-upload-key.keystore`

Ensure you have the `~/.gradle/gradle.properties` set to include the environment variables specific to the key.

### Bump the version

Open `android/app/build.gradle` and set the `android.defaultConfig.versionCode` (build number) and `android.defaultConfig.versionName` (app version).

### Build the .aap file

From the project root, run `yarn android:build`.  The Android App Bundle will be in `android/app/build/outputs/bundle/release/app-release.aab`.

You can upload this to the [Google Play Console](https://play.google.com/console).

## FONTS

Fonts for the buttons and other imagery were created from [Textcraft](https://textcraft.net) using `Minstrel` with a 2 pixel outline.