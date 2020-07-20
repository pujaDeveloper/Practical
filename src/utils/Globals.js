
import DeviceInfo from 'react-native-device-info';
import { setStoredData } from './store';

export default Globals = {

  isIpad: DeviceInfo.isTablet(),

  // Storage Key
  kUserData: "userData",
  kToken: "token"
}

export const clearUserData = async () => {
  await setStoredData(Globals.kUserData, "")
  await setStoredData(Globals.kToken, "")
}

