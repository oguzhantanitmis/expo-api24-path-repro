import * as Application from 'expo-application';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Any Expo module with a native part is enough: on Android 7.0 (API 24) the app closes at launch with
// "Cannot find native module 'ExpoApplication'" after "Cannot install Expo Modules v2: NoClassDefFoundError: java/nio/file/Path".
export default function App() {
  return (
    <View style={styles.container}>
      <Text>applicationId: {Application.applicationId}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
