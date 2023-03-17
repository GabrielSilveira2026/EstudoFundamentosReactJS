export default function Evento({numero}) {

    function meuEvento() {
        console.log(`Ativou ${numero}`);
    }

    return (
        <div>
            <p>Clique para ativar o evento {numero}</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
