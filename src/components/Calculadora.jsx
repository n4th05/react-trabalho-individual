import React, { useState } from 'react';
import './Calculadora.css';

export default function Calculadora() {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC(e) {
    e.preventDefault();
    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));
    classificacaoImc(imc);
  }

  const classificacaoImc = (resultado) => {
    if (resultado < 18.5) {
      setClassificacao("Você está com Baixo Peso!");
    } 
    else if (resultado >= 18.5 && resultado <= 24.99) {
      setClassificacao("Você está com o Peso Adequado!");
    } 
    else if (resultado >= 25.0 && resultado <= 29.99) {
      setClassificacao("Você está Sobrepeso!");
    } 
    else if (resultado >= 30.0 && resultado <= 34.99) {
      setClassificacao("Você está com Obesidade de grau 1");
    } 
    else if (resultado >= 35.0 && resultado <= 39.99) {
      setClassificacao("Você está com Obesidade de grau 2");
    } 
    else if (peso >= 0 && altura >= 0 ) {
      setClassificacao("Dados Inválidos!")
    } 
    else if (peso == null && altura == null) {
      setClassificacao("Preeencha com os dados no campo vazio")
    }
    else {
      setClassificacao("Você está com a Obesidade Extrema!");
    }
  };

  return (
    <div className='container'>
      <header className="cabecalho">Calculadora de IMC</header>
    <div className='tudo'>
    <h2 className="frase">Vamos calcular seu IMC?</h2>
      <form className='formulario' onSubmit={calcularIMC}>
        <div className='peso'>
        <label>Peso: </label>
        <input className='peso2'
          type="number"
          placeholder="Digite seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        </div>
        
        <div>
        <label>Altura: </label>
        <input className='altura'
          type="number"
          placeholder="Digite sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        </div>
        <div className='botao'>
        <button type="submit" className="calcular">Calcular</button>
        </div>
      </form>
    </div>

      {resultado && (
        <p className="resultado">Seu IMC é {resultado} - Sua classificação: {classificacao}</p>
      )}

      <footer>
         &copy; Nathália Oliveira Machado de Souza
      </footer>
    </div>
  );
}
