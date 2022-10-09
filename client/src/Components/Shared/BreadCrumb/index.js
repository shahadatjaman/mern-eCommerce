import { Link, Span, BreadCrumb as Bread } from "./styles";
/**
 *
 * @param {string} param0
 * @returns JSX element
 */

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
