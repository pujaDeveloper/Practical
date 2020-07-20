import {StyleSheet} from 'react-native';
import Color from "../../utils/color"
import {screenHeight,screenWidth} from "../../utils/theme"

let photoDetailTextStyle = {
  container: {
  flexDirection: 'row',
   marginTop: 6
  },
  keyText: {
    width: 70,
    fontSize: 16,
     marginLeft: 4
  },
  valueText: {
    fontSize: 16,
     marginLeft: 4
  }
}

const styles = StyleSheet.create(photoDetailTextStyle);

export default styles;
