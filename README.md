# expo-api24-path-repro

Minimal reproduction: Expo Modules v2 cannot be installed on Android 7.0 (API 24) —
`NoClassDefFoundError: java/nio/file/Path` in `TypeConverterRegistry.<clinit>`.

Blank `create-expo-app` (SDK 58) with two changes:

- `expo-application` and `expo-build-properties` added with `npx expo install`; `android.minSdkVersion` set to 24 in `app.json`.
- `App.js` renders `Application.applicationId`.

## Steps

```sh
npm install
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
adb -s <api-24-emulator> install app/build/outputs/apk/release/app-release.apk   # closes at launch
adb -s <api-26-emulator> install app/build/outputs/apk/release/app-release.apk   # starts
```

Tested on emulator system images `android-24;default;x86_64` (Android 7.0) and `android-26;default;x86_64` (Android 8.0).
