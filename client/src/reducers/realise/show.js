import { combineReducers } from 'redux';

export function error(state = null, action) {
  switch (action.type) {
    case 'REALISE_SHOW_ERROR':
      return action.error;

    case 'REALISE_SHOW_MERCURE_DELETED':
      return `${action.retrieved['@id']} has been deleted by another user.`;

    case 'REALISE_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case 'REALISE_SHOW_LOADING':
      return action.loading;

    case 'REALISE_SHOW_RESET':
      return false;

    default:
      return state;
  }
}

export function retrieved(state = null, action) {
  switch (action.type) {
    case 'REALISE_SHOW_SUCCESS':
    case 'REALISE_SHOW_MERCURE_MESSAGE':
      return action.retrieved;

    case 'REALISE_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export function eventSource(state = null, action) {
  switch (action.type) {
    case 'REALISE_SHOW_MERCURE_OPEN':
      return action.eventSource;

    case 'REALISE_SHOW_RESET':
      return null;

    default:
      return state;
  }
}

export default combineReducers({ error, loading, retrieved, eventSource });
