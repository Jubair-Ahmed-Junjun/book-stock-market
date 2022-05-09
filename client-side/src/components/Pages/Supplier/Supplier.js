import React from 'react';

const Supplier = ({ expert }) => {
    const { name, img, designation } = expert;
    return (
        <div id="expert" className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{designation}</h6>
          <p className="card-text">
          The Most Comprehensive Low Content Book Publishing Software On The Market - Try Now. Create And Scale A Book Publishing Business Without Writing A Single Word. Scale your Book Business. Find Trends Before Others.
          </p>
          <a href="#" className="btn btn-secondary">
            Explore More..
          </a>
        </div>
      </div>
    </div>
    );
};

export default Supplier;