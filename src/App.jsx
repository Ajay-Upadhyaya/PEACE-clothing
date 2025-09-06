import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ShoppingBag,
  Menu,
  X,
  Instagram,
  Facebook,
  Music2,
  Mail,
  Home,
  Store,
  Info,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

// Helper components for each page to keep the main return clean.

// Home Page content
const HomePage = ({ onShopNowClick, onOurStoryClick }) => (
  <>
    {/* Hero Section */}
    <section className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            A Style That Speaks Peace
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600">
            Discover our latest collection of sustainable and ethically made
            clothing. <span className="font-bold ">WEAR YOUR PEACE </span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onShopNowClick}
              className="inline-block px-8 py-3 rounded-full bg-gray-900 text-white font-medium text-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="herosection.png"
            alt="PEACE hoodie."
            className="w-full h-96 rounded-lg object-cover shadow-xl bg-cover "
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-3">
          <img
            src="friends.png"
            alt="Three friends enjoying their time."
            className="w-full h-96 rounded-lg object-cover shadow-lg bg-cover "
          />
        </div>
        <div className="max-w-xl md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            A Brand Born from Quiet Strength
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600">
            Elevated basics that reflect inner peace and outer style.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOurStoryClick}
              className="inline-block px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

// Shop Page content
const ShopPage = ({ products, onAddToCart }) => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  const handleAddToCartWithCheck = (product) => {
    if (selectedSizes[product.id]) {
      onAddToCart(product, selectedSizes[product.id]);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  return (
    <section id="shop" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Latest Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-gray-600">Rs.{product.price}</p>
                {/* Size Selection */}
                <div className="mt-4 flex justify-center space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(product.id, size)}
                      className={`w-8 h-8 rounded-full border border-gray-300 text-sm font-medium transition duration-300 ${
                        selectedSizes[product.id] === size
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleAddToCartWithCheck(product)}
                  className="mt-4 w-full py-2 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page content
const AboutPage = () => (
  <section className="bg-gray-100 py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl ">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Mission
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        At PEACE, we believe that clothing is more than just what you wear —
        it's a reflection of who you are. Born from the idea that peace should
        be both felt and seen, our brand blends minimal design with intentional
        living. Each piece is thoughtfully created to inspire calm, confidence,
        and authenticity in everyday life. We champion slow fashion, sustainable
        choices, and a community rooted in kindness. When you wear PEACE, you're
        not just making a style statement — you're choosing a lifestyle grounded
        in purpose and presence.
      </p>
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Values
      </h3>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-700">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="font-semibold text-xl">Sustainability</p>
          <p className="text-sm mt-2">
            We use recycled materials and eco-friendly production methods to
            minimize our environmental footprint.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="font-semibold text-xl">Ethical Craftsmanship</p>
          <p className="text-sm mt-2">
            Every garment is made in safe, fair, and humane working conditions.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="font-semibold text-xl">Community</p>
          <p className="text-sm mt-2">
            A portion of every purchase supports initiatives promoting peace and
            education.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Contact Page content
const ContactPage = () => (
  <section className="bg-white py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl ">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Have a question or a comment? Fill out the form below, and we'll get
        back to you as soon as we can.
      </p>
      <form className="space-y-6 text-left">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

// Checkout Page component
const CheckoutPage = ({
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  onCompletePurchase,
}) => {
  const subtotal = cart
    .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);
  const tax = (subtotal * 0.13).toFixed(2); // Example 13% tax
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <p className="text-gray-600">Rs.{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, -1)}
                      className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition"
                    >
                      <ChevronDown size={18} />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, 1)}
                      className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition"
                    >
                      <ChevronUp size={18} />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id, item.size)}
                    className="ml-4 text-sm text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md md:h-fit">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Subtotal</span>
                <span>Rs.{subtotal}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Tax</span>
                <span>Rs.{tax}</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-lg">
                <span>Total</span>
                <span>Rs.{total}</span>
              </div>
              <button
                onClick={onCompletePurchase}
                className="mt-6 w-full py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition duration-300"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Main App component containing all the website content
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);

  // Mock product data with sizes
  const products = [
    {
      id: 1,
      name: "PEACE Premium Hoodie",
      price: "3000.00",
      image: "hoodie.png",
      alt: "A dark gray hoodie with a small logo on the chest.",
      sizes: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "PEACE Premium T-Shirt",
      price: "1400.00",
      image: "tshirt.png",
      alt: "A light gray t-shirt with a minimalist peace symbol.",
      sizes: ["S", "M", "L"],
    },
    {
      id: 3,
      name: "PEACE Premium Pants",
      price: "2000.00",
      image: "pants.png",
      alt: "A pair of dark joggers with subtle branding.",
      sizes: ["S", "M", "L"],
    },
    {
      id: 4,
      name: "PEACE Cap",
      price: "700.00",
      image: "cap.png",
      alt: "A black baseball cap with an embroidered logo.",
      sizes: ["S", "M", "L"],
    },
    {
      id: 5,
      name: "PEACE Premium Sweater",
      price: "2000.00",
      image: "sweater.png",
      alt: "A vintage-style knit sweater.",
      sizes: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "PEACE Athletic Shorts",
      price: "1200.00",
      image: "shorts.png",
      alt: "Comfortable cotton shorts.",
      sizes: ["S", "M", "L"],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu after navigating
  };

  const handleAddToCart = (product, size) => {
    const toastId = `cart-add-${product.id}-${size}`;
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existingItem) {
        toast.success(
          ` Another ${size} size ${product.name} is added to your cart!`,
          { toastId: toastId }
        );
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(` ${size} size ${product.name} is added to your cart!`, {
          toastId: toastId,
        });
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId, size, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  const handleCompletePurchase = () => {
    setCart([]);
    alert("Thank you for your purchase!");
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onShopNowClick={() => handleNavigationClick("shop")}
            onOurStoryClick={() => handleNavigationClick("about")}
          />
        );
      case "shop":
        return <ShopPage products={products} onAddToCart={handleAddToCart} />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "checkout":
        return (
          <CheckoutPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            onCompletePurchase={handleCompletePurchase}
          />
        );
      default:
        return (
          <HomePage
            onShopNowClick={() => handleNavigationClick("shop")}
            onOurStoryClick={() => handleNavigationClick("about")}
          />
        );
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button onClick={() => handleNavigationClick("home")}>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                PEACE
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button
              onClick={() => handleNavigationClick("shop")}
              className="hover:text-gray-500 transition duration-300"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavigationClick("about")}
              className="hover:text-gray-500 transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => handleNavigationClick("contact")}
              className="hover:text-gray-500 transition duration-300"
            >
              Contact
            </button>
          </div>

          {/* Cart Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavigationClick("checkout")}
              className="relative p-2 rounded-full hover:bg-gray-100 transition duration-300"
            >
              <ShoppingBag size={20} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-white z-40 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4 text-lg">
          <button
            onClick={() => handleNavigationClick("shop")}
            className="hover:text-gray-500"
          >
            Shop
          </button>
          <button
            onClick={() => handleNavigationClick("about")}
            className="hover:text-gray-500"
          >
            About
          </button>
          <button
            onClick={() => handleNavigationClick("contact")}
            className="hover:text-gray-500"
          >
            Contact
          </button>
          <button
            onClick={() => handleNavigationClick("checkout")}
            className="hover:text-gray-500"
          >
            Checkout
          </button>
        </nav>
      </div>

      {/* Dynamic Page Content */}
      {renderPage()}

      {/* Newsletter Section - now a separate component */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sign up for our newsletter to get exclusive deals, new arrivals, and
            more.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Tagline */}
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              PEACE
            </span>
            <p className="mt-2 text-sm">Fashion with a purpose.</p>
            <p>Wear Your PEACE</p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-16">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigationClick("shop")}
                  className="hover:text-gray-100 transition duration-300"
                >
                  Shop All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("about")}
                  className="hover:text-gray-100 transition duration-300"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick("contact")}
                  className="hover:text-gray-100 transition duration-300"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/peaceclothing.np/"
                target="_blank"
                className="hover:text-gray-100 transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579348075203"
                target="_blank"
                className="hover:text-gray-100 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@peaceclothing.np"
                target="_blank"
                className="hover:text-gray-100 transition duration-300"
              >
                <Music2 size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PEACE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
