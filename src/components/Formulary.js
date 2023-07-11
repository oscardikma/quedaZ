import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BoxLogin from './BoxLogin';

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
      <div id='login'>
        <BoxLogin />
      </div>
      <div id='form'>
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
        <input className="form-control" type="Number" />
        <br />
        <label>Selecione a Origem do Material</label><br />
        <select className="form-control" value={origemSelecionada} onChange={handleOrigemChange}>
          {renderOrigemOptions()}
        </select>
        <br />

        {/**informando causa da queda */}
        <label>Causa da queda</label><br />
        <select className="form-control">
          <option value="escolha">Escolha</option>
          <option value=""> Umidade Material Elevada</option>
          <option value="">Partida Correia Cheia</option>
          <option value="">Limpeza do balão de pó </option>
          <option value="">Retorno </option>
        </select>
        <br />

        <label>Destino Final</label><br />
        <select className="form-control" id='lastSelect'>

          <option value="">Escolha uma opção</option>
          <option value="AF1 - Baia 7 - Degradado de Minério">AF1 - Baia 7 - Degradado de Minério</option>
          <option value="AF2 - Baia 87 - Material Contaminado - Lado Pátio de Coque GHK3">AF2 - Baia 87 - Material Contaminado - Lado Pátio de Coque GHK3</option>
          <option value="AF3 - Baia 88 - Degradado de Minério - Lado Despoeiramento">AF3 - Baia 88 - Degradado de Minério - Lado Despoeiramento</option>
          <option value="Retorno ao Processo">Retorno ao Processo</option>
          <option value="AF3 - Baia 89 - Degradado de Coque - Lado Despoeiramento">AF3 - Baia 89 - Degradado de Coque - Lado Despoeiramento</option>
          <option value="AF3 - Baia 89 - Degradado de Coque - Lado Avenida Principal">AF3 - Baia 89 - Degradado de Coque - Lado Avenida Principal</option>
          <option value="AF2 - Baia 88 - Degradado de Minério - Lado Pátio de Coque GHK3">AF2 - Baia 88 - Degradado de Minério - Lado Pátio de Coque GHK3</option>
          <option value="AF3 - Baia 87 - Material Contaminado - Lado Avenida Principal">AF3 - Baia 87 - Material Contaminado - Lado Avenida Principal</option>
          <option value="AF1 - Baia 8 - Degradado de Coque">AF1 - Baia 8 - Degradado de Coque</option>
          <option value="AF3 - Baia 87 - Material Contaminado - Lado Despoeiramento">AF3 - Baia 87 - Material Contaminado - Lado Despoeiramento</option>
          <option value="Outros">Outros</option>
          <option value="AF1 - Baia 6 - Material Contaminado">AF1 - Baia 6 - Material Contaminado</option>
          <option value="AF3 - Baia 88 - Degradado de Minério - Lado Avenida Principal">AF3 - Baia 88 - Degradado de Minério - Lado Avenida Principal</option>
          <option value="AF1 - Baia 8 - Degradado de Minério">AF1 - Baia 8 - Degradado de Minério</option>


        </select>
        <br />
        <button className="btn btn-primary" value='enviar'>Enviar Dados</button>
      </div>
    </div>

  );

};

export default Formulary;
