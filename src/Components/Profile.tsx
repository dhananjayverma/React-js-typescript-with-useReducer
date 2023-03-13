import React from "react";

interface ProfileProps {
  name: string;
  age: number;
  status: "single" | "coder" | "commited";
  children?: React.ReactNode;
}
function Profile({ name, age, status, children }: ProfileProps) {
  return (
    <div style={{ border: "2px solid", margin: "2px", width: "350px" }}>
      <h1>Name -{name}</h1>
      <h2>age-{age}</h2>
      <h3>status-{status}</h3>
      <h3>{children}</h3>
    </div>
  );
}

export default Profile;
