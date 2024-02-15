import PropTypes from 'prop-types';

export const productListPropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductClick: PropTypes.func.isRequired
};

export const purchaseModalPropTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPurchase: PropTypes.func.isRequired
};

export const videoComponentPropTypes = {
  video_headline: PropTypes.string.isRequired,
  video_sub_headline: PropTypes.string,
  video_url: PropTypes.string.isRequired
};
