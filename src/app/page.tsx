import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen p-2  pt-16 bg-slate-200 text-black dark:text-slate-300 dark:bg-gray-900">
      <Nav />
      <ProductList />
    </main>
  );
}
