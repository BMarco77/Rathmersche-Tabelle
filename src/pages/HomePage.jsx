import "../rathmer/rathmer.css";

const centers = [
  {
    title: "Herz-Menschen",
    types: [
      { number: 2, name: "Liebe", color: "#9b4dcc" },
      { number: 3, name: "Erfolg", color: "#d6a02f" },
      { number: 4, name: "Individualität", color: "#8b4a6f" },
    ],
  },
  {
    title: "Kopf-Menschen",
    types: [
      { number: 5, name: "Wissen", color: "#2f6f9f" },
      { number: 6, name: "Sicherheit", color: "#4f6f7f" },
      { number: 7, name: "Spaß", color: "#e0a13a" },
    ],
  },
  {
    title: "Bauch-Menschen",
    types: [
      { number: 8, name: "Kraft", color: "#9f2f2f" },
      { number: 9, name: "Harmonie", color: "#5f8f65" },
      { number: 1, name: "Perfektion", color: "#7f7f7f" },
    ],
  },
];

export default function HomePage({ onSelectType }) {
  return (
    <div className="rathmer-home">
      <header className="rathmer-home-header">
        <div className="rathmer-wappen">❖</div>

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
                    background: `linear-gradient(135deg, ${type.color}, #3a2418)`,
                  }}
                  onClick={() => onSelectType(type.number)}
                >
                  <span className="rathmer-type-number">{type.number}</span>
                  <span className="rathmer-type-name">{type.name}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
