
export function costCalculator(montoTransaccion) {
    const monto = parseFloat(montoTransaccion);
    const tarifa = 3;
    const tasaInteres = 0.01;

    const total = monto + tarifa + (monto * tasaInteres);
    return parseFloat(total.toFixed(2));
}