// export function costCalculator(montoToltal) {
//     const tarifaFija = 3;
//     const porcentajeIntereses = 0.01;
//     return resultado = montoTotal * porcentajeIntereses + tarifaFija;
//     return resultado.toFixed(2);

// }

export function costCalculator(montoTransaccion) {
    const monto = parseFloat(montoTransaccion);
    const tarifa = 3;
    const tasaInteres = 0.01;

    const total = monto + tarifa + (monto * tasaInteres);
    return parseFloat(total.toFixed(2));
}