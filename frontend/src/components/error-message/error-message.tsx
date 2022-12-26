import { useAppSelector } from '../../hooks';
import './error-message.scss';

function ErrorMessage() {
  const { error } = useAppSelector((state) => state);

  if (error) {
    return <p className="error">Ошибка. {error}</p>;
  }

  return null;
}

export default ErrorMessage;
