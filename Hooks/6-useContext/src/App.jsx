import Component1 from "./components(ContextAPI)/Component1"
import { UserContextProvider } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Amith")
  return(
    <UserContextProvider value={user}>
      <Component1 />
    </UserContextProvider>
  );
}

export default App;