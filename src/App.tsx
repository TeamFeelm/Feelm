import { Routes, Route } from "react-router-dom";
import { Home, Test, Detail } from "./pages";
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
        <Route path="test" element={<Test />}></Route>
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<TabContents />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
