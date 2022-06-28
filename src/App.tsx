import { Routes, Route } from "react-router-dom";
import { Home, TestPage, SearchPage, Detail } from "./pages";
import { DataLoad, Layout, NotFound } from "./components";
import { Suspense, lazy } from "react";

export default function App(): JSX.Element {
  const TestResultPage = lazy(() => import("./pages/TestResultPage"));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <DataLoad />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/test/result/:id" element={<TestResultPage />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
