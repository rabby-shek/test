import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../assets/css/products.css';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ image, description, title, price }) => {
  const [discount] = useState(10);
  return (
    <a className="product-card" href="#dolce-gabbana-cropped">
     {discount > 0 && <span className="product-card__discount">-{discount}%</span>}
      <img className="product-card__image" src={image} alt={title} />
      <p className="product-card__brand">{title}</p>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">{price}</p>
      <button className="product-card__btn-wishlist">
        <ShoppingCartIcon />
      </button>
    </a>
  );
};

const OurProducts = () => {
  const initialProductCount = 4; // Initial number of products to show
  const [visibleProductCount, setVisibleProductCount] = useState(initialProductCount);
  const [gridColumns, setGridColumns] = useState(6); // Initial grid columns for large screens

  const products = [
    {
      title: 'Headset',
      description: 'Description for Product 1',
      price: 19.99,
      image: 'https://p.turbosquid.com/ts-thumb/b3/U6DGLq/Zt/preview/jpg/1622357951/300x300/sharp_fit_q85/e16ffb8b1b84b575ba09e2565181062bc4eb94eb/preview.jpg',
      discount :  28
    },
    {
      title: 'watch',
      description: 'Description for Product 2',
      price: 24.99,
      image: 'https://media4.giphy.com/media/MY1XFCIwcUHHQgE4oQ/giphy.gif?cid=6c09b952cy3waw6mtlpw4re84fnwo7e6k6caajfudm7n5pwj&ep=v1_stickers_related&rid=giphy.gif&ct=s',
    },
    {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ede8931710905.565da52d2dae5.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://i.pinimg.com/originals/a5/af/d4/a5afd41cf870cb4b5c9ebe72b4dddbfb.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://cdnb.artstation.com/p/assets/images/images/060/892/623/original/yasemin-aysel-lamp-lit6.gif?1679536068',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      {
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        image: 'https://fullspectrum3d.com/wp-content/uploads/2019/12/Table.gif',
      },
      
    // ... rest of the products
  ];

  const loadMoreButtonStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };
  
  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#79B259',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s',
  };

  const handleLoadMore = () => {
    setVisibleProductCount(visibleProductCount + 3); // Increase the number of visible products by 3
  };

  const loadMoreButtonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setGridColumns(4); // Large screens (>= 1200px) - 6 columns
      } else if (screenWidth >= 992) {
        setGridColumns(3); // Medium screens (992px - 1199px) - 4 columns
      } else if(screenWidth >= 768){
        setGridColumns(2); // Small screens (< 992px) - 3 columns
      }
      else{
        setGridColumns(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the handleResize function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="section-header">Our Products</h2>
      <div className={`row row-cols-${gridColumns}`}>
        {products.slice(0, visibleProductCount).map((product, index) => (
          <div key={index} className={`col-md-${12 / gridColumns}`}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
      {visibleProductCount < products.length && (
        <motion.div
          style={loadMoreButtonStyles}
          variants={loadMoreButtonVariants}
          initial="hidden"
          animate="visible"
        >
          <button style={buttonStyles} onClick={handleLoadMore}>
            Load More Products
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default OurProducts;
