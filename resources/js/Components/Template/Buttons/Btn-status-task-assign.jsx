import {Link} from "@inertiajs/react";

export default function BtnStatusTaskAssign({comentarios, status, tipo, Route, id}) {
    const [RouteStartTask, RouteConcepts, RouteEdit, RouteFinishTask, RouteReasignar, RouteTaskCancel] = Route;

    switch(status) {
        case 0:
            return (
                <h6 className="mb-0 fw-semibold text-danger">
                    Tarea cancelada por el administrador
                </h6>
            );
        case 1:
            return (
                <div className="d-flex gap-2">
                    <Link href={route(RouteStartTask, id)} className="btn btn-outline-info" title="Iniciar">
                        <i className="ti ti-player-play fs-5"></i>
                    </Link>
                    { (RouteEdit) ?
                        <Link href={route(RouteEdit, id)} className="btn btn-outline-dark" title="Editar">
                            <i className="ti ti-pencil fs-5"></i>
                        </Link>
                        : null }
                    { (RouteReasignar) ?
                    <Link href={route(RouteReasignar, id)} className="btn btn-outline-secondary" title="Reasignar">
                        <i className="ti ti-arrow-back fs-5"></i>
                    </Link>
                        : null }
                    { (RouteTaskCancel) ?
                    <Link href={route(RouteTaskCancel, id)} className="btn btn-outline-danger" title="Cancelar">
                        <i className="ti ti-x fs-5"></i>
                    </Link>
                        : null }
                </div>
            );
        case 2:
            return (
                <div className="d-flex gap-2">
                    {tipo === 2 && (
                        <Link href={route(RouteConcepts, id)} className="btn btn-outline-warning" title="Conceptos">
                            <i className="ti ti-receipt fs-5"></i>
                        </Link>
                    )}
                    <Link href={route(RouteReasignar, id)} className="btn btn-outline-secondary" title="Reasignar">
                        <i className="ti ti-arrow-back fs-5"></i>
                    </Link>
                    <Link href={route(RouteFinishTask, id)} className="btn btn-outline-success" title="Finalizar">
                        <i className="ti ti-send fs-5"></i>
                    </Link>
                </div>
            );
        case 3:
            return  (
                comentarios
            )
        default:
            return status
    }
}
