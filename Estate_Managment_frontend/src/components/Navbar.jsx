import { Link } from "react-router-dom";
import styles from '../styles/styles';

export default function Navbar() {
  return (
    <nav
      style={{
        ...styles.navbar,  
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "18px 40px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      }}
    >

      {/* LOGO */}
      <h2
        style={{
          color: "#60a5fa",
          fontSize: "24px",
          fontWeight: "800",
          letterSpacing: "1px",
        }}
      >
        EstatePro
      </h2>

      {/* LINKS */}
      <ul
        style={{
          display: "flex",
          gap: "22px",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {[
          ["Home", "/"],
          ["Dashboard", "/dashboard"],
          ["Properties", "/properties"],
          ["Analytics", "/analytics"],
        

          
        ].map(([name, path]) => (
          <li key={path}>
            <Link
              to={path}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#2563eb";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
              }}
            >
             {name}   
            </Link>
          </li>
        ))}
      </ul>

      {/* RIGHT BUTTON */}
      <div>
        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(37,99,235,0.4)",
            transition: "0.3s",
          }}
           onClick={() => {
    const el = document.getElementById("add-property");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",   
        block: "start"
      });
    } else {
      console.log("Add Property section not found!");
    }
  }}
>
  + Add Property
        </button>
      </div>

    </nav>
  );
}