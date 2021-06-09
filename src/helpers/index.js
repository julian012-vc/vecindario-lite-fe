import { PROJECTS_PICTURE_URL } from '../constants';
import { TYPE_PROJECTS } from '../constants/type-projects';

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

export function randomImageProject() {
  return Math.floor(Math.random() * PROJECTS_PICTURE_URL.length);
}

export function typeProjectsToArray() {
  return Object.keys(TYPE_PROJECTS).map((key, index) => {
    return { id: index, value: key, name: TYPE_PROJECTS[key] };
  });
}

export function truFalseOptions() {
  return [
    { id: 0, value: true, name: 'Sí' },
    { id: 1, value: false, name: 'No' },
  ];
}
