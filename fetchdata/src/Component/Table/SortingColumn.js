import React from "react";

export default function SortingColumn(props) {

    return (
        <>
            <div key={props.unique} className="d-inline filterCol">
                <button
                    className="btn btn-sm"
                    value={props.value}
                    id={props.unique}
                    type="button" 
                    onClick={props.onClick}>
                    {props.icon}
                </button>
            </div>
        </>
    )
}