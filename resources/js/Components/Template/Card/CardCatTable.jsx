export default function CardCatTable({card_name, data}) {

    return (
        <div className="card h-75">
            <div className="card-body overflow-auto">
                <h6 className="fw-semibold">{card_name}</h6>
                <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                        <thead>
                        <tr className="text-muted fw-semibold">
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                        </tr>
                        </thead>
                        <tbody className="border-top">
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
