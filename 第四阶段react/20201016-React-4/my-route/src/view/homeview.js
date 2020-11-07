import React from 'react';
import img_2 from '../img/img_2.png'

export default function HomeView() {
    return (
        <div>
            <img src={require("../img/img4.png")}/>
            <div class="wrap">
                <img src={require("../img/img_1.png")}/>
                <img src={img_2} />
            </div>
        </div>
    )
}