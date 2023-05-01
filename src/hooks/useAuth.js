import { useMemo } from "react";
export const useAuth = () => {
  const user = useMemo(
    () => ({
      id: 0,
      name: {
        first: "Cicero",
        last: "Viana",
      },
    }),
    []
  );
  return {
    user,
  };
};
