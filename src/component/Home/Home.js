import React from 'react';
import './Home.css';
import bick from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import Vahicle from '../Vahicle/Vahicle';


const vahicles = [
    {
        id: 1,
        name: "BICK",
        img: bick

    },
    {
        id: 2,
        name: "CAR",
        img: car

    },
    {
        id: 3,
        name: "BUS",
        img: bus

    },
    {
        id: 4,
        name: "TRAIN",
        img: train

    }
]

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row">
                    {
                        vahicles.map(vahicle => <Vahicle vahicle={vahicle} key={vahicle.id}></Vahicle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;