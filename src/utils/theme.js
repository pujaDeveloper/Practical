import React from 'react';
import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export function isIOS() {
    return Platform.OS == "ios" ? true : false
}

const isTablet = () => {
    if (DeviceInfo.isTablet()) {
        return true
    } else {
        return false
    }
};

const responsiveHeight = (height) => {
    if (!isTablet())
        return height;
    else
        return (height + (height * 0.25));

};

export { responsiveHeight, width, height};
