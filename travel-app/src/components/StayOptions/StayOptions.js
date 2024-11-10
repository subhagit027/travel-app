import React from 'react';
import './StayOptions.css';

const stays = [
  { id: 1, name: 'Mountain View Cabin', price: '₹2500/night' },
  { id: 2, name: 'Lakeside Retreat', price: '₹3000/night' },
  { id: 3, name: 'Eco-Friendly Villa', price: '₹4000/night' }
];

const StayOptions = () => {
  return (
    <section className="stay-options" id="stays">
      <h3>Choose Your Stay</h3>
      <div className="stays-list">
        {stays.map(stay => (
          <div key={stay.id} className="stay-card">
            <h4>{stay.name}</h4>
            <p>{stay.price}</p>
            <button className="btn-book">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StayOptions;
