import useBebidas from '../hooks/useBebidas'
import { Modal, Image } from 'react-bootstrap'

const ModalBebida = () => {

    const { modal, handleModal, receta, cargando } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]} </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal Modal show={modal} onHide={handleModal} >

                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />

                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        <p>{receta.strInstructions}</p>
                        <h2>Ingedientes y cantidad</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
            </Modal >
        )
    )
}

export default ModalBebida
