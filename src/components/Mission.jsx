function Mission() {
  return (
    <section id="mission" style={{
      padding: "60px 30px",
      backgroundColor: "#2c3e50",
      color: "white",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>Our Mission</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "8px"
        }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>💻 Innovative Solutions</h3>
          <p>Building cutting-edge web applications that solve real-world problems</p>
        </div>
        <div style={{
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "8px"
        }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🚀 Fast & Scalable</h3>
          <p>Creating performant applications that grow with your business</p>
        </div>
        <div style={{
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "8px"
        }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🎯 Quality Driven</h3>
          <p>Delivering code that is clean, maintainable, and thoroughly tested</p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
