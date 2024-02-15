import { productListPropTypes } from '../../../types/PropTypes';
import './ProductList.css';

const ProductList = ({ products, onProductClick }) => (
  <div className="product-list-bg">
    <div className="container">
      {products.length > 0 ? (
        <ul className="product-list">
          {products.map(({ product_id, image_url, name, price, discount, freight, best_choice }) => (
            <li
              key={product_id}
              className="product-item"
              onClick={() => onProductClick({ product_id, name, price, discount, freight })}>
              <img src={image_url} alt={name} />
              <p>{name}</p>
              <p className="price">{`R$ ${price.toFixed(2)}`}</p>
              {best_choice && <span className="best-choice-indicator">Melhor Escolha</span>}
              <button>Comprar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  </div>
);

ProductList.propTypes = productListPropTypes;

export default ProductList;
