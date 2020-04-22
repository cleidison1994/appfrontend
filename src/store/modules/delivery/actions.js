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
export function loadNotFound() {
  return {
    type: '@delivery/LOAD_NOT_FOUND',
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
export function detailsDeliverySuccess(delivery) {
  return {
    type: '@delivery/DETAILS_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
