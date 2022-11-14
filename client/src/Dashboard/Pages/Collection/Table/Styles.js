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
  background: #def1dd;
  color: #389f38;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 50px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: #389f38;
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
