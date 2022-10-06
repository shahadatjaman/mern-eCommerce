import styled from "styled-components";

export const FormWraaper = styled.form``;

export const Label = styled.label`
  font-size: 14px;
  margin: 0 0 5px;
  color: #242424;
  display: inline-block;
  font-weight: 600;
`;

export const InputField = styled.input`
  height: 40px;
  margin-bottom: 30px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  background: #fff;
  width: 100%;
`;

export const Btn = styled.button`
  font-size: 14px;
  font-weight: 500;
  padding: 13px 42px 12px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.primary};
  &&:hover {
    background: #000;
    color: #fff;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;
