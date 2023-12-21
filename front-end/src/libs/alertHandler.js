import Swal from "sweetalert2"

export function showSuccess(header, body) {
    Swal.fire({
        icon: "success",
        title: header,
        text: body
    })
}


export function showError(header, body) {
    Swal.fire({
        icon: "error",
        title: header,
        text: body
    })
}