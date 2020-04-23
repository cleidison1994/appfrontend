export function failureDeliveryman() {
  return {
    type: '@deliveryman/FAILURE_DELIVERYMAN',
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
