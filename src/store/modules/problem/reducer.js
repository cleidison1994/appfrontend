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
      case '@problem/LOAD_DETAILS_PROBLEM_REQUEST': {
        draft.deliveryId = null;
        draft.deliveryId = action.payload.delivery_id;
        break;
      }
      case '@problem/LOAD_DETAILS_PROBLEM_SUCCESS': {
        draft.delivery = draft.problems.find(
          (d) => d.delivery_problem.id === draft.deliveryId
        );
        draft.fadebord = true;
        break;
      }
      default:
    }
  });
}
