import styled from "styled-components";

export const OnsaleWrapper = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Span = styled.span`
  margin-left: 0.4rem;
  font-weight: 500;
`;

export const Discount = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

export const Space = styled.div`
  width: ${(props) => props.width && props.width}%;
`;

export const Prices = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostWrapper = styled.div``;
