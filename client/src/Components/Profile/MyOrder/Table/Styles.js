import styled from "styled-components";

export const Wrapper = styled.div``;

export const TableWrapper = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  background: #f3f4fb;
`;

export const TableRow = styled.tr``;

export const Th = styled.th`
  padding: 1rem;
  color: #7a7b85;
`;

export const Td = styled.td`
  padding: 1rem;
  font-weight: 600;
  color: #313037;
`;

export const Name = styled.span`
  font-weight: 500;
`;

export const TableBody = styled.tbody``;

export const StatusWrapper = styled.div`
  display: inline-block;
`;

export const Status = styled.div`
  background: #ffffba;
  color: #000;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 50px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.draft ? "red" : "#389f38")};
  border-radius: 50%;
  margin-right: 0.4rem;
`;

export const Actions = styled.div`
  width: 35px;
  height: 35px;
  background: #fff;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #221ecd;
    cursor: pointer;
  }
`;

export const SalePrice = styled.span`
  display: block;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
`;

export const OrderRow = styled.div`
  padding: 1rem;
`;

export const H6 = styled.h6``;

export const Span = styled.span`
  color: #221ecd;
  margin-left: 8px;
`;

export const Date = styled.div`
  color: #757575;
  margin-top: 8px;
`;
