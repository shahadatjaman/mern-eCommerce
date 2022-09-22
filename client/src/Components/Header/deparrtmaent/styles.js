import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  box-shadow: 5px 7px 20px 1px #dddddd80;
`;

export const Head = styled.div`
  background: #fed700;
  padding: 1rem;
`;

export const Text = styled.h5``;

export const Body = styled.div`
  padding: 0 1rem;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  font-weight: 500;
  font-size: 14px;
  color: #393838;
  margin: 12px 0;
  position: relative;

  svg {
    margin-left: 10px;
    display: inline-block;
  }
  &&:hover {
    div {
      display: block;
    }
  }
`;

// Child Cetagories

export const H4 = styled.h4``;

export const ChildWrapper = styled.div`
  position: absolute;
  right: -125%;
  top: -92px;
  background: #fff;
  box-shadow: 5px 7px 20px 1px #dddddd80;
  padding: 1rem 0.5rem;
  padding-left: 4rem;
  z-index: 9;
  display: none;
`;
