import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; 
  margin-top: 20px;
  padding: 20px; 
  background-color: #f0f0f0; 
  border-radius: 10px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; 
  font-weight: bold;
  font-size: 18px; 
  color: #333; 
`;

export const Input = styled.input`
  padding: 10px; 
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%; 
`;

export const Button = styled.button`
  padding: 12px 20px; 
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px; 
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease; 

  &:hover {
    background-color: #3e8e41; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: none; 
  }
`;
