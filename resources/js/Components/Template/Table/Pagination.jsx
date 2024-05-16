import { Link } from "@inertiajs/react";
import classNames from 'classnames';

const PageLink = ({ active, label, url }) => {
    const className = classNames(
        [
            'page-link link'
        ],
        {
            'active': active
        }
    );
    return (
        <li className="page-item">
            <Link className={className} href={url}>
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: label }}></span>
            </Link>
        </li>
    );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
    const className = classNames(
        'page-link link'
    );
    return (
        <li className="page-item">
            <Link className={className}>
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: label === "« Previous" ? '' : '«' }}></span>
            </Link>
        </li>
    );
};

export default ({ links = [] }) => {
    // don't render, if there's only 1 page (previous, 1, next)
    if (links.length === 3) return null;
    return (
        <nav>
            <ul className="pagination">
                {links.map(({ active, label, url }) => {
                    return url === null ? (
                        <PageInactive key={label} label={label} />
                    ) : (
                        <PageLink key={label} label={label} active={active} url={url} />
                    );
                })}
            </ul>
        </nav>
    );
};
