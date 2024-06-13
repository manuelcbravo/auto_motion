import {useEffect, useState} from "react";
import {Link} from "@inertiajs/react";

export default function TitleHeader({Title, Route, RouteNew, RouteSpreadSheet, RouteNewId}) {

    return (
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
            <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h4 className="fw-semibold mb-8">{Title}</h4>
                        <nav aria-label="breadcrumb">

                            <ol className="breadcrumb">
                                {Route.map(({ id, name }) => (
                                <li key={id} className="breadcrumb-item">
                                    {id === Route.length ?
                                        <a className="text-muted text-decoration-none">{name}</a> : name
                                    }
                                </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                    <div className="col-4 text-end d-flex justify-content-end mt-3 mt-md-0">
                        { (RouteNewId) ?
                            <Link href={RouteNewId} className="ms-2 btn btn-primary d-flex align-items-center">
                                <i className="ti ti-plus text-white me-1 fs-5"></i> Nuevo
                            </Link>
                        : null }
                        
                        { (RouteNew) ?
                            <Link href={route(RouteNew)} className="ms-2 btn btn-primary d-flex align-items-center">
                                <i className="ti ti-plus text-white me-1 fs-5"></i> Nuevo
                            </Link>
                        : null }

                        { (RouteSpreadSheet) ?
                            <Link href={route(RouteSpreadSheet)} className="ms-2 btn btn-info d-flex align-items-center">
                                <i className="ti ti-file-plus text-white me-1 fs-5"></i> Carga masiva
                            </Link>
                        : null }
                    </div>
                </div>
            </div>
        </div>
    );
}
