import { useState } from "react";
import { FuriaChatbot } from "./components/FuriaBot";
import { FuriaBotSection } from "./components/FuriaBotSession";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LatestResults } from "./components/latestResults";
import { NextEvents } from "./components/NextEvents";
import Carousel from "./components/TeamSession";

export const App: React.FC = () => {
  const [openModalbySession, setOpenbySession] = useState(false)
  return (
    <>
      <Header />
      <HeroSection />
      <Carousel />
      <LatestResults />
      <NextEvents />
      <FuriaBotSection setOpenbySession={setOpenbySession} />
      <FuriaChatbot  openModalbySession={openModalbySession} setOpenbySession={setOpenbySession}/>
    </>
  );
};
