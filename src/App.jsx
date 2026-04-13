import { useState } from "react";
import {
  addictionModule,
  addictionComplexModule,
  foodModule,
  foodComplexModule,
  backgroundContent,
  shuffleArray,
} from "./data/modules";

export default function App() {
  const [view, setView] = useState("home");
  const [name, setName] = useState("");
  const [module, setModule] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [moduleType, setModuleType] = useState("");

  const startModule = (type) => {
    let selectedModule = [];

    if (type === "addiction") {
      selectedModule = [...addictionModule, ...addictionComplexModule];
    }

    if (type === "food") {
      selectedModule = [...foodModule, ...foodComplexModule];
    }

    setModule(shuffleArray(selectedModule));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setModuleType(type);
    setView("quiz");
  };

  const current = module[index];
  const progress = Math.round((index / module.length) * 100);

  const handleAnswer = (opt) => {
    setSelected(opt);
    if (opt === current.answer) setScore(score + 1);
  };

  const next = () => {
    setSelected(null);
    setIndex(index + 1);
  };

  const goHome = () => {
    setView("home");
    setModule([]);
    setIndex(0);
    setScore(0);
    setSelected(null);
    setModuleType("");
  };

  const printCertificate = () => {
    window.print();
  };

  /* =========================
     HOME
  ========================= */

  if (view === "home") {
    return (
      <div style={styles.home}>
        <h1>CHW CE LMS – Missouri</h1>

        <input
          style={styles.input}
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>📘 Addiction Cases: 20</p>
        <p>📗 Food Cases: 20</p>

        <div style={styles.box}>
          <h3>Missouri Health Context</h3>
          <p>{backgroundContent.addiction}</p>
          <p>{backgroundContent.food}</p>
        </div>

        <button style={styles.btn} onClick={() => startModule("addiction")}>
          Start Addiction Module
        </button>

        <button style={styles.btn} onClick={() => startModule("food")}>
          Start Food Module
        </button>
      </div>
    );
  }

  /* =========================
     CERTIFICATE SCREEN
  ========================= */

  if (!current) {
    return (
      <div style={styles.home}>
        <div style={styles.certificate}>
          <h1 style={{ textAlign: "center" }}>
            Certificate of Completion
          </h1>

          <hr />

          <p><b>Learner Name:</b> {name}</p>
          <p><b>Module Completed:</b> {moduleType.toUpperCase()}</p>
          <p><b>Score:</b> {score} / {module.length}</p>
          <p><b>CE Credit Hours:</b> 2.0 Hours</p>

          <br />

          <p>
            This certifies that the learner has successfully completed
            Missouri Community Health Worker Continuing Education training
            in behavioral health and food systems.
          </p>

          <br />

          <p><b>Date:</b> {new Date().toLocaleDateString()}</p>

          <br />

          <div style={{ textAlign: "center" }}>
            <button style={styles.btn} onClick={printCertificate}>
              Print Certificate
            </button>

            <button style={styles.btn} onClick={goHome}>
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     QUIZ
  ========================= */

  return (
    <div style={styles.quiz}>
      <button style={styles.smallBtn} onClick={goHome}>
        Home
      </button>

      <div style={styles.progress}>
        Case {index + 1} / {module.length} ({progress}%)
      </div>

      <h3>{current.question}</h3>

      {current.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          style={{
            ...styles.option,
            backgroundColor:
              selected === opt
                ? opt === current.answer
                  ? "#16a34a"
                  : "#dc2626"
                : "#1f2937",
          }}
        >
          {opt}
        </button>
      ))}

      {selected && (
        <div style={styles.expl}>
          <p>{current.explanation}</p>
          <button style={styles.btn} onClick={next}>
            Next Case
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================
   STYLES (HIGH CONTRAST + PROFESSIONAL)
========================= */

const styles = {
  home: {
    padding: 30,
    background: "#0b1220",
    color: "#fff",
    minHeight: "100vh",
  },

  quiz: {
    padding: 30,
    background: "#0a0f1c",
    color: "#fff",
    minHeight: "100vh",
  },

  input: {
    padding: 10,
    width: "100%",
    maxWidth: 400,
    marginBottom: 15,
    borderRadius: 6,
  },

  btn: {
    padding: 12,
    marginTop: 10,
    marginRight: 10,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },

  smallBtn: {
    padding: 8,
    marginBottom: 10,
    background: "#374151",
    color: "#fff",
    border: "none",
    borderRadius: 6,
  },

  option: {
    display: "block",
    width: "100%",
    padding: 12,
    marginTop: 10,
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: 8,
    textAlign: "left",
    cursor: "pointer",
    fontWeight: "600",
  },

  progress: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#93c5fd",
  },

  expl: {
    marginTop: 15,
    padding: 12,
    background: "#111827",
    borderRadius: 8,
  },

  box: {
    marginTop: 20,
    padding: 15,
    background: "#111827",
    borderRadius: 10,
  },

  certificate: {
    background: "#fff",
    color: "#000",
    padding: 40,
    maxWidth: 700,
    margin: "0 auto",
    border: "3px solid #000",
    fontFamily: "serif",
    lineHeight: 1.6,
  },
};