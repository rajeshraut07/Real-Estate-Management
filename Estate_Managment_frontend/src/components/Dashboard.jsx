import { useState } from "react";
import styles from "../styles/styles";



export default function Dashboard() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });
  

  const handleSearch = () => {
    console.log("Filtering with:", filters);
  };

  return (
    <section style={styles.dashboard}>
      <div style={styles.card}><h2>150</h2><p>Total Properties</p></div>
      <div style={styles.card}><h2>80</h2><p>Available</p></div>
      <div style={styles.card}><h2>45</h2><p>Users</p></div>
      <div style={styles.card}><h2>₹12Cr</h2><p>Revenue</p></div>

      
    </section>
  );
}