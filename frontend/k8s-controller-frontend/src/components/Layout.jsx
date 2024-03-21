import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="loading-div"><h1>Loading...</h1></div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
