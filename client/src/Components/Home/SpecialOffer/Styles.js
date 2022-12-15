import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem 0;
`;

export const Item = styled.div`
  background: #fff;
`;

export const SpecialOffer = styled.div`
  background: #fff;
  border-radius: 5px;
  position: relative;
  height: 134px;
  overflow: hidden;
`;

export const Offerprice = styled.div`
  background: #fcc314;
  width: 153px;
  height: 153px;
  position: absolute;
  right: -20px;
  border-radius: 50%;
  top: -35%;
  display: flex;
  justify-items: center;
  align-items: end;

  h6 {
    font-weight: 700;
    font-size: 26.45px;
    line-height: 32.02px;
    color: #453b3b;
    text-align: center;
    display: block;
  }
  span {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ImgWrapper = styled.div`
  height: inherit;
  background: #edf2fd;
  position: relative;
  padding: 54px;
  margin: 0 18px;
  span {
    position: absolute;
    background: #e65353;
    top: -25px;
    left: 12px;
    color: #fff;
    padding: 6px 16px;
    border-radius: 10px;
    font-size: 15px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 18px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  h6 {
    font-weight: 700;
    text-align: center;
    font-size: 15px;
    line-height: 19.88px;
  }
`;

export const PriceBtn = styled.span`
  background: #e48087;
  font-weight: 700;
  font-size: 27.76px;
  color: #fff;
  border-radius: 33.89px;
  padding: 8px 18px;
  @media (max-width: 990px) {
    font-weight: 700;
    font-size: 16.76px;
    color: #fff;
    border-radius: 33.89px;
    padding: 9px 10px;
  }
`;

export const Roatoted = styled.span`
  transform: rotate(351deg);
  position: absolute;
  font-weight: 400;
  font-size: 13.89px;
  margin-left: 12px;
  margin-top: 8px;
  text-decoration: line-through;
`;

export const Progressbar = styled.div`
  margin: 30px 18px;
`;

export const Progress = styled.div`
  background: #f2f2f2;
  height: 20px;
  width: 100%;
  position: relative;
  border-radius: 6.5px;
  border: 5px solid #f2f2f2;
  overflow: hidden;
  margin-bottom: 8px;
  &&::before {
    content: "";
    position: absolute;
    width: 60%;
    background: #fed700;
    border-radius: 6.5px;
    height: 15px;
    left: 0;
  }
`;

export const Available = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  span {
    span {
      font-weight: 700;
    }
  }
`;

export const Timer = styled.div`
  height: 149px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h6 {
    font-weight: 700;
    font-style: italic;
    font-size: 17.51px;
    color: #ca000f;
    margin-bottom: 2rem;
    @media (max-width: 990px) {
      font-size: 12.51px;
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  margin-left: 14px;
  margin-bottom: 2rem;
  span {
    font-weight: 700;
    span {
      background: #221ecd;
      border-radius: 20px;
      color: #fff;
      padding: 4px 14px;
    }
    p {
      font-weight: 400;
      color: #707070;
      font-size: 6.96px;
      line-height: 8.43px;
      margin-top: 8px;
      text-align: center;
    }
  }
  p {
    margin: 0 5px;
    color: #ca000f;
  }
`;

export const Specialshop = styled.div`
  margin: 2rem 0;
`;

export const TopBar = styled.div`
  background: #ff9900;
  padding: 20px 8px;
  display: flex;
`;

export const TopBtn = styled.div`
  span {
    background: #fff;
    font-weight: 700;
    font-size: 18px;

    border-radius: 33.89px;
    padding: 12px 18px;
    color: #ff9900;
  }
`;

export const Menu = styled.div`
  span {
    background: inherit;
    margin-left: 3rem;
    color: #fff;
  }
`;

export const Categoreis = styled.div`
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
