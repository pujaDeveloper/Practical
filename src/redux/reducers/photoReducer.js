
import { ActionTypes } from "../../utils/message";

let initialState = {
  selectedPhotoDetails: {}
};


export default function (state = initialState, action) {
  if (action.type === ActionTypes.SET_SELECTED_PHOTO_DETAILS) {
    state.selectedPhotoDetails = action.payload;
  }
  return state;
}
