import React, { useState, useEffect } from "react";
import wappen from "../assets/wappen-512.png";
import { type2Data } from "../data/types/type2";
import { TYPE_GRADIENTS, TYPE_INFO_GRADIENTS } from "../data/typeColors";
import "../rathmer/rathmer.css";

export default function TypePage({ onBack }) {
  const [openTopItems, setOpenTopItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openTheoryRow1Items, setOpenTheoryRow1Items] = useState([]);
  const [openTheoryRow2Items, setOpenTheoryRow2Items] = useState([]);
  const [selectedSubtypeItem, setSelectedSubtypeItem] = useState(null);
  const [openSubtype, setOpenSubtype] = useState(null);

  const currentType = type2Data.type;

  const prevType = currentType === 1 ? 9 : currentType - 1;
  const nextType = currentType === 9 ? 1 : currentType + 1;
  
  const theoryRow1 = type2Data.coreModules.slice(0, 4);
  const theoryRow2 = type2Data.coreModules.slice(4, 8);

  const toggleItem = (items, setItems, id, item) => {
  const alreadyOpen = items.some((openItem) => openItem.id === id);

    if (alreadyOpen) {
      setItems(items.filter((openItem) => openItem.id !== id));
      return;
    }

    setItems([
      ...items,
      {
        id,
        title: item.title || item.label,
        content: item.content,
      },
    ]);
  };

  const isOpen = (items, id) => {
    return items.some((item) => item.id === id);
  };

  const getOpenItem = (items, id) => {
    return items.find((item) => item.id === id);
  };

  const scrollToMobileTarget = (id) => {
    if (window.innerWidth > 900) return;

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 90);
  };

  const makeId = (prefix, subtypeCode, label = "") =>
    `${prefix}-${subtypeCode}-${label}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="rathmer-page">
      <div className="rathmer-page-nav">
  <button
  className="rathmer-page-nav-button"
  style={{
    background: TYPE_GRADIENTS[prevType],
    color: "white",
  }}
     onClick={() => onSelectType(prevType)}>
  ← Typ {prevType}
</button>
  <button className="rathmer-page-nav-button" onClick={onBack}>
    Home
  </button>
 <button
  className="rathmer-page-nav-button"
  style={{
    background: TYPE_GRADIENTS[nextType],
    color: "white",
  }}
    onClick={() => onSelectType(nextType)}>
  Typ {nextType} →
</button>
</div>      
      

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

      <section className="rathmer-top-grid">
        <div>
          <button
            className={`rathmer-top-button ${
              isOpen(openTopItems, "center") ? "is-active" : ""
            }`}
            onClick={() =>
              toggleItem(
                openTopItems,
                setOpenTopItems,
                "center",
                type2Data.centerInfo
              )
            }
          >
            {type2Data.center}
          </button>

          {isOpen(openTopItems, "center") && (
            <InlineInfo item={getOpenItem(openTopItems, "center")} />
          )}
        </div>

        <div>
          <button
            className={`rathmer-top-button ${
              isOpen(openTopItems, "type") ? "is-active" : ""
            }`}
            onClick={() =>
              toggleItem(
                openTopItems,
                setOpenTopItems,
                "type",
                type2Data.typeInfo
              )
            }
          >
            {type2Data.title}
          </button>

          {isOpen(openTopItems, "type") && (
            <InlineInfo item={getOpenItem(openTopItems, "type")} />
          )}
        </div>

        <div>
          <button
            className={`rathmer-top-button ${
              isOpen(openTopItems, "side") ? "is-active" : ""
            }`}
            onClick={() =>
              toggleItem(
                openTopItems,
                setOpenTopItems,
                "side",
                type2Data.sideInfo
              )
            }
          >
            {type2Data.side}
          </button>

          {isOpen(openTopItems, "side") && (
            <InlineInfo item={getOpenItem(openTopItems, "side")} />
          )}
        </div>
      </section>

      <section className="rathmer-theory-grid">
        {theoryRow1.map((module) => {
          const id = `row1-${module.label}`;
          const active = isOpen(openTheoryRow1Items, id);

          return (
            <div key={module.label}>
              <button
                className={`rathmer-theory-button ${
                  active ? "is-active" : ""
                }`}
                onClick={() =>
                  toggleItem(
                    openTheoryRow1Items,
                    setOpenTheoryRow1Items,
                    id,
                    module
                  )
                }
              >
                {module.label}
              </button>

              {active && (
                <InlineInfo item={getOpenItem(openTheoryRow1Items, id)} />
              )}
            </div>
          );
        })}
      </section>

      <section className="rathmer-theory-grid">
        {theoryRow2.map((module) => {
          const id = `row2-${module.label}`;
          const active = isOpen(openTheoryRow2Items, id);

          return (
            <div key={module.label}>
              <button
                className={`rathmer-theory-button ${
                  active ? "is-active" : ""
                }`}
                onClick={() =>
                  toggleItem(
                    openTheoryRow2Items,
                    setOpenTheoryRow2Items,
                    id,
                    module
                  )
                }
              >
                {module.label}
              </button>

              {active && (
                <InlineInfo item={getOpenItem(openTheoryRow2Items, id)} />
              )}
            </div>
          );
        })}
      </section>

      <section className="rathmer-main-grid">
        {type2Data.subtypes.map((subtype) => (
          <div key={subtype.code} className="rathmer-subtype-column">
            <button
              id={`subtype-${subtype.code}`}
              className={`rathmer-subtype-header ${
                openSubtype === subtype.code ? "is-open" : ""
              }`}
             style={{
  background: TYPE_GRADIENTS[type2Data.type],
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
                    subtype.content ||
                    `Hier steht später die Hauptbeschreibung zu ${subtype.code}.`,
                });

                scrollToMobileTarget(`subtype-${subtype.code}`);
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
  {subtype.traits.map((trait) => {
    const targetId = makeId("trait", subtype.code, trait.label);

    return (
      <div key={trait.label} id={targetId}>
        <button
          className={`rathmer-trait-button ${
            selectedSubtypeItem?.subtype === subtype.code &&
            selectedSubtypeItem?.title === trait.label
              ? "is-active"
              : ""
          }`}
          onClick={() => {
            const isSameItem =
              selectedSubtypeItem?.subtype === subtype.code &&
              selectedSubtypeItem?.title === trait.label;

            if (isSameItem) {
              setSelectedSubtypeItem(null);
              return;
            }

            setSelectedSubtypeItem({
              subtype: subtype.code,
              title: trait.label,
              content: trait.content,
            });

            scrollToMobileTarget(targetId);
          }}
        >
          {trait.label}
        </button>

        {selectedSubtypeItem?.subtype === subtype.code &&
          selectedSubtypeItem?.title === trait.label && (
            <SubtypeMobileInfo item={selectedSubtypeItem} />
          )}
      </div>
    );
  })}
</div>

                <div className="rathmer-module-grid">
                  {subtype.modules.map((module, index) => {
                    const targetId = makeId(
                      "module",
                      subtype.code,
                      module.label
                    );

                    return (
                      <React.Fragment key={module.label}>
                        <div id={targetId}>
                          <button
                            className={`rathmer-module-button ${
                              selectedSubtypeItem?.subtype === subtype.code &&
                              selectedSubtypeItem?.title === module.label
                                ? "is-active"
                                : ""
                            }`}
                           onClick={() => {
  const isSameItem =
    selectedSubtypeItem?.subtype === subtype.code &&
    selectedSubtypeItem?.title === module.label;

  if (isSameItem) {
    setSelectedSubtypeItem(null);
    return;
  }

  setSelectedSubtypeItem({
    subtype: subtype.code,
    title: module.label,
    content: module.content,
  });

  scrollToMobileTarget(targetId);
}}
                          >
                            {module.label}
                          </button>

                          {selectedSubtypeItem?.subtype === subtype.code &&
                            selectedSubtypeItem?.title === module.label && (
                              <SubtypeMobileInfo item={selectedSubtypeItem} />
                            )}
                        </div>

                        {(index === 1 || index === 8) && (
                          <div className="rathmer-module-spacer" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        ))}

        <aside
  className={`rathmer-side-info ${
    selectedSubtypeItem ? "is-expanded" : ""
  }`}
  style={{
    background: selectedSubtypeItem
      ? undefined
      : TYPE_INFO_GRADIENTS[type2Data.type],
  }}
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
      <p>{item.content}</p>
    </div>
  );
}

function SubtypeMobileInfo({ item }) {
  return (
    <div className="rathmer-inline-info mobile-info">
      <span className="rathmer-info-label">
        {item.subtype.toUpperCase()}
      </span>
      <p>{item.content}</p>
    </div>
  );
}
