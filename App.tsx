import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  // ••••• reactotron •••••
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null);
  }

  return (
    <View>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>{Config.ENV}</Text>
      <Text>TEST</Text>
    </View>
  );
}

export default App;
