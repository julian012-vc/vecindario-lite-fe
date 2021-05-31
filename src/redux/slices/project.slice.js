import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        createProject: (state, action) => {
            state.projects = [action.payload, ...state.projects]
        },
        fetchProjects: (state, actions) => {
            state.projects = actions.payload
        }
    }
})

export const { createProject, fetchProjects } = projectsSlice.actions;
export default projectsSlice.reducer;