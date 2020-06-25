export function loadDeliveryRequest(textsearch) {
  return {
    type: '@delivery/LOAD_REQUEST',
    payload: { textsearch },
  };
}

export function loadDeliverySuccess(delivery) {
  return {
    type: '@delivery/LOAD_SUCCESS',
    payload: { delivery },
  };
}
export function failureDelivery() {
  return {
    type: '@delivery/FAILURE_DELIVERY',
  };
}

export function newDeliveryRequest(deliveryman_id, recipient_id, product) {
  return {
    type: '@delivery/NEW_DELIVERY_REQUEST',
    payload: { deliveryman_id, recipient_id, product },
  };
}

export function newDeliverySuccess(delivery) {
  return {
    type: '@delivery/NEW_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function detailsDeliveryRequest(delivery_id) {
  return {
    type: '@delivery/SET_DELIVERYID_REQUEST',
    payload: { delivery_id },
  };
}
export function fadeboardDeliveryRequest(delivery) {
  return {
    type: '@delivery/FADEBOARD_REQUEST',
    payload: { delivery },
  };
}
export function fadeboardDeliverySuccess(delivery) {
  return {
    type: '@delivery/FADEBOARD_SUCCESS',
    payload: { delivery },
  };
}
export function detailsDeliverySuccess(delivery) {
  return {
    type: '@delivery/DETAILS_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function editDeliveryRequest(delivery) {
  return {
    type: '@delivery/EDIT_DELIVERY_REQUEST',
    payload: { delivery },
  };
}
export function editDeliverySuccess(delivery) {
  return {
    type: '@delivery/EDIT_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
export function deleteDeliveryRequest(delivery) {
  return {
    type: '@delivery/DELETE_DELIVERY_REQUEST',
    payload: { delivery },
  };
}
export function deleteDeliverySuccess() {
  return {
    type: '@delivery/DELETE_DELIVERY_SUCCESS',
  };
}
