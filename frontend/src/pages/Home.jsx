import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((product) => {
    return product.category === "men's clothing" || product.category === "women's clothing";
  });
  console.log(filteredProducts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
                        max-w-sm mx-auto md:max-w-none md:mx-0 "
          >
            {filteredProducts.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
