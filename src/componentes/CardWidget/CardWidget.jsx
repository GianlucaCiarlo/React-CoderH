

import { Link } from 'react-router-dom';
import { BsMinecart } from 'react-icons/bs';
import "./CardWidget.css"


const CardWidget = () => {
    return (
        <div>

            <Link to="/cart" >
                <div className='Contador'>
                    <span>7</span>
                    <BsMinecart />
                </div>
                
            </Link>



        </div>
    )
}

export default CardWidget