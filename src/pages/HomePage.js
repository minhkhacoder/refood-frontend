/** @format */

import Layout from "components/layout/Layout";
import HomeBanner from "modules/home/HomeBanner";
import HomeProduct from "modules/home/HomeProduct";
import React from "react";

const HomePage = () => {
  document.title = "Trang chủ";
  return (
    <Layout>
      <HomeBanner></HomeBanner>
      <HomeProduct></HomeProduct>
    </Layout>
  );
};

export default HomePage;
