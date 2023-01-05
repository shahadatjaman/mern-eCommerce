import { DescReview } from "./Styles";

import { Container } from "react-bootstrap";
import { BasicTabs } from "../../Shared/Tabs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRatings } from "../../../feature/reducer/product/rating";
import { useParams } from "react-router-dom";

const Tabs = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(
        getRatings({
          pathOne: "v1",
          pathTwo: "getratings",
          _id: id,
          method: "get",
        })
      );
    }
  }, [dispatch, id]);

  return (
    <DescReview>
      <Container>
        <BasicTabs />
      </Container>
    </DescReview>
  );
};

export default Tabs;
