import styles from './Frase.module.css'

function Frase(){


    return(
        <div className={styles.fraseContainer}>
            Menos para aprender
<p className={styles.fraseContent}> Você não precisa aprender e configurar muitas ferramentas de compilação. As recargas instantâneas ajudam você a se concentrar no desenvolvimento. Quando é hora de implantar, seus pacotes são otimizados automaticamente.
</p>
Apenas uma dependência
Seu aplicativo precisa apenas de uma dependência de compilação. Testamos o Create React App para garantir que todas as suas partes subjacentes funcionem perfeitamente juntas - sem incompatibilidades de versão complicadas.

Sem bloqueio
Nos bastidores, usamos webpack, Babel, ESLint e outros projetos incríveis para impulsionar seu aplicativo. Se você quiser uma configuração avançada, você pode "ejetar" do Create React App e editar seus arquivos de configuração diretamente.
        </div>
    )
}
export default Frase;