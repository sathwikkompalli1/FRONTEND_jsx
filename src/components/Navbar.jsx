function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        🚀 MERN Stack
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <a href="#hero" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Home</a>
        <a href="#about" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>About</a>
        <a href="#mission" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Mission</a>
        <a href="#testimony" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Testimonials</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
