import { useState, useEffect } from 'react';
import VideoComponent from './Components/VideoComponent/VideoComponent';
import ProductList from './Components/ProductList/ProductList';
import PurchaseModal from './Components/PurchaseModal/PurchaseModal';
import ThankScreen from './Components/ThankScreen/ThankScreen';
import api from '../utils/api';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15');
        setData(result);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPurchase = async (formData) => {
    try {
      const response = await api.post(`buy/${selectedProduct.product_id}`, {
        ...formData,
        product_id: selectedProduct.product_id
      });

      if (response.ok) {
        setIsModalOpen(false);
        setPurchaseSuccessful(true);
      } else {
        console.error('Erro ao realizar a compra:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao realizar a compra:', error);
    }
  };

  const renderContent = () => {
    if (!data) {
      return <p>Carregando...</p>;
    }

    const [firstObject] = data.object;

    return (
      <>
        {firstObject && !purchaseSuccessful && (
          <>
            {firstObject.video_headline && firstObject.video_url && <VideoComponent {...firstObject} />}
            <ProductList products={firstObject.products} onProductClick={handleProductClick} />
          </>
        )}
        {purchaseSuccessful && <ThankScreen />}
        {selectedProduct && (
          <PurchaseModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onPurchase={handleConfirmPurchase}
          />
        )}
      </>
    );
  };

  return <div>{renderContent()}</div>;
};

export default App;
