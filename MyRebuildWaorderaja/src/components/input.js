import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';

export function Input(props) {
  const {width, height} = useWindowDimensions();
  const {title, color, ...otherProps} = props;
  return (
    // <TouchableOpacity
    //   style={[
    //     styles.button,
    //     {
    //       backgroundColor: color,
    //       width: width * 0.2,
    //       height: height * 0.1,
    //     },
    //   ]}
    //   {...otherProps}>
    //   <Text style={styles.text}>{title}</Text>
    // </TouchableOpacity>
    <TextInput
      allowFontScaling={true}
      {...otherProps}
      style={{
        width: 200,
        height: 50,
        borderWidth: 1,
        color: 'black',
        // placeholderTextColor: 'grey',
      }}
      placeholder={'hello placholder'}
      //   placeholderTextColor={'grey'}
      // onChangeText={}
      //   value={'hello world'}
    />
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  ...TextInput.propTypes,
};

Input.defaultProps = {
  color: 'blue',
  placeholderTextColor: 'blue',
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
