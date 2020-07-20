
import { ActionTypes } from "../../utils/message";


export function setPhotoDetails(payload) {
  return { type: ActionTypes.SET_SELECTED_PHOTO_DETAILS, payload };
}
