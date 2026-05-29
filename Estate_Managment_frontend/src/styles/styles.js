const styles = {
  navbar: { background: '#111827', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '20px 40px', alignItems: 'center' },
  navLinks: { display: 'flex', gap: '25px', listStyle: 'none' },
  hero: { background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '120px 40px', textAlign: 'center' },
  heroTitle: { fontSize: '55px', marginBottom: '20px' },
  heroText: { fontSize: '20px' },
  searchBox: { marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '10px' },
  searchInput: { padding: '15px', width: '350px', borderRadius: '10px', border: 'none' },
  searchBtn: { background: '#2563eb', color: 'white', border: 'none', padding: '15px 25px', borderRadius: '10px' },
  dashboard: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px', padding: '40px' },
  card: { background: '#1f2937', color: 'white', padding: '35px', borderRadius: '15px', textAlign: 'center' },
  analyticsSection: { padding: '40px' },
  analyticsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' },
  chartCard: { background: '#f3f4f6', padding: '30px', borderRadius: '15px' },
  barContainer: { display: 'flex', alignItems: 'flex-end', gap: '15px', height: '220px', marginTop: '20px' },
  bar: { width: '50px', background: '#2563eb', borderRadius: '8px' },
  circleChart: { width: '180px', height: '180px', borderRadius: '50%', border: '18px solid #2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px auto', fontSize: '35px', fontWeight: 'bold' },
  formSection: { padding: '40px' },
  formGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', marginTop: '20px' },
  input: { padding: '14px', borderRadius: '10px', border: '1px solid #ccc' },
  addBtn: { marginTop: '20px', background: '#2563eb', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '10px' },
  propertySection: { padding: '40px' },
  propertyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '30px', marginTop: '20px' },
  propertyCard: { boxShadow: '0 5px 15px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden', background: 'white' },
  propertyImage: { width: '100%', height: '240px', objectFit: 'cover' },
  propertyContent: { padding: '20px' },
  deleteBtn: { background: 'crimson', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px' },
  userGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', marginTop: '30px' },
  userCard: { background: '#1f2937', color: 'white', padding: '25px', borderRadius: '15px' },
  enquirySection: { padding: '40px' },
  enquiryBox: { background: '#f3f4f6', padding: '30px', borderRadius: '20px', marginTop: '20px' },
  enquiryCards: { display: 'grid', gap: '20px', marginTop: '30px' },
  enquiryCard: { background: 'white', padding: '25px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 5px 10px rgba(0,0,0,0.08)' },
  
  footer: { background: '#111827', color: 'white', textAlign: 'center', padding: '40px', marginTop: '40px' }
};
styles.headingRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px"
};

styles.heading = {
  fontSize: "34px",
  fontWeight: "700",
  color: "#111827"
};

styles.viewBtn = {
  padding: "10px 18px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  fontWeight: "600"
};

styles.modernCard = {
  background: "#fff",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  transition: "0.3s ease"
};

styles.imageWrapper = {
  position: "relative"
};

styles.modernImage = {
  width: "100%",
  height: "250px",
  objectFit: "cover"
};

styles.badge = {
  position: "absolute",
  top: "15px",
  left: "15px",
  background: "#2563eb",
  color: "#fff",
  padding: "6px 14px",
  borderRadius: "30px",
  fontSize: "13px",
  fontWeight: "600"
};

styles.propertyTitle = {
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "10px",
  color: "#111827"
};

styles.location = {
  color: "#64748b",
  marginBottom: "16px",
  fontSize: "15px"
};

styles.price = {
  color: "#2563eb",
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "20px"
};

styles.infoRow = {
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #eee",
  paddingTop: "16px",
  marginBottom: "20px",
  color: "#555",
  fontSize: "14px"
};


export default styles;