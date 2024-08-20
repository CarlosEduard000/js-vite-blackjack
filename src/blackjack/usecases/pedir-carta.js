
/**
 * 
 * @param {Array<String>} deck Es un arreglo de string Ejemplo : [2A, 2S, 2D]
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) throw new Error('deck es obligatorio como un arreglo de string');
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}