function ProductList() {
  const products = [
    { id: 1, name: "Produkt 1" },
    { id: 2, name: "Produkt 2" },
    { id: 3, name: "Produkt 3" },
    { id: 4, name: "Produkt 4" },
  ];

  return (
    <div className="grid-rows-4 h-80">
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-white p-4 shadow">
          <ul data-testid="products-list">
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
