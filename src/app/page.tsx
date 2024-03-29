import HeaderText from "@/ui/atoms/HeaderText";
import ProductList from "@/ui/organisms/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderText />
      <div>
        <ProductList />
      </div>
    </main>
  );
}
