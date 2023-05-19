import Item from "./Item"

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca = "Ferrari" lancamento = {1985}/></li>
                <li><Item marca = "Fiat" lancamento = {1964}/></li>
                <li><Item marca = "Renault" lancamento = {1589}/></li>
                <li><Item /></li>
            </ul>
        </>
    )
}

export default List