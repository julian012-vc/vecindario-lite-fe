export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getValueFromLocalStorage = key => {
  return localStorage.getItem(key);
};

export const removeValueFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export function isEmptyObject(obj) {
  return Object.keys(obj).length;
}
