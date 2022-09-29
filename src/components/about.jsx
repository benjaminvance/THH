import "./about.css";
import { useState } from "react";


const About = () => {
    const [visible, setVisible] = useState(false);

    const showEmail = () => {
        setVisible(true);
    };

    const getContent = () => {
        if (visible) {
            return <div>
                <p>The Holistic Hub is a Professional eCommerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of eCommerce, with a focus on dependability and Holistic. We're working to turn our passion for eCommerce into a booming online website. We hope you enjoy our eCommerce as much as we enjoy offering them to you.
                    I will keep posting more important posts on my Website for all of you. Please give your support and love.
                </p>
                <h5>Thank you for visiting The Holistic Hub!</h5>
                <p>Have a question?  Contact us <a href="./contact">Here</a></p>
            </div>
        }
        else {
            return <div>
                <p>Click the button below to learn about us!</p>
                <button onClick={showEmail} className="btn btn-primary">Show Info</button>
            </div>
        }
    }

    return (
        <div className="about-page">
            <h1 class="about-title">What is The Holistic Hub?</h1>
            {getContent()}
            {/* { visible ? <p>Email: thebenvance@gmail.com</p> }
        { !visible ? <button onClick={showEmail} className="btn btn-primary">Show Info</button> } */}
        </div>
    );
};

export default About;