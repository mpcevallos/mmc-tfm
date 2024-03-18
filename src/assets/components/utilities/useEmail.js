import { useEffect, useState } from "react";

function useEmail() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("correo");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return email;
}

export default useEmail;
