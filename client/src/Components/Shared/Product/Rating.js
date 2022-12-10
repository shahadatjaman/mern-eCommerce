import ProductRatting from "../Ratting";
import EmptyRating from "@mui/material/Rating";

const Rating = ({ totalRating }) => {
  return totalRating > 0 ? (
    <ProductRatting rating={totalRating} />
  ) : (
    <EmptyRating name="no-value" disabled value={null} />
  );
};

export default Rating;
