import React from 'react'
import CarouselComponent from '../components/carousel/CarouselComponent'
import {datax} from "../components/carousel/data";


function Carousel() {
    return (
        <div>
            <CarouselComponent datax={datax} />
        </div>
    )
}

export default Carousel






