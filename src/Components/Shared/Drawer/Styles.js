import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100vh;
  background: rgba(22, 45, 61, 0.48);
  z-index: 9 !important;
  backdrop-filter: blur(4px);
  visibility: ${(props) => (props.isOpenNav ? "visible" : "hidden")};
  transition: all 0.1s;
  z-index: 999 !important;
`;
export const Content = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpenNav ? "0" : "-100%")};
  width: 450px;
  height: 100%;
  background: #fff;
  z-index: 9;
  transition: all 0.8s;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const Closer = styled.div``;

export const CloseBtn = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  margin-bottom: 2rem;
`;

export const MentItems = styled.ul`
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 0.7rem 0;
  padding: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  &&:hover {
    background: #edf2fd;
  }
`;

export const IconImg = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;
