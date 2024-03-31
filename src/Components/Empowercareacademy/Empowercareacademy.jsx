import React, { useState } from "react";
import "./Empowercareacademy.scss";
import job1 from "../../Assets/job1.png";
import job2 from "../../Assets/job2.png";
import job3 from "../../Assets/job3.png";
import downarrow from "../../Assets/down-link-arrow.svg";
import searchicon from "../../Assets/search-icon.png";

const Empowercareacademy = () => {
  const [isCardOpen, setIsCardOpen] = useState(null);

  function toggleAccordian(index){
    if( isCardOpen == index ){
      setIsCardOpen(null);
    }else{
      setIsCardOpen(index);
    }
  }

  const accordianData = [
    {
      id: 1,
      title: "Allied Health Staffing Services",
    },
    {
      id: 2,
      title: "Allied Health Staffing Services 2",
    },
    {
      id: 3,
      title: "Allied Health Staffing Services 3",
    },
  ];

  return (
    <div className="empower-care-container">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="flex">
            <div className="left-content">
              <span className="meta">ABOUT US</span>
              <div className="center-heading">
                <h2 className="heading">
                  <span>EmpowerCare</span> Academy
                </h2>
              </div>
              <div className="center-content">
                <p className="description">
                  Our EmpowerCare Academy contributes to the deriver ling highly
                  skilled healthcare professionals, benefiting both the
                  professionals and the facilities they serve. This makes sure
                  our healthcare workers are ready to provide excellent care.
                </p>
              </div>

              <div className="flex-cards-academpy">
                {accordianData.map((item) => (
                  <div className={ item.id == isCardOpen ? "accordian-open academy-card" : "academy-card"} key={item.id}>
                    <div className="card-top-content">
                      <div className="card-content-left">
                        <div className="search-icon">
                          <img src={searchicon} alt="search-icon" />
                        </div>
                        <div className="card-title">
                          <h3>Allied Health Staffing Services</h3>
                        </div>
                      </div>
                      <div className="card-right-content">
                        <button className="learn-more" onClick={() => toggleAccordian(item.id)}>{item.id == isCardOpen ? "Learn Less" : "Learn More"}</button>
                      </div>
                    </div>
                    <div className="card-bottom-content">
                      <p>
                        EmpowerCare is your trusted partner for comprehensive
                        nursing staffing solutions. We are dedicated to
                        connecting facilities with the right nurses to provide
                        high-quality patient care. Our Dynamic Squads offer a
                        personalized path to success for nursing professionals,
                        including:
                      </p>
                      <ul>
                        <li>Registered Nurses (RNs)</li>
                        <li>Licensed Practical Nurses (LPNs)</li>
                        <li>
                          Specialty Nurses positions from ICU nurses, ER,
                          Behavioral Health
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}

                {/* <div className="academy-card">
                  <div className="card-top-content">
                    <div className="card-content-left">
                      <div className="search-icon">
                        <img src={searchicon} alt="search-icon" />
                      </div>
                      <div className="card-title">
                        <h3>Allied Health Staffing Services</h3>
                      </div>
                    </div>
                    <div className="card-right-content">
                      <button className="learn-more">Learn More</button>
                    </div>
                  </div>
                  <div className="card-bottom-content">
                    <p>
                      EmpowerCare is your trusted partner for comprehensive
                      nursing staffing solutions. We are dedicated to connecting
                      facilities with the right nurses to provide high-quality
                      patient care. Our Dynamic Squads offer a personalized path
                      to success for nursing professionals, including:
                    </p>
                    <ul>
                      <li>Registered Nurses (RNs)</li>
                      <li>Licensed Practical Nurses (LPNs)</li>
                      <li>Specialty Nurses positions from ICU nurses, ER, Behavioral
                    Health</li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="sec-btns">
                <button className="learn-btn">
                  <span>Explore Tailored Staffing Options</span>
                  <img src={downarrow} alt="downarrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowercareacademy;
