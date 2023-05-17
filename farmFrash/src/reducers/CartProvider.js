const initialData = {
    items: []
};

const CartProvider = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const index = state.items.findIndex(item => item.id === action.item.id);
            const filterItem = state.items.map(item =>
                item.qty < 5 ? 
                    item.id === action.item.id ?
                        {
                            ...item,
                            qty: item.qty + 1,
                        }
                    : item
                : item
            );

            if (index !== -1) {
                return {
                    ...state,
                    items: filterItem
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, action.item]
                }
            }

        case "REMOVE_ITEM":
            const removeItem = state.items.filter(elem => elem.id !== action.item.id);
            return {
                ...state,
                items: removeItem
            }

        case "INCREMENT":
            const findItem = state.items.filter(item => item.id === action.item.id)[0];
            const increaseQty = state.items.map(item =>
                item.id === action.item.id
                    ? {
                        ...findItem,
                        qty: findItem.qty + 1
                    }
                    : item
            );

            if (findItem.qty < 5) {
                return {
                    ...state,
                    items: increaseQty
                }
            } else {
                return {
                    ...state
                }
            }

        case "DECREMENT":
            const findProduct = state.items.filter(item => item.id === action.item.id)[0];
            const decreaseQty = state.items.map(item =>
                item.id === action.item.id
                    ? {
                        ...findProduct,
                        qty: findProduct.qty - 1
                    }
                    : item
            );

            if (findProduct.qty > 1) {
                return {
                    ...state,
                    items: decreaseQty
                }
            } else {
                return {
                    ...state
                }
            }

        case "QUANTITY":
            const findItems = state.items.filter(item => item.id === action.item.id)[0];
            let value = Number(action.ind.target.value);
            if (value > 5) {
                value = 5;
            } else if (value < 1) {
                value = 1;
            }
            const changeQty = state.items.map(item =>
                item.id === action.item.id
                    ? {
                        ...findItems,
                        qty: value
                    }
                    : item
            );

            return {
                ...state,
                items: changeQty
            }

        default: return state;
    }
}

export default CartProvider;