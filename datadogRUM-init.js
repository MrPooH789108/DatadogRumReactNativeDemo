import {
    BatchSize,
    DatadogProvider,
    DatadogProviderConfiguration,
    SdkVerbosity,
    UploadFrequency,
} from "@datadog/mobile-react-native";
import {
    ImagePrivacyLevel,
    SessionReplay,
    TextAndInputPrivacyLevel,
    TouchPrivacyLevel,
} from "@datadog/mobile-react-native-session-replay";

const config = new DatadogProviderConfiguration(
  'pubf0b42d8cee08deae7e586773b2233193',
  'dev',
  TrackingConsent.GRANTED,
  {
    rumConfiguration: {
      applicationId: '9f209013-bf95-4904-ae0b-27b2eb0865ef',
      trackInteractions: true, // Track user interactions (use the 'accessibilityLabel' prop to give tap actions a custom name)
      trackResources: true, // Track XHR Resources
      trackErrors: true, // Track Errors
      sessionSampleRate: 100, // Optional: Percentage of sampled RUM sessions. Default is 100.
      resourceTraceSampleRate: 100, // Optional: Percentage of traced network requests. Default is 100.
      nativeCrashReportEnabled: true, // Optional: Enable Native Crash Reporting
    },
    logsConfiguration: {}, // Enable Logs
    traceConfiguration: {}, // Enable Trace
  },
);

const onSDKInitialized = async () => {
  await SessionReplay.enable({
    replaySampleRate: 100, // Session Replay will be available for all sessions already captured by the SDK
    textAndInputPrivacyLevel: TextAndInputPrivacyLevel.MASK_SENSITIVE_INPUTS,
    imagePrivacyLevel: ImagePrivacyLevel.MASK_NONE,
    touchPrivacyLevel: TouchPrivacyLevel.SHOW,
  });
};

config.site = 'US1';
config.service = 'react-native-demo';
config.longTaskThresholdMs = 100;
config.nativeCrashReportEnabled = true;
config.firstPartyHosts = ["example.com", "api.yourdomain.com"];
config.setUserInfo ({
    id: '1337',
    name: 'John Smith',
    email: 'john@example.com',
    extraInfo: {
        type: 'premium'
    }
});

export default config;
