import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Formulary = () => {
  const [areaSelecionada, setAreaSelecionada] = useState('escolha');
  const [origemSelecionada, setOrigemSelecionada] = useState('escolha');

  const handleAreaChange = (event) => {
    setAreaSelecionada(event.target.value);
  };

  const handleOrigemChange = (event) => {
    setOrigemSelecionada(event.target.value);
  };

  const optionsOrigem = {
    Sinterização: ['AF1', 'AmizadeB', 'AmizadeC', 'Moagem de Coque', 'Passivo', 'Patio', 'Resfriador', 'Sinterização', 'Virador', 'Outros'],
    'Alto Forno': ['AF 01', 'AF 02', 'AF 03'],
    Conqueria: ['OR 1', 'OR 2', 'OR 3'],
  };

  const renderOrigemOptions = () => {
    const origemOptions = optionsOrigem[areaSelecionada] || [];
    return (
      <>
        <option value="escolha">Escolha</option>
        {origemOptions.map((origem, index) => (
          <option key={index} value={origem}>
            {origem}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="form-row" id='formulario'>
      <h1>QuedaZero</h1>
      <br />
      <label>Informe a data</label>
      <br />
      <input type="date" name="data-escolhida" className='form-control' />
      <br />
      {/* Selecionando o material */}
      <label>Informe o tipo de material</label>
      <br />
      <select className="form-control">
        <option value="escolha">Escolha</option>
        <option value="opção">Finos</option>
        <option value="opção">Lixo</option>
        <option value="opção">Minério</option>
        <option value="opção">Pelotas</option>
        <option value="opção">Sinter</option>
      </select>
      <br />
      {/* Selecionando a área */}
      <label>Informe a área</label>
      <br />
      <select className="form-control" value={areaSelecionada} onChange={handleAreaChange}>
        <option value="escolha">Escolha</option>
        <option value="Sinterização">Sinterização</option>
        <option value="Conqueria">Conqueria</option>
        <option value="Alto Forno">Alto Forno</option>
      </select>
      {/* Informando o peso */}
      <br />
      <label>Informe o Peso do material</label>
      <br />
      <input  className="form-control" type="text" />
      <br />
      <label>Selecione a Origem do Material</label><br />
      <select className="form-control" value={origemSelecionada} onChange={handleOrigemChange}>
        {renderOrigemOptions()}
      </select>
      <br />

      <label>Causa da queda</label><br />
      <select className="form-control">
        <option value="escolha">Escolha</option>
      </select>
      <br/>

      <label>Destino Final</label><br />
      <select  className="form-control" id='lastSelect'>
        <option value="escolha">Escolha</option>
      </select>
      <br/>
      <button className="btn btn-primary" value='enviar'>Enviar Dados</button>
    </div>
  );
};

export default Formulary;
