export default function ProductSmall(props) {
  return (
    <div className="product-small">
      <img className="product-small__img" src={props.img} alt="product" />
      <div className="product-small__info">
        <h3 className="product-small__brand">{props.brand}</h3>
        <h5 className="product-small__title">{props.title}</h5>
        <p className="product-small__price">${props.price}</p>
      </div>
    </div>
  );
}
