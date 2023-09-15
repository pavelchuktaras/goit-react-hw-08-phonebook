import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-end; 
  margin-top: 10px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  background: transparent;
  border: 2px solid #6aa0d6;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 18px; 
  &:focus {
    outline: none; 
    border: 2px solid #27496b; 
  }
`;
