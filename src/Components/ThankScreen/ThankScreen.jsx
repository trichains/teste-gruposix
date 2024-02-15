import './ThankScreen.css';

const ThankScreen = () => {
  return (
    <div className="thank-screen">
      <h1>Obrigado pela sua compra!</h1>
      <p>Agora você pode voltar para o site e escolher outro produto.</p>
      <button onClick={() => window.location.reload()}>Voltar para o site</button>
    </div>
  );
};

export default ThankScreen;
