import TypePage from "../rathmer/TypePage";
import { type8Data } from "../data/types/type8";

export default function Type5Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type8Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
