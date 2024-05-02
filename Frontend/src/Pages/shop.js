import React, { useState, useEffect } from "react";

const Shop = () => {
  const [data, setData] = useState([]);

  const dataFetch = async () => {
    try {
      const response = await fetch(`http://localhost:4000/activityget`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const dataFetch = await response.json();
      setData(dataFetch);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div className="row m-auto mt-5 text-white bg-dark">
        {data.length === 0 ? (
          <div className="text-Primary flex items-center justify-center text-3xl">
            No Payment records available
          </div>
        ) : (
          data.map((elem) => (
            <div className="col-4" key={elem._id}>
              <div className="cardA mt-3">
                <div className="cardA__content">
                  <h1>Salary Details:</h1>
                  <div className="cardA__content-heading mt-3">
                    <p>{elem.activityType}</p>
                  </div>
                  <div className="cardA__content-body">
                    <h3>Name:</h3>
                    <p>{elem.name}</p>
                    <h3>Phone No:</h3>
                    <p>{elem.phoneNo} </p>
                    <h3>Payment Date:</h3>
                    <p>{elem.date}</p>
                    <h3>Month:</h3>
                    <p>{elem.month}</p>
                    <h3>Salary:</h3>
                    <p>{elem.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Shop; // Ensures Shop component is exported
