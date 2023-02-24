import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Join/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} />

  );
}

export default App;
