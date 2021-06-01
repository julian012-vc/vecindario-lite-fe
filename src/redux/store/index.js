import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/user.slice';
import projectReducer from '../slices/project.slice';
import signInReducer from '../slices/auth/sign-up.slice';

export default configureStore({
  reducer: {
    user: userReducer,
    projects: projectReducer,
    signUp: signInReducer,
  },
});
