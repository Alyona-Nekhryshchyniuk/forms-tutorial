import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';

export const FooterForm = styled.footer`
  font-size: 24px;
  
  };
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto;
  border: 1px dashed black;
  padding: 15px;
`;

export const Label = styled.label`
  color: ${props => (props.primary ? '#233142' : '#455d7a')};
`;

export const Input = styled(Field)`
  font-size: 18px;
  margin-bottom: 10px;
`;
