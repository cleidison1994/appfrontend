import produce from 'immer';

const INITIAL_STATE = {
  problems: [],
  delivery: null,
  deliveryId: null,
  loading: false,
  fadebord: false,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/LOAD_PROBLEMS_DELIVERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/LOAD_PROBLEMS_DELIVERY_SUCCESS': {
        draft.problems = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@problem/SHOW_PROBLEMS_REQUEST': {
        draft.deliveryId = action.payload.delivery;
        break;
      }
      case '@problem/SHOW_PROBLEMS_SUCCESS': {
        draft.delivery = draft.problems.find((p) => p.id === draft.deliveryId);
        break;
      }
      default:
    }
  });
}
