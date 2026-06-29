function Button({children, onClick, className, dataTestId = "Button"}) {
    return (
        <button data-testid={dataTestId} className={className} onClick={onClick}>{children}</button>
    )
}

export default Button;