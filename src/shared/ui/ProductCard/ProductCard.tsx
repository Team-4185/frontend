import { Box } from '@mui/material';
import GraySquare from '/icons/GraySquare.svg';
import Currency from '/icons/currency.svg';
import WhishlistIcon from '/icons/WhishlistIcon.svg';
import Cart from '/icons/AddToCart.svg';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../app/store/CartSlice.ts';

type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  sale: number | boolean | undefined;
  hit: boolean | undefined;
  newProduct: boolean | undefined;
  onClick?: () => void;
  
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  sale,
  hit,
  newProduct,
  onClick,
}) => {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addProduct({ id, name, price, amount:1, }));
  return (
    <Box className="product-card" onClick={onClick}>
      {sale || hit || newProduct ? (
        <span
          style={{
            borderRadius: '6px',
            padding: '8px',
            background: '#fff',
            position: 'absolute',
            top: '16px',
            left: '16px',
            fontWeight: '500',
            fontSize: '15px',
            color: '#000',
          }}
        >
          {sale ? 'Sale' : hit ? 'Hit' : newProduct ? 'New' : null}
        </span>
      ) : null}
      <img className="product-card__image" src={image ? image : GraySquare} alt="Product image" />

      <Box className="product-card__info">
        <span className="product-card__name">{name}</span>
        <Box className="product-card__price">
          <img src={Currency} alt="currency icon" />
          <span>{price}</span>
        </Box>
        <Box className="product-card__actions">
          <Box
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
            className="product-card__add-to-cart"
          >
            <span className="product-card__add-to-cart-text">Add to Cart</span>
            <img src={Cart} alt="Cart icon" />
          </Box>
          <img className="product-card__wishlist" src={WhishlistIcon} alt="whishlist icon" />
        </Box>
      </Box>
    </Box>
  );
};
