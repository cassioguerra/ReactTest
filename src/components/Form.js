import{useState} from 'react'


function Form(){


    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`cadastou o usuario `);
        console.log("o nome do usuario é " + name );
        console.log("o semha do usuario é " + senha );
    }

    const [ name, setName ] =useState()
    const [ senha, setSenha] = useState()


    return(
        <div>
            <h1> meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"> Nome:</label>
                    <input type="text" id="name" name="name" placeholder="digite o seu nome" 
                      onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha"> Senha:</label>
                    <input type="password" id="senha" name="senha" placeholder="digite sua senha " 
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>

            </form>
        </div>

    )
}

export default Form;