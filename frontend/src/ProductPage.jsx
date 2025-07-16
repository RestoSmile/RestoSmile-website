import React, { useState } from "react";
import productImg from "./assets/photo.jpg";
import "./styles/ProductPage.css";

const productImages = [productImg, productImg, productImg, productImg, productImg];

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const price = 199;
    const oldPrice = 249;
    const maxQty = 10;
    const minQty = 1;
    const [added, setAdded] = useState(false);
    const [selectedImg, setSelectedImg] = useState(0);
    const [activeTab, setActiveTab] = useState("Description");

    const handleQtyChange = (delta) => {
        setQuantity((q) => Math.max(minQty, Math.min(maxQty, q + delta)));
    };

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="productpage-root">
            <div className="productpage-main">
                {/* Product Image Gallery - vertical thumbnails */}
                <div className="productpage-gallery">
                    {/* Thumbnails on the left */}
                    <div className="productpage-thumbnails">
                        {productImages.map((img, idx) => (
                            <button
                                key={idx}
                                className={`productpage-thumb-btn${selectedImg === idx ? ' selected' : ''}`}
                                onClick={() => setSelectedImg(idx)}
                            >
                                <img src={img} alt={`thumb-${idx}`} className="productpage-thumb-img" />
                            </button>
                        ))}
                    </div>
                    {/* Main Image - larger, no background */}
                    <div className="productpage-mainimg-wrap">
                        <img
                            src={productImages[selectedImg]}
                            alt="RestoSmile Toothpaste"
                            className="productpage-mainimg"
                        />
                    </div>
                </div>
                {/* Product Details */}
                <div className="productpage-details">
                    <div>
                        <h1 className="productpage-title">RestoSmile Toothpaste</h1>
                        <p className="productpage-tagline">Trusted Family Care</p>
                        <div className="productpage-rating-row">
                            <span className="productpage-stars">★ ★ ★ ★ ☆</span>
                            <span className="productpage-rating-count">(1,234 ratings)</span>
                        </div>
                        <div className="productpage-price-row">
                            <span className="productpage-price">₹{price}</span>
                            <span className="productpage-oldprice">₹{oldPrice}</span>
                            <span className="productpage-discount">20% off</span>
                        </div>
                        <p className="productpage-shortdesc">
                            RestoSmile Toothpaste is your trusted partner for complete family oral care. Enriched with natural ingredients, it helps fight cavities, strengthens enamel, and keeps your breath fresh all day. Safe for kids and adults. No harsh chemicals. 100g tube.
                        </p>
                        <ul className="productpage-features">
                            <li>Fights cavities and plaque</li>
                            <li>Strengthens enamel</li>
                            <li>Freshens breath</li>
                            <li>Gentle for the whole family</li>
                            <li>No artificial colors or harsh chemicals</li>
                        </ul>
                        <div className="productpage-qty-row">
                            <span className="productpage-qty-label">Quantity:</span>
                            <button onClick={() => handleQtyChange(-1)} className="productpage-qty-btn">-</button>
                            <input type="text" value={quantity} readOnly className="productpage-qty-input" />
                            <button onClick={() => handleQtyChange(1)} className="productpage-qty-btn">+</button>
                        </div>
                        <div className="productpage-action-row">
                            <button onClick={handleAddToCart} className="productpage-addcart-btn">
                                {added ? "Added!" : "Add to Cart"}
                            </button>
                            <button className="productpage-buynow-btn">
                                Buy Now
                            </button>
                        </div>
                        <div className="productpage-delivery-note">Currently, we only deliver in Delhi NCR.</div>
                        <div className="productpage-info-row">
                            <span className="productpage-info-label">Delivery:</span> FREE delivery by <span className="productpage-info-highlight">Tomorrow</span> if ordered within 2 hrs.
                        </div>
                        <div className="productpage-info-row">
                            <span className="productpage-info-label">Sold by:</span> AN Pharmaceuticals
                        </div>
                        <div className="productpage-info-row">
                            <span className="productpage-info-label">Return Policy:</span> 7 Days Replacement
                        </div>
                        <div className="productpage-info-row">
                            <span className="productpage-info-label productpage-info-highlight">IN STOCK</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Description Section */}
            <div className="productpage-desc-multi">
                <div className="productpage-desc-block">
                    <h3 className="productpage-desc-heading">About the Product</h3>
                    <p>
                        RestoSmile Toothpaste offers <strong>whitening</strong>, <strong>cavity protection</strong>, and <strong>sensitivity relief</strong>, making it a friendly alternative to traditional drilling. Enhanced patient comfort and preservation of healthy tooth structure are at the core of our formula. This toothpaste is an effective solution in paediatric dentistry and is ideal for patients with dental anxiety, ensuring a stress-free experience for the whole family.
                    </p>
                </div>
                <div className="productpage-desc-block">
                    <h3 className="productpage-desc-heading">Ingredients</h3>
                    <p>
                        Our unique formula features natural enzymes like <strong>papain</strong> and <strong>bromelain</strong> for effective caries removal and cleaning, along with <strong>potassium nitrate</strong> to help soothe nerves and reduce sensitivity. The formulation is free from harsh chemicals and artificial colors, making it safe for daily use. Inspired by leading brands, RestoSmile delivers both safety and efficacy.
                    </p>
                </div>
                <div className="productpage-desc-block">
                    <h3 className="productpage-desc-heading">Delivery Options</h3>
                    <p>
                        Currently, shipping is limited to <strong>Delhi NCR</strong>. We are working to expand our coverage soon. Estimated delivery times will be announced shortly. All orders are processed with care to ensure your product arrives safely and promptly.
                    </p>
                </div>
                <div className="productpage-desc-block">
                    <h3 className="productpage-desc-heading">Usage & Safety</h3>
                    <p>
                        For best results, brush twice daily under adult supervision for children. RestoSmile is suitable for all ages and recommended by dental professionals. In case of any irritation, discontinue use and consult your dentist.
                    </p>
                </div>
            </div>
        </div>
    );
}
