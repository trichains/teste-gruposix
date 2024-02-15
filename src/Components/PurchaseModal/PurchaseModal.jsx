import { useState } from 'react';
import { purchaseModalPropTypes } from '../../../types/PropTypes';
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

  const renderFormInput = (label, name, placeholder) => (
    <label key={name}>
      {label}
      <input type="text" name={name} placeholder={placeholder} value={formData[name]} onChange={handleInputChange} />
    </label>
  );

  return (
    <div className={`purchase-modal ${isOpen ? 'open' : ''}`}>
      {product && (
        <div className="modal-content">
          <h2>{product.name}</h2>
          <p className="price">{`R$ ${product.price.toFixed(2)}`}</p>
          <p>{`Desconto: ${product.discount}%`}</p>
          <p className="freight">{`${product.freight}`}</p>

          <form>
            <button className="close-button" onClick={handleCloseModal}>
              <span>&times;</span>
            </button>
            {renderFormInput('Nome', 'name', 'Seu nome completo')}
            {renderFormInput('Email', 'email', 'email@example.com')}
            {renderFormInput('Telefone', 'phone_number', '67 99999 9999')}
            {renderFormInput('Número', 'street_number', '123')}
            {renderFormInput('Rua', 'street', 'Rua dos vendas')}
            {renderFormInput('Bairro', 'district', 'Vila Antonio Vendas')}
            {renderFormInput('Cidade', 'city', 'Campo Grande')}
            {renderFormInput('Estado', 'state', 'MS')}

            <button type="button" onClick={handleConfirmPurchase}>
              Confirmar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

PurchaseModal.propTypes = purchaseModalPropTypes;

export default PurchaseModal;
