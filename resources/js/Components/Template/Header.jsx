import {Link} from '@inertiajs/react';

export default function Header({user_name, user_email}) {

    return (
        <div>
            <header className="app-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link sidebartoggler nav-icon-hover ms-n3" id="headerCollapse">
                                <i className="ti ti-menu-2"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="d-block d-lg-none">
                        <img src="assets/images/svg/logo.svg" height="30" alt="" />
                    </div>
                    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="p-2">
                            <i className="ti ti-dots fs-7"></i>
                          </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="d-flex align-items-center justify-content-between">
                            <a className="nav-link d-flex d-lg-none align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobilenavbar" aria-controls="offcanvasWithBothOptions">
                                <i className="ti ti-align-justified fs-7"></i>
                            </a>
                            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                                <li className="nav-item dropdown">
                                    <a className="nav-link pe-0" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="d-flex align-items-center">
                                            <div className="user-profile-img">
                                                <span className="round-40 text-white d-flex align-items-center justify-content-center text-center rounded-circle bg-primary">
                                                    {user_name[0]}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                                        <div className="profile-dropdown position-relative" data-simplebar>
                                            <div className="py-3 px-7 pb-0">
                                                <h5 className="mb-0 fs-5 fw-semibold">Cuenta</h5>
                                            </div>
                                            <div className="d-flex align-items-center py-9 mx-7">
                                                <div className="ms-3">
                                                    <h5 className="mb-1 fs-3">{user_name}</h5>
                                                    <p className="mb-0 d-flex text-dark align-items-center gap-2">
                                                        <i className="ti ti-mail fs-4"></i> {user_email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-grid py-4 px-7 pt-8">
                                                <Link href={route('logout')} method="post" className="btn btn-outline-primary">
                                                    Cerrar sesión
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
