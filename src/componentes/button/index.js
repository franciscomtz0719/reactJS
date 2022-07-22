const CustomButton = props => {
    const {color = 'warning', text='Boton genérico'} = props
    return <button className = {`btn btn-${color}`}>{text}</button>

}

export default CustomButton