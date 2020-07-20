import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Color from "../../utils/color"
import {
  screenHeight,
  screenWidth
} from "../../utils/theme"
import Globals from "./../../utils/Globals";

let photoDetailsStyle = {
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: Color.WHITE,
    flex: 1
  },
  subContainer: {
    padding: 12,
    flexDirection: 'column'
  },
  photo: {
    width: screenWidth - 20,
    height: '60%',
    resizeMode: 'cover'
  },
  textContainer: {
    marginTop: 12
  }
}

const styles = StyleSheet.create(photoDetailsStyle);

export default styles;
