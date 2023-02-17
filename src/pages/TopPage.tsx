import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ServerList } from "./Server";

const servers = [
  {
    id: 1,
    name: "釣り部",
    category: "釣り",
    description: "釣り好き集まれ！",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    name: "キャンプ部",
    category: "キャンプ",
    description: "キャンプ好き集まれ！",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    name: "ツーリング部",
    category: "バイク",
    description: "バイク好き集まれ！",
    imageUrl: "https://source.unsplash.com/random",
  },
];

export const TopPage = () => {
  return (
    <>
      <Header />
      <ServerList servers={servers} />
      <Footer />
    </>
  );
};
