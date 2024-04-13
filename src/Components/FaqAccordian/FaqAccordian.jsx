import { useState, React } from "react";
import "./FaqAccordian.scss";
import icon1 from "../../Assets/Group530.png";
import icon2 from "../../Assets/Group531.png";
import icon3 from "../../Assets/Group532.png";
import { IconButton, useMediaQuery, useTheme } from '@mui/material';

const FaqAccordian = () => {
  
  
  const[isAccordianOpen, setIsAccordianOpen] = useState(null);

  function toggleAccodian(index){
    console.log(index);
    if( index == isAccordianOpen){
      setIsAccordianOpen(null);
    }else{
      setIsAccordianOpen(index);
    }
  }

  return (
    <div className="faq-accordian-wrapper">
      <div className="container">
        <div className="working-wrapper">
          <div class="top-content">
            <h2 class="heading">
              Frequently Asked Questions<span class="text_grad_green"> (FAQ) </span>
            </h2>
          </div>

          <div className="row">
            <div className={ isAccordianOpen == 1 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" } >
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>We Care About You</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(1)}>+</span>
                    
                  </div>
                  <p>
                    We put our employees first, providing the support,
                    resources, and flexibility you need to thrive both
                    professionally and personally. Your well-being is our top
                    priority.
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 2 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>We're Driven by Impact</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(2)}>+</span>
                    
                  </div>
                  <p>
                    Every placement, every shift, every interaction is an
                    opportunity to make a positive impact on patients,
                    facilities, and communities. We measure our success by the
                    lives we transform.
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 3 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>We Embrace Diversity</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(3)}>+</span>
                  </div>
                  <p>
                    We celebrate what makes you unique. At EmpowerCare, you can
                    be your authentic self and know that your talents,
                    strengths, and experiences are valued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordian;
