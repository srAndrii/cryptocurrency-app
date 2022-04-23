import erorr from '../images/error.gif'
import { Typography } from 'antd';

const { Title } = Typography;

const Error = () => {

    return (
        <div className='error'>
            
            <img style={{ display: 'block', objectFit: 'contain', margin: "0 auto" }} className='error_img' src={erorr} alt="error" />
            <Title style={{ display: 'block', objectFit: 'contain', textAlign: "center" }} level={3} >Oops, Something Went Wrong...</Title>
        </div>
    )
}

export default Error
