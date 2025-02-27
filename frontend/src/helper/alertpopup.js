import Swal from 'sweetalert2';

const _AlertPopUp = () => {
    return {
        Success: (text) => {
            return Swal.fire(
                {
                    title: text,
                    icon: "success",
                    timer: 1500, showConfirmButton: false,
                    customClass: {
                        popup: 'centered-popup', // คลาสที่ใช้ปรับตำแหน่ง
                    },
                })
        },

        Error: (text) => {
            Swal.fire({
                title: text,
                icon: "error",
                timer: 1500,
                showConfirmButton: false,
                customClass: {
                    popup: 'centered-popup', // คลาสที่ใช้ปรับตำแหน่ง
                },
            })
        }
    }
}

export default _AlertPopUp