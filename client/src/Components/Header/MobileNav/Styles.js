import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpenNav ? "0" : "-100")}%;
  width: ${(props) => (props.isOpenNav ? "100" : "0")}%;
  background: #343a4099;
  transition: all 0.5s;
  z-index: 999;

  @media (min-width: 1200px) {
    display: none;
    opacity: 0;
  }
`;

export const Background = styled.div`
  width: ${(props) => (!props.isOpenNav ? "500" : "0")}px;
  height: 100vh;
  background: #fff;
  padding: 2rem;
  @media (max-width: 546px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div``;

export const H4 = styled.h4`
  font-size: 35px;
  font-weight: 600;
`;

export const Close = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
`;

export const Image = styled.img`
  width: 100%;
`;
