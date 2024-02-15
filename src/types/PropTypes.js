import PropTypes from 'prop-types';

export const productListPropTypes = {
  products: PropTypes.arrayOf.isRequired,
  onProductClick: PropTypes.func.isRequired
};

export const purchaseModalPropTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPurchase: PropTypes.func.isRequired
};

export const videoComponentPropTypes = {
  headline: PropTypes.string.isRequired,
  subHeadline: PropTypes.string,
  videoUrl: PropTypes.string.isRequired
};
