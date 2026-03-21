import React from "react";
import { useClerk } from "@clerk/react";

export default function AuthButtons() {
  const { openSignIn, openSignUp } = useClerk(); // works only because this component is inside ClerkProvider

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => openSignIn({ routing: "path" })}>Sign In</button>
      <button onClick={() => openSignUp({ routing: "path" })}>Sign Up</button>
    </div>
  );
}