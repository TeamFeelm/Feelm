import { Routes, Route } from "react-router-dom";
import { Home, Detail } from "./pages";
import { DataDummy, Layout, NotFound, TabContent } from "./components";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <DataDummy />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<TabContent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
