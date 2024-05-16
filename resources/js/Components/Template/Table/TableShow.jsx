import React from "react";

export default function TableShow({DataTableHeader=[], DataTableBody=[]}) {

    return (
        <div className="card card-body">
            <div className="table-responsive">
                <table className="table search-table align-middle text-nowrap table-hover">
                    <thead className="header-item">
                    <tr className="text-center">
                        {DataTableHeader.map(({id, name}) => (
                            <th key={id}>{name}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {(DataTableBody.length > 0) ? DataTableBody : (
                        <tr>
                            <td colSpan="20" className="text-center">
                                Sin información aun...
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
