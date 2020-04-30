import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
  recipientEdit: null,
  recipientId: null,
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/FAILURE_RECIPIENT': {
        draft.loading = false;
        break;
      }
      case '@recipient/LOAD_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/LOAD_RECIPIENT_SUCCESS': {
        draft.recipients = action.payload.recipients;
        draft.loading = false;
        break;
      }
      case '@recipient/ADDNEW_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/ADDNEW_RECIPIENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@recipient/EDIT_LOAD_RECIPIENT_REQUEST': {
        draft.recipientId = action.payload.recipient;
        break;
      }
      case '@recipient/EDIT_LOAD_RECIPIENT_SUCCESS': {
        draft.recipientEdit = draft.recipients.find(
          (r) => r.id === draft.recipientId
        );
        break;
      }
      case '@recipient/EDIT_RECIPIENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/EDIT_RECIPIENT_SUCCESS': {
        draft.recipientEdit = null;
        draft.recipientId = null;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
