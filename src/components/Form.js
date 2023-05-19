import { useState } from "react"

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
        // console.log(name)
        // console.log(password)
        // console.log('Cadastrou o usuário')
    }

    const [name, setName] = useState('Erycles')
    const [password, setPassword] = useState('admin')

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha" 
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form