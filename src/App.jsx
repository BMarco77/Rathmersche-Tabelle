import { useState } from "react";
import HomePage from "./pages/HomePage";
import TypePage from "./pages/TypePage";
import Type3Page from "./pages/Type3Page";
import Type1Page from "./pages/Type1Page";


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

  return <HomePage onSelectType={setSelectedType} />;
}
