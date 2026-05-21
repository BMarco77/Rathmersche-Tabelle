import TypePage from "../rathmer/TypePage";
import { type1Data } from "../data/types/type1";

export default function Type1Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type1Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
