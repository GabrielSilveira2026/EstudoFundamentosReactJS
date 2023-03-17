export default function Evento() {

    function meuEvento() {
        console.log("Ativou");
    }

    return (
        <div>
            <p>Clique para ativar</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
