import Button from "./evento/Button";
function Eventos (){

function meuEvento(){
// eslint-disable-next-line no-template-curly-in-string
console.log(`ativando eventos `);
}

function outroEvento(){
console.log(`evento 2`);
}

    return(
        <div> 
        <p> CLIQUE AQUI PARA ATIVAR O EVENTO </p>
        <Button events={meuEvento} text=" novas oportunudades"/>
        <Button events={outroEvento} text=" segunda oportunudades"/>
        </div>

    )
}
export default Eventos;