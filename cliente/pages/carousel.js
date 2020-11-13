import React from 'react'
import CarouselCompo2 from '../components/carousel/CarouselCompo2';
import CarouselComponent from '../components/carousel/CarouselComponent'
import {datax, caro2} from "../components/carousel/data";


function Carousel() {
    return (
        <div>
            <CarouselComponent datax={datax} />
            <br/>
            <CarouselCompo2 datax={caro2} />
        </div>
    )
}

export default Carousel






