export function failureProblem(message) {
  return {
    type: '@problem/FAILURE_PROBLEM',
    payload: { message },
  };
}

export function refreshProblem() {
  return {
    type: '@problem/REFRESH_PROBLEM',
  };
}

export function loadProblemDeliveryRequest() {
  return {
    type: '@problem/LOAD_PROBLEMS_DELIVERY_REQUEST',
  };
}
export function loadProblemDeliverySuccess(delivery) {
  return {
    type: '@problem/LOAD_PROBLEMS_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}
export function showDetailProblemRequest(delivery) {
  return {
    type: '@problem/SHOW_PROBLEMS_REQUEST',
    payload: { delivery },
  };
}
export function showDetailProblemSuccess(delivery) {
  return {
    type: '@problem/SHOW_PROBLEMS_SUCCESS',
    payload: { delivery },
  };
}
export function cancelDeliveryRequest(delivery) {
  return {
    type: '@problem/CANCEL_DELIVERY_REQUEST',
    payload: { delivery },
  };
}
export function cancelDeliverySuccess() {
  return {
    type: '@problem/CANCEL_DELIVERY_SUCCESS',
  };
}
export function loadDetailsProblemRequest(delivery_id) {
  return {
    type: '@problem/LOAD_DETAILS_PROBLEM_REQUEST',
    payload: { delivery_id },
  };
}
export function loadDetailsProblemSucces() {
  return {
    type: '@problem/LOAD_DETAILS_PROBLEM_SUCCESS',
  };
}
