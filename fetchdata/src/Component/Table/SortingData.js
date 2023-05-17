export default function SortingData(props) {

    return (
        <>
            <div className="dropdown me-4">
                <label className="drop">
                    Sort by
                    <select
                        className=" dropdown-toggle block"
                        value={props.value}
                        onChange={props.onChange}
                    >
                        <optgroup
                            label="Sort by"
                            className="dropdown-menu"
                        >
                            <option
                                className="dropdown-item" id="div"
                                value="Ascending">
                                Ascending
                            </option>
                            <option
                                className="dropdown-item" id="div"
                                value="Descending">
                                Descending
                            </option>
                        </optgroup>
                    </select>
                </label>
            </div>
        </>
    )
}