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
      <div className="rathmer-header">
        <h1>Rathmer´sche Tabelle</h1>
        <p>{type2Data.center}</p>
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
        <h2>{type2Data.title}</h2>
        <span>{type2Data.side}</span>
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

