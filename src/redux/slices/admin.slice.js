import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    ownerProjects: [],
    actualProject: {
      project: null,
      leads: [],
    },
    createProject: {
      isLoading: false,
      errors: [],
      data: {},
      isCreated: false,
    },
    editProject: {
      isLoading: false,
      errors: [],
      project: {},
      newData: {},
      isUpdated: false,
    },
  },
  reducers: {
    startEditProject: (state, action) => {
      state.editProject.project = action.payload;
    },
    editProject: (state, action) => {
      state.editProject.newData = action.payload;
      state.editProject.isLoading = true;
    },
    editProjectSuccess: (state, action) => {
      state.editProject.isLoading = false;
      state.editProject.isUpdated = true;
      state.editProject.errors = [];
      state.ownerProjects = state.ownerProjects.map(project =>
        project.id === action.payload.id ? action.payload : project,
      );
    },
    editProjectWithErrors: (state, action) => {
      state.editProject.isLoading = false;
      state.editProject.errors = action.payload || [];
    },
    cleanEditProject: state => {
      state.editProject.isLoading = false;
      state.editProject.isUpdated = false;
      state.editProject.errors = [];
      state.editProject.newData = {};
    },
    fetchProjects: (state, action) => {
      state.ownerProjects = action.payload;
    },
    amendProject: (state, action) => {
      state.ownerProjects = [...state.ownerProjects, action.payload];
    },
    actualProject: (state, action) => {
      state.actualProject.project = action.payload;
    },
    fetchProjectLeads: (state, action) => {
      state.actualProject.leads = action.payload;
    },
    createProject: (state, action) => {
      state.createProject.isLoading = true;
      state.createProject.data = action.payload;
    },
    cleanCreateProject: state => {
      state.createProject.isLoading = false;
      state.createProject.isCreated = false;
      state.createProject.errors = [];
      state.createProject.data = {};
    },
    createProjectSuccess: state => {
      state.createProject.isLoading = false;
      state.createProject.isCreated = true;
      state.createProject.errors = [];
    },
    createProjectWithErrors: (state, action) => {
      state.createProject.isLoading = false;
      state.createProject.errors = action.payload;
    },
  },
});

export const {
  actualProject,
  amendProject,
  createProject,
  createProjectSuccess,
  createProjectWithErrors,
  fetchProjectLeads,
  cleanEditProject,
  fetchProjects,
  cleanCreateProject,
  editProjectSuccess,
  editProject,
  editProjectWithErrors,
  startEditProject,
} = adminSlice.actions;
export default adminSlice.reducer;
