import React from "react";

export default function FilterData(props) {

    return (
        <>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button" id="dropmenu"
                data-mdb-toggle="dropdown" 
                aria-expanded="false">
                Filter By
            </button>
            <ul className="list-group list-group-light" id="listItem" >
                {
                    props.list.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <label>
                                    <input
                                        className="form-check-input me-1" type="checkbox"
                                        onChange={props.onChange} key={index}
                                        value={item} aria-label="..."
                                    />
                                    {item}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}