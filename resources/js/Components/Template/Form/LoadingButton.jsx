export default ({ loading, children, ...props }) => {
    return (
        <button disabled={loading} {...props}>
            {
                loading &&
                <div className="me-2 spinner-border spinner-border-sm text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {children}
        </button>
    );
};
