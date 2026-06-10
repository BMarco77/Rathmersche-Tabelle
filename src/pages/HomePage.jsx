import { TYPE_META as TYPE_META_DE } from "../data/typeMeta";
import { TYPE_META as TYPE_META_EN } from "../data/en/typeMeta";
import {
  TYPE_COLORS,
  TYPE_GRADIENTS,
  TYPE_ACCENT_COLORS
} from "../data/typeColors";
import wappen from "../assets/wappen-512.png";
import "../rathmer/rathmer.css";


const centers = [
  {
    title: "Herzmenschen",
    types: [
      { number: 2, name: TYPE_META[2].archetype, color: TYPE_COLORS[2] },
      { number: 3, name: TYPE_META[3].archetype, color: TYPE_COLORS[3] },
      { number: 4, name: TYPE_META[4].archetype, color: TYPE_COLORS[4] },
    ],
  },

  {
    title: "Kopfmenschen",
    types: [
      { number: 5, name: TYPE_META[5].archetype, color: TYPE_COLORS[5] },
      { number: 6, name: TYPE_META[6].archetype, color: TYPE_COLORS[6] },
      { number: 7, name: TYPE_META[7].archetype, color: TYPE_COLORS[7] },
    ],
  },

  {
    title: "Bauchmenschen",
    types: [
      { number: 8, name: TYPE_META[8].archetype, color: TYPE_COLORS[8] },
      { number: 9, name: TYPE_META[9].archetype, color: TYPE_COLORS[9] },
      { number: 1, name: TYPE_META[1].archetype, color: TYPE_COLORS[1] },
    ],
  },
];

export default function HomePage({ onSelectType, language, setLanguage }) {
  const TYPE_META = language === "en" ? TYPE_META_EN : TYPE_META_DE;

  const centers = [
    {
      title: language === "en" ? "Heart Types" : "Herzmenschen",
      types: [
        { number: 2, name: TYPE_META[2].archetype, color: TYPE_COLORS[2] },
        { number: 3, name: TYPE_META[3].archetype, color: TYPE_COLORS[3] },
        { number: 4, name: TYPE_META[4].archetype, color: TYPE_COLORS[4] },
      ],
    },
    {
      title: language === "en" ? "Head Types" : "Kopfmenschen",
      types: [
        { number: 5, name: TYPE_META[5].archetype, color: TYPE_COLORS[5] },
        { number: 6, name: TYPE_META[6].archetype, color: TYPE_COLORS[6] },
        { number: 7, name: TYPE_META[7].archetype, color: TYPE_COLORS[7] },
      ],
    },
    {
      title: language === "en" ? "Body Types" : "Bauchmenschen",
      types: [
        { number: 8, name: TYPE_META[8].archetype, color: TYPE_COLORS[8] },
        { number: 9, name: TYPE_META[9].archetype, color: TYPE_COLORS[9] },
        { number: 1, name: TYPE_META[1].archetype, color: TYPE_COLORS[1] },
      ],
    },
  ];

  return (
      <header className="rathmer-home-header">
       <div className="rathmer-wappen">
  <img src={wappen} alt="Rathmer Wappen" />
</div>

        <h1>Rathmer´sche Tabelle</h1>

        <p>
          Eine interaktive Übersicht der Enneagrammtypen, ihrer Triaden und
          Dynamiken.
        </p>
      </header>

      <main className="rathmer-center-grid">
        {centers.map((center) => (
          <section key={center.title} className="rathmer-center-section">
            <h2>{center.title}</h2>

            <div className="rathmer-type-button-grid">
              {center.types.map((type) => (
                <button
                  key={type.number}
                  className="rathmer-type-button"
                 style={{
  background: TYPE_GRADIENTS[type.number],
  color: TYPE_ACCENT_COLORS[type.number],
}}
                  onClick={() => onSelectType(type.number)}
                >
                <div className="rathmer-type-button-inner">
 <div
  className="rathmer-type-big-number"
  style={{
    color: TYPE_ACCENT_COLORS[type.number],
  }}
>
  {type.number}
</div>

  <div className="rathmer-type-text">
   

    <span className="rathmer-type-archetype">
      {type.name}
    </span>
  </div>
</div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
