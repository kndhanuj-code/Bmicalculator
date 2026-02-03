import React, { useRef } from "react";

function Section() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <div>
      {/* Buttons */}
      <div style={{ position: "fixed", top: 10 }}>
        <button onClick={() => scrollToSection(section1Ref)}>
          Go to Section 1
        </button>
        <button onClick={() => scrollToSection(section2Ref)}>
          Go to Section 2
        </button>
        <button onClick={() => scrollToSection(section3Ref)}>
          Go to Section 3
        </button>
      </div>

      {/* Sections */}
      <div
        ref={section1Ref}
        style={{ height: "100vh", background: "#f8b400" }}
      >
        <h1>Section 1</h1>
      </div>

      <div
        ref={section2Ref}
        style={{ height: "100vh", background: "#6a2c70" }}
      >
        <h1>Section 2</h1>
      </div>

      <div
        ref={section3Ref}
        style={{ height: "100vh", background: "#1b9aaa" }}
      >
        <h1>Section 3</h1>
      </div>
    </div>
  );
}

export default Section;
