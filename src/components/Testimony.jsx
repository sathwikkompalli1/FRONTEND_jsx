function Testimony() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Startup Founder",
      message: "Amazing team! They built our entire MVP in record time. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Smith",
      role: "Product Manager",
      message: "Professional, responsive, and very knowledgeable. Great experience working with them.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "CTO",
      message: "The quality of code and attention to detail is exceptional. Best decision we made.",
      rating: 5
    }
  ];

  return (
    <section id="testimony" style={{
      padding: "60px 30px",
      backgroundColor: "#ecf0f1",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#333" }}>Client Testimonials</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px", fontStyle: "italic" }}>
              "{testimonial.message}"
            </p>
            <p style={{ fontSize: "14px", color: "#999", marginBottom: "10px" }}>
              {'⭐'.repeat(testimonial.rating)}
            </p>
            <h4 style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }}>{testimonial.name}</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimony;
