import Banner10 from "../../Components/Banner10/Banner10"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/careerImg.png'
import img from '../../Assets/careerPath.png'
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import empowercareimg from '../../Assets/Job hunt-amico.png'
import empowercareimg2 from '../../Assets/Doctor-amico.png'
import empowercareimg3 from '../../Assets/Artificial intelligence-amico.png'
import Toptalent from "../../Components/Toptalent/Toptalent"
import Stories from "../../Components/Stories/Stories"
import OurHistory from "../../Components/OurHistory/OurHistory"
import EmpowercarePremier from "../../Components/EmpowercarePremier/EmpowercarePremier"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import storiesimg from '../../Assets/storiesPic.png';
import ThreeColumns from '../../Components/ThreeColumns/ThreeColumns';
const ProfessionalsCareer=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        marginTop: '-245px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner10
     bannerStyles={bannerStyles}
     bannerImg={bannerImg}
     heading={'DIRECT CARE'}
     heading2={'CAREER'}
     description={'EmpowerCare: Your CNA Career Launchpad'}
     span={'Elevate Your CNA Journey with Fulfilling Agency Jobs'}
    />
    <Trusted/>
    <TrustedPartner
      simpleButton={false}
      anchor={false}
      button={true}
      img={empowercareimg}
      meta={'Who We Are'} 
      heading1={'LIFE-'} 
      heading2={'CHANGING'}
      heading3={'DIRECT CARE JOBS'} 
      description1={'Are you a passionate Certified Nursing Assistant (CNA) looking to make a real difference?'} 
      description2={'EmpowerCare is your trusted CNA staffing agency and partner in connecting you with awesome CNA agency jobs near me that match your skills and dreams.'}
      description3={"We're not just another agency for CNA - we go above and beyond to give you the support, training, and opportunities you need to grow and succeed in your career."}
    />
<Toptalent
   heading1={"Why"}
   heading2={"Nurses Aides (CNA)"}
   heading3={"Choose EmpowerCare Healthcare"}
   heading4={"The Ripple Effect: Making Big Waves with Every CNA Job"}

   jobcard1={"Finding the Perfect CNA Job Match is Easy with Our Dynamic Squads"}
      jobcard1_des={"Our Dynamic Squads are way better than your typical healthcare staffing agencies for CNA. They give you personalized service for your skills and goals. With our high-tech matching system and one-on-one support, finding your dream CNA agency jobs near me has never been simpler."}
      
      jobcard2={"Gain a Winning Edge: Excel with EmpowerCare Academy!"}
      jobcard2_des={"Through EmpowerCare Academy, you'll get a leg up on the competition and land your ideal CNA jobs. Unlock your potential and easily navigate the path to career success with our top-notch training."}

      jobcard3={"Unsung Heroes No More: CNAs in the Spotlight!"}
      jobcard3_des={"As an EmpowerCare CNA, you're not just another employee – you're a Shift Champion. We believe in celebrating your amazing contributions to healthcare and putting you in the spotlight."}
   
/>

<TrustedPartner
simpleButton={false}
    anchor={true}
     button={false}
     img={empowercareimg2}
     
     heading1={'Empowering CNAs'} 
     heading2={'Transforming Lives:'}
      heading3={'Your Career, Your Way'} 
      description1={"Why settle for ordinary when you can have extraordinary?"} 
      description2={"Since 2005, EmpowerCare has been the driving force behind the success of over 8,000 healthcare professionals. We don't just fill positions; we fuel your passion with unbeatable opportunities and support."}
      description3={"Whether you're looking for full-time CNA jobs, per diem CNA jobs, or exciting contract assignments, your journey to a fulfilling career starts here."}
      

      
    />
  <EmpowercarePremier
  
   heading1={"Become an"}
   heading2={"EmpowerCare"}
   heading3={"Premier CNA"}
   description1={"Don't miss this exclusive chance to join our elite network of Premier CNAs. Unlock access to top CNA agency jobs, unmatched support, and career-boosting benefits"}

   card_bx1_heading={"Priority Job Access "}
      card_bx1_description1={"Priority Placement in the Best CNA Agency Jobs Near You"}
      card_bx2_heading2={"Tailored Benefits Package "}
      card_bx2_description2={"Flexible Scheduling to Fit Your Lifestyle"}
      card_bx3_heading3={"Personal Career Coach "}
      card_bx3_description3={"Personalized Guidance from a Dedicated Career Advisor"}
      card_bx4_heading4={"Success Stories"}
      card_bx4_description4={"Discover how our Premier CNAs have transformed their careers and achieved their goals. →"}

  
  />
  <ThreeColumns

  bx1_head1={"Passionate"}
  bx2_head2={"CNA Change"}
  bx3_head3={"-Makers"}
  description_1={"Our community of 8,000+ shares a passion for transforming patient care. We get the challenges you face, whether you're feeling burnt out or looking for more control over your schedule."}
  description_2={"As an Unsung Hero or Difference Maker, you've found your tribe at EmpowerCare, a top CNA staffing agency connecting dedicated CNAs with fulfilling CNA agency jobs to reshape healthcare."}

  bx4_head={"EmpowerCare: Championing CNAs Since 2005"}
  dx4_desc={"What started as a mission to support a small group of dedicated CNAs has grown into a thriving community of over 8,000 professionals. As a leading CNA staffing agency"}
  dx4_desc2={"EmpowerCare has been at the forefront of connecting passionate CNAs with meaningful jobs that transform lives."}

  bx5_head={"Imagine the Possibilities for Your CNA Career"}
  dx5_desc={"Picture a world where finding your dream CNA jobs is as easy as a few clicks - a world where your skills, goals, and lifestyle line up perfectly with the right opportunity. "}
  dx5_desc2={"That's the world we're creating at EmpowerCare."}
  
  />    
  <OurHistory/>
    <TrustedPartner
    anchor={false}
     button={false}
     img={empowercareimg3}
     meta={'Who is this for'}
     heading1={'ENVISION'} 
     heading2={' THE FUTURE'}
      
      description1={'Attention compassionate direct care professionals! Are you ready to make a profound difference in the lives of others while building a fulfilling career?'} 
      description2={'EmpowerCare, your trusted direct care staffing agency, is here to connect      you with meaningful direct care job opportunities that align with your      passion, skills, and career goals.      '}
      description3={'This will help you succeed in your career. Positions available include direct      care contracts and overnight support roles.'}
    />
    <Stories
    img={storiesimg}
    description={"A Movement That Goes Beyond Staffing"}
    description2={"Join our movement today and be part of the transformation in Direct Care!"}
    Join={"JOIN US NOW"}
    btn1={"Quick Apply"}
    video_link={"https://youtube.com/shorts/X5DhrVv-hk4?feature=share"}
    />
    <FaqAccordian/>
    <Userslider/>
    <Footer/>
    </>)
}
export default ProfessionalsCareer