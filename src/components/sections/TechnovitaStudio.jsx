import React, { useState } from "react";
import { motion } from "framer-motion";
import LeadGenPopup from "../LeadGenPopup";
import Image from "next/image";



// Shoot types (add more as needed)
const shootTypes = [
  { title: "Footwear Shoots", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
  { title: "Lingerie Shoots", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
  { title: "Apparel's Shoot", img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80" },
  { title: "Electronic Shoots", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { title: "Jewellery Shoots", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { title: "Accessories Shoots", img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80" },
  { title: "Cosmetics Shoots", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
  { title: "Home Decor Shoots", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
];

// Model portfolio (add more as needed)
const models = [
  {
    name: "Talaina",
    photos: [
      "/images/models/Talaina/Talaina-1.webp",
      "/images/models/Talaina/Talaina-2.webp",
      "/images/models/Talaina/Talaina-3.webp",
      "/images/models/Talaina/Talaina-4.webp",
      "/images/models/Talaina/Talaina-5.webp",
      "/images/models/Talaina/Talaina-6.webp",
      "/images/models/Talaina/Talaina-7.webp",
      "/images/models/Talaina/Talaina-8.webp",
      "/images/models/Talaina/Talaina-9.webp",
      "/images/models/Talaina/Talaina-10.webp",
      "/images/models/Talaina/Talaina-11.webp",
      "/images/models/Talaina/Talaina-12.webp",
      "/images/models/Talaina/Talaina-13.webp",
      "/images/models/Talaina/Talaina-14.webp",
      "/images/models/Talaina/Talaina-15.webp",
      "/images/models/Talaina/Talaina-16.webp",
      "/images/models/Talaina/Talaina-17.webp",
      "/images/models/Talaina/Talaina-18.webp",
      "/images/models/Talaina/Talaina-19.webp",
    ],
  },
  {
    name: "SASHA",
    photos: [
      "/images/models/SASHA/SASHA-1.webp",
      "/images/models/SASHA/SASHA-2.webp",
      "/images/models/SASHA/SASHA-3.webp",
      "/images/models/SASHA/SASHA-4.webp",
      "/images/models/SASHA/SASHA-5.webp",
      "/images/models/SASHA/SASHA-6.webp",
      "/images/models/SASHA/SASHA-7.webp",
      "/images/models/SASHA/SASHA-8.webp",
      "/images/models/SASHA/SASHA-9.webp",
      "/images/models/SASHA/SASHA-10.webp",
      "/images/models/SASHA/SASHA-11.webp",
      "/images/models/SASHA/SASHA-12.webp",
      "/images/models/SASHA/SASHA-13.webp",
    ],
  },
  {
    name: "Ramil",
    photos: [
      "/images/models/Ramil/Ramil-1.webp",
      "/images/models/Ramil/Ramil-2.webp",
      "/images/models/Ramil/Ramil-3.webp",
      "/images/models/Ramil/Ramil-4.webp",
      "/images/models/Ramil/Ramil-5.webp",
      "/images/models/Ramil/Ramil-6.webp",
      "/images/models/Ramil/Ramil-7.webp",
      "/images/models/Ramil/Ramil-8.webp",
      "/images/models/Ramil/Ramil-9.webp",
      "/images/models/Ramil/Ramil-10.webp",
      "/images/models/Ramil/Ramil-11.webp",
      "/images/models/Ramil/Ramil-12.webp",
      "/images/models/Ramil/Ramil-13.webp",
      "/images/models/Ramil/Ramil-14.webp",
      "/images/models/Ramil/Ramil-15.webp",
      "/images/models/Ramil/Ramil-16.webp",
      "/images/models/Ramil/Ramil-17.webp",
      "/images/models/Ramil/Ramil-18.webp",
      "/images/models/Ramil/Ramil-19.webp",
      "/images/models/Ramil/Ramil-20.webp",
      "/images/models/Ramil/Ramil-21.webp",
      "/images/models/Ramil/Ramil-22.webp",
      "/images/models/Ramil/Ramil-23.webp",
      "/images/models/Ramil/Ramil-24.webp",
      "/images/models/Ramil/Ramil-25.webp",
      "/images/models/Ramil/Ramil-26.webp",
      "/images/models/Ramil/Ramil-27.webp",
      "/images/models/Ramil/Ramil-28.webp",
      "/images/models/Ramil/Ramil-29.webp",
      "/images/models/Ramil/Ramil-30.webp",
      "/images/models/Ramil/Ramil-31.webp",
      "/images/models/Ramil/Ramil-32.webp",
      "/images/models/Ramil/Ramil-33.webp",
      "/images/models/Ramil/Ramil-34.webp",
      "/images/models/Ramil/Ramil-35.webp",
      "/images/models/Ramil/Ramil-36.webp",
      "/images/models/Ramil/Ramil-37.webp",
      "/images/models/Ramil/Ramil-38.webp",
      "/images/models/Ramil/Ramil-39.webp",
      "/images/models/Ramil/Ramil-40.webp",
      "/images/models/Ramil/Ramil-41.webp",
      "/images/models/Ramil/Ramil-42.webp",
      "/images/models/Ramil/Ramil-43.webp",
      "/images/models/Ramil/Ramil-44.webp",
      "/images/models/Ramil/Ramil-45.webp",
      "/images/models/Ramil/Ramil-46.webp",
      "/images/models/Ramil/Ramil-47.webp",
      "/images/models/Ramil/Ramil-48.webp",
      "/images/models/Ramil/Ramil-49.webp",
      "/images/models/Ramil/Ramil-50.webp",
    ],
  },
  {
    name: "lazar",
    photos: [
      "/images/models/lazar/Lazar-1.webp",
      "/images/models/lazar/Lazar-2.webp",
      "/images/models/lazar/Lazar-3.webp",
      "/images/models/lazar/Lazar-4.webp",
      "/images/models/lazar/Lazar-5.webp",
      "/images/models/lazar/Lazar-6.webp",
    ],
  },
];

const TechnovitaStudio = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedShoot, setSelectedShoot] = useState(null);
  const [modelPopupOpen, setModelPopupOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleBookShoot = (shoot) => {
    setSelectedShoot(shoot);
    setPopupOpen(true);
  };

  const handleBookModel = (model) => {
    setSelectedModel(model);
    setModelPopupOpen(true);
  };

  return (
    <section className="py-16 px-2 sm:px-4 bg-white rounded-3xl max-w-7xl mx-auto my-12 overflow-hidden">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
          ECommerce Product Shoot Services by Technovita Studio
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          We provide expert product photography for <b>Myntra</b>, <b>Amazon</b>, <b>Flipkart</b>, <b>Ajio</b> and more. <span className="font-semibold">Technovita Studio is a <b>Myntra Certified Studio</b> for product shoots</span>—trusted by top brands for e-commerce excellence.
        </p>
      </motion.div>


      {/* 1. Shoot Types Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-black mb-6 text-center">Types of Shoots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {shootTypes.map((shoot, idx) => (
            <motion.div
              key={shoot.title}
              whileHover={{ scale: 1.04, backgroundColor: "#FFF3E0", boxShadow: "0 8px 32px rgba(245,168,65,0.10)" }}
              className="group bg-white rounded-3xl p-0 flex flex-col items-center justify-between border border-gray-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
            >
              <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 relative overflow-hidden">
                <img src={shoot.img} alt={shoot.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex-1 flex flex-col justify-between w-full p-4">
                <div className="font-semibold text-black text-center mb-3 text-lg md:text-xl">{shoot.title}</div>
                <button
                  onClick={() => handleBookShoot(shoot)}
                  className="mx-auto mt-2 px-3 py-1.5 text-sm bg-[#F5A841] text-black rounded-full font-medium transition-all duration-200 border-none shadow-none"
                >
                  Book Shoot
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 2. Model Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-black mb-6 text-center">Our Models Portfolio</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {models.map((model, idx) => (
            <div
              key={model.name}
              className="bg-white rounded-3xl border border-gray-200 p-4 w-full max-w-md flex flex-col mb-8 shadow-sm"
            >
              <div className="font-semibold text-black text-center text-lg md:text-xl mb-3">{model.name}</div>
              <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {model.photos.map((photo, pidx) => (
                  <img
                    key={pidx}
                    src={photo}
                    alt={model.name + ' photo ' + (pidx + 1)}
                    className="h-32 w-24 sm:h-40 sm:w-32 md:h-48 md:w-36 object-cover rounded-xl border border-gray-100 flex-shrink-0 transition-transform duration-200 hover:scale-105"
                  />
                ))}
              </div>
              <button
                onClick={() => handleBookModel(model)}
                className="mx-auto mt-4 px-4 py-2 text-sm bg-[#F5A841] text-black rounded-full font-semibold transition-all duration-200 border-none shadow-none hover:scale-105"
              >
                Book Model
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* LeadGenPopup for Book Shoot */}
      <LeadGenPopup
        isOpen={popupOpen}
        onClose={() => {
          setPopupOpen(false);
          setSelectedShoot(null);
        }}
        title={selectedShoot ? `Book a ${selectedShoot.title}` : "Book a Shoot"}
        subtitle="Get a free consultation and quote for your next product shoot!"
        guideUrl="/path-to-your-guide.pdf"
        guideTitle="E-commerce Shoot Guide"
        timerDuration={60}
        successMessage="Our team will contact you soon with all the details."
      />
      {/* LeadGenPopup for Book Model */}
      <LeadGenPopup
        isOpen={modelPopupOpen}
        onClose={() => {
          setModelPopupOpen(false);
          setSelectedModel(null);
        }}
        title={selectedModel ? `Book Model: ${selectedModel.name}` : "Book a Model"}
        subtitle="Special Offer: Get an exclusive discount on your first model shoot booking!"
        guideUrl="/path-to-your-guide.pdf"
        guideTitle="Model Booking Guide"
        timerDuration={60}
        successMessage="Thank you for booking! Our team will contact you soon with all the details."
      />
      {/* Explore More Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/technovita-studio-services"
          className="px-8 py-3 bg-[#F5A841] text-black rounded-full font-semibold text-lg transition-all duration-200 hover:bg-black hover:text-white"
        >
          Explore More About E-commerce Photoshoot
        </a>
      </div>
    </section>
  );
};

export default TechnovitaStudio;
