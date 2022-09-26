import { Li } from "./styles";
import ChildCetagories from "./ChildCetagories";
import { FaAngleRight } from "react-icons/fa";

const SingleCetagories = ({ cetagorie }) => {
  return (
    <Li>
      {cetagorie.children && <ChildCetagories cetagorie={cetagorie} />}

      {cetagorie.name}
      {cetagorie.children && <FaAngleRight />}
    </Li>
  );
};

export default SingleCetagories;
