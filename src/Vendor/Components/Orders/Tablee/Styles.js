import styled from "styled-components";

export const Table = styled.table`
  margin: 20px auto;
  width: 100%;
  align-items: center;
`;

export const Thead = styled.thead``;

export const HeadRow = styled.tr`
  margin-bottom: 2rem;
`;
export const TR = styled.tr``;

export const Th = styled.th`
  width: 150px;
  border-bottom: 1px solid #ddd !important;
  text-align: ${(props) => (props.align ? props.align : "left")};
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const Td = styled.td`
  width: 150px;
  text-align: ${(props) => props.align && props.align};
  height: ${(props) => props.height && props.height};
`;

export const TBody = styled.tbody``;
