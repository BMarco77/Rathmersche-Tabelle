import React, { useState, useEffect } from "react";
import wappen from "../assets/wappen-512.png";
import "../rathmer/rathmer.css";
import { TYPE_META } from "../data/typeMeta";
import {
  TYPE_GRADIENTS,
  TYPE_INFO_GRADIENTS,
  TYPE_GLOW_COLORS,
} from "../data/typeColors";

export default function TypePage({ typeData, onBack, onSelectType }) {
  const [openTopItems, setOpenTopItems] = useState([]);
  const [openTheoryRow1Items, setOpenTheoryRow1Items] = useState([]);
  const [openTheoryRow2Items, setOpenTheoryRow2Items] = useState([]);
  const [selectedSubtypeItem, setSelectedSubtypeItem] = useState(null);
  const [openSubtype, setOpenSubtype] = useState(null);

  useEffect(() => {
  window.scrollTo(0, 0);

  setOpenTopItems([]);
  setOpenTheoryRow1Items([]);
  setOpenTheoryRow2Items([]);
  setSelectedSubtypeItem(null);
  setOpenSubtype(null);
}, [typeData.type]);

  const currentType = typeData.type;
  const currentMeta = TYPE_META[currentType];
  const prevType = currentType === 1 ? 9 : currentType - 1;
  const nextType = currentType === 9 ? 1 : currentType + 1;

  const theoryRow1 = typeData.coreModules.slice(0, 4);
  const theoryRow2 = typeData.coreModules.slice(4, 8);

  const activeGlowStyle = {
    "--active-glow": TYPE_GLOW_COLORS[typeData.type],
  };

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

  const isOpen = (items, id) => items.some((item) => item.id === id);

  const getOpenItem = (items, id) => items.find((item) => item.id === id);

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
    <div className={`rathmer-page type-${typeData.type}-page`}>
      <div className="rathmer-page-nav">
        <button
          className="rathmer-page-nav-button"
         style={{
  background: TYPE_GRADIENTS[prevType],
  color: "#3a2418",
}}
          onClick={() => onSelectType(prevType)}
        >
          ← Typ {prevType}
        </button>

       <button
  className="rathmer-page-nav-button is-home"
  onClick={onBack}
>
  Home
</button>

        <button
          className="rathmer-page-nav-button"
          style={{
  background: TYPE_GRADIENTS[nextType],
  color: "#3a2418",
             
}}
          onClick={() => onSelectType(nextType)}
        >
          Typ {nextType} →
        </button>
      </div>

      <header className="rathmer-home-header">
  <div className="rathmer-wappen">
    <img src={wappen} alt="Rathmer Wappen" />
  </div>

  <h1>{currentMeta.archetype}</h1>

  <p>
    Eine interaktive Übersicht der Typ-{typeData.type}-Struktur, ihrer
    Grunddynamik und Subtypen.
  </p>
</header>

      <section className="rathmer-top-grid">
        {[
          {
            id: "center",
            data: typeData.centerInfo,
            label: typeData.center,
          },
          {
            id: "type",
            data: typeData.typeInfo,
            label: typeData.title,
          },
          {
            id: "side",
            data: typeData.sideInfo,
            label: typeData.side,
          },
        ].map((item) => (
          <div key={item.id}>
            <button
              className={`rathmer-top-button ${
                isOpen(openTopItems, item.id) ? "is-active" : ""
              }`}
              style={activeGlowStyle}
              onClick={() =>
                toggleItem(openTopItems, setOpenTopItems, item.id, item.data)
              }
            >
              {item.label}
            </button>

            {isOpen(openTopItems, item.id) && (
              <InlineInfo item={getOpenItem(openTopItems, item.id)} />
            )}
          </div>
        ))}
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
                style={activeGlowStyle}
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
                style={activeGlowStyle}
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
        {typeData.subtypes.map((subtype) => (
          <div key={subtype.code} className="rathmer-subtype-column"style={activeGlowStyle}>
            <button
              id={`subtype-${subtype.code}`}
              className={`rathmer-subtype-header ${
                openSubtype === subtype.code ? "is-open" : ""
              }`}
              style={{
                background: TYPE_GRADIENTS[typeData.type],
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
  avatar: `/avatars/${subtype.code.toUpperCase()}.webp`,
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
                          style={activeGlowStyle}
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
  avatar: `/avatars/${subtype.code.toUpperCase()}.webp`,
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

    {index === 2 && (
      <div className="rathmer-section-divider">
        Typisierung
      </div>
    )}

    {index === 9 && (
      <div className="rathmer-section-divider">
        Spezifischer Umgang
      </div>
    )}

    <div id={targetId}>
                          <button
                            className={`rathmer-module-button ${
                              selectedSubtypeItem?.subtype === subtype.code &&
                              selectedSubtypeItem?.title === module.label
                                ? "is-active"
                                : ""
                            }`}
                            style={activeGlowStyle}
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
                              avatar: `/avatars/${subtype.code.toUpperCase()}.webp`,
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
              : TYPE_INFO_GRADIENTS[typeData.type],
          }}
        >
          {selectedSubtypeItem ? (
  <>
    {selectedSubtypeItem.avatar && (
      <div className="rathmer-avatar-card">
        <img
          src={selectedSubtypeItem.avatar}
          alt={selectedSubtypeItem.subtype}
          loading="eager"        />
      </div>
    )}

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
      {item.avatar && (
        <div className="rathmer-avatar-card mobile-avatar">
          <img
            src={item.avatar}
            alt={item.subtype.toUpperCase()}
            loading="eager"
          />
        </div>
      )}

      <span className="rathmer-info-label">
        {item.subtype.toUpperCase()}
      </span>

      <p>{item.content}</p>
    </div>
  );
}
