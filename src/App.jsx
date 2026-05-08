import { useState } from "react";
import HomePage from "./pages/HomePage";
import TypePage from "./pages/TypePage";

export default function App() {
  const [selectedType, setSelectedType] = useState(null);

  if (selectedType === 2) {
    return <TypePage onBack={() => setSelectedType(null)} />;
  }

  return <HomePage onSelectType={setSelectedType} />;
}
