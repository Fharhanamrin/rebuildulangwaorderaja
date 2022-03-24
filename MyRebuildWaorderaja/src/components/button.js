import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

export function Button(props) {
  const {width, height} = useWindowDimensions();
  const {title, color, ...otherProps} = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width: width * 0.2,
          height: height * 0.1,
        },
      ]}
      {...otherProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...TouchableOpacity.propTypes,
};

Button.defaultProps = {
  color: 'blue',
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
