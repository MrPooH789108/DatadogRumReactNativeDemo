/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  DatadogProvider,
  DdSdkReactNative,
} from '@datadog/mobile-react-native';

import {
  ImagePrivacyLevel,
  SessionReplay,
  TextAndInputPrivacyLevel,
  TouchPrivacyLevel,
} from '@datadog/mobile-react-native-session-replay';

import config from './datadogRUM-init';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const onSDKInitialized = async () => {
    // Enable Session Replay
    await SessionReplay.enable({
      replaySampleRate: 100,
      textAndInputPrivacyLevel:
        TextAndInputPrivacyLevel.MASK_SENSITIVE_INPUTS,
      imagePrivacyLevel: ImagePrivacyLevel.MASK_NONE,
      touchPrivacyLevel: TouchPrivacyLevel.SHOW,
    });

    // Set Datadog User Info
    await DdSdkReactNative.setUserInfo({
      id: '1337',
      name: 'John Smith',
      email: 'john@example.com',
      extraInfo: {
        type: 'premium',
      },
    });
  };

  return (
    <DatadogProvider
      configuration={config}
      onInitialization={onSDKInitialized}
    >
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </DatadogProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;