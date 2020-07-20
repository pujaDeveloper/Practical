
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import Color from './../../utils/color';
// import Label from './../Label';
import PropTypes from 'prop-types';
import styles from './styles';
import { Message } from '../../utils/message';

class PhotoDetailText extends Component {

  constructor(props) {
    super(props)
    console.log("props");
  }

  render() {
    const { label, value } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.keyText}>{label}</Text>
        <Text>{Message.textDivider}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    );
  }
}

export default PhotoDetailText;
