import { useState, useEffect } from 'react';
import './App.css';
import API from "./api";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import EnquirySection from './components/EnquirySection';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import AddProperty from './components/AddProperty';
import PropertyList from './components/PropertyList';

function App() {

  // SEARCH STATES
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // PROPERTIES
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      location: "Mumbai",
      propertyType: "villa",
      price: "12000000",
      imageurl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      status: "Available"
    }
  ]);

  // NEW PROPERTY
  const [newProperty, setNewProperty] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    imageurl: '',
    status: ''
  });

  // ENQUIRIES
  const [queries, setQueries] = useState([]);

  const [queryData, setQueryData] = useState({
    customer_name: '',
    customer_email: '',
    inquiry_date: '',
    message: ''
  });

  // PROPERTY INTERESTS
  const [interests, setInterests] = useState([]);

  // HANDLERS
  const handleChange = (e) => {
    setNewProperty({
      ...newProperty,
      [e.target.name]: e.target.value
    });
  };

  const handleQueryChange = (e) => {
    setQueryData({
      ...queryData,
      [e.target.name]: e.target.value
    });
  };

  // LOAD PROPERTIES
  const loadProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  // ADD PROPERTY
  const addProperty = async () => {
    try {

      const res = await API.post("/properties", newProperty);

      setProperties((prev) => [...prev, res.data]);

      setNewProperty({
        title: '',
        description: '',
        price: '',
        location: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        imageurl: '',
        status: ''
      });

    } catch (err) {
      console.log("Add Error:", err);
    }
  };

  // DELETE PROPERTY
  const deleteProperty = async (id) => {
    try {

      await API.delete(`/properties/${id}`);

      setProperties(properties.filter((p) => p.id !== id));

    } catch (err) {
      console.log(err);
    }
  };

  // ADD ENQUIRY
  const addQuery = async () => {

    try {

      const res = await API.post("/inquiry", queryData);

      setQueries([...queries, res.data]);

      setQueryData({
        customer_name: '',
        customer_email: '',
        inquiry_date: '',
        message: ''
      });

    } catch (err) {
      console.log(err);
    }
  };

  // ADD PROPERTY INTEREST
  const addInterest = async (interestData) => {

    try {

      const res = await API.post("/users", {
        name: interestData.name,
        email: interestData.email,
        phone: interestData.phone,
        msg: interestData.message
      });

      setInterests((prev) => [...prev, res.data]);

    } catch (err) {
      console.log("Interest Error:", err);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // FILTER
  const filteredProperties = properties.filter((property) => {

    const title = (property?.title || property?.name || "").toLowerCase();

    const location =
      (property?.location || property?.city || "").toLowerCase();

    const query = search.toLowerCase();

    const price = Number(
      String(property?.price ?? "0").replace(/[^0-9]/g, "")
    );

    const min = minPrice === "" ? null : Number(minPrice);
    const max = maxPrice === "" ? null : Number(maxPrice);

    const matchSearch =
      title.includes(query) || location.includes(query);

    const matchMin = min === null || price >= min;
    const matchMax = max === null || price <= max;

    return matchSearch && matchMin && matchMax;
  });

  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero
                search={search}
                setSearch={setSearch}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />

              <Dashboard />

              <Analytics />

              <AddProperty
                newProperty={newProperty}
                handleChange={handleChange}
                addProperty={addProperty}
              />

              <PropertyList
                properties={filteredProperties}
                deleteProperty={deleteProperty}
                addInterest={addInterest}
              />

              <EnquirySection
                queries={queries}
                queryData={queryData}
                handleQueryChange={handleQueryChange}
                addQuery={addQuery}
              />
            </>
          }
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/properties"
          element={
            <PropertyList
              properties={filteredProperties}
              deleteProperty={deleteProperty}
              addInterest={addInterest}
            />
          }
        />

        <Route
          path="/enquiry"
          element={
            <EnquirySection
              queries={queries}
              queryData={queryData}
              handleQueryChange={handleQueryChange}
              addQuery={addQuery}
            />
          }
        />

        <Route
          path="/login"
          element={<div>Login Page</div>}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;