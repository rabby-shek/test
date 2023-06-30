import React from 'react';
import { FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../assets/css/card.css';

const Card = ({ icon, title, description }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  );
};

const Whyus = () => {
  return (
    <>
      <h2 className="section-header">Why Choose Us</h2>
      <div className="card-container">
        <div className="row">
          <div className="col-md-4">
            <Card
              icon={<FaShieldAlt />}
              title="Secure Transactions"
              description="We ensure the highest level of security for your online transactions."
            />
          </div>
          <div className="col-md-4">
            <Card
              icon={<FaTruck />}
              title="Fast Shipping"
              description="We offer fast and reliable shipping for all orders, ensuring quick delivery."
            />
          </div>
          <div className="col-md-4">
            <Card
              icon={<FaHeadset />}
              title="24/7 Customer Support"
              description="Our dedicated customer support team is available 24/7 to assist you."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
