import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
`;

export const Plus = styled.span`
  font-size: 28px;
  font-weight: 700;
  margin-right: 1rem;
`;

export const H6 = styled.h6`
  font-weight: 500;
  color: #2c6ecb;
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const MediaWrapper = styled.div`
  width: 100%;
  //height: 150px;
  border: 2px dashed #ddd;

  border-radius: 10px;
  background: #eaf7ff;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;
export const Images = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap-reverse;
`;

export const ImgWrapper = styled.div`
  max-width: 100px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: #ddd;
  border: 1px solid #ddd;
  border-radius: 10px;
  position: relative;
  &&:hover {
    div {
      visibility: visible;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
`;

export const AddFile = styled.div`
  span {
    font-size: 14px;
    background: #e5effd;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export const AddUrl = styled.div`
  span {
    font-size: 14px;
    color: #2c6ecb;
    text-decoration: underline;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export const Span = styled.span`
  cursor: pointer;
`;

export const InputArea = styled.div`
  margin-top: 2rem;
`;

export const Options = styled.div`
  margin: 1rem 0;
  font-weight: 500;
  font-size: 14px;
`;

export const CheckBox = styled.input`
  margin-right: 0.5rem;
  display: inline-block;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  text-align: right;
  padding-bottom: 5rem;
`;

export const Submit = styled.span`
  background: #ddd;
  padding: 4px 8px;
  border-radius: 10px;
  font-weight: 500;
  cursor: ${(props) => (props.isValidForm ? "pointer" : "auto")};
`;

export const ItemWrapper = styled.div``;

export const Item = styled.div``;

export const Name = styled.span`
  display: block;
  font-weight: 600;
`;

export const Value = styled.span`
  background: #efeff3;
  padding: 4px 14px;
  border-radius: 20px;
  margin-top: 6px;
  display: inline-block;
`;

export const AddAnotherOption = styled.div``;

export const Butttons = styled.div`
  text-align: right;
`;

export const DeleteAction = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(22, 45, 61, 0.48);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`;

export const Delete = styled.div`
  background: #fff;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: red;
  }
`;
