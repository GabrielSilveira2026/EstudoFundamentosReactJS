import Button from "./evento/Button";

export default function Evento() {

    function meuEvento() {
        console.log(`Ativou primeiro evento`);
    }

    return (
        <div>
            <p>Clique para ativar o evento</p>
            <Button event={meuEvento} text="primeiro evento"/>
        </div>
    )
}
