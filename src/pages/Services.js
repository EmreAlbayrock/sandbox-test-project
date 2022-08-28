import { useState } from "react";

export default function Services() {
  const [createProductFormData, setCreateProductFormData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
  });

  function handleChange(event) {
    setCreateProductFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const products = JSON.parse(localStorage.getItem("productsData"));
    products.push(createProductFormData);
    localStorage.setItem("productsData", JSON.stringify(products));
  }

  return (
    <div className="create-product-container">
      <form onSubmit={handleSubmit} className="create-product-form">
        <div className="divider-container">
          <div className="divider divider-one">
            <label htmlFor="id">Product Id</label>
            <input
              placeholder="e.g. 32"
              type="text"
              name="id"
              onChange={handleChange}
              value={createProductFormData.id}
            />
            <label htmlFor="title">Product Title</label>
            <input
              placeholder="e.g. iPhone 9"
              type="text"
              name="title"
              onChange={handleChange}
              value={createProductFormData.title}
            />
            <label htmlFor="description">Product Description</label>
            <input
              placeholder="e.g. An amazing budget phone"
              type="text"
              name="description"
              onChange={handleChange}
              value={createProductFormData.description}
            />
            <label htmlFor="price">Product Price ($)</label>
            <input
              placeholder="e.g. 539"
              type="text"
              name="price"
              onChange={handleChange}
              value={createProductFormData.price}
            />
            <label htmlFor="discountPercentage">
              Product Discount Percentage
            </label>
            <input
              placeholder="e.g. 12%"
              type="text"
              name="discountPercentage"
              onChange={handleChange}
              value={createProductFormData.discountPercentage}
            />
          </div>
          <div className="divider divider-two">
            <label htmlFor="rating">Product Rating</label>
            <input
              placeholder="e.g. 4.25"
              type="text"
              name="rating"
              onChange={handleChange}
              value={createProductFormData.rating}
            />
            <label htmlFor="stock">Product Stock</label>
            <input
              placeholder="e.g. 250"
              type="text"
              name="stock"
              onChange={handleChange}
              value={createProductFormData.stock}
            />
            <label htmlFor="brand">Product Brand</label>
            <input
              placeholder="e.g. Apple"
              type="text"
              name="brand"
              onChange={handleChange}
              value={createProductFormData.brand}
            />
            <label htmlFor="category">Product Category</label>
            <input
              placeholder="e.g. Smartphone"
              type="text"
              name="category"
              onChange={handleChange}
              value={createProductFormData.category}
            />
            <label htmlFor="thumbnail">Product Thumbnail</label>
            <input
              placeholder="e.g. https://picsum.photos/200/300"
              type="text"
              name="thumbnail"
              onChange={handleChange}
              value={createProductFormData.thumbnail}
            />
          </div>
        </div>
        <button>Add Product</button>
      </form>
      <div className="form-info"></div>
    </div>
  );
}
