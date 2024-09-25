import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {isIos} from './src/utils/master/globalUtilityFunctionsAndConstants';

// Determine if we're running in dev mode
const isDevMode = __DEV__;

// Configure host for Android emulator
let scriptHostname;
if (isDevMode) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: `Unitaskr ${isIos ? 'iOS' : 'Android'}`,
    host: scriptHostname, // Automatically find the IP address for Android emulator
    port: 9090, // default port for Reactotron
    enabled: isDevMode, // only enable in development mode
  })
  .useReactNative({
    asyncStorage: {
      ignore: ['some-key-to-ignore'],
    },
    networking: {
      ignoreUrls: /symbolicate|logs/,
    },
    editor: true, // enable the editor
    errors: {
      veto: stackFrame =>
        stackFrame.fileName.indexOf('/node_modules/react-native/') >= 0,
    },
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

// Add custom commands
reactotron.onCustomCommand({
  command: 'customLog',
  handler: () => console.log('Custom log from Reactotron'),
  title: 'Custom Log',
  description: 'Logs a custom message',
});

// Enable Reactotron only in development
if (isDevMode) {
  // Extend console.log to send logs to Reactotron
  const oldConsoleLog = console.log;
  console.log = (...args) => {
    oldConsoleLog(...args);
    Reactotron.log(...args);
  };

  // Make Reactotron available globally
  global.reactotron = Reactotron;
}

// Clear Reactotron on every refresh
Reactotron.clear();

// Function to clear logs and reset state
const clearLogsOnRefresh = () => {
  if (isDevMode) {
    Reactotron.clear();
    console.log('Reactotron: Cleared logs on app refresh');
  }
};

// Call clearLogsOnRefresh when the module is imported
clearLogsOnRefresh();

export default reactotron;

export const connect = () => {
  if (isDevMode) {
    Reactotron.connect();
    clearLogsOnRefresh(); // Clear logs when connecting
  }
};

// Add a method to manually clear logs
export const clearLogs = clearLogsOnRefresh;
