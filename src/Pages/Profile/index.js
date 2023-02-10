import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../Components/Profile";
import Layout from "../Layout";
const Profile = () => {
  return (
    <Layout footer={false}>
      <UserProfile />
    </Layout>
  );
};

export default Profile;
