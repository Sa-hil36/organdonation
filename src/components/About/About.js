import React from 'react';
import "../About/About.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div id="about">
            <h1 className="second">
                <span><b>About Us</b></span>
            </h1>
            <div className="content">
                <div className="rightchild">
                    <div className="images">
                        <div className="image_circle">
                            <img
                                src="https://www.uniquenewsonline.com/wp-content/uploads/2022/08/flat-world-organ-donation-day-illustration-with-hands-showing-heart_23-2149478062.webp"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="facts">
                        <h2>DONATE LIFE - An Initiative For Organ Donation</h2>
                        'Beyond Life, There Is Hope For A Better Tomorrow'
                        <br />
                        The cycle of life and death is a very beautiful, undeniable phenomenon
                        that is in the hands of a power that is beyond human. But saving lives
                        and giving the gift of breath is in our power and is completely human.
                        How do we do that? By donating our organs.
                        <br />
                        <br />
                        Organ donation is the need of the day and a hope for the brighter
                        ‘Organ Donation Is A Blessing That Stays Long After You Have Passed Away’
                        future of those who are not as blessed as most of us. There are those
                        who need an organ to survive and then there are those who have
                        transcended into a different world and whose organs could infuse life
                        in many who are still in this world. Our non-profit organisation,
                        Donate Life, serves as the bridge between the two.
                        <br />
                        <br />
                        <br />
                        Organ transplantation emerged relatively late in India, starting only in the 1970s. Despite nearly five decades passing since then, the country still has significant progress to make in this field. Donate Life is committed to bridging this gap, operating without any profit motive, to facilitate organ donations between willing donors and recipients on a global scale.
                        <br />
                        Life holds immeasurable value, transcending any material worth. This inherent value makes the preservation of life a formidable challenge. At Donate Life, we embrace this challenge with unwavering determination. Our singular focus is on transforming the seemingly impossible into reality. Every endeavor we undertake is aimed at expanding the pool of organ donors while reducing the tragic loss of lives due to the unavailability of transplant organs. In doing so, we endeavor to offer the precious gift of life to those in need.
                    </div>
                </div>
            </div>
            <br></br>
            <div className="initiate">
                To be a part of this initiative
            </div>
            <div className="list-button">
                <center>
                    <Link to="/Donor_Register" className="btn btn-primary button-71" >
                        Register as Donor
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;

                    <Link to="/Needy_signup" className="btn btn-primary button-71">
                        Register as Needy
                    </Link>
                </center>
            </div>
        </div>


    );

}

export default About;





