import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Using Framer Motion for transitions

const HomePage = () => {
  const [message, setMessage] = useState('');

  const handleHongCoClick = () => {
    setMessage('Bam ben duoi di');
  };

  return (
    <div style={styles.container}>
      <motion.h1
        style={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Xin Chào tiểu thư, tối nay chúng ta có 1 cuộc hẹn đúng khom?
      </motion.h1>

      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleHongCoClick}
      >
        Hong Có
      </motion.button>

      {/* Display message when "Hong Co" button is clicked */}
      {message && <motion.p style={styles.message}>{message}</motion.p>}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Link to="/ill-drive">
          <motion.button
            style={styles.secondaryButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Đúng roày
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'url(https://img.freepik.com/free-vector/healthy-food-notepaper-vector_53876-164686.jpg?t=st=1733998643~exp=1734002243~hmac=54fcc00b49a7af7a9bcb1fe8395b9f29d584a61fd92a790c0e339614230c0f41&w=2000) no-repeat center center',
      backgroundSize: 'cover',
      color: '#fff',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    button: {
      background: 'linear-gradient(135deg, #FF6347, #FF99CC)', // Soft gradient for a romantic vibe
      color: '#fff',
      border: 'none',
      padding: '15px 30px', // Larger padding for a more elegant look
      fontSize: '1.4rem',
      cursor: 'pointer',
      borderRadius: '30px', // Rounded corners for a soft, romantic feel
      marginBottom: '20px',
      fontFamily: 'Dancing Script, cursive', // Romantic, flowing font
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Adding soft shadow for depth
      transition: 'all 0.3s ease', // Smooth transition for hover effect
    },
    secondaryButton: {
      background: 'linear-gradient(135deg, #FFD700, #FFB6C1)', // Soft pastel gradient for a romantic feel
      color: '#fff',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1.4rem',
      cursor: 'pointer',
      borderRadius: '30px',
      fontFamily: 'Dancing Script, cursive',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    message: {
      fontSize: '1.5rem',
      color: '#FFFFF',
      marginTop: '20px',
      fontWeight: 'bold',
    },
    // Media Queries for mobile responsiveness
    '@media (max-width: 768px)': {
      container: {
        height: 'auto', // Allow container to adjust height on small screens
        padding: '20px',
      },
      header: {
        fontSize: '2rem', // Smaller font size for mobile
        marginBottom: '10px',
      },
      button: {
        fontSize: '1.2rem', // Smaller font size for mobile
        padding: '12px 25px', // Smaller padding for mobile
      },
      secondaryButton: {
        fontSize: '1.2rem', // Smaller font size for mobile
        padding: '12px 25px', // Smaller padding for mobile
      },
      message: {
        fontSize: '1.2rem', // Adjust message font size for mobile
      },
    },
  
    '@media (max-width: 480px)': {
      container: {
        height: 'auto',
        padding: '10px', // Additional padding for small screens
      },
      header: {
        fontSize: '1.6rem', // Smaller font size for very small screens
      },
      button: {
        fontSize: '1.1rem', // Even smaller font size for mobile
        padding: '10px 20px', // Even smaller padding for mobile
      },
      secondaryButton: {
        fontSize: '1.1rem', // Even smaller font size for mobile
        padding: '10px 20px', // Even smaller padding for mobile
      },
      message: {
        fontSize: '1.1rem', // Adjust message font size for very small screens
      },
    }
  };
  
  styles.button['&:hover'] = {
    transform: 'scale(1.1)', // Button grows slightly on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Darker shadow when hovered
  };
  
  styles.secondaryButton['&:hover'] = {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  };
  
  

export default HomePage;
