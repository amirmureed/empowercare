import './LastButtons.scss'
import { FiArrowDownRight } from "react-icons/fi";
const LastButtons=()=>{
    return(<>
    <div className='parent_btn'>
     <div className="container">
                           <button className="button1">FIND TALENT</button>
                           <button className="button2">FIND EMPOWERING OPPORTUNITIES <FiArrowDownRight/></button>
                           <button className="button3">CAREER AT EMPOWERCARE</button>
    </div>
    </div>
    </>)
}
export default LastButtons