import { Suspense, lazy } from "react";

export default function TestResultPage() {
  const TestResult = lazy(() => {
    const promise1 = import("../components/Test/Result/TestResult");
    const promise2 = new Promise((resolve) => setTimeout(resolve, 3000));

    return Promise.all([promise1, promise2]).then(([moduleExports]) => moduleExports);
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TestResult></TestResult>
      </Suspense>
    </>
  );
}
