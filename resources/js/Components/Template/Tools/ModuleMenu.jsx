import {Link} from '@inertiajs/react';

export default function ModuleMenu({Menu}) {
    return (
        <div>
            {Menu.map((menu) => (
            <div key={menu.id} className="card">
                <div className="card-body">
                    <h6 className="card-title fw-semibold mb-5">{menu.title}</h6>
                    <div className="row">
                        {menu.items.map((item) => (
                        <div key={item.id} className="col-3">
                            <Link href={route(item.route)}
                               className="d-flex align-items-center pb-9 position-relative text-decoration-none">
                                <div
                                    className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-circle fs-6"></i>
                                </div>
                                <div className="d-inline-block">
                                    <h6 className="mb-1 fw-semibold bg-hover-primary">{item.title}</h6>
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
