export function failureDeliveryman() {
  return {
    type: '@deliveryman/FAILURE_DELIVERYMAN',
  };
}

export function avatarDeliveryManRequest(avatar) {
  return {
    type: '@deliveryman/AVATAR_DELIVERYMAN_REQUEST',
    payload: { avatar },
  };
}
export function avatarDeliveryManSuccess() {
  return {
    type: '@deliveryman/AVATAR_DELIVERYMAN_SUCCESS',
  };
}

export function loadSearchDeliveryManRequest(textsearch) {
  return {
    type: '@deliveryman/LOAD_SEARCH_DELIVERYMAN_REQUEST',
    payload: { textsearch },
  };
}
export function loadSearchDeliveryManSuccess(deliveryman) {
  return {
    type: '@deliveryman/LOAD_SEARCH_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}
export function addNewDeliveryManRequest(deliveryman) {
  return {
    type: '@deliveryman/ADDNEW_DELIVERYMAN_REQUEST',
    payload: { deliveryman },
  };
}
export function addNewDeliveryManSuccess(deliveryman) {
  return {
    type: '@deliveryman/ADDNEW_DELIVERYMAN_SUCCESS',
    payload: { deliveryman },
  };
}

export function loadEditDeliveryManRequest(deliveryman) {
  return {
    type: '@deliveryman/LOADEDIT_DELIVERYMAN_REQUEST',
    payload: { deliveryman },
  };
}
export function loadEditDeliveryManSuccess() {
  return {
    type: '@deliveryman/LOADEDIT_DELIVERYMAN_SUCCESS',
  };
}
export function EditDeliveryManRequest(deliveryman) {
  return {
    type: '@deliveryman/EDIT_DELIVERYMAN_REQUEST',
    payload: { deliveryman },
  };
}
export function EditDeliveryManSuccess() {
  return {
    type: '@deliveryman/DEDIT_DELIVERYMAN_SUCCESS',
  };
}

export function DeleteDeliveryManRequest(deliveryman) {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_REQUEST',
    payload: { deliveryman },
  };
}
export function DeleteDeliveryManSuccess() {
  return {
    type: '@deliveryman/DELETE_DELIVERYMAN_SUCCESS',
  };
}
