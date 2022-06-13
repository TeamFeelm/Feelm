import { Routes, Route } from "react-router-dom";
import { Home, TestPage, SearchPage } from "./pages";
import { DataDummy, Layout, NotFound, TabContents } from "./components";

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
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/detail/:id" element={<TabContents />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
