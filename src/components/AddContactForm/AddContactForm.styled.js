

import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
  background-color: #f0f0f0;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  gap: 15px;
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 300px;
  height: 30px;
  font-size: 18px;
  border-radius: 10px;
  margin: 20px;
  color: white;
  background-color: #6aa0d6;
  :hover {
    color: #fff;
    background-color: #27496b;
  }
`;

export const LabelContainer = styled.div``;

export const Error = styled.span`
  display: block;
  color: #ff0000;
  text-align: start;
  width: 230px;
  font-size: 14px;
`;
