import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}