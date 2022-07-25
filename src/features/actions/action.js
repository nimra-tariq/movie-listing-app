//action order_cake
const CAKE_ORDERED = 'CAKE_ORDERED';

//action creater is function that returns action obj
export const orderCake = (parameters) => {
    return {
        type:CAKE_ORDERED,
        quantity:1
    }
}