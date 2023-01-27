import styled from "styled-components";

export const FormWrape = styled.div`
  background: transparent none repeat scroll 0 0;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 80px;
  text-align: left;
  max-width: 650px;
  margin: auto;
  padding: 1rem 4rem;
  @media (max-width: 768px) {
  }
`;

export const ShowPassword = styled.div`
  margin-bottom: 30px;
`;
export const Checkmark = styled.input`
  cursor: pointer;
  height: 15px;
  margin: 0;
  position: relative;
  top: 1px;
  width: 17px;
`;
export const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  font-weight: 500;
`;

export const P = styled.p`
  font-size: 14px;
  color: red;
  font-weight: 600;
  margin-top: 4px;
`;

export const H5 = styled.h5`
  display: block;
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const H4 = styled.h4`
  display: block;
  text-align: center;
  font-weight: 600;
  margin: 1rem 0;
`;

export const resourcesError = styled.div``;

export const Error = styled.p`
  color: red;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
`;

export const loginBox = {
  width: "600px",
  margin: "auto",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
