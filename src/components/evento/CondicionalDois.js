import { useState } from "react";

function CondicionalDois(){
    const [placeholder2, setplaceholder2]= useState()
    const [userSenha, setUsersenha] = useState()

    function enviarSenha(){
        setUsersenha(placeholder2)
    }
    function limparSenha(){
        setUsersenha('')
    }

    return(
        <div>
        
                <h2>Condicional dois Teste</h2>
                
                <input type="text" placeholder="senha Usuario"
                onChange={(e)=> setplaceholder2(e.target.value)} />

                <button onClick={enviarSenha}> enviar senha</button>
                {userSenha &&(
                    <div>
                        <p> a senha do usuario é {userSenha}</p>
                        <button onClick={limparSenha}> limpar Senha</button>
                    </div>
                )}
            
        </div>

    )
}
export default CondicionalDois;