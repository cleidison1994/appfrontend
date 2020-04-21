import produce from 'immer';

const INITIAL_STATE = {
  deliveries: [],
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/LOAD_SUCCESS': {
        draft.deliveries = action.payload.delivery;
        draft.loading = true;
        break;
      }
      case '@delivery/LOAD_NOT_FOUND': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
