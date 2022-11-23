import styled from "styled-components";
export const Body = styled.div`
  height: 330px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  background: #edf2fd;
  width: 100%;
  left: 0;
  padding: 1rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: 700;
  display: block;
  text-align: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

export const Left = styled.div`
  margin-right: 1rem;
`;

export const Middle = styled.div``;

export const ImgWrapper = styled.div`
  width: 60px;
  padding: 6px;
  background: #edf2fd;
  border-radius: 6px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Name = styled.h5`
  font-size: 14px;
  display: block;
  text-align: left;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Price = styled.h6``;

export const Qty = styled.h6`
  margin-bottom: 4px;
`;

export const Right = styled.div`
  width: 40px;
  margin-left: auto;
`;

export const Close = styled.span`
  cursor: pointer;
`;
