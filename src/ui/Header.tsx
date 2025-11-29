import { useState } from "react";

function Header() {
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value.includes("@")) {
            setEmail(e.target.value);
          }
        }}
      />
      <p>{email}</p>
      <p style={{ color: email != "" ? "yellowgreen" : "red" }}>
        {email != "" ? "accept" : "error"}
      </p>
    </>
  );
}

export default Header;
