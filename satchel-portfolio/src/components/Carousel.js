import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Verification from '../assets/eid/verification_success.png'
import UserPass from '../assets/eid/user_password_login.png'
import UserType from '../assets/eid/user_type.png'
import EmpMain from '../assets/eid/emp_main_settings.png'
import EmpPin from '../assets/eid/emp_pin.png'
import Login from '../assets/eid/Login_Page.png'

class Carousel extends Component {
    componentDidMount() {
        const options = {
            duration: 300,
            onCycleTo: () => {
                console.log("New Slide");
            }
        };
        M.Carousel.init(this.Carousel, options);

        //Instance Plugin
        // let instance = M.Carousel.getInstance(this.Carousel);
        // instance.next(2);
    }

    render() {
        return (
            <div
                ref={Carousel => {
                    this.Carousel = Carousel;
                }}
                className="carousel"
            >
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="2" src={UserPass} />
                </a>
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="3" src={EmpMain} />
                </a>
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="3" src={EmpPin} />
                </a>
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="3" src={Login} />
                </a>
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="1" src={Verification} />
                </a>
                <a className="carousel-item" style={styles.carouselItem} >
                    <img alt="3" src={UserType} />
                </a>
            </div>
        );
    }
}

export default Carousel;

const styles = {
    carouselItem: {
        height: '300px',
        width: '400px'
    }
}
