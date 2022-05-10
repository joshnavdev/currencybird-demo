import { createContext, useCallback, useState } from 'react';

export const APIErrorContext = createContext({
  error: null,
  addError: () => {},
  removeError: () => {}
});

export default function APIErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const removeError = () => setError(null);

  const addError = (message, status, variant) => setError({ message, status, variant });

  const contextValue = {
    error,
    addError: useCallback(
      (message, status, variant = 'danger') => addError(message, status, variant),
      []
    ),
    removeError: useCallback(() => removeError(), [])
  };

  return <APIErrorContext.Provider value={contextValue}>{children}</APIErrorContext.Provider>;
}
