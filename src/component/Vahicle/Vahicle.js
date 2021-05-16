import React from 'react';
import { useHistory } from 'react-router';
import './Vahicle.css';

const Vahicle = ({ vahicle }) => {
    const history = useHistory();
    const handleClick = (vahicleId) => {
        const url = `vahicle/${vahicleId}`;
        history.push(url);
    }
    return (
        <div className="col-md-3 text-center" onClick={ () => handleClick(vahicle.name)}>
            <div className="card-box">
                <img className="img-fluid" src={vahicle.img} alt=""/>
                <h5 className="p-2">{vahicle.name}</h5>
            </div>
        </div>
    );
};

export default Vahicle;