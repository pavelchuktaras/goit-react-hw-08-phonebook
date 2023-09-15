import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; 
  padding: 10px 20px; 
  background-color: #2196f3; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px; 
  margin-left: 30px; 
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  text-decoration: none;
  color: #f1f1f1;
  font-size: 16px; 
  padding: 8px 12px; 
  transition: all 0.3s ease;

  &.active {
    background-color: #fff;
    border-radius: 10px; 
    color: #20232a;

    &:hover {
      opacity: 0.8;
    }
  }
  &:hover {
    color: #fff;
  }
`;
