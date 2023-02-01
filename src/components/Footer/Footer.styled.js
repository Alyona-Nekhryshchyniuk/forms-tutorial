import styled from "@emotion/styled";

export const Foot = styled.footer`
  font-size: 24px;
  
  };
`;

export const Form = styled.form`
  color: ${(props) => (props.primary ? "green" : "blue")};
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto;
  border: 1px dashed black;
  padding: 15px;
`;

export const Label = styled.label`
  color: pink;
`;

export const Input = styled.input`
  font-size: 18px;
  margin-bottom: 10px;
`;
