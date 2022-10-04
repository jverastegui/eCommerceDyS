
import Swal from 'sweetalert2'

export const Alert=(type,title,msj)=>{
    return Swal.fire({
        title: title,
        text: msj,
        icon: type,
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        allowOutsideClick:false,
        allowEscapeKey:false
      })
}


export const Confirmar=(type,title,msj)=>{
    return Swal.fire({
        title: title,
        text: msj,
        icon: type,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick:false,
        allowEscapeKey:false
      })
}

export const Toast=(icon,msj)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      return Toast.fire({
        icon: icon,
        title: msj
      })
}