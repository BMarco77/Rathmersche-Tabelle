import { useState } from "react";
import wappen from "../assets/wappen-512.png";
import { type2Data } from "../data/types/type2";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [selectedTopItem, setSelectedTopItem] = useState(null);
  const [selectedTheoryRow1, setSelectedTheoryRow1] = useState(null);
  const [selectedTheoryRow2, setSelectedTheoryRow2] = useState(null);
  const [selectedSubtypeItem, setSelectedSubtypeItem] = useState(null);
  const [openSubtype, setOpenSubtype] = useState(null);

  const theoryRow1 = type2Data.coreModules.slice(0, 4);
  const theoryRow2 = type2Data.coreModules.slice(4, 8);

  const toggleTopItem = (id, item) => {
    if (selectedTopItem?.id === id) {
      setSelectedTopItem(null);
      return;
    }

    setSelectedTopItem({
      id,
      title: item.title,
      content: item.content,
    });
  };

  const toggleTheoryRow1 = (module) => {
    if (selectedTheoryRow1?.title === module.label) {
      setSelectedTheoryRow1(null);
      return;
    }

    setSelectedTheoryRow1({
      title: module.label,
      content: module.content,
    });
  };

  const toggleTheoryRow2 = (module) => {
    if (selectedTheoryRow2?.title === module.label) {
      setSelectedTheoryRow2(null);
      return;
    }

    setSelectedTheoryRow2({
      title: module.label,
      content: module.content,
    });
  };

  return (
    <div className="rathmer-page">
      <button className="rathmer-back-button" onClick={onBack}>
        Home
      </button>

      <header className="rathmer-home-header">
        <div className="rathmer-wappen">
          <img src={wappen} alt="Rathmer Wappen" />
        </div>

        <h1>Typ 2 – Der Helfer</h1>

        <p>
          Eine interaktive Übersicht der Typ-2-Struktur, ihrer Grunddynamik und
          Subtypen.
        </p>
      </header>

      {/* TOP ROW */}
      <section className="rathmer-top-grid">
        <div>
          <button
            className={`rathmer-top-button ${
              selectedTopItem?.id === "center" ? "is-active" : ""
            }`}
            onClick={() => toggleTopItem("center", type2Data.centerInfo)}
          >
            {type2Data.center}
          </button>

          {selectedTopItem?.id === "center" && (
            <InlineInfo item={selectedTopItem} />
          )}
        </div>

        <div>
          <button
            className={`rathmer-top-button ${
              selectedTopItem?.id === "type" ? "is-active" : ""
            }`}
            onClick={() => toggleTopItem("type", type2Data.typeInfo)}
          >
            {type2Data.title}
          </button>

          {selectedTopItem?.id === "type" && (
            <InlineInfo item={selectedTopItem} />
          )}
        </div>

        <div>
          <button
            className={`rathmer-top-button ${
              selectedTopItem?.id === "side" ? "is-active" : ""
            }`}
            onClick={() => toggleTopItem("side", type2Data.sideInfo)}
          >
            {type2Data.side}
          </button>

          {selectedTopItem?.id === "side" && (
            <InlineInfo item={selectedTopItem} />
          )}
        </div>
      </section>

      {/* THEORY ROW 1 */}
      <section className="rathmer-theory-grid">
        {theoryRow1.map((module) => (
          <div key={module.label}>
            <button
              className={`rathmer-theory-button ${
                selectedTheoryRow1?.title === module.label ? "is-active" : ""
              }`}
              onClick={() => toggleTheoryRow1(module)}
            >
              {module.label}
            </button>

            {selectedTheoryRow1?.title === module.label && (
              <InlineInfo item={selectedTheoryRow1} />
            )}
          </div>
        ))}
      </section>

      {/* THEORY ROW 2 */}
      <section className="rathmer-theory-grid">
        {theoryRow2.map((module) => (
          <div key={module.label}>
            <button
              className={`rathmer-theory-button ${
                selectedTheoryRow2?.title === module.label ? "is-active" : ""
              }`}
              onClick={() => toggleTheoryRow2(module)}
            >
              {module.label}
            </button>

            {selectedTheoryRow2?.title === module.label && (
              <InlineInfo item={selectedTheoryRow2} />
            )}
          </div>
        ))}
      </section>

      {/* SUBTYPE GRID */}
      <section className="rathmer-main-grid">
        {type2Data.subtypes.map((subtype) => (
          <div key={subtype.code} className="rathmer-subtype-column">
            <button
              className={`rathmer-subtype-header ${
                openSubtype === subtype.code ? "is-open" : ""
              }`}
              style={{
                background: `linear-gradient(135deg, ${type2Data.color}, #7b2cbf)`,
              }}
              onClick={() => {
                if (openSubtype === subtype.code) {
                  setOpenSubtype(null);
                  setSelectedSubtypeItem(null);
                  return;
                }

                setOpenSubtype(subtype.code);
                setSelectedSubtypeItem({
                  subtype: subtype.code,
                  title: subtype.code.toUpperCase(),
                  content:
                    subtype.subtypeInfo ||
                    `Hier steht später die Hauptbeschreibung zu ${subtype.code}.`,
                });
              }}
            >
              <h3>{subtype.code}</h3>
            </button>

            {selectedSubtypeItem?.title === subtype.code.toUpperCase() &&
              selectedSubtypeItem?.subtype === subtype.code && (
                <SubtypeMobileInfo item={selectedSubtypeItem} />
              )}

            {openSubtype === subtype.code && (
              <>
                <div className="rathmer-trait-grid">
                  {subtype.traits.map((trait) => (
                    <div key={trait.label}>
                      <button
                        className={`rathmer-trait-button ${
                          selectedSubtypeItem?.subtype === subtype.code &&
                          selectedSubtypeItem?.title === trait.label
                            ? "is-active"
                            : ""
                        }`}
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

                      {selectedSubtypeItem?.subtype === subtype.code &&
                        selectedSubtypeItem?.title === trait.label && (
                          <SubtypeMobileInfo item={selectedSubtypeItem} />
                        )}
                    </div>
                  ))}
                </div>

                <div className="rathmer-module-grid">
                  {subtype.modules.map((module) => (
                    <div key={module.label}>
                      <button
                        className={`rathmer-module-button ${
                          selectedSubtypeItem?.subtype === subtype.code &&
                          selectedSubtypeItem?.title === module.label
                            ? "is-active"
                            : ""
                        }`}
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

                      {selectedSubtypeItem?.subtype === subtype.code &&
                        selectedSubtypeItem?.title === module.label && (
                          <SubtypeMobileInfo item={selectedSubtypeItem} />
                        )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        <aside
          className={`rathmer-side-info ${
            selectedSubtypeItem ? "is-expanded" : ""
          }`}
        >
          {selectedSubtypeItem ? (
            <>
              <span className="rathmer-info-label">
                {selectedSubtypeItem.subtype.toUpperCase()}
              </span>

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

function InlineInfo({ item }) {
  return (
    <div className="rathmer-inline-info">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
}

function SubtypeMobileInfo({ item }) {
  return (
    <div className="rathmer-inline-info mobile-info">
      <span className="rathmer-info-label">{item.subtype.toUpperCase()}</span>
      <p>{item.content}</p>
    </div>
  );
}
