function Hero() {
  return (
    <section id="hero" style={{
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "100px 30px",
      textAlign: "center",
      minHeight: "600px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "bold" }}>
        Welcome to MERN Stack Development
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "30px", maxWidth: "600px", lineHeight: "1.6" }}>
        Build scalable, modern web applications with MongoDB, Express, React, and Node.js
      </p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button style={{
          backgroundColor: "white",
          color: "#667eea",
          padding: "12px 30px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "transform 0.3s"
        }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Get Started
        </button>
        <button style={{
          backgroundColor: "transparent",
          color: "white",
          padding: "12px 30px",
          border: "2px solid white",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "transform 0.3s"
        }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
