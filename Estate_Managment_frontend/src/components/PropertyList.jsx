

import { useState } from "react";
import styles from "../styles/styles";
import API from "../api";

export default function PropertyList({ properties, deleteProperty }) {

  const [selectedProperty, setSelectedProperty] = useState(null);

  // ❤️ favorites
  const [favorites, setFavorites] = useState([]);

  // interest popup state
  const [showInterestForm, setShowInterestForm] = useState(false);

  const [interestData, setInterestData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  // ❤️ favorite toggle
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // interest form change
  const handleInterestChange = (e) => {
    setInterestData({
      ...interestData,
      [e.target.name]: e.target.value,
    });
  };

  // submit interest
  const submitInterest = async () => {

    try {

      await API.post("/users", {
        propertyId: selectedProperty.id || selectedProperty._id,
        ...interestData,
      });

      alert("Interest sent successfully!");

      setInterestData({
        name: "",
        phone: "",
        email: "",
        msg: "",
      });

      setShowInterestForm(false);

    } catch (err) {

      console.log(err);

      alert("Failed to send interest");
    }
  };

  
  // PAYMENT FUNCTION
  

  
  const handlePayment = async () => {

    try {

      // create order from backend
      const response = await API.post("/payment/create-order", {
        amount: selectedProperty.price,
      });

      const order = response.data;

      const options = {

        key: "rzp_test_SsFEOkm1JdmgGK",

        amount: order.amount,

        currency: order.currency,

        name: "Property Booking",

        description: selectedProperty.title,

        order_id: order.id,

        handler: async function (response) {

          alert("Payment Successful ✅");

          console.log(response);

          // verify payment
          await API.post("/payment/verify", response);
        },

        prefill: {
          name: interestData.name,
          email: interestData.email,
          contact: interestData.phone,
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (err) {

      console.log(err);

      alert("Payment Failed ❌");
    }
  };
  

  return (

    <section style={styles.propertySection}>

      {/* HEADER */}
      <div style={styles.headingRow}>

        <h2 style={styles.heading}>
          Featured Properties
        </h2>

        <button style={styles.viewBtn}>
          View All
        </button>

      </div>

      {/* PROPERTY LIST */}
      <div style={styles.propertyGrid}>

        {properties.map((item) => (

          <div
            key={item.id || item._id}
            style={styles.modernCard}
          >

            {/* IMAGE */}
            <div style={styles.imageWrapper}>

              <img
                src={
                  item.imageurl ||
                  item.imageUrl ||
                  item.image ||
                  item.img ||
                  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
                }
                style={styles.modernImage}
                alt="property"
              />

              <span style={styles.badge}>
                {item.status || "For Sale"}
              </span>

              {/* ❤️ FAVORITE */}
              <button
                onClick={() =>
                  toggleFavorite(item.id || item._id)
                }
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: favorites.includes(item.id || item._id)
                    ? "red"
                    : "white",
                  color: favorites.includes(item.id || item._id)
                    ? "white"
                    : "red",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "18px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              >
                ♥
              </button>

            </div>

            {/* CONTENT */}
            <div style={styles.propertyContent}>

              <h3 style={styles.propertyTitle}>
                {item.title ||
                  item.name ||
                  item.propertyName ||
                  "No Name"}
              </h3>

              <p style={styles.location}>
                📍 {item.location || item.city || item.address || "No Location"}
              </p>

              <h2 style={styles.price}>
                ₹{item.price || "N/A"}
              </h2>

              <div style={styles.infoRow}>
                <span>🛏 {item.bedrooms || 0} Beds</span>
                <span>🛁 {item.bathrooms || 0} Baths</span>
                <span>📏 {item.area || 0} sqft</span>
              </div>

              {/* BUTTONS */}
              <div style={{ display: "flex", gap: "10px" }}>

                <button
                  style={styles.viewBtn}
                  onClick={() => {
                    setSelectedProperty(item);
                    setShowInterestForm(false);
                  }}
                >
                  View Details
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() =>
                    deleteProperty(item.id || item._id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedProperty && (

        <div
          onClick={() => {
            setSelectedProperty(null);
            setShowInterestForm(false);
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              width: "500px",
              maxWidth: "90%",
            }}
          >

            <h2>{selectedProperty.title}</h2>

            <p>📍 {selectedProperty.location}</p>

            <p>💰 ₹{selectedProperty.price}</p>

            <p>🛏 Beds: {selectedProperty.bedrooms}</p>

            <p>🛁 Baths: {selectedProperty.bathrooms}</p>

            <p>📏 Area: {selectedProperty.area}</p>

            <p style={{ marginTop: "15px" }}>
              {selectedProperty.description || "No description available"}
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >

              {/* SHOW INTEREST */}
              <button
                onClick={() => setShowInterestForm(true)}
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Show Interest
              </button>

              {/* PAYMENT BUTTON COMMENTED */}

              {
              <button
                onClick={handlePayment}
                style={{
                  background: "orange",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Pay Now
              </button>
              }

            </div>

            {/* INTEREST FORM */}
            {showInterestForm && (

              <div style={{ marginTop: "20px" }}>

                <h3>Send your interest</h3>

                <input
                  name="name"
                  placeholder="Name"
                  value={interestData.name}
                  onChange={handleInterestChange}
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    padding: "8px",
                  }}
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={interestData.phone}
                  onChange={handleInterestChange}
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    padding: "8px",
                  }}
                />

                <input
                  name="email"
                  placeholder="Email"
                  value={interestData.email}
                  onChange={handleInterestChange}
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    padding: "8px",
                  }}
                />

                <textarea
                  name="msg"
                  placeholder="Message"
                  value={interestData.msg}
                  onChange={handleInterestChange}
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    padding: "8px",
                  }}
                />

                <div style={{ display: "flex", gap: "10px" }}>

                  <button
                    onClick={submitInterest}
                    style={{
                      background: "blue",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>

                  <button
                    onClick={() => setShowInterestForm(false)}
                    style={{
                      background: "gray",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Cancel
                  </button>

                </div>

              </div>
            )}

            {/* CLOSE BUTTON */}
            <button
              style={{
                marginTop: "15px",
                background: "crimson",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
              }}
              onClick={() => {
                setSelectedProperty(null);
                setShowInterestForm(false);
              }}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}