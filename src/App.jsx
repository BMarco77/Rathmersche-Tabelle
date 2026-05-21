import { useState } from "react";
import HomePage from "./pages/HomePage";
import TypePage from "./rathmer/TypePage";

import { type1Data } from "./data/types/type1";
import { type2Data } from "./data/types/type2";
import { type3Data } from "./data/types/type3";
import { type4Data } from "./data/types/type4";
import { type5Data } from "./data/types/type5";
import { type6Data } from "./data/types/type6";
import { type7Data } from "./data/types/type7";
import { type8Data } from "./data/types/type8";
import { type9Data } from "./data/types/type9";

export default function App() {
  const [selectedType, setSelectedType] = useState(null);

 if (selectedType === 1) {
  return (
    <Type1Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 2) {
  return (
    <TypePage
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 3) {
  return (
    <Type3Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 4) {
  return (
    <Type4Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 5) {
  return (
    <Type5Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 6) {
  return (
    <Type6Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 7) {
  return (
    <Type7Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 8) {
  return (
    <Type8Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  if (selectedType === 9) {
  return (
    <Type9Page
      onBack={() => setSelectedType(null)}
      onSelectType={setSelectedType}
    />
  );
}
  return <HomePage onSelectType={setSelectedType} />;
}
