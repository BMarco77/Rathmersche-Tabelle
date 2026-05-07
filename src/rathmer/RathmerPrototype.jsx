import "./rathmer.css";
import React from "react";
import { rathmerData } from "./rathmerData";

export default function RathmerPrototype() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1a1a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      {/* Überschrift */}
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "10px"
        }}
      >
        Rathmer´sche Tabelle
      </h1>

      <h2
        style={{
          color: "#cccccc",
          marginBottom: "40px"
        }}
      >
        {rathmerData.center}
      </h2>

      {/* Typkarte */}
      <div
        style={{
          background: rathmerData.color,
          borderRadius: "24px",
          padding: "30px",
          marginBottom: "40px",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "10px"
          }}
        >
          {rathmerData.title}
        </h2>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.9
          }}
        >
          {rathmerData.side}
        </p>
      </div>

      {/* Globale Module */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "60px"
        }}
      >
        {rathmerData.coreModules.map((module, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "18px 24px",
              borderRadius: "16px",
              fontSize: "20px",
              backdropFilter: "blur(10px)"
            }}
          >
            {module}
          </div>
        ))}
      </div>

      {/* Subtypen */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px"
        }}
      >
        {rathmerData.subtypes.map((subtype) => (
          <div
            key={subtype.code}
            style={{
              background: rathmerData.color,
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)"
            }}
          >
            <h3
              style={{
                fontSize: "42px",
                marginBottom: "20px"
              }}
            >
              {subtype.code}
            </h3>

            {/* Traits */}
            <div
              style={{
                marginBottom: "24px"
              }}
            >
              {subtype.traits.map((trait, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: "22px",
                    marginBottom: "8px"
                  }}
                >
                  {trait}
                </div>
              ))}
            </div>

            {/* Module */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              {subtype.modules.map((module, index) => (
                <button
                  key={index}
                  style={{
                    background: "rgba(0,0,0,0.18)",
                    border: "none",
                    color: "white",
                    padding: "14px",
                    borderRadius: "14px",
                    fontSize: "18px",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  {module}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
