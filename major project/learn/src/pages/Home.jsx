import MainSection from "../component/MainSection";
import Navbar from "../component/Navbar";
import Player from "../component/Player";
import SearchSection from "../component/SearchSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchSection/>
      <MainSection/>
      <Player />
    </>
  );
};

export default Home;