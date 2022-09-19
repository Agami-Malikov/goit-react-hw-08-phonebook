import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./components/pages/Login/Login'));
const Register = lazy(() => import('./components/pages/Register/Register'));
const Contacts = lazy(() => import('./components/pages/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load Page</p>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
