import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col ">
      <Navbar />
      <div>
        <Main />
      </div>
      <div className="mt-10">
        <Feature />
      </div>
    </main>
  );
}
