export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item: item
    };
}

export const removeItem = (item) => {
    return {
        type: "REMOVE_ITEM",
        item: item
    };
}

export const incNumber = (item) => {
    return {
        type: "INCREMENT",
        item: item
    };
}

export const decNumber = (item) => {
    return {
        type: "DECREMENT",
        item: item
    };
}

export const quantity = (e, item) => {
    return {
        type: "QUANTITY",
        item: item,
        ind: e
    };
}