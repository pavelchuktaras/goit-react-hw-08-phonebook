import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
  width: 300px;
  height: 40px;
  background-color: #f0f0f0; 
  padding: 0 15px; 
  margin: 10px;
  margin-top: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333; 
  margin: 0; 
`;

export const LogOutButton = styled.button`
  background-color: #6aa0d6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c42f2f;
  }
`;
