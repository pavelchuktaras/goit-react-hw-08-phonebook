import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, Nav } from './AppBar.styled';


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </Header>
  );
};