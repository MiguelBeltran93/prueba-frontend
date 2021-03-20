
const sessionVar = 'session';
const sessiondefault = {};
export const getSession = () => {
    return window.localStorage &&
    window.localStorage.getItem(sessionVar) ?
        JSON.parse(window.localStorage.getItem(sessionVar)) :
        sessiondefault;
};

export const data = () =>{
  return window['data']?{...window.data}:null;
};

export const setSession = (value) =>{
  window.localStorage && localStorage.setItem(sessionVar, JSON.stringify(value));
};

