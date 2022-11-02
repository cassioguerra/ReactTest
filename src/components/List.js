import Intes from "./Intes";

function List() {
    return(
<>
    <h1>Nimnha lista </h1>
    <ul>
    <Intes marca="Ferrari" lancamento={1985} />
        <Intes marca="Fiat" lancamento={1964} />
        <Intes marca="Honda" />
        <Intes />
    </ul>
</>
    )
}

export default List;