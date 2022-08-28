import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item active`}>
                    <link className="page-link" to={"#"}>
                        1
                    </link>
                </li>
                <li className={`page-item`}>
                    <link className="page-link" to={"#"}>
                        2
                    </link>
                    </li>
                <li className={`page-item`}>
                    <link className="page-link" to={"#"}>
                        3
                    </link>
                </li>
                <li className={`page-item`}>
                    <link className="page-link" to={"#"}>
                        4
                    </link>
                </li>
                <li className={`page-item`}>
                    <link className="page-link" to={"#"}>
                        5
                    </link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;