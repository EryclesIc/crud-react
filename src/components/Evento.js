import Button from "./evento/Button"

function Evento (){
    
    function primeiroEvento() {
        alert(`Ativando o primeiro evento`)
    }

    function segundoEvento() {
        alert(`Ativando o segundo evento`)
    }

    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento