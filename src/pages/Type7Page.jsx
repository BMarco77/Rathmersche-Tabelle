import TypePage from "../rathmer/TypePage";
import { type7Data } from "../data/types/type7";

export default function Type7Page({ onBack, onSelectType }) {
  return (
    <TypePage
      typeData={type7Data}
      onBack={onBack}
      onSelectType={onSelectType}
    />
  );
}
