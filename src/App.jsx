import { useState } from "react";

/**
 * SIMPLE CERTIFICATE COMPONENT (UPDATED TITLE = BLACK)
 */
function Certificate({ name }) {
  return (
    <div style={styles.certificateContainer}>
      <h1 style={styles.certificateTitle}>
        Certificate of Completion
      </h1>

      <p style={styles.text}>
        This certifies that
      </p>

      <h2 style={styles.name}>
        {name || "Participant"}
      </h2>

      <p style={styles.text}>
        has successfully completed the CHW Midwest Training Program.
      </p>
    </div>
  );
}

/**
 * MAIN APP
 */
export default function App() {
  const [name] = useState("CHW Learner");
  const [completed, setCompleted] = useState(false);
  const [view, setView] = useState("home"); 
  // home | module | certificate

  return (
    <div style={styles.app}>
      
      {/* NAV */}
      <nav style={styles.nav}>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("module")}>Modules</button>
        <button onClick={() => setView("certificate")}>Certificate</button>
      </nav>

      {/* HOME */}
      {view === "home" && (
        <div style={styles.page}>
          <h1>CHW Midwest LMS</h1>
          <p>Community Health Worker Training Platform</p>
        </div>
      )}

      {/* MODULE PLACEHOLDER */}
      {view === "module" && (
        <div style={styles.page}>
          <h2>Training Modules</h2>

          <p>Module content goes here...</p>

          <button onClick={() => setCompleted(true)}>
            Mark Module Complete
          </button>

          {completed && (
            <button onClick={() => setView("certificate")}>
              View Certificate
            </button>
          )}
        </div>
      )}

      {/* CERTIFICATE */}
      {view === "certificate" && (
        <Certificate name={name} />
      )}

    </div>
  );
}

/**
 * STYLES
 */
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },

  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  page: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px"
  },

  certificateContainer: {
    textAlign: "center",
    padding: "50px",
    border: "2px solid black",
    marginTop: "20px",
    background: "white"
  },

  certificateTitle: {
    color: "#000000",   // ✅ FIXED: BLACK TITLE
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px"
  },

  name: {
    fontSize: "26px",
    fontWeight: "600",
    marginTop: "20px"
  },

  text: {
    fontSize: "16px",
    color: "#333",
    marginTop: "10px"
  }
};
