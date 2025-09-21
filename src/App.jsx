import { useAuthListener } from "./hooks/useAuthListener";
import { MyRoutes } from "./routes/routes";

function App() {
  useAuthListener(); // escucha los cambios de sesión en Supabase y actualiza tu AuthStore.
  return (
    <div>
      <MyRoutes />
    </div>
  );
}

export default App;
