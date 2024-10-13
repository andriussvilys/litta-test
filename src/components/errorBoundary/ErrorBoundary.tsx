import { useNavigate, useRouteError } from "react-router-dom";
import "../../style/index.css";
import { Message } from "primereact/message";
import { Button } from "primereact/button";

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;
  const messageText = `${error.name}: ${error.message}`;
  const navigate = useNavigate()
  return (
    <div className="h-full w-full flex flex-column justify-content-center align-items-center gap-4">
      <Message severity="error" text={messageText}></Message>
      <Button onClick={() => {navigate("/")}}>Go back</Button>
    </div>
  );
};
