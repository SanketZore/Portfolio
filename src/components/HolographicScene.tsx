const HolographicScene = () => {
  return (
    <div className="holographic-scene" aria-hidden="true">
      <div className="depth-grid depth-grid-back" />
      <div className="depth-grid depth-grid-front" />
      <div className="neural-orbit neural-orbit-one" />
      <div className="neural-orbit neural-orbit-two" />
      <div className="floating-cube cube-one" />
      <div className="floating-cube cube-two" />
      <div className="floating-cube cube-three" />
      <div className="data-beam beam-one" />
      <div className="data-beam beam-two" />
    </div>
  );
};

export default HolographicScene;
