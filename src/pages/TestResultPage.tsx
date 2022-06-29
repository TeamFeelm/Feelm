import { Suspense, lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, resetAnsIdx, resetProgress } from "../store";
import { Loading } from "../components";

export default function TestResultPage() {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.progress.progress);
  const [delayTime, setDelayTime] = useState(0);

  const TestResult = lazy(() => {
    const comp = import("../components/Test/Result/TestResult");
    const setdt = () => {
      if (progress == 7) {
        setDelayTime(3000);
        dispatch(resetProgress());
        dispatch(resetAnsIdx());
      }
    };
    const delay = new Promise((resolve) => setTimeout(resolve, delayTime));

    return Promise.all([comp, setdt(), delay]).then(([moduleExports]) => moduleExports);
  });

  return (
    <>
      <Suspense fallback={delayTime == 0 ? "" : <Loading />}>
        <TestResult></TestResult>
      </Suspense>
    </>
  );
}
