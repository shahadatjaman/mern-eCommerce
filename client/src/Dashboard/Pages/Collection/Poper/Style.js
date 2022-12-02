import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  transition: all 0.5s;
  box-shadow: var(
    --wsr-shadow30,
    0 6px 6px 0 rgba(22, 45, 61, 0.06),
    0 0 18px 0 rgba(22, 45, 61, 0.12)
  );
  border-radius: 10px;
  left: -133px;
  &::before {
    content: "";
    position: absolute;
    right: -22px;
    top: 36%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 18px 17px;
    border-color: transparent transparent transparent #ffffff;
  }
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  font-weight: 600;
  font-size: 13px;
  line-height: 1.6rem;
  cursor: pointer;
  padding: 4px 10px;
  i {
    margin-right: 0.4rem;
  }

  &&:hover {
    background: #e7f0ff;
  }
`;
