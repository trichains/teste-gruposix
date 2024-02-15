import { useState, useEffect } from 'react';
import VideoComponent from './Components/VideoComponent/VideoComponent';
import ProductList from './Components/ProductList/ProductList';
import PurchaseModal from './Components/PurchaseModal/PurchaseModal';
import ThankScreen from './Components/ThankScreen/ThankScreen';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'user-token': '571DEFDE-1A7C-4713-8D08-9EADD19CA91B'
          }
        }
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };

  useEffect(() => {
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
      console.log('Dados do formulário:', formData);
      console.log('product_id do produto selecionado:', selectedProduct.product_id);

      const response = await fetch(`https://api-candidate.ogruposix.com/buy/${selectedProduct.product_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-token': '571DEFDE-1A7C-4713-8D08-9EADD19CA91B'
        },
        body: JSON.stringify({
          ...formData,
          product_id: selectedProduct.product_id
        })
      });

      if (response.ok) {
        console.log('Compra realizada com sucesso!');
        setIsModalOpen(false);
        setPurchaseSuccessful(true);
      } else {
        console.error('Erro ao realizar a compra:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao realizar a compra:', error);
    }
  };

  return (
    <div>
      {data && data.object && !purchaseSuccessful && (
        <>
          <VideoComponent
            headline={data.object[0].video_headline}
            subHeadline={data.object[0].video_sub_headline}
            videoUrl={data.object[0].video_url}
          />
          <ProductList products={data.object[0].products} onProductClick={handleProductClick} />
        </>
      )}
      {purchaseSuccessful && <ThankScreen />}
      <PurchaseModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPurchase={handleConfirmPurchase}
      />
    </div>
  );
};

export default App;
