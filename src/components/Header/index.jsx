import * as S from './styles';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to="/a"
            >
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to="/b"
            >
              Management
            </NavLink>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
};

export default Header;
