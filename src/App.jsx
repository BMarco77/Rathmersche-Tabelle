import { useState } from "react";
import HomePage from "./pages/HomePage";
import TypePage from "./pages/TypePage";
import Type3Page from "./pages/Type3Page";
import Type1Page from "./pages/Type1Page";
import Type4Page from "./pages/Type4Page";
import Type5Page from "./pages/Type5Page";
import Type6Page from "./pages/Type6Page";
import Type7Page from "./pages/Type7Page";
import Type8Page from "./pages/Type8Page";
import Type9Page from "./pages/Type9Page";


export default function App() {
  const [selectedType, setSelectedType] = useState(null);

  if (selectedType === 2) {
    return <TypePage onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 3) {
    return <Type3Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 1) {
    return <Type1Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 4) {
    return <Type4Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 5) {
    return <Type5Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 6) {
    return <Type6Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 7) {
    return <Type7Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 8) {
    return <Type8Page onBack={() => setSelectedType(null)} />;
  }
  if (selectedType === 9) {
    return <Type9Page onBack={() => setSelectedType(null)} />;
  }
  return <HomePage onSelectType={setSelectedType} />;
}
