import React, { useState } from 'react';

export default function CarDealership() {
  const ads = [    {      id: 1,      brand: 'Toyota',      model: 'Corolla',      kilometers: 5000,      price: 20000,      fuel: 'petrol',    },    {      id: 2,      brand: 'Honda',      model: 'Civic',      kilometers: 10000,      price: 25000,      fuel: 'electricity',    },    {      id: 3,      brand: 'BMW',      model: 'X5',      kilometers: 20000,      price: 50000,      fuel: 'diesel',    },  ];
  const [showForm, setShowForm] = useState(false);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSearchResults([]);
  };

  const handleMakeChange = (e) => setMake(e.target.value);
  const handleModelChange = (e) => setModel(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = ads.filter((ad) => {
      return (
        (make === '' || ad.brand.toLowerCase().includes(make.toLowerCase())) &&
        (model === '' || ad.model.toLowerCase().includes(model.toLowerCase())) &&
        (year === '' || ad.kilometers.toString().includes(year))
      );
    });
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Car Dealership</h1>
      <button onClick={handleOpenForm}>Search for cars</button>
      {showForm && (
        <div>
          <form onSubmit={handleSearch}>
            <label htmlFor="make">Make:</label>
            <input type="text" id="make" value={make} onChange={handleMakeChange} />

            <label htmlFor="model">Model:</label>
            <input type="text" id="model" value={model} onChange={handleModelChange} />

            <label htmlFor="year">Year:</label>
            <input type="text" id="year" value={year} onChange={handleYearChange} />

            <button type="submit">Search</button>
          </form>
          <button onClick={handleCloseForm}>Close</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Kilometers</th>
            <th>Price</th>
            <th>Fuel</th>
          </tr>
        </thead>
        <tbody>
  {searchResults.length > 0
    ? searchResults.map((ad) => (
        <tr key={ad.id}>
          <td>{ad.brand}</td>
          <td>{ad.model}</td>
          <td>{ad.kilometers}</td>
          <td>{ad.price}</td>
          <td>{ad.fuel}</td>
        </tr>
      ))
    : ads.map((ad) => (
        <tr key={ad.id}>
          <td>{ad.brand}</td>
          <td>{ad.model}</td>
          <td>{ad.kilometers}</td>
          <td>{ad.price}</td>
          <td>{ad.fuel}</td>
        </tr>
      ))}
</tbody>
</table>
</div>
)}
;
