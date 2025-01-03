import { Route, Routes, HashRouter } from "react-router";
import { HomeView } from "./pages/home";
import { LiveLocketView } from "./pages/live-locket";


function App() {
  return (
    <HashRouter>
       <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/live-locket" element={<LiveLocketView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
