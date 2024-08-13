import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen p-2 md:p-10 dark:text-gray-500">
      <Nav />
      <ProductList />
    </main>
  );
}
