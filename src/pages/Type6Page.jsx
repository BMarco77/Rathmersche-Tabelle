import TypePage from "../rathmer/TypePage";
import { type6Data } from "../data/types/type6";

export default function Type5Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type6Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
