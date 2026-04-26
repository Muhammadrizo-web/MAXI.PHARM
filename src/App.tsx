import Header from "./components/Header";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";

export default function App() {
  return (
    <main className="min-h-screen bg-[#F3F3F1] p-5">
      <div className="mx-auto w-full">
        <Hero>
          <Header />
        </Hero>
      </div>

      <ForWhom />
    </main>
  );
}