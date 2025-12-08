const FloatingHearts = () => {
  const hearts = [
    { left: "10%", delay: "0s", duration: "6s", size: "text-lg" },
    { left: "25%", delay: "2s", duration: "8s", size: "text-sm" },
    { left: "50%", delay: "1s", duration: "7s", size: "text-base" },
    { left: "75%", delay: "3s", duration: "6s", size: "text-sm" },
    { left: "90%", delay: "1.5s", duration: "9s", size: "text-lg" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={`absolute bottom-0 ${heart.size} text-primary/40 animate-float-up`}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
