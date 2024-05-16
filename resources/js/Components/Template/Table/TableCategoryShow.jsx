import React from "react";
import {Link} from "@inertiajs/react";

let routeEdit;
let routeChild;

const renderRow = (item, index) => {
    return (
        <tr key={index} className={item.level === 0 ? 'table-info text-center' : 'text-center'}>
            <td style={{paddingLeft: `${item.level * 20}px`}}>
                {item.id}
            </td>
            <td>{item.name}</td>
            <td>{item.unit_measure}</td>
            <td>{item.type}</td>
            <td>{item.level}</td>
            <td>
                <div className="d-flex gap-2">
                    <Link href={route(routeEdit, item.id)} className="btn btn-outline-dark edit">
                        <i className="ti ti-pencil fs-5"></i>
                    </Link>
                    <Link href={route(routeChild, [item.id, item.level + 1])} className="btn btn-outline-dark edit">
                        <i className="ti ti-plus fs-5"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

const renderTable = (DATA) => {
    return DATA.map((item, index) => {
        return (
            <React.Fragment key={index}>
                {renderRow(item, index)}
                {item.children.length > 0 && renderTable(item.children)}
            </React.Fragment>
        );
    });
};

const DataTable = ({DataTableHeader, DATA, RouteEdit, RouteChild}) => {

    routeEdit = RouteEdit;
    routeChild = RouteChild;

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
                    {renderTable(DATA).length > 0 ? (
                        renderTable(DATA)
                    ) : (
                        <tr>
                            <td colSpan="20" className="text-center">
                                Sin información aun...
                            </td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;