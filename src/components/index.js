import React, { useEffect, useState } from "react";
import "./style.css";

const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getUsers")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className="content-box my-3">
        <div className="row">
          {data?.map((item) => (
            <div className={"card_box col-md-4 my-2 "}>
              <div className="card-content">
                <h3>
                  {item?.firstName} {item?.lastName}
                </h3>
                <p className="desgn">{item?.designation}</p>
                <p>{item.user_desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};  

export default FetchApi;
