import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CATSection from "../components/home-page/CATSection";
import FAQSection from "../components/home-page/FAQSection";
import FeaturesSection from "../components/home-page/FeaturesSection";
import HeroSection from "../components/home-page/HeroSection";
import HowItWorksSection from "../components/home-page/HowItWorksSection";
import LearningMethodsSection from "../components/home-page/LearningMethodsSection";

const HomePage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh">
      <Header bg={cardBg} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LearningMethodsSection bg={cardBg} />
      <FAQSection />
      <CATSection />
      <Footer />
    </Box>
  );
};

export default HomePage;
