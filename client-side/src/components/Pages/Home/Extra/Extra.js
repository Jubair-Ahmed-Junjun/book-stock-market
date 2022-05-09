import React from 'react';

const Extra = () => {
    return (
        <div>
            <section style={{height: "250px"}} className="my-5 container bg-secondary rounded-3 d-flex justify-content-center align-items-center" id="subs">
            <h1 className="text-white text-center">LET'S STAY IN TOUCH</h1>
              <input className="form-control me-2 text-white" type="search" placeholder="Enter mail" aria-label="Search" /> 
              <br/>
              <button className="btn btn-outline-success btn-warning" type="submit">Send</button>
            </section>
             
        </div>
    );
};

export default Extra;