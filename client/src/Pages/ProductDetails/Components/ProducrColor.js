import {
  Color,
  ColorContent,
  Colored,
  ColorSizeWrapper,
  Input,
  InputSize,
  Label,
  Selected,
  Size,
  SizeContent,
  Small,
} from "../styles";

const ProducrColor = () => {
  return (
    <ColorSizeWrapper>
      <Color>
        <Small>Color</Small>
        <ColorContent>
          <Label>
            <Input bg="red" type={"radio"} />
          </Label>
          <Label>
            <Input bg="#000" type={"radio"} />
          </Label>
          <Label>
            <Input bg="green" type={"radio"} />
          </Label>
        </ColorContent>
      </Color>
      <Size>
        <Small>Size</Small>
        <SizeContent>
          <Label size>
            <InputSize type={"radio"} />
            <Selected>M</Selected>
          </Label>
          <Label size>
            <InputSize type={"radio"} />
            <Selected>X</Selected>
          </Label>
          <Label size>
            <InputSize type={"radio"} />
            <Selected>L</Selected>
          </Label>
        </SizeContent>
      </Size>
    </ColorSizeWrapper>
  );
};

export default ProducrColor;
