import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthLoading, selectAuthLoggedIn, selectAuthToken } from './store/selectors';
import { createAuthenticateActionThunk } from './store/action-creators';

import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';
import CreateNewPostPage from './pages/create-new-post-page';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/createPost"
          element={(
            <RequireAuth>
              <CreateNewPostPage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  );
};

export default App;
