import React from "react";

const impactStats = [
  { value: "15+", label: "Projects Delivered", icon: "projects" },
  { value: "2+", label: "Years of Experience", icon: "experience" },
  { value: "20+", label: "Happy Clients", icon: "clients" },
  { value: "100%", label: "Commitment to Quality", icon: "quality" },
];

const OurImpact = () => {
  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "#f8f9fc" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span
            className="font-serif text-lg font-bold pb-1"
            style={{ color: "#0f2a4a", borderBottom: "2px solid #0f2a4a" }}
          >
            Our Impact
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-6 text-center font-serif text-2xl font-bold leading-tight sm:text-3xl font-medium"
          style={{ color: "#141414" }}
        >
          Driving Growth
          <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1c3f6e 0%, #4d6a52 35%, #a19a3c 60%, #f2c94c 90%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Through Digital Innovation.
          </span>
        </h2>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed"
          style={{ color: "#64748b" }}
        >
          Our work goes beyond building software—we create reliable digital
          solutions that help businesses scale, improve efficiency, and
          achieve long-term success.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.icon}
              className="flex flex-col items-center justify-center rounded-xl px-4 py-9 text-center"
              style={{ backgroundColor: "#123a63" }}
            >
              <span
                className="font-serif text-4xl font-bold leading-none sm:text-5xl"
                style={{ color: "#f0ce54" }}
              >
                {stat.value}
              </span>
              <span
                className="mt-4 text-[13px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;