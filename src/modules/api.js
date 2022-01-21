import axios from "axios";
import { makeUseAxios } from "axios-hooks";
import { createContext, useEffect, useMemo, useState } from "react";

export const useApi = makeUseAxios({
  axios: axios.create({ baseURL: "/api" }),
});

export const authAsPassengerUri = "/auth/passenger";
export const authCheckCodeUri = "/auth/code";
export const authCheckUri = "/user";
export const authLogoutUri = "/auth/logout";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [, refetch] = useApi({ url: authCheckUri }, { manual: true });
  const [state, setState] = useState({ user: null });
  const handleLogin = (user) => {
    setState((prev) => ({ ...prev, user }));
  };
  const handleLogout = (user) => {
    setState((prev) => ({ ...prev, user: null }));
  };
  const app = useMemo(
    () => ({
      ...state,
      handleLogin,
      handleLogout,
    }),
    [state]
  );
  useEffect(() => {
    (async () => {
      const { data } = await refetch();
      if (data && data.user) {
        handleLogin(data.user);
      }
    })();
  }, [refetch]);
  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
};
