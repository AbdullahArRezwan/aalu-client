import { Link, useNavigate } from "react-router-dom";
import './CarrierOpportunity.css'

const CarrierOpportunity = ({ data }) => {
    const { _id, name, location, title, type, salary, deadline } = data;

    const navigate = useNavigate();
    const handleClick = (jobId) => {
        const url = `/job/${jobId}`;
        navigate(url);
    };

    return (
        <div className="experience">
            <div className="borderOne">
                <div className="borderOneContent">
                    <div>
                        <h3>{name}</h3>
                        <p className='text-white'><i>{location}</i></p>
                    </div>
                    <div>
                        <h4>
                            {title}
                        </h4>
                    </div>
                    <div>
                        <h4>Deadline - {deadline}</h4>
                        <div className='d-flex align-items-center'>
                            <p className='text-white'><i>{type},</i></p>
                            <p className='text-white ms-2'><i>Salary - {salary}</i></p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <btn onClick={() => handleClick(_id)}><button className='btn btn-primary px-5 py-2 fs-5'>Apply</button></btn>
                    </div>
                </div>
            </div>
            <div className="borderTwo"></div>
        </div>
    )
}

export default CarrierOpportunity;