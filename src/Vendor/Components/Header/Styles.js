import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 99;
  box-shadow: 12px 8px 19px -22px #000;
`;

export const Headerr = styled.div`
  // height: 100%;
  // display: flex;
  // align-items: center;
`;

export const AccountWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1rem;
  cursor: pointer;

  h4:hover {
    color: #221ecd;
  }
  i:hover {
    color: #221ecd;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;

export const NameWrapper = styled.div`
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div``;

export const H4 = styled.h4`
  font-size: 14px;
  margin: 0;
  line-height: 3rem;
`;

export const Down = styled.div`
  margin-left: 0.8rem;
`;

export const SearchWrapper = styled.div`
  margin-right: 3rem;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const Left = styled.div`
  margin-left: 1rem;
  // width: 100%;
  // height: 100%;
  // display: flex;
  // justify-content: start;
  // align-items: center;
`;

export const SiteWrapper = styled.div`
  background: #221ecd17;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-left: 1px solid #1d1c1c2e;
  border-right: 1px solid #1d1c1c2e;
  cursor: pointer;
`;

export const H5 = styled.h5`
  font-size: 14px;
`;

export const LogoWrapper = styled.div`
  margin-right: 2rem;
  width: 100px;
`;

export const H6 = styled.h6`
  font-size: 28px;
  font-weight: 600;
`;
