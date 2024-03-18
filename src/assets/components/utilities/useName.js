import { useEffect, useState } from "react";

function useName() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return name;
}

export default useName;
