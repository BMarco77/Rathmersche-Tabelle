import TypePage from "../rathmer/TypePage";
import { type3Data } from "../data/types/type3";

export default function Type1Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type3Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
