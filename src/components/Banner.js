import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerProduct from "../assets/images/bannerproduct.gif";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "5%",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="col-md-6"
          style={{ marginTop: "10%" }}
          variants={contentVariants}
        >
          <h1
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "green" }}
          >
            The joy of online shopping at your fingertips
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            Welcome to our online store! Browse through our wide selection of
            products and find the perfect items for your needs.
          </p>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              marginTop: "10px",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "darkgreen";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "green";
            }}
          >
            Shop Now
          </button>
        </motion.div>
        <motion.div className="col-md-6" variants={contentVariants}>
          <img src={BannerProduct} alt="Banner" className="img-fluid" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
