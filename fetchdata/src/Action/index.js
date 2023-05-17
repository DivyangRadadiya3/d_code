export const get = (value) => {
    return {
        type: "getData",
        item: value
    };
}
export const sortColumn = (value) => {
    return {
        type: "sortColumn",
        item: value
    };
}

export const changeCategory = (e, index) => {
    return {
        type: "changeCategory",
        item: e
    };
}