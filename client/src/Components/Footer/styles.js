import styled from "styled-components";

export const Wrapper = styled.footer`
  display: block;
  background: #2d3e50;
  padding: 5rem 0;
  @media print {
    display: none;
  }
`;

export const FooterWrapper = styled.div``;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #fff;
  }
`;

export const Form = styled.div`
  width: 400px;
`;

export const FooterInfo = styled.div``;

export const Info = styled.div`
  color: #ffffff;
  h5 {
    font-weight: 700;
    font-size: 17px;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  font-weight: 300;
  font-size: 14px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Turner = styled.p`
  background: #dddddd1f;
  height: 1px;
  width: 100%;
  position: relative;
  margin-top: 1rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 44%;
    right: 50%;
    width: 152px;
    height: 2px;
    background: #fff;
  }
`;

export const SocialWrapper = styled.div`
  h5 {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const MarketPlace = styled.div`
  display: flex;
`;

export const PlayStore = styled.div`
  margin-right: 1rem;
`;

export const AppStore = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

export const PolicyList = styled.div`
  display: flex;
  justify-content: center;
`;

export const Lists = styled.ul`
  display: flex;
`;

export const List = styled.li`
  color: #fff;
  font-size: 11px;
  font-weight: 400;
  border-right: 2px solid #e1e1e124;
  padding: 6px;
  line-height: 4px;
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
`;

export const Language = styled.div`
  p {
    color: #fff !important;
    font-size: 11px;
    font-weight: 400;
    padding: 6px;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.div`
  h5 {
    color: #fff;
  }
`;

export const Icons = styled.div`
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 5px;
  svg {
    color: #fff;
    font-size: 18px;
    margin: 8px;
    cursor: pointer;
  }
`;

export const CopyRight = styled.div`
  p {
    color: #fff;
    text-align: center;
  }
`;
