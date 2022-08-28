import React from "react";

const Orders = () => {
    return (
        <div className=" d-flex justify-content-center align-items-center flex-column">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={"alert-success"}>
                            <td>
                                <a href={`/`} className="link">
                                    1
                                </a>
                            </td>
                            <td>Paid</td>
                            <td>Aug 29 2022</td>
                            <td>N200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;