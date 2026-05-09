import { useState } from "react";
import { type2Data } from "../data/types/type2";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="rathmer-page">
      <button className="rathmer-back-button" onClick={onBack}>
  ← Zur Übersicht
</button>
      <div className="rathmer-type-top">
  <div className="rathmer-wappen">
    <img src="/wappen-512.png" alt="Wappen" />
  </div>

  <button
    className="rathmer-center-button"
    onClick={() =>
      setSelectedItem({
        subtype: "Zentrum",
        title: type2Data.centerInfo.title,
        content: type2Data.centerInfo.content,
      })
    }
  >
    {type2Data.center}
  </button>
</div>      <div className="rathmer-type-header">
  <button
    className="rathmer-center-button"
    onClick={() =>
      setSelectedItem({
        subtype: "Zentrum",
        title: type2Data.centerInfo.title,
        content: type2Data.centerInfo.content,
      })
    }
  >
    {type2Data.center}
  </button>
</div>

      {/* Hauptkarte */}
      <div
        className="rathmer-main-card"
        style={{
          background: `linear-gradient(
            135deg,
            ${type2Data.color},
            #7b2cbf
          )`,
        }}
      >
        <button
  className="rathmer-title-button"
  onClick={() =>
    setSelectedItem({
      subtype: "Typ 2",
      title: type2Data.typeInfo.title,
      content: type2Data.typeInfo.content,
    })
  }
>
  {type2Data.title}
</button>

<button
  className="rathmer-side-button"
  onClick={() =>
    setSelectedItem({
      subtype: "Seite",
      title: type2Data.sideInfo.title,
      content: type2Data.sideInfo.content,
    })
  }
>
  {type2Data.side}
</button>
      </div>

      {/* Core Module */}
      <div className="rathmer-core-grid">
        {type2Data.coreModules.map((module) => (
          <button
            key={module.label}
            className="rathmer-core-button"
            onClick={() =>
              setSelectedItem({
                type: type2Data.type,
                title: module.label,
                content: module.content,
              })
            }
          >
            {module.label}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="rathmer-layout">
        {/* Subtypen */}
        <div className="rathmer-subtypes">
          {type2Data.subtypes.map((subtype) => (
            <div
              key={subtype.code}
              className="rathmer-subtype-card"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${type2Data.color},
                  #7b2cbf
                )`,
              }}
            >
              <h3>{subtype.code}</h3>

              {/* Traits */}
              <div className="rathmer-traits">
                {subtype.traits.map((trait) => (
                  <button
                    key={trait.label}
                    className="rathmer-trait-button"
                    onClick={() =>
                      setSelectedItem({
                        subtype: subtype.code,
                        title: trait.label,
                        content: trait.content,
                      })
                    }
                  >
                    {trait.label}
                  </button>
                ))}
              </div>

              {/* Module */}
              <div className="rathmer-module-list">
                {subtype.modules.map((module) => (
                  <button
                    key={module.label}
                    className="rathmer-module-button"
                    onClick={() =>
                      setSelectedItem({
                        subtype: subtype.code,
                        title: module.label,
                        content: module.content,
                      })
                    }
                  >
                    {module.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Panel */}
        <div className="rathmer-info-panel">
          {selectedItem ? (
            <>
              <span className="rathmer-info-type">
                {selectedItem.subtype
                  ? selectedItem.subtype.toUpperCase()
                  : `TYP ${selectedItem.type}`}
              </span>

              <h2>{selectedItem.title}</h2>

              <p>{selectedItem.content}</p>
            </>
          ) : (
            <>
              <span className="rathmer-info-type">INFO</span>

              <h2>Wissensmodul</h2>

              <p>
                Klicke auf ein Modul, Trait oder Feld, um Informationen
                anzuzeigen.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

