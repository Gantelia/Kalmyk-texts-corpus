import { useAppSelector } from '../../hooks';
import './error-message.scss';

function ErrorMessage() {
  const { error } = useAppSelector((state) => state);

  if (error) {
    return (
      <p className="error">
        <span className="error__label">Ошибка!</span>
        {error}
      </p>
    );
  }

  return null;
}

export default ErrorMessage;
