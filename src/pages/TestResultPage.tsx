import { Suspense, lazy } from "react";
import { Loading } from "../components";

export default function TestResultPage() {
  const TestResult = lazy(() => {
    const comp = import("../components/Test/Result/TestResult");
    const delay = new Promise((resolve) => setTimeout(resolve, 2000));

    return Promise.all([comp, delay]).then(([moduleExports]) => moduleExports);
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <TestResult></TestResult>
      </Suspense>
    </>
  );
}
