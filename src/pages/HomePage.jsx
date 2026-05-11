import { TYPE_COLORS } from "../data/typeColors";
import wappen from "../assets/wappen-512.png";
import "../rathmer/rathmer.css";

const centers = [
  {
    title: "Herz-Menschen",
    types: [
  { number: 2, name: "Liebe", color: TYPE_COLORS[2] },
  { number: 3, name: "Erfolg", color: TYPE_COLORS[3] },
  { number: 4, name: "Individualität", color: TYPE_COLORS[4] },
]
  },
  {
    title: "Kopf-Menschen",
    types: [
      { number: 5, name: "Wissen", color: TYPE_COLORS[5] },
      { number: 6, name: "Sicherheit", color: TYPE_COLORS[6] },
      { number: 7, name: "Spaß", color: TYPE_COLORS[7] },
    ],
  },
  {
    title: "Bauch-Menschen",
    types: [
      { number: 8, name: "Macht", color: TYPE_COLORS[8] },
      { number: 9, name: "Harmonie", color: TYPE_COLORS[9] },
      { number: 1, name: "Perfektion", color: TYPE_COLORS[1] },
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
          Eine interaktive Übersicht der Enneagramm-Typen, ihrer Zentren und
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
  background: `linear-gradient(135deg, ${type.color} 0%, #5a3c31 100%)`,
}}
                  onClick={() => onSelectType(type.number)}
                >
                <span className="rathmer-type-name">
  Typ {type.number} – {type.name}
</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
