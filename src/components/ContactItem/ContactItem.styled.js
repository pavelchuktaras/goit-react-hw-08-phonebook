import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 15px;
  border: none;
  color: black;
  cursor: pointer;
  opacity: 1;
  transition: color 0.3s ease-in-out; /* Added a color transition */
  
  &:hover,
  &:focus {
    color: red; /* Changed color on hover/focus */
  }
`;

export const Link = styled.a`
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;

  &:hover,
  &:focus {
    opacity: 1; 
  }

  &:visited {
    opacity: 0.7; 
  }
`;

export const TableHead = styled.th`
  padding: 15px;
  font-size: 18px; 
  color: black;
  font-weight: 600; 
`;

export const TableRow = styled.tr`
  background-color: transparent;
  transition: background-color 0.3s ease-in-out; 
  
  &:nth-child(odd) {
    background-color: #C9E4F6;
  }
  
  &:nth-child(even) {
    background-color: #B4DAF2;
  }
  
  &:hover {
    background-color: #ddedff; 
  }
`;

export const NumberCeil = styled.td`
  padding: 10px;
  text-align: left;
`;

export const NameCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  text-align: center;
`;

export const ActionCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  text-align: center;
`;
