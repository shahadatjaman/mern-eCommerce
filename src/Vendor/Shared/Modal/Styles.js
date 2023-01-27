import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: ${(props) => props.isOpen && "fixed"};
  width: ${(props) => props.isOpen && "100"}%;
  height: ${(props) => props.isOpen && "100"}vh;
  background: ${(props) => props.isOpen && `rgba(22, 45, 61, 0.48)`};
  z-index: 999;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => !props.isOpen && "none"};
`;

export const Content = styled.div`
  color: #000;
  width: ${(props) => props.width && props.width}px;
  background: #fff;
  padding: 1.8rem;
  border-radius: 10px;
  box-shadow: var(
    --wsr-shadow40,
    0 8px 8px 0 rgba(22, 45, 61, 0.12),
    0 3px 24px 0 rgba(22, 45, 61, 0.18)
  );
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #dddddd8a;
`;

export const Title = styled.div``;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const Close = styled.div`
  i {
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Body = styled.div``;
