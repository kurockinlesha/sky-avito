import * as S from "./App.style";
import { AppRoutes } from "./routes";
import { createContext, useEffect, useState } from "react";
import { getTokenFromLocalStorage, getUser } from "./api/api";
import store from "./store/store";
import { setUserId, useGetAllAdsQuery } from "./store/services/auth";
import { setAuth } from "./store/slices/auth";

export const UserContext = createContext("");

export const saveUserIdToState = (token) => {
  if (token) {
    getUser(token)
      .then((data) => {
        store.dispatch(setAuth({ ...data }));
        store.dispatch(setUserId(data.id));
      })
      .catch((error) => console.error(error));
  }
};

function App() {
  const [ads, setAds] = useState();
  const { data, isLoading } = useGetAllAdsQuery();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")));

  useEffect(() => {
    saveUserIdToState(getTokenFromLocalStorage());
    setUser(JSON.parse(localStorage.getItem("auth")));
    setAds(data);
  }, [data]);

  return (
    <S.Wrapper>
      <S.Container>
        <UserContext.Provider value={{ user: user, setUser }}>
          <AppRoutes isLoading={isLoading} ads={ads} setAds={setAds} />
        </UserContext.Provider>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
