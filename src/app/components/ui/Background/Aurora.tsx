const Aurora = () => {
  return (
    <section
      className="fixed inset-0 -z-10 min-h-screen overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(100% 110% at 60% 0%,
         var(--color-bg-aurora-start) 45%, var(--color-bg-aurora-end))`,
      }}
    ></section>
  );
};

export default Aurora;
