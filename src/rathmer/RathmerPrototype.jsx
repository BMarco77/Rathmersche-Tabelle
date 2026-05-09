import { useState } from "react";
import { rathmerData } from "./rathmerData";
import "./rathmer.css";

export default function RathmerPrototype() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="rathmer-page">
     <div className="rathmer-header">
  <h1>Rathmer´sche Tabelle</h1>

  <button
    className="rathmer-center-button"
   onClick={() => alert
     ("Herz-Menschen geklickt")}
        subtype: "Zentrum",
        title: rathmerData.centerInfo.title,
        content: rathmerData.centerInfo.content,
      })
    }
  >
    {rathmerData.center}
  </button>
</div>
      {/* Hauptkarte */}
      <div
        className="rathmer-main-card"
        style={{
          background: `linear-gradient(
            135deg,
            ${rathmerData.color},
            #7b2cbf
          )`,
        }}
      >
       <button
  className="rathmer-title-button"
  onClick={() =>
    setSelectedItem({
      subtype: "Typ 2",
      title: rathmerData.typeInfo.title,
      content: rathmerData.typeInfo.content,
    })
  }
>
  {rathmerData.title}
</button>

<button
  className="rathmer-side-button"
  onClick={() =>
    setSelectedItem({
      subtype: "Seite",
      title: rathmerData.sideInfo.title,
      content: rathmerData.sideInfo.content,
    })
  }
>
  {rathmerData.side}
</button>
      </div>

      {/* Core Module */}
      <div className="rathmer-core-grid">
        {rathmerData.coreModules.map((module) => (
          <button
            key={module.label}
            className="rathmer-core-button"
            onClick={() =>
              setSelectedItem({
                type: rathmerData.type,
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
          {rathmerData.subtypes.map((subtype) => (
            <div
              key={subtype.code}
              className="rathmer-subtype-card"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${rathmerData.color},
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
