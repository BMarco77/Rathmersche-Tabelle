import { useState } from "react";
import wappen from "../assets/wappen-512.png";
import { type2Data } from "../data/types/type2";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [selectedTopItem, setSelectedTopItem] = useState(null);
  const [selectedTheoryItem, setSelectedTheoryItem] = useState(null);
  const [selectedSubtypeItem, setSelectedSubtypeItem] = useState(null);

  return (
    <div className="rathmer-page">
      {/* BACK */}
      <button className="rathmer-back-button" onClick={onBack}>
        ← Zur Übersicht
      </button>

      {/* HEADER */}
      <header className="rathmer-header-v3">
        <div className="rathmer-wappen">
          <img src={wappen} alt="Wappen" />
        </div>

        <h1>Typ 2 – Der Helfer</h1>
      </header>

      {/* TOP NAV */}
      <section className="rathmer-top-grid">
        <button
          className="rathmer-top-button"
          onClick={() =>
            setSelectedTopItem({
              title: type2Data.centerInfo.title,
              content: type2Data.centerInfo.content,
            })
          }
        >
          {type2Data.center}
        </button>

        <button
          className="rathmer-top-button"
          onClick={() =>
            setSelectedTopItem({
              title: type2Data.typeInfo.title,
              content: type2Data.typeInfo.content,
            })
          }
        >
          {type2Data.title}
        </button>

        <button
          className="rathmer-top-button"
          onClick={() =>
            setSelectedTopItem({
              title: type2Data.sideInfo.title,
              content: type2Data.sideInfo.content,
            })
          }
        >
          {type2Data.side}
        </button>
      </section>

      {/* TOP INFO */}
      {selectedTopItem && (
        <div className="rathmer-inline-info">
          <h2>{selectedTopItem.title}</h2>
          <p>{selectedTopItem.content}</p>
        </div>
      )}

      {/* THEORY GRID */}
      <section className="rathmer-theory-grid">
        {type2Data.coreModules.map((module) => (
          <button
            key={module.label}
            className="rathmer-theory-button"
            onClick={() =>
              setSelectedTheoryItem({
                title: module.label,
                content: module.content,
              })
            }
          >
            {module.label}
          </button>
        ))}
      </section>

      {/* THEORY INFO */}
      {selectedTheoryItem && (
        <div className="rathmer-inline-info">
          <h2>{selectedTheoryItem.title}</h2>
          <p>{selectedTheoryItem.content}</p>
        </div>
      )}

      {/* MAIN GRID */}
      <section className="rathmer-main-grid">
        {/* SE */}
        {type2Data.subtypes.map((subtype) => (
          <div
            key={subtype.code}
            className="rathmer-subtype-column"
          >
            <div
              className="rathmer-subtype-header"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${type2Data.color},
                  #7b2cbf
                )`,
              }}
            >
              <h3>{subtype.code}</h3>
            </div>

            {/* TRAITS */}
            <div className="rathmer-trait-grid">
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

            {/* MODULES */}
            <div className="rathmer-module-grid">
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

        {/* SIDE INFO */}
        <aside className="rathmer-side-info">
          {selectedSubtypeItem ? (
            <>
              <span className="rathmer-info-label">
                {selectedSubtypeItem.subtype.toUpperCase()}
              </span>

              <h2>{selectedSubtypeItem.title}</h2>

              <p>{selectedSubtypeItem.content}</p>
            </>
          ) : (
            <>
              <span className="rathmer-info-label">
                SUBTYP
              </span>

              <h2>Subtyp-Wissen</h2>

              <p>
                Wähle ein Trait oder Modul aus,
                um Informationen anzuzeigen.
              </p>
            </>
          )}
        </aside>
      </section>
    </div>
  );
}
