import { useAuthStore } from "../store/AuthStore";

export const Home = () => {
  const signOut = useAuthStore((state) => state.signOut);
  const user = useAuthStore((state) => state.user);
  return (
    <div>
      <h1>BIENVENIDO {user?.user_metadata?.full_name}</h1>
      <img src={user?.user_metadata?.picture} alt="imagen" />
      <button onClick={signOut}>CERRAR </button>
    </div>
  );
};
