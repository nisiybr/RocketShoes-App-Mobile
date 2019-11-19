// sempre que for trabalhar com saga, a action vai ser dividida em duas
// Request e Sucess

export function addToCartRequest(id) {
  // eh passado somente o id, pois o resto sera buscado pelo redux saga(middleware)
  return {
    type: '@cart/ADD_REQUEST', // nome da action, ser escutada em um stitch para tratar as acoes que serao tomadas
    id, // conteudo da action
  };
}
export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCCESS', // nome da action, ser escutada em um switch para tratar as acoes que serao tomadas
    product, // conteudo da action
  };
}
export function updateAmountRequest(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_REQUEST', id, amount };
}
export function updateAmountSucess(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
}
export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
