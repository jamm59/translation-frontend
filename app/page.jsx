import { Suspense } from "react";
import NavBar from "./NavBar";
import Section from "./Section";
import Loading from "./loading.jsx";
import Footer from "./Footer";
export default function HomePage() {
  return(<Suspense fallback={<Loading/>}>
          <header className="grid grid-cols-4 h-screen w-auto bg-black 
                            md:flex md:flex-col md:justify-center md:items-center md:min-h-full">
              <NavBar />
              <Section />
          </header>
        </Suspense>);
}
