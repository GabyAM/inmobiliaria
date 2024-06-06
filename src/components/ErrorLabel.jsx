import '../assets/styles/errorlabel.css';
import { ErrorIcon } from './Icons';

export function ErrorLabel({ children }) {
    return (
        <div className="error-label">
            <ErrorIcon></ErrorIcon>
            <span>{children}</span>
        </div>
    );
}
