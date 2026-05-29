import styles from '../styles/styles';

export default function EnquirySection({
  queries,
  queryData,
  handleQueryChange,
  addQuery
}) {
  return (
    <section style={styles.enquirySection}>
      <h2>Professional Enquiry Management</h2>

      <div style={styles.enquiryBox}>
        <div style={styles.formGrid}>

          <input
            name="customerName"
            placeholder="Customer Name"
            value={queryData.customerName || ""}
            onChange={handleQueryChange}
            style={{
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              outline: "none",
              fontSize: "15px",
              background: "#f9fafb",
            }}
          />

          <input
            name="customerEmail"
            placeholder="Customer Email"
            value={queryData.customerEmail || ""}
            onChange={handleQueryChange}
            style={{
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              outline: "none",
              fontSize: "15px",
              background: "#f9fafb",
            }}
          />

          <input
            name="inquiryDate"
            type="date"
            value={queryData.inquiryDate || ""}
            onChange={handleQueryChange}
            style={{
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              outline: "none",
              fontSize: "15px",
              background: "#f9fafb",
            }}
          />

          <input
            name="message"
            placeholder="Message"
            value={queryData.message || ""}
            onChange={handleQueryChange}
            style={{
              padding: "14px 16px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              outline: "none",
              fontSize: "15px",
              background: "#f9fafb",
            }}
          />

        </div>

        <button onClick={addQuery} style={styles.addBtn}>
          Add Enquiry
        </button>

        
        <div style={styles.enquiryCards}>
          {queries.map((q) => (  
            <div key={q.id} style={styles.enquiryCard}>
              <div>

              
                <h3>{q.customerName}</h3>    

                <p>{q.customerEmail}</p>

                <span>{q.inquiryDate}</span>

                <p>{q.message}</p>

              </div>

              <span
                style={{
                  background:
                    q.status === 'Approved'
                      ? '#10b981'
                      : '#f59e0b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px'
                }}
              >
                {q.status || "New"}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}