
import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType) => dispacth => {
    const id = uuidv4();

    // call set alert
    dispacth({
      type: SET_ALERT,
      payload: {msg, alertType, id}
    })
  
    // tambahkan set time
    setTimeout(() => dispacth({ type: REMOVE_ALERT, payload: id }), 5000);
  
  };