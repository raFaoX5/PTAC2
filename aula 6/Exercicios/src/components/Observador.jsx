import { useEffect } from "react";

export default function Observador({mensagem}) {
    useEffect(() => {
        console.log(`Mudança de mensagem: ${mensagem}`);
    }, [mensagem]);

    return (
        <div className="observador">
            <h2>Observador de Mensagem</h2>
            <p>Mensagem recebida: {mensagem}</p>
        </div>
    );
}