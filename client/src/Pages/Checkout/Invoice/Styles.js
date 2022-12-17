import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem auto;
  background: #edf2fd;
  display: none;

  @media print {
    display: block;
  }
`;

export const HeaderWrapper = styled.div`
  background: #1976d2;
  padding: 2rem 1rem;
`;
export const Logo = styled.div``;
export const Text = styled.h3`
  font-size: ${(props) => props.font && props.font}px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-top: ${(props) => props.mt && props.mt}rem;
  font-weight: ${(props) => (props.fontWeigth ? props.fontWeigth : "600")};
`;

export const BodyWrapper = styled.div`
  margin: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`;

export const TableWrapper = styled.div``;

export const Bottom = styled.div`
  padding: 1rem;
`;

export const Total = styled.div`
  text-align: right;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  background: #1976d2;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 1rem;
  border-radius: 2px;
`;

// export const Key = styled.span``;

// export const Value = styled.span`
//   font-size: ${(props) => props.font && props.mt}rem;
// `;

export const Footer = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

export const H4 = styled.h4``;

export const Country = styled.span`
  text-transform: capitalize;
  margin-left: 0.5rem;
`;
