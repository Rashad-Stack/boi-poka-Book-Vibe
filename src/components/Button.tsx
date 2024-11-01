import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  className: string;
}

export default function Button({
  to,
  children,
  className,
}: React.PropsWithChildren<ButtonProps>) {
  return to ? (
    <Link to="/" className={`${className} btn`}>
      {children}
    </Link>
  ) : (
    <button className={`${className} btn`}>{children}</button>
  );
}
