import React, { useState } from "react";

export default function Pagination({ tableRowsPerPage, pgNumber }) {

    const [activeButton, setActiveButton] = useState(1);

    function pgActive(page) {
        setActiveButton(page);
    }

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-md justify-content-center">
                    {
                        tableRowsPerPage.map((page, index) => (
                            <li
                                className={activeButton === page ? "active page-item page-link" : "page-item page-link"}
                                key={index}
                                onClick={() => [pgNumber(page), pgActive(page)]}
                            >
                                {page}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}