import { Helmet } from "react-helmet-async";
import HeroSection from "../home/HeroSection";
import SyndicateSection from "../home/SyndicateSection";
import ModelSection from "../home/ModelSection";
import ItinerarySection from "../home/ItinerarySection";
import FreedomSection from "../home/FreedomSection";
import CompanySection from "../home/CompanySection";
import UpcomingTripsSection from "../home/UpcomingTripsSection";
import MembersSection from "../home/MembersSection";
import FounderSection from "../home/FounderSection";
import WorkSection from "../home/WorkSection";
import FAQSection from "../home/FAQSection";
import FooterSection from "../home/FooterSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Luxury Cape Town Travel Experiences | Syndicate Travel Adventures
        </title>
        <meta
          name="description"
          content="Join exclusive Cape Town escape adventures with Syndicate Travel. Luxury coastal experiences, 5-day curated itineraries, community travel, and premium syndicate trips for entrepreneurs and models."
        />
        <meta
          property="og:title"
          content="Luxury Cape Town Travel Experiences | Syndicate Travel Adventures"
        />
        <meta
          property="og:description"
          content="Join exclusive Cape Town escape adventures with Syndicate Travel. Luxury coastal experiences, 5-day curated itineraries, community travel, and premium syndicate trips for entrepreneurs and models."
        />
      </Helmet>
      <main className="w-full bg-background-dark-1">
        <HeroSection />
        <SyndicateSection />
        <ModelSection />
        <ItinerarySection />
        <FreedomSection />
        <CompanySection />
        <UpcomingTripsSection />
        <MembersSection />
        <FounderSection />
        <WorkSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Home;
