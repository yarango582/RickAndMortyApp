import Swal from 'sweetalert2';

const loadingPopUp = (text) => {
    return(
        Swal.fire({
            title: 'Cargando...',
            text,
            timer: 4000,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    )
}

export const loadingPopUpFast = (text) => {
    return(
        Swal.fire({
            title: 'Cargando...',
            text,
            timer: 2000,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    )
}

export const notFoundPopUp = (text) => {
    return(
        Swal.fire({
            title: 'No hay recursos!',
            text,
            timer: 4000,
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false
        })
    )
}

export default loadingPopUp;