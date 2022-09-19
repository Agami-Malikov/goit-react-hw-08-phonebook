import { NavLink } from 'react-router-dom';

import s from './auth.module.css';

const Auth = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/register">Register</NavLink>
      <NavLink className={s.link} to="/login">Login</NavLink>
    </nav>
  );
};

export default Auth;
