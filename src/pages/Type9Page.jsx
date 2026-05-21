import TypePage from "../rathmer/TypePage";
import { type9Data } from "../data/types/type9";

export default function Type9Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type9Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
