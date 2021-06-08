import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    createProject: (state, action) => {
      state.projects = [action.payload, ...state.projects];
    },
    fetchProjectsSuccess: (state, actions) => {
      state.projects = actions.payload;
    },
  },
});

export const { createProject, fetchProjectsSuccess } = projectsSlice.actions;
export default projectsSlice.reducer;
