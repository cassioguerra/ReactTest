import PropTypes from 'prop-types'

function Intes(props) {

    return(
    <>
<li>{props.marca} - {props.lancamento}</li>

    </>
    )
}

export default Intes;


Intes.propTypes = {
    marca: PropTypes.string.isRequired,
    lansamento: PropTypes.number,
}

Intes.defaultProps= {
    marca:'faltou a marca ',
    lancamento:0,

}

