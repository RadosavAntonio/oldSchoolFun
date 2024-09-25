import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  // ••••• reactotron •••••
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null);
  }

  return (
    <View>
      <Text>TEST</Text>
    </View>
  );
}

export default App;
