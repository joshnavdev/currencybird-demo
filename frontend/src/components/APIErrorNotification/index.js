import { Alert } from 'react-bootstrap';
import useAPIError from '../../commons/hooks/useAPIError';
import './style.scss';

function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  console.log(error);
  return (
    <Alert
      className="float"
      show={!!error}
      variant={error ? error.variant : 'danger'}
      onClose={() => removeError()}
      dismissible>
      {error && error.message}
    </Alert>
  );
}

export default APIErrorNotification;
