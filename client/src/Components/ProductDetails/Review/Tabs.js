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
    dispatch(getRatings(id));
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
