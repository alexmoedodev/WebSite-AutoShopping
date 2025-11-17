export function Stats() {
  const stylesDefault_H2 = "text-4xl font-bold";
  return (
    <>
      {/* stats */}
      <div className="grid grid-cols-2 mt-16 max-w-5xl mx-auto gap-8 md:grid-cols-4">
        <div>
          <h2 className={stylesDefault_H2}>500+</h2>
          <label>Carros Premios</label>
        </div>
        <div>
          <h2 className={stylesDefault_H2}>50+</h2>
          <label>Modelos</label>
        </div>
        <div>
          <h2 className={stylesDefault_H2}>24/7</h2>
          <label>Suporte</label>
        </div>
        <div>
          <h2 className={stylesDefault_H2}>99%</h2>
          <label>Satisfação</label>
        </div>
      </div>
    </>
  );
}
