import { useState, useEffect } from "react";
import ProductBig from "../components/ProductBig";
import ProductSmall from "../components/ProductSmall";
import { Link } from "react-router-dom";

export default function Home() {
  const [productsData, setProductsData] = useState(
    JSON.parse(localStorage.getItem("productsData")) || []
  );

  useEffect(() => {
    if (!productsData.length) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("productsData", JSON.stringify(data.products));
          setProductsData(JSON.parse(localStorage.getItem("productsData")));
        });
    } else {
      return;
    }
  }, [productsData]);

  /* const [productsData, setProductsData] = useState([]) */ /*  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((data) => setProductsData(data.products))
    );
  }, []); */

  const productBigEl = productsData.map((product, index) => {
    if (index === 0) {
      return (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductBig
            title={product.title}
            brand={product.brand}
            img={product.thumbnail}
            description={product.description}
            price={product.price}
          />
        </Link>
      );
    }
  });

  const productSmallEl = productsData.map((product, index) => {
    if (index >= 1) {
      return (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductSmall
            title={product.title}
            brand={product.brand}
            img={product.thumbnail}
            price={product.price}
          />
        </Link>
      );
    }
  });

  return (
    <div className="products-container">
      {productBigEl}
      <div className="small-products-container">{productSmallEl}</div>
    </div>
  );
}
