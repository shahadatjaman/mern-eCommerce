import React from "react";

import { useNavigate } from "react-router-dom";
import {
  ActionBar,
  HeaderTitle,
  PageHeaderContainer,
  Plus,
  ProducrWrapper,
  //Wrapper,
} from "./Styles";
import { Title, Span, Button, Wrapper } from "../../Shared/Styles";

const Collection = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/dashboard/shahadat/newproduct");
  };

  return (
    <Wrapper>
      <ProducrWrapper>
        <PageHeaderContainer>
          <HeaderTitle>
            <Title>
              Product
              <Span>3</Span>
            </Title>
          </HeaderTitle>
          <ActionBar>
            <Button onClick={navigateHandler}>
              <Plus>+</Plus>
              New Product
            </Button>
          </ActionBar>
        </PageHeaderContainer>
      </ProducrWrapper>
    </Wrapper>
  );
};

export default Collection;
