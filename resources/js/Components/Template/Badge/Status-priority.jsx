export default function BadgeStatusPriority({status}) {
    switch(status) {
        case 1:
            return (
                <span className="badge text-bg-muted fs-2 rounded-4 py-1 px-2">Baja</span>
            );
        case 2:
            return (
                <span className="badge text-bg-warning fs-2 rounded-4 py-1 px-2">Media</span>
            );
        case 3:
            return (
                <span className="badge text-bg-danger fs-2 rounded-4 py-1 px-2">Alta</span>
            );
        default:
            return status
    }
}
