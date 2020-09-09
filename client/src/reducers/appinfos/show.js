import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'APPINFOS_SHOW_ERROR':
      return action.error;

    case 'APPINFOS_SHOW_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'APPINFOS_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'APPINFOS_SHOW_LOADING':
      return action.loading;

    case 'APPINFOS_SHOW_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'APPINFOS_SHOW_SUCCESS':
    case 'APPINFOS_SHOW_MERCURE_MESSAGE':
      return action.retrieved;

    case 'APPINFOS_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'APPINFOS_SHOW_MERCURE_OPEN':
      return action.eventSource;

    case 'APPINFOS_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
