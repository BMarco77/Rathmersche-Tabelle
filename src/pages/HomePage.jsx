import { TYPE_META } from "../data/typeMeta";
import { TYPE_COLORS } from "../data/typeColors";
import wappen from "../assets/wappen-512.png";
import "../rathmer/rathmer.css";

const typeGradients = {
  1: "linear-gradient(135deg, #cfcaca 0%, #948785 40%, #5a4540 100%)",
  2: "linear-gradient(135deg, #b45cff 0%, #8d46c7 38%, #533248 100%)",
  3: "linear-gradient(135deg, #69d7ee 0%, #4e9cab 40%, #4a3d3b 100%)",
  4: "linear-gradient(135deg, #82f043 0%, #5f9b35 42%, #463427 100%)",
  5: "linear-gradient(135deg, #4d6dff 0%, #4757ba 40%, #473847 100%)",
  6: "linear-gradient(135deg, #d2944c 0%, #9b6a37 40%, #57392d 100%)",
  7: "linear-gradient(135deg, #f0d63a 0%, #b89a2f 42%, #5b4427 100%)",
  8: "linear-gradient(135deg, #ef2e22 0%, #b52b23 40%, #5c2f2c 100%)",
  9: "linear-gradient(135deg, #f7a028 0%, #c07a27 40%, #5d3e2a 100%)",
};

const centers = [
  {
    title: "Herz-Menschen",
    types: [
      { number: 2, name: TYPE_META[2].archetype, color: TYPE_COLORS[2] },
      { number: 3, name: TYPE_META[3].archetype, color: TYPE_COLORS[3] },
      { number: 4, name: TYPE_META[4].archetype, color: TYPE_COLORS[4] },
    ],
  },

  {
    title: "Kopf-Menschen",
    types: [
      { number: 5, name: TYPE_META[5].archetype, color: TYPE_COLORS[5] },
      { number: 6, name: TYPE_META[6].archetype, color: TYPE_COLORS[6] },
      { number: 7, name: TYPE_META[7].archetype, color: TYPE_COLORS[7] },
    ],
  },

  {
    title: "Bauch-Menschen",
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
  background: typeGradients[type.number],
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
