import React from "react";
const CalculoResultado = ({
  valorParcela,
  valorFinanciado,
  qtdParcelas,
  totalJuros
} = {}) => {
  return (
    <div>
      <p>Total Financiado {valorFinanciado}</p>
      <p>
        {qtdParcelas} vezes de {valorParcela}
      </p>
      <p>Juros Total de {totalJuros}</p>
    </div>
  );
};

export default CalculoResultado;
