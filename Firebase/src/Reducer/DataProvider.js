const initialData = {
    details: [{
        name: '',
        email: '',
        contact: '',
        password: ''
    }]

}

const DataProvider = (state = initialData, action) => {

    switch (action.type) {

        case "getData":
            return {
                ...state,
                details: action.item
            }

        case "sortColumn":
            const AscNum = [...state.details].sort((a, b) => Number(a[action.item]) - Number(b[action.item]));

            const DescNum = [...state.details].sort((a, b) => Number(b[action.item]) - Number(a[action.item]));

            const AscAlphabet = [...state.details].sort((a, b) => a[action.item].toUpperCase() < b[action.item].toUpperCase() ? -1 : 0);

            const DescAlphabet = [...state.details].sort((a, b) => b[action.item].toUpperCase() < a[action.item].toUpperCase() ? -1 : 0);


            if (state.filter.order === "desc") {

                if (action.item === 'recovered' || action.item === 'confirmed' || action.item === 'deaths' || action.item === 'active') {
                    return {
                        ...state,
                        details: DescNum,
                        filter: {
                            name: action.item,
                            order: "asc"
                        }
                    }  // for Numeric Descending 
                } else {
                    return {
                        ...state,
                        details: DescAlphabet,
                        filter: {
                            name: action.item,
                            order: "asc"
                        }
                    }  // for Alphabatic Descending
                }
            }
            else {
                if (action.item === 'recovered' || action.item === 'confirmed' || action.item === 'deaths' || action.item === 'active') {
                    return {
                        ...state,
                        details: AscNum,
                        filter: {
                            name: action.item,
                            order: "desc"
                        }
                    } // for Numeric Ascending 
                } else {
                    return {
                        ...state,
                        details: AscAlphabet,
                        filter: {
                            name: action.item,
                            order: "desc"
                        }
                    } // for Alphabatic Ascending 
                }
            }

        case "changeCategory":
            console.log(action.item.target.value);
            const uncheck = state.category.filter((val) => val !== action.item.target.value);
            if (action.item.target.checked) {
                return {
                    ...state,
                    category: [...state.category, action.item.target.value]
                }
            } else {
                return {
                    ...state,
                    category: uncheck
                }
            }

        default: return state;
    }
}

export default DataProvider;