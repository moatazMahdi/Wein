import { Suspense } from "react";
import RoutesNavegation from "./navegations/Routes";

function App() {
  return (
    <>
      <Suspense fallback={<div>Looooooooood</div>}>
        <RoutesNavegation />
      </Suspense>
    </>
  );
}

export default App;
