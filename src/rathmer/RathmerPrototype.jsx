import React, { useState } from "react";
import { rathmerData } from "./rathmerData";
import "./rathmer.css";

export default function RathmerPrototype() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="rathmer-page">
      <header className="rathmer-header">
        <h1>Rathmer´sche Tabelle</h1>
        <p>{rathmerData.center}</p>
      </header>

      <section className="rathmer-type-card">
        <h2>{rathmerData.title}</h2>
        <p>{rathmerData.side}</p>
      </section>

      <section className="rathmer-core-grid">
        {rathmerData.coreModules.map((module) => (
          <button
            key={module}
            className="rathmer-core-pill"
            onClick={() =>
              setSelectedItem({
                subtype: "Typ 2",
                title: module,
                content: "Hier steht später der Tooltip-Text."
              })
            }
          >
            {module}
          </button>
        ))}
      </section>

      <main className="rathmer-layout">
        <section className="rathmer-subtype-grid">
          {rathmerData.subtypes.map((subtype) => (
            <article key={subtype.code} className="rathmer-subtype-card">
              <h3>{subtype.code}</h3>

              <div className="rathmer-traits">
                {subtype.traits.map((trait) => (
                  <span key={trait}>{trait}</span>
                ))}
              </div>

              <div className="rathmer-module-list">
                {subtype.modules.map((module) => (
                  <button
                    key={module}
                    className="rathmer-module-button"
                    onClick={() =>
                      setSelectedItem({
                        subtype: subtype.code,
                        title: module,
                        content: "Hier steht später der Tooltip-Text."
                      })
                    }
                  >
                    {module}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </section>

        <aside className="rathmer-info-panel">
          {selectedItem ? (
            <>
              <span className="rathmer-info-kicker">
                {selectedItem.subtype}
              </span>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.content}</p>
            </>
          ) : (
            <>
              <span className="rathmer-info-kicker">Wissensblock</span>
              <h2>Wähle ein Modul</h2>
              <p>
                Klicke auf eine Kategorie, um die dahinterliegenden
                Informationen sichtbar zu machen.
              </p>
            </>
          )}
        </aside>
      </main>
    </div>
  );
}
