import React from 'react';
const CalculoResultado = ({
  valorParcela,
  valorFinanciado,
  qtdParcelas,
  totalJuros
} = {}) => {
  return (
    <div className="widget-resultado">
      <div className="widget-resultado-item">
        Total Financiado: R${(valorFinanciado / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}
      </div>
      <div className="widget-resultado-item">
        {qtdParcelas} vezes de R${(valorParcela / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}
      </div>
      <div className="widget-resultado-item">
        Total de Juros: R$
        {(totalJuros / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}
      </div>
    </div>
  );
};

export default CalculoResultado;
