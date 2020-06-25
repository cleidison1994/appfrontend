import produce from 'immer';

const INITIAL_STATE = {
  deliveries: [],
  delivery: null,
  delivery_id: null,
  fadebord: false,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/LOAD_SUCCESS': {
        draft.deliveries = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/NEW_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/FAILURE_DELIVERY': {
        draft.loading = false;
        break;
      }
      case '@delivery/NEW_DELIVERY_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@delivery/DETAILS_DELIVERY_REQUEST': {
        break;
      }
      case '@delivery/DETAILS_DELIVERY_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.fadebord = true;
        break;
      }
      case '@delivery/SET_DELIVERYID_REQUEST': {
        draft.delivery_id = action.payload.delivery;
        draft.fadebord = false;
        break;
      }
      case '@delivery/FADEBOARD_SUCCESS': {
        draft.fadebord = false;
        break;
      }
      case '@delivery/EDIT_DELIVERY_REQUEST': {
        draft.delivery_id = action.payload.delivery;
        break;
      }
      case '@delivery/EDIT_DELIVERY_SUCCESS': {
        draft.delivery = draft.deliveries.find(
          (d) => d.id === draft.delivery_id
        );
        break;
      }
      case '@delivery/DELETE_DELIVERY': {
        draft.delivery_id = null;
        break;
      }
      default:
    }
  });
}
