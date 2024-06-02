export function Etiqueta({ color, children }) {
    return (
        <div className={`etiqueta ${color}`}>
            <span>{children}</span>
        </div>
    );
}
