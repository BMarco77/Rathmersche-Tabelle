import { useState } from "react";
import HomePage from "./pages/HomePage";
import TypePage from "./rathmer/TypePage";

import { type1Data as type1DataDe } from "./data/types/type1";
import { type2Data as type2DataDe } from "./data/types/type2";
import { type3Data as type3DataDe } from "./data/types/type3";
import { type4Data as type4DataDe } from "./data/types/type4";
import { type5Data as type5DataDe } from "./data/types/type5";
import { type6Data as type6DataDe } from "./data/types/type6";
import { type7Data as type7DataDe } from "./data/types/type7";
import { type8Data as type8DataDe } from "./data/types/type8";
import { type9Data as type9DataDe } from "./data/types/type9";

import { type1Data as type1DataEn } from "./data/en/type1";
import { type2Data as type2DataEn } from "./data/en/type2";
import { type3Data as type3DataEn } from "./data/en/type3";
import { type4Data as type4DataEn } from "./data/en/type4";
import { type5Data as type5DataEn } from "./data/en/type5";
import { type6Data as type6DataEn } from "./data/en/type6";
import { type7Data as type7DataEn } from "./data/en/type7";
import { type8Data as type8DataEn } from "./data/en/type8";
import { type9Data as type9DataEn } from "./data/en/type9";

const typeMapDe = {
  1: type1DataDe,
  2: type2DataDe,
  3: type3DataDe,
  4: type4DataDe,
  5: type5DataDe,
  6: type6DataDe,
  7: type7DataDe,
  8: type8DataDe,
  9: type9DataDe,
};

const typeMapEn = {
  1: type1DataEn,
  2: type2DataEn,
  3: type3DataEn,
  4: type4DataEn,
  5: type5DataEn,
  6: type6DataEn,
  7: type7DataEn,
  8: type8DataEn,
  9: type9DataEn,
};

export default function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [language, setLanguage] = useState("de");

  const typeMap = language === "en" ? typeMapEn : typeMapDe;

  if (selectedType) {
    return (
      <TypePage
        typeData={typeMap[selectedType]}
        language={language}
        setLanguage={setLanguage}
        onBack={() => setSelectedType(null)}
        onSelectType={setSelectedType}
      />
    );
  }

  return (
    <HomePage
      language={language}
      setLanguage={setLanguage}
      onSelectType={setSelectedType}
    />
  );
}
