export default ({ children, ...props }) => {
    return (
        <a {...props}>
            
            {children}
        </a>
    );
};
