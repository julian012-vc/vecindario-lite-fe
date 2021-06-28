import { createSlice } from '@reduxjs/toolkit';
import { randomImageProject } from '../../helpers';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    wordFilter: '',
  },
  reducers: {
    createProject: (state, action) => {
      state.projects = [action.payload, ...state.projects];
    },
    fetchProjectsSuccess: (state, actions) => {
      state.projects = actions.payload.map(project => {
        return { ...project, image: randomImageProject() };
      });
    },
    setWordFilter: (state, action) => {
      state.wordFilter = action.payload || '';
    },
    clearWordFilter: state => {
      state.wordFilter = '';
    },
  },
});

export const { createProject, fetchProjectsSuccess, setWordFilter, clearWordFilter } =
  projectsSlice.actions;
export default projectsSlice.reducer;
