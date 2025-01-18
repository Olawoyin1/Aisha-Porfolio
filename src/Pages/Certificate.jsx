import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificate = [
    {
      id: 1,
      certificate: 'ALX Virtual Assistance Certificate',
      description: 'Some text about the certificate here and maybe more',
      image: '../../Images/cert1.jpeg',
    },
    {
      id: 2,
      certificate: 'Social Media Manager Certificate',
      description: 'Details about this certification.',
      image: '../../Images/cert.jpg',
    },
  ]; 

  return (
    <div className="my-cert my-5">
      <div className="container">
      <p className="about-text sc text-center text-muted">What Proves My Expertise?</p>
        <h3 className="fw-bold text-uppercase text-center">Certifications</h3>
        <div className="certificates py-5 d-flex flex-column gap-3 flex-md-row align-items-center justify-content-evenly">
          {certificate.map((cert) => (
            <div
              key={cert.id}
              className="certificate d-flex flex-column align-items-center gap-3"
            >
              <div
                className="cert-image"
                onClick={() => setSelectedCert(cert)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={cert.image}
                  alt={cert.certificate}
                  className="certificate-img"
                />
              </div>
              <div className="cert-info text-center">
                <h4>{cert.certificate}</h4>
                <small>{cert.description}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.certificate}
              className="modal-image"
            />
            <h4 className="modal-title">{selectedCert.certificate}</h4>
            <p className="modal-description">{selectedCert.description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificate;
