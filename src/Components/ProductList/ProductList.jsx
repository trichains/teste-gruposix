import { productListPropTypes } from '../../types/PropTypes';

import './ProductList.css';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list-bg">
      <div className="container">
        {products && products.length > 0 ? (
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.product_id} className="product-item" onClick={() => onProductClick(product)}>
                <img src={product.image_url} alt={product.name} />
                <p>{product.name}</p>
                <p className="price">{`R$ ${product.price.toFixed(2)}`}</p>
                {product.best_choice && <span className="best-choice-indicator">Melhor Escolha</span>}
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
};

ProductList.propTypes = productListPropTypes;

export default ProductList;
