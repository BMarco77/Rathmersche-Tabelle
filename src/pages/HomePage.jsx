import { TYPE_META } from "../data/typeMeta";
import {
  TYPE_COLORS,
  TYPE_GRADIENTS
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

export default function HomePage({ onSelectType }) {
  return (
    <div className="rathmer-home">
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
}}
                  onClick={() => onSelectType(type.number)}
                >
                <div className="rathmer-type-button-inner">
  <div className="rathmer-type-big-number">
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
