import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableHighlightBase,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function App() {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: 'red',
            width: width * 0.2,
            height: width * 0.4,
          },
        ]}>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
          }}>
          hello
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
