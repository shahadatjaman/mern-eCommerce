import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  height: 30vh;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ColorWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const SizeWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const H6 = styled.h6`
  font-weight: 600;
`;

export const UL = styled.ul``;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e9ecef0f;
  padding: 1rem 1rem;
  border-bottom: 1px solid #ededed;
  &:hover {
    background: #eaf7ff;
  }
`;

export const Action = styled.span`
  svg {
    color: red;
  }
  cursor: pointer;
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.span``;

export const Color = styled.span`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.bg ? props.bg : "#fff")};
  overflow: hidden;
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: 1px 1px 5px 1px #ddd;
`;
