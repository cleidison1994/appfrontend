export function failureRecipient(message) {
  return {
    type: '@recipient/FAILURE_RECIPIENT',
    payload: { message },
  };
}

export function refreshRecipient() {
  return {
    type: '@recipient/REFRESH_RECIPIENT',
  };
}

export function loadRecipientRequest(textsearch) {
  return {
    type: '@recipient/LOAD_RECIPIENT_REQUEST',
    payload: { textsearch },
  };
}
export function loadRecipientSuccess(recipients) {
  return {
    type: '@recipient/LOAD_RECIPIENT_SUCCESS',
    payload: { recipients },
  };
}
export function addNewRecipientRequest(recipient) {
  return {
    type: '@recipient/ADDNEW_RECIPIENT_REQUEST',
    payload: { recipient },
  };
}
export function addNewRecipientSuccess() {
  return {
    type: '@recipient/ADDNEW_RECIPIENT_SUCCESS',
  };
}
export function loadeditRecipientrRequest(recipient) {
  return {
    type: '@recipient/EDIT_LOAD_RECIPIENT_REQUEST',
    payload: { recipient },
  };
}
export function loadeditRecipientSuccess() {
  return {
    type: '@recipient/EDIT_LOAD_RECIPIENT_SUCCESS',
  };
}
export function editRecipientRequest(recipient) {
  return {
    type: '@recipient/EDIT_RECIPIENT_REQUEST',
    payload: { recipient },
  };
}
export function editRecipientSuccess() {
  return {
    type: '@recipient/EDIT_RECIPIENT_SUCCESS',
  };
}

export function deletetRecipientRequest(recipient) {
  return {
    type: '@recipient/DELETE_RECIPIENT_REQUEST',
    payload: { recipient },
  };
}
export function deleteRecipientSuccess() {
  return {
    type: '@recipient/DELETE_RECIPIENT_SUCCESS',
  };
}
