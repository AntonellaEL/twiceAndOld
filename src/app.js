export function calcularAniosDobleEdad(edadPadre, edadHijo) {
    let edadDobleHijo = edadHijo * 2;
    let aniosDiferencia = edadPadre - edadDobleHijo;

    return aniosDiferencia >= 0 ? aniosDiferencia : -aniosDiferencia;
}
