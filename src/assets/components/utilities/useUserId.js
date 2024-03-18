import { useEffect, useState } from "react";

function useUserId() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setUserId(storedId);
    }
  }, []);

  return userId;
}

export default useUserId;
