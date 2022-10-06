import styled from "styled-components";

// Product Color Styles

export const ColorSizeWrapper = styled.div`
  display: flex;
`;

export const Color = styled.div``;

export const Small = styled.span`
  font-weight: 600;
  display: inline-block;
  color: #000;
  margin: 0 0 15px;
`;

export const ColorContent = styled.div`
  display: flex !important;
`;

export const Label = styled.div`
  position: relative;
  margin-right: 7px;
  cursor: pointer;
`;

export const Input = styled.input`
  cursor: pointer;
  display: inline-block;
  width: 25px;
  height: 25px;
  position: relative;
  &&[type="radio"]:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: 2px;
    left: 2px;
    position: relative;
    background-color: ${(props) => props.bg && props.bg};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;

export const ColorSelector = styled.span`
  background-color: ${(props) => props.bg && props.bg};
  border-radius: 50%;
`;

export const CurcleBorder = styled.div`
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  margin-right: 4px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

export const Colored = styled.span`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.bg && props.bg};
  border-radius: 50%;
`;

export const Size = styled.div`
  margin-left: 1rem;
`;

export const SizeContent = styled.div`
  display: flex;
`;

export const Selected = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 0;
  padding: 8px;
  background-color: ${(props) =>
    props.bg ? "#000" : props.theme.colors.primary};
  left: 0;
  color: ${(props) => (props.bg ? "#fff" : "#fff")};
  z-index: -1;
`;

export const InputSize = styled.input`
  z-index: 99;
  cursor: pointer;
  width: 30px;
  height: 25px;
  opacity: 0;
`;
