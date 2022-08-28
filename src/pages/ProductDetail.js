import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [thisProduct, setThisProduct] = useState({});

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("productsData"));
    setThisProduct(allProducts.find((product) => `${product.id}` === id));
    console.log(allProducts.find((product) => `${product.id}` === id));
  }, [id]);

  /*  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setThisProduct(data));
  }, [id]); */

  const priceAfterDiscount =
    thisProduct.price -
    (thisProduct.price / 100) * thisProduct.discountPercentage;

  return (
    <div className="product-detail-container">
      <div className="product-main">
        <img
          className="product__main-img"
          src={thisProduct.thumbnail}
          alt="product"
        />
        <h2 className="product__name">
          <span className="product__brand">{thisProduct.brand}</span>,{" "}
          <span className="product__title">{thisProduct.title}</span>
        </h2>
        <p className="product__description">{thisProduct.description}</p>
      </div>
      <div className="product-side">
        <h4>Tags</h4>
        <div className="product__tags">
          <p className="product__tag">{thisProduct.category}</p>
        </div>
        <div className="product__small-images-container">
          <h4>Images</h4>
          {thisProduct.images?.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                className="product__small-image"
                alt="product"
              />
            );
          })}
        </div>
        <p className="product__stock">
          Stock: <b>{thisProduct.stock}</b>
        </p>
        <p className="product__rating">
          Rating: <b>{thisProduct.rating}</b>
        </p>
        <p className="product__price">
          Original Price:{" "}
          <b>
            <s>${thisProduct.price}</s>
          </b>
        </p>
        <p className="product__discount">
          Discount: <b>{thisProduct.discountPercentage}%</b>
        </p>
        <p className="product__price-after-discount">
          Price after discount:{" "}
          <b className="product__total-price">
            ${priceAfterDiscount.toFixed(2)}
          </b>
        </p>
        <button className="product__add-to-cart">Add to cart</button>
        <button className="product__buy-now">Purchase now</button>
      </div>
    </div>
  );
}
