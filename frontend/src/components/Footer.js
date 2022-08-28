import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="justify-content-center d-flex">
                <div className="card-name">
                    <img alt="mastercard" scr="https://upload.wikipedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.png" />
                </div>
                <div className="card-name">
                    <img alt="visa" scr="https://upload.wikipedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
                </div>
                <div className="card-name">
                    <img alt="paypal" scr="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png" />
                </div>
                <div className="card-name">
                    <img alt="express" scr="https://upload.wikipedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
                </div>
                <div className="card-name">
                    <img alt="discover" scr="https://upload.wikipedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
                </div>
            </div>
        </div>
    );
};

export default Footer;