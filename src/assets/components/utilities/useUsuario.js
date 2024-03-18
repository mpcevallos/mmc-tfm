import { useEffect, useState } from "react";

function useUsuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(storedUsuario);
    }
  }, []);

  return usuario;
}

export default useUsuario;
