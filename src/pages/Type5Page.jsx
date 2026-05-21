import TypePage from "../rathmer/TypePage";
import { type5Data } from "../data/types/type5";

export default function Type5Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type5Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
