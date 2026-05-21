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

const typeMap = {
  1: type1Data,
  2: type2Data,
  3: type3Data,
  4: type4Data,
  5: type5Data,
  6: type6Data,
  7: type7Data,
  8: type8Data,
  9: type9Data,
};

export default function App() {
  const [selectedType, setSelectedType] = useState(null);

  if (selectedType) {
    return (
      <TypePage
        typeData={typeMap[selectedType]}
        onBack={() => setSelectedType(null)}
        onSelectType={setSelectedType}
      />
    );
  }

  return <HomePage onSelectType={setSelectedType} />;
}
