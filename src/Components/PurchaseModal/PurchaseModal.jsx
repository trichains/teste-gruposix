import { useState } from 'react';
import { purchaseModalPropTypes } from '../../types/PropTypes';
import './PurchaseModal.css';

const PurchaseModal = ({ product, isOpen, onClose, onPurchase }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    street_number: '',
    street: '',
    district: '',
    city: '',
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmPurchase = () => {
    if (validateForm()) {
      onPurchase({ ...formData, product_id: product.product_id });
    } else {
      alert('Por favor, preencha todos os campos do formulário');
    }
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={`purchase-modal ${isOpen ? 'open' : ''}`}>
      {product ? (
        <div className="modal-content">
          <h2>{product.name}</h2>
          <p className="price">{`R$ ${product.price.toFixed(2)}`}</p>
          <p>{`Desconto: ${product.discount}%`}</p>
          <p className="freight">{`${product.freight}`}</p>

          <form>
            <button className="close-button" onClick={handleCloseModal}>
              <span>&times;</span>
            </button>
            <label>
              Nome
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Telefone
              <input
                type="tel"
                name="phone_number"
                placeholder="67 99999 9999"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Número
              <input
                type="text"
                name="street_number"
                placeholder="123"
                value={formData.street_number}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Rua
              <input
                type="text"
                name="street"
                placeholder="Rua dos vendas "
                value={formData.street}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Bairro
              <input
                type="text"
                name="district"
                placeholder="Vila Antonio Vendas"
                value={formData.district}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Cidade
              <input
                type="text"
                name="city"
                placeholder="Campo Grande"
                value={formData.city}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Estado
              <input type="text" name="state" placeholder="MS" value={formData.state} onChange={handleInputChange} />
            </label>

            <button type="button" onClick={handleConfirmPurchase}>
              Confirmar
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

PurchaseModal.propTypes = purchaseModalPropTypes;

export default PurchaseModal;
