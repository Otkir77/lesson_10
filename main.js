let a = prompt('Birinchi sonni kiriting')
let b = prompt('Ikkinchi sonni kiriting')


function number(){
    if (a < b) {
        alert( `Eng katta son:${b}` )   
    } else if (b < a){
        alert( `Eng katta son:${a} `)
    } else if (b = a) {
        alert('Ikki son ham bir xil')
    }
}
number()