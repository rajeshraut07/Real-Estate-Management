import styles from '../styles/styles';

export default function AddProperty({ newProperty, handleChange, addProperty }) {
  return (
    <section id="add-property" style={styles.formSection}>
      <h2>Add Property</h2>
  
      <div style={styles.formGrid}>

        <input
          name="title"
          placeholder="Property Title"
          value={newProperty.title || ""}
          onChange={handleChange}
          style={styles.input}
        />  

        <input
          name="description"
          placeholder="Description"
          value={newProperty.description || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="location"
          placeholder="Location"
          value={newProperty.location || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="price"
          placeholder="Price"
          value={newProperty.price || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="propertyType"
          placeholder="Property Type"
          value={newProperty.propertyType || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="bedrooms"
          placeholder="Bedrooms"
          value={newProperty.bedrooms || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="bathrooms"
          placeholder="Bathrooms"
          value={newProperty.bathrooms || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="area"
          placeholder="Area"
          value={newProperty.area || ""}
          onChange={handleChange}
          style={styles.input}
        />

        
        <input
          name="imageurl"
          placeholder="Image URL"
          value={newProperty.imageurl || ""}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="status"
          placeholder="Status"
          value={newProperty.status || ""}
          onChange={handleChange}
          style={styles.input}
        />

      </div>

      <button onClick={addProperty} style={styles.addBtn}>
        Add Property
      </button>
    </section>
  );
}