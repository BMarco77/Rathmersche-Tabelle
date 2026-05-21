import TypePage from "../rathmer/TypePage";
import { type4Data } from "../data/types/type4";

export default function Type1Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type4Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
