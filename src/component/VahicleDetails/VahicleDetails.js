import React, { useState } from 'react';
import bick from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import preple from '../../images/peopleicon.png';
import { useParams } from 'react-router';

const vahicles = [
    {
        id: 1,
        name: "BICK",
        img: bick,
        price1: 50,
        price2: 100,
        price3: 150

    },
    {
        id: 2,
        name: "CAR",
        img: car,
        price1: 100,
        price2: 200,
        price3: 300

    },
    {
        id: 3,
        name: "BUS",
        img: bus,
        price1: 80,
        price2: 160,
        price3: 240

    },
    {
        id: 4,
        name: "TRAIN",
        img: train,
        price1: 65,
        price2: 170,
        price3: 230

    }
]

const VahicleDetails = () => {

    let { vahicleId } = useParams();
    
    const [locationFrom, setLocationFrom] = useState('');
    const [locationTo, setLocationTo] = useState('');
    const [showForm, setShowForm] = useState(true);

    const vahicleInfo = vahicles.find((vahicle) => vahicle.name === vahicleId);
    const { name, img, price1, price2, price3 } = vahicleInfo;

    const handleBlur = (e) => {
        if(e.target.name === 'from'){
            setLocationFrom(e.target.value)
        }
        if(e.target.name === 'to'){
            setLocationTo(e.target.value)
        }
    }
    const rowStyle = {
        border: '2px solid red',
        borderRadius: '5px',
        padding: '20px'
    }

    return (
        <div style={rowStyle}>
            <h3>You search for {name}</h3>
            <div className="row">
                <div className="col-md-3 mr-auto p-5 bg-primary">
                    { showForm ? <form>
                        <label htmlFor="from">Pick From</label>
                        <input onBlur={handleBlur} type="text" name="from" className="form-control" required />
                        <label htmlFor="to">Pick From</label>
                        <input onBlur={handleBlur} type="text" name="to" className="form-control" required />
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" />
                        <button type="submit" onClick={ () => setShowForm(false) } className="form-control mt-3 btn-dark text-center">Submit</button>
                    </form> : <form className="bg-warning p-3 rounded">
                        <div>
                            <p>From: {locationFrom} </p>
                            <p>To: {locationTo} </p>
                        </div>
                        <div>
                            <div className="bg-light p-2 rounded mt-2">
                                <img src={img} height="40" width="40" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img src={preple} height="20" width="20" className="ml-2" alt="" />
                                <span className="ml-1">x1</span>
                                <span className="ml-2">{price1}</span>
                            </div>
                            <div className="bg-light p-2 rounded mt-2">
                                <img src={img} height="40" width="40" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img src={preple} height="20" width="20" className="ml-2" alt="" />
                                <span className="ml-1">x2</span>
                                <span className="ml-2">{price2}</span>
                            </div>
                            <div className="bg-light p-2 rounded mt-2">
                                <img src={img} height="40" width="40" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img src={preple} height="20" width="20" className="ml-2" alt="" />
                                <span className="ml-1">x3</span>
                                <span className="ml-2">{price3}</span>
                            </div>
                        </div>
                    </form>
                    }
                </div>
                <div className="col-md-6 p-5">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14639.914078608244!2d91.17315181977538!3d23.461239300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1621088469030!5m2!1sen!2sbd" 
                        width="100%"
                        height="450">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VahicleDetails;