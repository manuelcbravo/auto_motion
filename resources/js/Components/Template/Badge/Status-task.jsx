export default function BadgeStatusTask({status}) {
    switch(status) {
        case 0:
            return (
                <span className="badge text-bg-muted fs-2 rounded-4 py-1 px-2">Sin asignar</span>
            );
        case 1:
            return (
                <span className="badge text-bg-info fs-2 rounded-4 py-1 px-2">Asignada</span>
            );
        default:
            return status
    }
}
