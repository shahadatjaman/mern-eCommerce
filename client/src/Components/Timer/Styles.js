import styled, { StyleSheetManager } from "styled-components";

export const Wrapper = styled.div`
  margin: 8px 0;
`;

export const Item = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.div`
  padding: 18px 28px;
  height: 64.3px;
  display: flex;
  background: #f9f9f9;
  svg {
    margin-right: 8px;
    font-size: 24px;
    color: #fcc314;
  }
`;

export const H4 = styled.h4`
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const ImgWrapper = styled.div`
  height: 89px;
  background: #edf2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 5px;
  margin: 8px auto;
`;

export const Img = styled.img`
  height: 75px !important;
`;

export const Caption = styled.div`
  margin-top: 8px;
  margin-left: 30px;
  margin: auto;
`;

export const H5 = styled.h5`
  font-weight: 700;
  font-size: 15px;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 14.52px;
  color: #898989;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  color: #e48087;
  font-weight: 700;
  font-size: 10px;
  line-height: 12.1px;
  display: block;
  text-align: right;
  margin-bottom: 6px;
`;

/// Timer Styles
export const TimerWrapper = styled.div`
  background: #fff;
  padding-top: 50px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const OfferTitle = styled.span`
  position: relative;
  top: -18px;
  color: #ca000f;
  font-weight: 700;
  font-style: italic;
  font-size: 12.24px;
  line-height: 14.82px;
`;

export const OfferTimer = styled.div`
  display: flex;
`;

export const OfferImgWrapper = styled.div`
  position: relative;
  height: 212px;
  background: #edf2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  border-radius: 5px;
`;

export const OfferImg = styled.img`
  width: 186px;
  height: 168px;
`;

export const ColoredSpan = styled.span`
  position: absolute;
  left: 22px;
  top: -24px;
  border-radius: 5px;
  background: #e65353;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 18.15px;
  letter-spacing: 1%;
`;

export const TimerPart = styled.div`
  margin-left: 1rem;
`;

export const Counter = styled.div`
  display: flex;
  margin-bottom: 2rem;
  span {
    span {
      background: #2b88de;
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

export const BtnTitle = styled.div`
  h6 {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 1rem;
  }
  span {
    span {
      p {
        display: inline-block;
      }
    }
  }
`;

export const Price = styled.div`
  display: flex;
  margin-bottom: 12px;
  span {
    background: #2b88de;
    border-radius: 20px;
    color: #fff;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 700;
    margin-right: 8px;
    display: block;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    color: #ca000f;
    transform: rotate(353deg);
    display: inline-block;
  }
`;
