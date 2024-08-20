/**
 * 
 * @param {String} carta Ejemplo: '2C'
 * @returns {Number} retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {
    if (!carta || carta.length === 0) throw new Error('carta es obligatorio como un valor de string');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}