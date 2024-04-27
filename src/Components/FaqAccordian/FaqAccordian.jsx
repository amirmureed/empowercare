import { useState, React } from "react";
import "./FaqAccordian.scss";
import icon1 from "../../Assets/Group530.png";
import icon2 from "../../Assets/Group531.png";
import icon3 from "../../Assets/Group532.png";
import { IconButton, useMediaQuery, useTheme } from '@mui/material';

const FaqAccordian = (props) => {
  const{faq_head1 ,faq_desc1 ,faq_head2 ,faq_desc2 ,faq_head3, faq_desc3,faq_head4,faq_desc4,faq_head5,faq_desc5}=props

  
  
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
                <div className="working_content col-12" onClick={() => toggleAccodian(1)}>
                  <div className="reletive">
                    <h3>{faq_head1}</h3>
                    <span className="plus-icon" >+</span>
                    
                  </div>
                  <p>
                    {faq_desc1} 
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 2 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>{faq_head2}</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(2)}>+</span>
                    
                  </div>
                  <p>
                    {faq_desc2}
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 3 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>{faq_head3}</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(3)}>+</span>
                  </div>
                  <p>
                    {faq_desc3}
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 4 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>{faq_head4}</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(4)}>+</span>
                  </div>
                  <p>
                    {faq_desc4}
                  </p>
                </div>
              </div>
            </div>
            <div className={isAccordianOpen == 4 ? "working-col col-12 accordian-open" : "working-col col-12 accordian-closed" }>
              <div className="row">
                <div className="working_content col-12">
                  <div className="reletive">
                    <h3>{faq_head5}</h3>
                    <span className="plus-icon" onClick={() => toggleAccodian(5)}>+</span>
                  </div>
                  <p>
                    {faq_desc5}
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
