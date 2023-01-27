import styled from "styled-components";

export const Wrapper = styled.div``;

export const TableWrapper = styled.table`
  width: 100%;
  overflowx: scroll;
`;

export const TableHead = styled.thead`
  background: #f3f4fb;
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd !important;
  border-left: ${(props) => props.checke && "2px solid #1976d2"};
`;

export const Th = styled.th`
  color: #7a7b85;
  text-align: center;
`;

export const Td = styled.td`
  padding: 1rem;
  font-weight: 600;
  color: #313037;
`;

export const Name = styled.span`
  font-weight: 600;
  color: #000;
  font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const StatusWrapper = styled.div`
  display: inline-block;
`;

export const Status = styled.div`
  background: ${(props) => (props.draft ? "#ff000040" : "#def1dd")};
  color: ${(props) => (props.draft ? "#ff0000c7" : "#389f38")};
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

export const PaginationWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
