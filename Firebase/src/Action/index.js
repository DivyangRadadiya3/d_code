export const fetchData = (value) => {
    return {
        type: "fetchData",
        item: value
    };
}

export const submit = (value) => {
    return {
        type: "submit",
        item: value
    };
}
