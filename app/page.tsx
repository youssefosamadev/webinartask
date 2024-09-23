import BuyNow from "./components/BuyNow/BuyNow";
import Choose from "./components/Choose/Choose";
import Faqs from "./components/FAQS/Faqs";
import Help from "./components/HelpCenter/Help";
import HeroPage from "./components/Hero/HeroPage";
import Register from "./components/Register/Register";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Register />
      <Choose />
      <Help />
      <Faqs />
      <BuyNow />
    </>
  );
}
