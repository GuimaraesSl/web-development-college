import { useMemo } from "react";

export const Filho = ({ peso, altura }) => {

  function calcImc(peso, altura) {
    return peso / (altura * altura);
  }

  function imcResult(imc) {
    if (imc < 18) return <h3>Abaixo do Peso</h3>;
    if (imc > 25) return <h3>Acima do Peso</h3>;
    return <h3>Peso Ideal</h3>;
  }

  const imc = useMemo(() => {
    return calcImc(peso, altura);
  }, [peso, altura]);

  return (
    <div>
      <h3>Peso do Filho: {peso}</h3>
      <h3>Altura do Filho: {altura}</h3>
      <div style={{border: '1px solid', padding: '20px', width: 'fit-content'}}>
        <h3>IMC do Filho: {imc.toFixed(2)}</h3>
        <div style={{display: 'flex', flexDirection: "row"}}>
          <h3 style={{display: 'inline-block', marginRight: '10px'}}>Resultado: </h3>
          {imcResult(imc)}
        </div>
      </div>
    </div>
  );
};


