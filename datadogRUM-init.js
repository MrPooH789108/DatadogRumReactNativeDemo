import {
  DatadogProviderConfiguration,
  TrackingConsent,
} from '@datadog/mobile-react-native';

const config = new DatadogProviderConfiguration(
  '<token>',
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

config.site = 'US1';
config.service = 'react-native-demo';
config.longTaskThresholdMs = 100;
config.nativeCrashReportEnabled = true;
config.firstPartyHosts = ["example.com", "api.yourdomain.com"];

export default config;