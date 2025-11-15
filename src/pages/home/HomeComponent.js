import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default function Home({ theme }) {
  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
