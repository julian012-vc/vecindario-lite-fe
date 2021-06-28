import moment from 'moment';
import 'moment/locale/es';

import { PROJECTS_PICTURE_URL } from '../constants';
import { TYPE_PROJECTS } from '../constants/type-projects';
import { USER_COLORS } from '../constants/colors';

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
  const pos = Math.floor(Math.random() * PROJECTS_PICTURE_URL.length);
  return PROJECTS_PICTURE_URL[pos];
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

export function randomUserColor() {
  const imagePosition = Math.floor(Math.random() * USER_COLORS.length);
  return USER_COLORS[imagePosition];
}

export function timestampToDate(timestamp) {
  return moment(timestamp).locale('es').format('LLL');
}

export function projectWithFilter(projects, filter) {
  if (filter === '') {
    return projects;
  } else {
    return projects.filter(project => hasMatch(project, filter));
  }
}

function hasMatch(project, filter) {
  const city = project.city.toUpperCase();
  const title = project.title.toUpperCase();
  return city.includes(filter) || title.includes(filter);
}
