import { useState } from "react";
import wappen from "../assets/wappen-512.png";
import { type2Data } from "../data/types/type2";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [selectedCoreItem, setSelectedCoreItem] = useState(null);
  const [selectedSubtypeItem, setSelectedSubtypeItem] = useState(null);

  return (
    <div className="rathmer-page">
      <button className="rathmer-back-button" onClick={onBack}>
        ← Zur Übersicht
      </button>

      {/* Hero / Typbühne */}
      <section
        className="rathmer-hero-card"
        style={{
          background: `linear-gradient(135deg, ${type2Data.color}, #8b35c9)`,
        }}
      >
        <div className="rathmer-hero-glow" />

        <div className="rathmer-hero-content">
          <div className="rathmer-hero-wappen">
            <img src={wappen} alt="Wappen" />
          </div>

          <div className="rathmer-meta-nav rathmer-meta-nav-on-hero">
            <button
              className="rathmer-meta-button rathmer-meta-button-on-hero"
              onClick={() =>
                setSelectedCoreItem({
                  area: "meta",
                  subtype: "Zentrum",
                  title: type2Data.centerInfo.title,
                  content: type2Data.centerInfo.content,
                })
              }
            >
              {type2Data.center}
            </button>

            <button
              className="rathmer-meta-button rathmer-meta-button-on-hero"
              onClick={() =>
                setSelectedCoreItem({
                  area: "meta",
                  subtype: "Typ 2",
                  title: type2Data.typeInfo.title,
                  content: type2Data.typeInfo.content,
                })
              }
            >
              {type2Data.title}
            </button>

            <button
              className="rathmer-meta-button rathmer-meta-button-on-hero"
              onClick={() =>
                setSelectedCoreItem({
                  area: "meta",
                  subtype: "Seite",
                  title: type2Data.sideInfo.title,
                  content: type2Data.sideInfo.content,
                })
              }
            >
              {type2Data.side}
            </button>
          </div>
        </div>
      </section>

      {selectedCoreItem?.area === "meta" && (
        <CoreInfoPanel item={selectedCoreItem} />
      )}

      <div className="rathmer-core-grid">
        {type2Data.coreModules.map((module) => (
          <button
            key={module.label}
            className="rathmer-core-button"
            onClick={() =>
              setSelectedCoreItem({
                area: "core",
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

      {selectedCoreItem?.area === "core" && (
        <CoreInfoPanel item={selectedCoreItem} />
      )}

      <div className="rathmer-layout">
        <div className="rathmer-subtypes">
          {type2Data.subtypes.map((subtype) => (
            <div
              key={subtype.code}
              className="rathmer-subtype-card"
              style={{
                background: `linear-gradient(135deg, ${type2Data.color}, #7b2cbf)`,
              }}
            >
              <h3>{subtype.code}</h3>

              <div className="rathmer-traits">
                {subtype.traits.map((trait) => (
                  <button
                    key={trait.label}
                    className="rathmer-trait-button"
                    onClick={() =>
                      setSelectedSubtypeItem({
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

              <div className="rathmer-module-list">
                {subtype.modules.map((module) => (
                  <button
                    key={module.label}
                    className="rathmer-module-button"
                    onClick={() =>
                      setSelectedSubtypeItem({
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

        <div className="rathmer-info-panel">
          {selectedSubtypeItem ? (
            <>
              <span className="rathmer-info-type">
                {selectedSubtypeItem.subtype.toUpperCase()}
              </span>
              <h2>{selectedSubtypeItem.title}</h2>
              <p>{selectedSubtypeItem.content}</p>
            </>
          ) : (
            <>
              <span className="rathmer-info-type">SUBTYP</span>
              <h2>Subtyp-Wissen</h2>
              <p>
                Klicke auf einen Trait oder ein Modul innerhalb von se2, so2
                oder sx2, um die zugehörigen Informationen anzuzeigen.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CoreInfoPanel({ item }) {
  return (
    <div className="rathmer-core-info-panel">
      <span className="rathmer-info-type">
        {item.subtype ? item.subtype.toUpperCase() : `TYP ${item.type}`}
      </span>

      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
}
