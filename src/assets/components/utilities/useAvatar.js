import { useEffect, useState } from "react";

function useAvatar() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);

  return avatar;
}

export default useAvatar;
