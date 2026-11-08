import { useState, useEffect } from 'react';

export default function Carregamento() {
    const [hora, setHora] = useState("");
    useEffect(() => {
        const agora = new Date().toLocaleTimeString();
        setHora(agora);
    }, []);

    return (
        <div className="carregamento">
            <h2>Carregamento de dados</h2>
            <p>Hora atual: {hora}</p>
        </div>
    );
};