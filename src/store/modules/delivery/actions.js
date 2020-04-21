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
