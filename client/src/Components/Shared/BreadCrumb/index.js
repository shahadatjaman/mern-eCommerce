import { Link, Span, BreadCrumb as Bread } from "./styles";

const BreadCrumb = ({ pathName }) => {
  return (
    <Bread>
      <Link to={"/"}>
        <Span>Home</Span>
      </Link>
      <Span>/</Span>
      <Span active>{pathName}</Span>
    </Bread>
  );
};

export default BreadCrumb;
