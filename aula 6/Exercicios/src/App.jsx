import { useState } from 'react';
import Observador from './components/Observador';
import Carregamento from './components/Carregamento';

export default function App() {
    const [mensagem, setMensagem] = useState("Olá!");

    return (
      <div>
        <h1>Exercícios de React - Aula 6</h1>
        
        <Carregamento />

        <Observador mensagem={mensagem} />
        <button onClick={() => setMensagem("Nova mensagem!")}>Alterar Mensagem</button>
        
      </div>
    );
}