import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JoiningServerList } from "../components/JoiningServer";
import { PublicServerList } from "../components/PublicServer";
import { servers } from "../dummy/serverList";

export const TopPage = () => {
  return (
    <>
      <Header />
      <JoiningServerList servers={servers} />
      <PublicServerList servers={servers} />
      <Footer />
    </>
  );
};
