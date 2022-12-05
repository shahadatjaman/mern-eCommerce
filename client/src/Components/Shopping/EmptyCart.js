import { useNavigate } from "react-router-dom";

import {
  ItemEmpty,
  ItemEmptyText,
  ImgWrapper,
  Img,
} from "../../Pages/Wishlist/Styles";
import Button from "@mui/material/Button";
const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <ItemEmpty>
      <ImgWrapper>
        <Img
          src="https://res.cloudinary.com/dza2t1htw/image/upload/v1669295344/shopping-cart_f2vetc.png"
          alt="img"
        />
      </ImgWrapper>
      <ItemEmptyText>No items found in Cart </ItemEmptyText>
      <Button
        onClick={() => navigate("/")}
        sx={{ marginTop: 3 }}
        variant="contained"
      >
        Return to shop
      </Button>
    </ItemEmpty>
  );
};

export default EmptyCart;
