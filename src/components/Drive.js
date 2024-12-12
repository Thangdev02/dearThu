import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For transitions and animations
import { ToastContainer, toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for toast notifications

const DrivePage = () => {
    const [isThanksVisible, setThanksVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

    const handleCancel = () => {
        toast.error('Hog có cho bấm Hong!', {
            position: 'top-center',
            autoClose: 2000,
        });
    };

    const handleOki = () => {
        setThanksVisible(true);
        toast.success('Mình Nhận rùi nhé', {
            position: 'top-center',
            autoClose: 2000,
        });
        setModalOpen(true); // Open the modal when "Oki" is clicked
    };

    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    return (
        <div style={styles.container}>
            <motion.h1
                style={styles.header}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Oki, 10 giờ tui xuống đợi Thư nhé?
            </motion.h1>

            <motion.p
                style={styles.subHeader}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Chắc sẽ sớm hơn 1 tí
            </motion.p>

            <motion.div
                style={styles.buttonContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.button
                    style={styles.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOki}
                >
                    Oki
                </motion.button>

                <motion.button
                    style={styles.cancelButton}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCancel}
                >
                    Hong
                </motion.button>
            </motion.div>

            {isThanksVisible && (
                <motion.p
                    style={styles.thanksMessage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Oki nhó, làm việc zui zẻ
                </motion.p>
            )}

            {/* Modal for displaying the GIF */}
            {isModalOpen && (
                <div style={styles.modalBackdrop}>
                    <div style={styles.modalContent}>
                        <motion.img
                            src="https://media.tenor.com/57Cq5qVvgTUAAAAM/lil-kid-chilling-chilling-on-couch.gif" // Replace with your GIF link
                            alt="Fun GIF"
                            style={styles.modalImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                        <motion.article>
                            <p style={{color: 'black'}}>
                                Mình nhận thông tin rùi nhé sốp, làm việc vui vẻ ạ.
                            </p>
                        </motion.article>
                        <motion.button
                            style={styles.closeButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={closeModal}
                        >
                            Oki
                        </motion.button>
                    </div>
                </div>
            )}

            <ToastContainer />
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
    subHeader: {
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '40px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
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
     
      cancelButton: {
        background: 'linear-gradient(135deg, #FF6347, #FF99CC)', // Soft gradient for a romantic feel
        color: '#fff',
        border: 'none',
        padding: '12px 25px', // Slightly larger padding for more space
        fontSize: '1.4rem', // Bigger font for better readability
        cursor: 'pointer',
        borderRadius: '30px', // Rounded corners for a smoother look
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effect
        fontFamily: 'Dancing Script, cursive', // Romantic, flowing font
      },
      
    thanksMessage: {
        fontSize: '1.5rem',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: '30px',
        textAlign: 'center',
    },
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '80%',
        maxWidth: '600px',
    },
    modalImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    closeButton: {
        background: '#FF6347',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        borderRadius: '5px',
        marginTop: '20px',
    },
};

export default DrivePage;
