import React from "react";
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
