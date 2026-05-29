import styles from '../styles/styles';

export default function Hero({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) {

  return (
    <section style={styles.hero}>

      <div style={styles.heroOverlay}></div>

      <div style={styles.heroInner}>

        <h1 style={styles.heroTitle}>
          Find Your
         <span style={styles.heroHighlight}>
            {" "}Dream Property
          </span>
        </h1>

        <p style={styles.heroText}>
          Explore the best properties around you
        </p>

        <div style={styles.searchBox}>

          {/* SEARCH PROPERTY */}
          <input
            type="text"
            placeholder="Search Property or Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />

          {/* MIN PRICE */}
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={styles.priceInput}
          />

          {/* MAX PRICE */}
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={styles.priceInput}
          />

          {/* SEARCH BUTTON */}
          <button style={styles.searchBtn}>
            Search
          </button>

        </div>

      </div>
    </section>
  );
}