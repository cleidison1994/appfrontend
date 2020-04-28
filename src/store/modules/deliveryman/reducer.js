import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: [],
  avatar: null,
  deliverymanEdit: null,
  loading: false,
  deliverymanId: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/AVATAR_DELIVERYMAN_REQUEST': {
        draft.avatar = action.payload.avatar;
        break;
      }
      case '@deliveryman/AVATAR_DELIVERYMAN_SUCCESS': {
        break;
      }

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
        draft.avatar = null;
        break;
      }
      case '@deliveryman/LOADEDIT_DELIVERYMAN_REQUEST': {
        draft.deliverymanId = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/LOADEDIT_DELIVERYMAN_SUCCESS': {
        draft.deliverymanEdit = draft.deliveryman.find(
          (d) => d.id === draft.deliverymanId
        );
        break;
      }

      default:
    }
  });
}
