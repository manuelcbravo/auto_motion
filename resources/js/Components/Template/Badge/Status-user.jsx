export default function BadgeStatusUser({status}) {
    switch(status) {
        case 0:
            return (
                <span className="badge text-bg-muted fs-2 rounded-4 py-1 px-2">Inactivo</span>
            );
        case 1:
            return (
                <span className="badge text-bg-info fs-2 rounded-4 py-1 px-2">Activo</span>
            );
        default:
            return status
    }
}
