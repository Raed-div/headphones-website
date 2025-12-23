import HeroSection from "./components/Navbar/HeroSection";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import AudioCard from "./components/AudioCard/AudioCard";
import HorizontalGallery from "./components/HorizontalGallery/HorizontalGallery";
import DreamlikeSound from "./components/DreamlikeSound/DreamlikeSound";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <HeroSection />
      <ColorPicker />
      <AudioCard/>
      <HorizontalGallery/>
      <DreamlikeSound />
      <Footer />
    </>
  );
}
