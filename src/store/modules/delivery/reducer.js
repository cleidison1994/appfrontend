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
        draft.delivery_id = action.payload.delivery_id;
        draft.fadebord = false;
        break;
      }
      default:
    }
  });
}
