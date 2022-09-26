import { Body, Head, Wrapper, Text, Ul } from "./styles";

import { FaAlignLeft } from "react-icons/fa";

import SingleCetagories from "./SingleCetagories";

const Departments = () => {
  const cetagories = [
    {
      name: "Value of day",
      children: null,
    },
    {
      name: "Top 100 Offers",
      children: null,
    },
    {
      name: "New Arrivals",
      children: null,
    },
    {
      name: "Computers & Accessories",
      children: "1",
    },
    {
      name: "Cameras, Audio & Video",
      children: null,
    },
    {
      name: "Mobiles & Tablets",
      children: null,
    },
    {
      name: "Movies, Music & Video Games",
      children: null,
    },
    {
      name: "TV & Audio",
      children: null,
    },
    {
      name: "Watches & Eyewear",
      children: null,
    },
    {
      name: "Car, Motorbike & Industrial",
      children: null,
    },
    {
      name: "Accessories",
      children: null,
    },
  ];

  return (
    <Wrapper>
      <Head>
        <Text>
          <FaAlignLeft style={{ marginRight: "7px" }} />
          All Departments
        </Text>
      </Head>
      <Body>
        <Ul>
          {cetagories.map((cat, index) => (
            <SingleCetagories key={index} cetagorie={cat} />
          ))}
        </Ul>
      </Body>
    </Wrapper>
  );
};

export default Departments;
