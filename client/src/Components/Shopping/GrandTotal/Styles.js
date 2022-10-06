import styled from "styled-components";

export const H5 = styled.h5`
  font-size: 14px;
  margin: 36px 0 27px;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  float: right;
`;

export const GrandTotalTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 25px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Price = styled.span`
  float: right;
`;
