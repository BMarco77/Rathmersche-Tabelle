import { useState } from "react";
import wappen from "../assets/wappen-512.png";
import { type2Data } from "../data/types/type2";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [selectedTopItem, setSelectedTopItem] = useState(null);

  const [selectedTheoryRow1, setSelectedTheoryRow1] =
    useState(null);

  const [selectedTheoryRow2, setSelectedTheoryRow2] =
    useState(null);

  const [selectedSubtypeItem, setSelectedSubtypeItem] =
    useState(null);

  const [openSubtype, setOpenSubtype] =
    useState(null);

  const theoryRow1 =
    type2Data.coreModules.slice(0, 4);

  const theoryRow2 =
    type2Data.coreModules.slice(4, 8);

  return (
    <div className="rathmer-page">
      {/* BACK */}
      <button
        className="rathmer-back-button"
        onClick={onBack}
      >
        ← Zur Übersicht
      </button>

      {/* HEADER */}
      <header className="rathmer-home-header">
        <div className="rathmer-wappen">
          <img
            src={wappen}
            alt="Rathmer Wappen"
          />
        </div>

        <h1>Typ 2 – Der Helfer</h1>

        <p>
          Eine interaktive Übersicht der
          Typ-2-Struktur, ihrer
          Grunddynamik und Subtypen.
        </p>
      </header>

      {/* TOP NAV */}
      <section className="rathmer-top-grid">
        <button
          className="rathmer-top-button"
          onClick={() => {
            if (
              selectedTopItem?.id ===
              "center"
            ) {
              setSelectedTopItem(null);
              return;
            }

            setSelectedTopItem({
              id: "center",
              title:
                type2Data.centerInfo.title,
              content:
                type2Data.centerInfo.content,
            });
          }}
        >
          {type2Data.center}
        </button>

        <button
          className="rathmer-top-button"
          onClick={() => {
            if (
              selectedTopItem?.id ===
              "type"
            ) {
              setSelectedTopItem(null);
              return;
            }

            setSelectedTopItem({
              id: "type",
              title:
                type2Data.typeInfo.title,
              content:
                type2Data.typeInfo.content,
            });
          }}
        >
          {type2Data.title}
        </button>

        <button
          className="rathmer-top-button"
          onClick={() => {
            if (
              selectedTopItem?.id ===
              "side"
            ) {
              setSelectedTopItem(null);
              return;
            }

            setSelectedTopItem({
              id: "side",
              title:
                type2Data.sideInfo.title,
              content:
                type2Data.sideInfo.content,
            });
          }}
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

      {/* THEORY ROW 1 */}
      <section className="rathmer-theory-grid">
        {theoryRow1.map((module) => (
          <button
            key={module.label}
            className="rathmer-theory-button"
            onClick={() => {
              if (
                selectedTheoryRow1?.title ===
                module.label
              ) {
                setSelectedTheoryRow1(null);
                return;
              }

              setSelectedTheoryRow1({
                title: module.label,
                content: module.content,
              });
            }}
          >
            {module.label}
          </button>
        ))}
      </section>

      {selectedTheoryRow1 && (
        <div className="rathmer-inline-info">
          <h2>
            {selectedTheoryRow1.title}
          </h2>

          <p>
            {selectedTheoryRow1.content}
          </p>
        </div>
      )}

      {/* THEORY ROW 2 */}
      <section className="rathmer-theory-grid">
        {theoryRow2.map((module) => (
          <button
            key={module.label}
            className="rathmer-theory-button"
            onClick={() => {
              if (
                selectedTheoryRow2?.title ===
                module.label
              ) {
                setSelectedTheoryRow2(null);
                return;
              }

              setSelectedTheoryRow2({
                title: module.label,
                content: module.content,
              });
            }}
          >
            {module.label}
          </button>
        ))}
      </section>

      {selectedTheoryRow2 && (
        <div className="rathmer-inline-info">
          <h2>
            {selectedTheoryRow2.title}
          </h2>

          <p>
            {selectedTheoryRow2.content}
          </p>
        </div>
      )}

      {/* MAIN GRID */}
      <section className="rathmer-main-grid">
        {type2Data.subtypes.map(
          (subtype) => (
            <div
              key={subtype.code}
              className="rathmer-subtype-column"
            >
              <button
                className={`rathmer-subtype-header ${
                  openSubtype ===
                  subtype.code
                    ? "is-open"
                    : ""
                }`}
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${type2Data.color},
                    #7b2cbf
                  )`,
                }}
                onClick={() => {
                  if (
                    openSubtype ===
                    subtype.code
                  ) {
                    setOpenSubtype(null);

                    setSelectedSubtypeItem(
                      null
                    );

                    return;
                  }

                  setOpenSubtype(
                    subtype.code
                  );

                  setSelectedSubtypeItem({
                    subtype:
                      subtype.code,

                    title:
                      subtype.code.toUpperCase(),

                    content:
                      subtype.subtypeInfo ||
                      `Hier steht später die Hauptbeschreibung zu ${subtype.code}.`,
                  });
                }}
              >
                <h3>{subtype.code}</h3>
              </button>

              {openSubtype ===
                subtype.code && (
                <>
                  {/* TRAITS */}
                  <div className="rathmer-trait-grid">
                    {subtype.traits.map(
                      (trait) => (
                        <button
                          key={
                            trait.label
                          }
                          className="rathmer-trait-button"
                          onClick={() =>
                            setSelectedSubtypeItem(
                              {
                                subtype:
                                  subtype.code,

                                title:
                                  trait.label,

                                content:
                                  trait.content,
                              }
                            )
                          }
                        >
                          {trait.label}
                        </button>
                      )
                    )}
                  </div>

                  {/* MODULES */}
                  <div className="rathmer-module-grid">
                    {subtype.modules.map(
                      (module) => (
                        <button
                          key={
                            module.label
                          }
                          className="rathmer-module-button"
                          onClick={() =>
                            setSelectedSubtypeItem(
                              {
                                subtype:
                                  subtype.code,

                                title:
                                  module.label,

                                content:
                                  module.content,
                              }
                            )
                          }
                        >
                          {module.label}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          )
        )}

        {/* SIDE INFO */}
        <aside
          className={`rathmer-side-info ${
            selectedSubtypeItem
              ? "is-expanded"
              : ""
          }`}
        >
          {selectedSubtypeItem ? (
            <>
             <span className="rathmer-info-label">
  {selectedSubtypeItem.subtype.toUpperCase()}
</span>

<h2>{selectedSubtypeItem.title}</h2>

<p>{selectedSubtypeItem.content}</p>
            </>
          ) : (
            <div className="rathmer-side-placeholder">
              <span>Wissen</span>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
