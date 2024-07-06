import React from "react";
import PageWrapper from "../../widgets/PageWrapper";
import HeroSection from "./HeroSection";
import Marquee from "../../components/ui/marquee/Marquee";
import ProductContainer from "./ProductContainer";
import PageGrid from "./PageGrid";
import Review from "./Review";
import AsideContainer from "./AsideContainer";
import QuizContainer from "./QuizContainer";

const Home = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <Marquee />
      <ProductContainer />
      <PageGrid />
      <ProductContainer />
      <AsideContainer />
      <Review />
      <QuizContainer />
    </PageWrapper>
  );
};

export default Home;
