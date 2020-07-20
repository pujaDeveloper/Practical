import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from 'prop-types';
import color from "../../utils/color";
import styles from './styles';

export default class Progress extends Component {
    render() {
        const { text } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.centerContainer}>
                    <ActivityIndicator
                        style={styles.indicatorStyle}
                        animating={true}
                        color={Color.WHITE}
                        size="large" />
                    <Text style={{ color: Color.WHITE, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                        {text}
                    </Text>
                </View>
            </View>
        );
    }
}

Progress.defaultProps = {
    text: "Please Wait...",
};

Progress.propTypes = {
    text: PropTypes.string
};
