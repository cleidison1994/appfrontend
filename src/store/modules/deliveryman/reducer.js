import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: [],
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/LOAD_SEARCH_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/LOAD_SEARCH_DELIVERYMAN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@deliveryman/ADDNEW_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/ADDNEW_DELIVERYMAN_SUCCESS': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
