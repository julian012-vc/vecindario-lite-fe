import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/user.slice';
import projectReducer from '../slices/project.slice';
import signUpReducer from '../slices/auth/sign-up.slice';
import signInReducer from '../slices/auth/sign-in.slice';

export default configureStore({
  reducer: {
    user: userReducer,
    projects: projectReducer,
    signUp: signUpReducer,
    signIn: signInReducer,
  },
});
