import { Header } from "../app/components/Header/Header"
import { FeatuteCars } from "./components/FeactureCars/FeatuteCars";
import { Hero } from "./components/Hero/Hero";
import { SearchModel } from "./components/SearchModel/SearchModel";
import {ImageVideo} from "./components/ImageVideo/ImageVideo";
import {WhyChoose} from "./components/WhyChoose/WhyChoose";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Bem vindo ao Auto Shopping",
  description: "O melhor lugar para encontrar seu próximo carro!",
};

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SearchModel />
      <FeatuteCars />
      <ImageVideo />
      <WhyChoose />
      <Footer />
    </main>
  );
}
