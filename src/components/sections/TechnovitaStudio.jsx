import React, { useState, useRef, useEffect } from "react";
// import LeadGenPopup from "../LeadGenPopup";
import Image from "next/image";
import BookShootPopup from "../BookShootPopup";
import BookModelPopup from "../BookModelPopup";

// LazyHorizontalImage component for horizontal lazy loading
const LazyHorizontalImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    let observer;
    if (imgRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "100px" }
      );
      observer.observe(imgRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`bg-gray-200 rounded-xl border border-gray-100 flex-shrink-0 overflow-hidden ${className} aspect-[2/3] w-24 h-32 sm:w-32 sm:h-40 md:w-36 md:h-48`}
      style={{ position: "relative" }}
    >
      {isVisible ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl border-none transition-transform duration-200 hover:scale-105 focus:scale-105"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
          priority={false}
        />
      ) : (
        <div className="w-full h-full" />
      )}
    </div>
  );
};

// Shoot types (add more as needed)
const shootTypes = [
  { title: "Footwear Shoots", img: "/images/product-photoshoot/shoes.webp" },
  { title: "Lingerie Shoots", img: "/images/product-photoshoot/lingeries.webp" },
  { title: "Apparel's Shoot", img: "/images/product-photoshoot/cloths.webp" },
  { title: "Electronic Shoots", img: "/images/product-photoshoot/electronics.webp" },
  { title: "Jewellery Shoots", img: "/images/product-photoshoot/jwellery.webp" },
  { title: "Accessories Shoots", img: "/images/product-photoshoot/fashion-accessories.webp" },
  { title: "Cosmetics Shoots", img: "/images/product-photoshoot/cosmatic.webp" },
  { title: "Home Decor Shoots", img: "/images/product-photoshoot/home-decor.webp" },
];

// Model portfolio (add more as needed)
const models = [
  {
    name: "brena",
    photos: [
      "/images/models/brena/brena-1.webp",
      "/images/models/brena/brena-2.webp",
      "/images/models/brena/brena-3.webp",
      "/images/models/brena/brena-4.webp",
      "/images/models/brena/brena-5.webp",
      "/images/models/brena/brena-6.webp",
      "/images/models/brena/brena-7.webp",
      "/images/models/brena/brena-8.webp",
      "/images/models/brena/brena-9.webp",
      "/images/models/brena/brena-10.webp",
      "/images/models/brena/brena-11.webp",
      "/images/models/brena/brena-12.webp",
      "/images/models/brena/brena-13.webp",
      "/images/models/brena/brena-14.webp",
      "/images/models/brena/brena-15.webp",
    ],
  },
  {
    name: "bruna",
    photos: [
      "/images/models/bruna/Bruna-1.webp",
      "/images/models/bruna/Bruna-2.webp",
      "/images/models/bruna/Bruna-3.webp",
      "/images/models/bruna/Bruna-4.webp",
      "/images/models/bruna/Bruna-5.webp",
      "/images/models/bruna/Bruna-6.webp",
      "/images/models/bruna/Bruna-7.webp",
      "/images/models/bruna/Bruna-8.webp",
      "/images/models/bruna/Bruna-9.webp",
      "/images/models/bruna/Bruna-10.webp",
      "/images/models/bruna/Bruna-11.webp",
      "/images/models/bruna/Bruna-12.webp",
      "/images/models/bruna/Bruna-13.webp",
      "/images/models/bruna/Bruna-14.webp",
      "/images/models/bruna/Bruna-15.webp",
    ],
  },
  {
    name: "ashwak",
    photos: [
      "/images/models/Ashwak/Ashwak-1.webp",
      "/images/models/Ashwak/Ashwak-2.webp",
      "/images/models/Ashwak/Ashwak-3.webp",
      "/images/models/Ashwak/Ashwak-4.webp",
      "/images/models/Ashwak/Ashwak-5.webp",
      "/images/models/Ashwak/Ashwak-6.webp",
      "/images/models/Ashwak/Ashwak-7.webp",
      "/images/models/Ashwak/Ashwak-8.webp",
      "/images/models/Ashwak/Ashwak-9.webp",
      "/images/models/Ashwak/Ashwak-10.webp",
      "/images/models/Ashwak/Ashwak-11.webp",
    ],
  },
  {
    name: "elisa",
    photos: [
      "/images/models/elisa/Elisa-1.webp",
      "/images/models/elisa/Elisa-2.webp",
      "/images/models/elisa/Elisa-3.webp",
      "/images/models/elisa/Elisa-4.webp",
      "/images/models/elisa/Elisa-5.webp",
      "/images/models/elisa/Elisa-6.webp",
      "/images/models/elisa/Elisa-7.webp",
      "/images/models/elisa/Elisa-8.webp",
      "/images/models/elisa/Elisa-9.webp",
      "/images/models/elisa/Elisa-10.webp",
      "/images/models/elisa/Elisa-11.webp",
      "/images/models/elisa/Elisa-12.webp",
      "/images/models/elisa/Elisa-13.webp",
      "/images/models/elisa/Elisa-14.webp",
      "/images/models/elisa/Elisa-15.webp",
      "/images/models/elisa/Elisa-16.webp",
      "/images/models/elisa/Elisa-17.webp",
      "/images/models/elisa/Elisa-18.webp",
      "/images/models/elisa/Elisa-19.webp",
      "/images/models/elisa/Elisa-20.webp",
      "/images/models/elisa/Elisa-21.webp",
      "/images/models/elisa/Elisa-22.webp",
    ],
  },
  {
    name: "emily",
    photos: [
      "/images/models/emily/EMILY-1.webp",
      "/images/models/emily/EMILY-2.webp",
      "/images/models/emily/EMILY-3.webp",
      "/images/models/emily/EMILY-4.webp",
      "/images/models/emily/EMILY-5.webp",
      "/images/models/emily/EMILY-6.webp",
      "/images/models/emily/EMILY-7.webp",
      "/images/models/emily/EMILY-8.webp",
      "/images/models/emily/EMILY-9.webp",
      "/images/models/emily/EMILY-10.webp",
      "/images/models/emily/EMILY-11.webp",
    ],
  },
  {
    name: "hazim",
    photos: [
      "/images/models/hazim/hazim-1.webp",
      "/images/models/hazim/hazim-2.webp",
      "/images/models/hazim/hazim-3.webp",
      "/images/models/hazim/hazim-4.webp",
      "/images/models/hazim/hazim-5.webp",
      "/images/models/hazim/hazim-6.webp",
      "/images/models/hazim/hazim-7.webp",
      "/images/models/hazim/hazim-8.webp",
      "/images/models/hazim/hazim-9.webp",
      "/images/models/hazim/hazim-10.webp",
      "/images/models/hazim/hazim-11.webp",
      "/images/models/hazim/hazim-12.webp",
      "/images/models/hazim/hazim-13.webp",
      "/images/models/hazim/hazim-14.webp",
      "/images/models/hazim/hazim-15.webp",
      "/images/models/hazim/hazim-16.webp",
      "/images/models/hazim/hazim-17.webp",
      "/images/models/hazim/hazim-18.webp",
      "/images/models/hazim/hazim-19.webp",
      "/images/models/hazim/hazim-20.webp",
      "/images/models/hazim/hazim-21.webp",
      "/images/models/hazim/hazim-22.webp",
      "/images/models/hazim/hazim-23.webp",
      "/images/models/hazim/hazim-24.webp",
    ],
  },
  {
    name: "juju",
    photos: [
      "/images/models/juju/Juju-1.webp",
      "/images/models/juju/Juju-2   .webp",
      "/images/models/juju/Juju-3.webp",
      "/images/models/juju/Juju-4.webp",
      "/images/models/juju/Juju-5.webp",
      "/images/models/juju/Juju-6.webp",
      "/images/models/juju/Juju-7.webp",
      "/images/models/juju/Juju-8.webp",
      "/images/models/juju/Juju-9.webp",
      "/images/models/juju/Juju-10.webp",
      "/images/models/juju/Juju-11.webp",
      "/images/models/juju/Juju-12.webp",
      "/images/models/juju/Juju-13.webp",
      "/images/models/juju/Juju-14.webp",
      "/images/models/juju/Juju-15.webp",
    ],
  },
  {
    name: "margarita",
    photos: [
      "/images/models/margarita/Margarita-1.webp",
      "/images/models/margarita/Margarita-2.webp",
      "/images/models/margarita/Margarita-3.webp",
      "/images/models/margarita/Margarita-4.webp",
      "/images/models/margarita/Margarita-5.webp",
      "/images/models/margarita/Margarita-6.webp",
      "/images/models/margarita/Margarita-7.webp",
      "/images/models/margarita/Margarita-8.webp",
      "/images/models/margarita/Margarita-9.webp",
      "/images/models/margarita/Margarita-10.webp",
      "/images/models/margarita/Margarita-11.webp",
      "/images/models/margarita/Margarita-12.webp",
      "/images/models/margarita/Margarita-13.webp",
      "/images/models/margarita/Margarita-14.webp",
      "/images/models/margarita/Margarita-15.webp",
      "/images/models/margarita/Margarita-16.webp",
      "/images/models/margarita/Margarita-17.webp",
      "/images/models/margarita/Margarita-18.webp",
      "/images/models/margarita/Margarita-19.webp",
    ],
  },
  {
    name: "natalia",
    photos: [
      "/images/models/natalia/Natalia-1.webp",
      "/images/models/natalia/Natalia-2.webp",
      "/images/models/natalia/Natalia-3.webp",
      "/images/models/natalia/Natalia-4.webp",
      "/images/models/natalia/Natalia-5.webp",
      "/images/models/natalia/Natalia-6.webp",
      "/images/models/natalia/Natalia-7.webp",
      "/images/models/natalia/Natalia-8.webp",
      "/images/models/natalia/Natalia-9.webp",
    ],
  },
  {
    name: "natt",
    photos: [
      "/images/models/natt/NATT-1.webp",
      "/images/models/natt/NATT-2.webp",
      "/images/models/natt/NATT-3.webp",
      "/images/models/natt/NATT-4.webp",
      "/images/models/natt/NATT-5.webp",
      "/images/models/natt/NATT-6.webp",
      "/images/models/natt/NATT-7.webp",
      "/images/models/natt/NATT-8.webp",
      "/images/models/natt/NATT-9.webp",
      "/images/models/natt/NATT-10.webp",
      "/images/models/natt/NATT-11.webp",
    ],
  },
  {
    name: "talaina",
    photos: [
      "/images/models/talaina/Talaina-1.webp",
      "/images/models/talaina/Talaina-2.webp",
      "/images/models/talaina/Talaina-3.webp",
      "/images/models/talaina/Talaina-4.webp",
      "/images/models/talaina/Talaina-5.webp",
      "/images/models/talaina/Talaina-6.webp",
      "/images/models/talaina/Talaina-7.webp",
      "/images/models/talaina/Talaina-8.webp",
      "/images/models/talaina/Talaina-9.webp",
      "/images/models/talaina/Talaina-10.webp",
      "/images/models/talaina/Talaina-11.webp",
      "/images/models/talaina/Talaina-12.webp",
      "/images/models/talaina/Talaina-13.webp",
      "/images/models/talaina/Talaina-14.webp",
      "/images/models/talaina/Talaina-15.webp",
      "/images/models/talaina/Talaina-16.webp",
      "/images/models/talaina/Talaina-17.webp",
      "/images/models/talaina/Talaina-18.webp",
      "/images/models/talaina/Talaina-19.webp",
    ],
  },
  {
    name: "sasha",
    photos: [
      "/images/models/sasha/SASHA-1.webp",
      "/images/models/sasha/SASHA-2.webp",
      "/images/models/sasha/SASHA-3.webp",
      "/images/models/sasha/SASHA-4.webp",
      "/images/models/sasha/SASHA-5.webp",
      "/images/models/sasha/SASHA-6.webp",
      "/images/models/sasha/SASHA-7.webp",
      "/images/models/sasha/SASHA-8.webp",
      "/images/models/sasha/SASHA-9.webp",
      "/images/models/sasha/SASHA-10.webp",
      "/images/models/sasha/SASHA-11.webp",
      "/images/models/sasha/SASHA-12.webp",
      "/images/models/sasha/SASHA-13.webp",
    ],
  },
  {
    name: "ramil",
    photos: [
      "/images/models/ramil/Ramil-1.webp",
      "/images/models/ramil/Ramil-2.webp",
      "/images/models/ramil/Ramil-3.webp",
      "/images/models/ramil/Ramil-4.webp",
      "/images/models/ramil/Ramil-5.webp",
      "/images/models/ramil/Ramil-6.webp",
      "/images/models/ramil/Ramil-7.webp",
      "/images/models/ramil/Ramil-8.webp",
      "/images/models/ramil/Ramil-9.webp",
      "/images/models/ramil/Ramil-10.webp",
      "/images/models/ramil/Ramil-11.webp",
      "/images/models/ramil/Ramil-12.webp",
      "/images/models/ramil/Ramil-13.webp",
      "/images/models/ramil/Ramil-14.webp",
      "/images/models/ramil/Ramil-15.webp",
      "/images/models/ramil/Ramil-16.webp",
      "/images/models/ramil/Ramil-17.webp",
      "/images/models/ramil/Ramil-18.webp",
      "/images/models/ramil/Ramil-19.webp",
      "/images/models/ramil/Ramil-20.webp",
      "/images/models/ramil/Ramil-21.webp",
      "/images/models/ramil/Ramil-22.webp",
      "/images/models/ramil/Ramil-23.webp",
      "/images/models/ramil/Ramil-24.webp",
      "/images/models/ramil/Ramil-25.webp",
      "/images/models/ramil/Ramil-26.webp",
      "/images/models/ramil/Ramil-27.webp",
      "/images/models/ramil/Ramil-28.webp",
      "/images/models/ramil/Ramil-29.webp",
      "/images/models/ramil/Ramil-30.webp",
      "/images/models/ramil/Ramil-31.webp",
      "/images/models/ramil/Ramil-32.webp",
      "/images/models/ramil/Ramil-33.webp",
      "/images/models/ramil/Ramil-34.webp",
      "/images/models/ramil/Ramil-35.webp",
      "/images/models/ramil/Ramil-36.webp",
      "/images/models/ramil/Ramil-37.webp",
      "/images/models/ramil/Ramil-38.webp",
      "/images/models/ramil/Ramil-39.webp",
      "/images/models/ramil/Ramil-40.webp",
      "/images/models/ramil/Ramil-41.webp",
      "/images/models/ramil/Ramil-42.webp",
      "/images/models/ramil/Ramil-43.webp",
      "/images/models/ramil/Ramil-44.webp",
      "/images/models/ramil/Ramil-45.webp",
      "/images/models/ramil/Ramil-46.webp",
      "/images/models/ramil/Ramil-47.webp",
      "/images/models/ramil/Ramil-48.webp",
      "/images/models/ramil/Ramil-49.webp",
      "/images/models/ramil/Ramil-50.webp",
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
  const [showShootPopup, setShowShootPopup] = useState(false);
  const [selectedShootType, setSelectedShootType] = useState("");
  const [showModelPopup, setShowModelPopup] = useState(false);
  const [selectedModelName, setSelectedModelName] = useState("");
  const [visibleModelsCount, setVisibleModelsCount] = useState(4);
  const [loadingMore, setLoadingMore] = useState(false);

  return (
    <section className="py-16 px-2 sm:px-4 bg-white rounded-3xl max-w-7xl mx-auto my-12 overflow-hidden">
      {/* Title & Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
          ECommerce Product Shoot Services by Technovita Studio
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          We provide expert product photography for <b>Myntra</b>, <b>Amazon</b>, <b>Flipkart</b>, <b>Ajio</b> and more. <span className="font-semibold">Technovita Studio is a <b>Myntra Certified Studio</b> for product shoots</span>—trusted by top brands for e-commerce excellence.
        </p>
      </div>

      {/* 1. Shoot Types Cards */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-black mb-6 text-center">Types of Shoots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {shootTypes.map((shoot) => (
            <div
              key={shoot.title}
              className="group bg-white rounded-3xl p-0 flex flex-col items-center justify-between border border-gray-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:bg-[#FFF3E0] focus-within:bg-[#FFF3E0]"
            >
              <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 relative overflow-hidden">
                <Image
                  src={shoot.img}
                  alt={shoot.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between w-full p-4">
                <div className="font-semibold text-black text-center mb-3 text-lg md:text-xl">{shoot.title}</div>
                <button
                  onClick={() => {
                    setSelectedShootType(shoot.title);
                    setShowShootPopup(true);
                  }}
                  className="mx-auto mt-2 px-3 py-1.5 text-sm bg-[#F5A841] text-black rounded-full font-medium transition-all duration-200 border-none shadow-none hover:scale-105 focus:scale-105"
                >
                  Book Shoot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Model Portfolio */}
      <div>
        <h3 className="text-2xl font-bold text-black mb-6 text-center">Our Models Portfolio</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {models.slice(0, visibleModelsCount).map((model) => (
            <div
              key={model.name}
              className="bg-white rounded-3xl border border-gray-200 p-4 w-full max-w-md flex flex-col mb-8 shadow-sm"
            >
              <div className="font-semibold text-black text-center text-lg md:text-xl mb-3">{model.name}</div>
              <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {model.photos.map((photo, pidx) => (
                  <LazyHorizontalImage
                    key={model.name + '-' + pidx}
                    src={photo}
                    alt={model.name + ' photo ' + (pidx + 1)}
                    className=""
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedModelName(model.name);
                  setShowModelPopup(true);
                }}
                className="mx-auto mt-2 px-3 py-1.5 text-sm bg-[#F5A841] text-black rounded-full font-medium transition-all duration-200 border-none shadow-none hover:scale-105 focus:scale-105"
              >
                Book Model
              </button>
            </div>
          ))}
        </div>
        {visibleModelsCount < models.length && (
          <div className="flex flex-col items-center justify-center mt-4">
            {loadingMore && (
              <span className="mb-1 text-sm font-medium text-sky-500">loading..</span>
            )}
            <button
              onClick={() => {
                if (!loadingMore) {
                  setLoadingMore(true);
                  setTimeout(() => {
                    setVisibleModelsCount((c) => Math.min(c + 4, models.length));
                    setLoadingMore(false);
                  }, 500);
                }
              }}
              className="flex items-center justify-center w-10 h-8 rounded-full bg-[#F5A841] focus:outline-none border-none shadow-none"
              aria-label="Load more models"
              disabled={loadingMore}
              style={{border: 'none', boxShadow: 'none'}}
            >
              {loadingMore ? (
                <div className="flex items-center gap-1">
                  <span className={`block w-2 h-2 rounded-full bg-white dot-bounce dot-delay-0`}></span>
                  <span className={`block w-2 h-2 rounded-full bg-white dot-bounce dot-delay-1`}></span>
                  <span className={`block w-2 h-2 rounded-full bg-white dot-bounce dot-delay-2`}></span>
                </div>
              ) : (
                // Static arrows SVG icon, blue color
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m126 15.2-5-1.3-9.4 35.2-35.2-9.5-1.3 5.1 40.1 10.7h.1z" stroke="#2196F3" strokeWidth="4" fill="none"/>
                    <path d="M54.6 80.2 18.8 68.4l-5-1.6-13 40.1 5 1.7 11.3-35.1L53 85.2z" stroke="#2196F3" strokeWidth="4" fill="none"/>
                    <path d="M65.2 18.3c21.8 0 40.1 15.3 44.7 35.7h5.2c-4.7-23.3-25.3-40.8-49.9-40.8-23.7 0-43.7 16.3-49.3 38.3h5.3c5.5-19.2 23.1-33.2 44-33.2zm0 91.9c-22.7 0-41.6-16.6-45.2-38.3h-5.2c3.7 24.6 24.8 43.4 50.4 43.4 22.8 0 42.1-15 48.6-35.7h-5.4c-6.2 17.8-23.2 30.6-43.2 30.6z" stroke="#2196F3" strokeWidth="4" fill="none"/>
                  </g>
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      <BookShootPopup
        isOpen={showShootPopup}
        onClose={() => setShowShootPopup(false)}
        shootType={selectedShootType}
      />
      <BookModelPopup
        isOpen={showModelPopup}
        onClose={() => setShowModelPopup(false)}
        modelName={selectedModelName}
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
