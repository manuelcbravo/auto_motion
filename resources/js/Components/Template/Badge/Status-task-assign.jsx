export default function BadgeStatusTaskAssign({status}) {
    switch(status) {
        case 0:
            return (
                <span className="badge text-bg-danger fs-2 rounded-4 py-1 px-2">Cancelada</span>
            );
        case 1:
            return (
                <span className="badge text-bg-warning fs-2 rounded-4 py-1 px-2">Pendiente</span>
            );
        case 2:
            return (
                <span className="badge text-bg-info fs-2 rounded-4 py-1 px-2">En proceso</span>
            );
        case 3:
            return (
                <span className="badge text-bg-success fs-2 rounded-4 py-1 px-2">Finalizada</span>
            );
        default:
            return status
    }
}
