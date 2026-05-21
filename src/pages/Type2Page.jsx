import TypePage from "../rathmer/TypePage";
import { type2Data } from "../data/types/type2";

export default function Type2Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type2Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
