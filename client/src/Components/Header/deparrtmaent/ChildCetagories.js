import { ChildWrapper, H4, Li, Ul } from "./styles";

const ChildCetagories = () => {
  return (
    <ChildWrapper>
      <H4>Computers & Accessories</H4>
      <Ul>
        <Li style={{ cursor: "pointer" }}>Computers 1</Li>
        <Li>Computers 2</Li>
        <Li>Computers 3</Li>
        <Li>Computers 4</Li>
        <Li>Computers 5</Li>
        <Li>Computers 6</Li>
        <Li>Computers 7</Li>
        <Li>Computers 8</Li>
      </Ul>
    </ChildWrapper>
  );
};

export default ChildCetagories;
