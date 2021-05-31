import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../slices/user.slice'
import projectReducer from '../slices/project.slice'

export default configureStore({
    reducer: {
        user: userReducer,
        projects: projectReducer
  },
})