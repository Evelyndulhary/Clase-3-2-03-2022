const hora = 20000
const horaE = 30000
let CanH, SalarioT, Ex;

function LeerDatos() {
    CanH = Number(prompt(`Ingrese horas trabajadas`))
}

LeerDatos()
function calcular(CanH) {
    if(CanH >= 1 && CanH <40) {
        SalarioT = CanH * hora
    }

    else if(CanH > 40) {
        Ex = CanH - 40
        SalarioT =(CanH * hora)+(Ex * horaE)
    }
}