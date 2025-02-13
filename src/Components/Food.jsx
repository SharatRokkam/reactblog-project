import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Bollywood.css";
import { store } from "./Data";
import { useLayoutEffect } from "react";

const Food = () => {
  const [data] = useContext(store);
  const x = [14, 30, 35, 45, 5];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="main" className="main">
      <h2 className="h2-1">Food</h2>
      <hr className="hr-1" />

      {data
        .filter((data) => data.category === "Food")
        .map((data, index) => (
          <div key={index} className="bolly-page">
            <NavLink className="link" to={`/food/${data.id}`}>
              <img src={data.image} alt="cover" className="img-bolly" />
              <h5 id="bolly-h5">{data.title}</h5>
              <p className="blog-desc">{data.description}</p>
              <p className="below-date"><strong>{data.date}</strong></p>
              <div className="line-div"></div>
            </NavLink>
          </div>
        ))}

      <aside id="aside-b">
        <h2 className="h2-2">Top Stories</h2>
        <hr className="hr-2" />
        {data
          .filter((data) => x.includes(data.id))
          .map(
            (data, index) =>
              index < 5 && (
                <div key={index} className="aside-div">
                  {
                    <NavLink className="link" to={`/fitness/${data.id}`}>
                      <img src={data.image} alt="cover" className="img-div" />
                      <p>{data.title}</p>
                      <h6>
                        <strong>{data.category}</strong> <br /> {data.date}
                      </h6>
                    </NavLink>
                  }
                </div>
              )
          )}
        <a href="https://www.mcdonaldsindia.com/">
          <div className="ad"></div>
        </a>
      </aside>
      <div id="footer-page" className="footer">
        <small>Copyright &copy; all rights reserved</small>
      </div>
    </div>
  );
};

export default Food;
