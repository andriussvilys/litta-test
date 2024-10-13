import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
    const error = useRouteError() as Error;
  
    return (
      <div>
        <p>{error?.message || 'An unexpected error occurred.'}</p>
      </div>
    );
  };