import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
  background-color: #f0f0f0; 
  border-radius: 10px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const Label = styled.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 10px; 
  border-radius: 5px;
  border: 1px solid #ccc; 
  width: 100%; 
`;

export const Button = styled.button`
  margin-top: 15px; 
  padding: 10px 20px; 
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 18px; 
  transition: background-color 0.3s ease-in-out; 

  &:hover {
    background-color: #2e8b57; 
  }
`;
