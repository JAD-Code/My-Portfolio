const Aurora = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(
          100% 110% at 60% 0%,
          var(--color-bg-aurora-start) 45%,
          var(--color-bg-aurora-end)
        )`,
      }}
    />
  );
};

export default Aurora;
