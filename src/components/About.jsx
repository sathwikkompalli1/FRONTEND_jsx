function About() {
  return (
    <section id="about" style={{
      padding: "60px 30px",
      backgroundColor: "#f5f5f5",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#333" }}>About Us</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
          We are a passionate team of developers building modern, scalable web applications using the MERN stack.
        </p>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
          MERN (MongoDB, Express, React, Node.js) is a powerful combination of technologies that allows us to create full-stack applications with JavaScript.
        </p>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Our expertise spans from database design to responsive user interfaces, ensuring every project is built with quality and performance in mind.
        </p>
      </div>
    </section>
  );
}

export default About;
