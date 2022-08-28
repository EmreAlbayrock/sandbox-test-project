export default function ProductBig(props) {
  return (
    <div className="product-big">
      <img src={props.img} className="product-big__img" alt="product" />
      <div className="product-big__info">
        <h2 className="product-big__brand">{props.brand}</h2>
        <h4 className="product-big__title">{props.title}</h4>
        <p className="product-big__description">{props.description}</p>
        <p className="product-big__price">${props.price}</p>
      </div>
    </div>
  );
}
