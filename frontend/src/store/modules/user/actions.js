export function profileUpdateRequest(data) {
  return {
    type: '@user/PROFILE_UPDATE_REQUEST',
    payload: { data },
  };
}

export function profileUpdateSuccess(profile) {
  return {
    type: '@user/PROFILE_UPDATE_SUCCESS',
    payload: { profile },
  };
}

export function profileUpdateFailure() {
  return {
    type: '@user/PROFILE_UPDATE_FAILURE',
  };
}
