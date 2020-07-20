import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Color from "../../utils/color"
import { screenHeight, screenWidth } from "../../utils/theme"

let photoListStyle = {
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: Color.WHITE,
    flex: 1
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 4
  },
  itemThumbnail: {
    width: 100,
    height: 80
  },
  itemText: {
    fontSize: 16,
    marginLeft: 4
  },
}

const styles = StyleSheet.create(photoListStyle);

export default styles;
