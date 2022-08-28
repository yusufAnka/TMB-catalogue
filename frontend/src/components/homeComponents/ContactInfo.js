import React from "react"

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt">
                            </i>
                        </div>
                        <h5>Call Us 24x7</h5>
                        <p>08134448582</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5>Headquarter</h5>
                        <p>No. 5 Amsaf Plaza Bye-Pass Gusau.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-fax"></i>
                        </div>
                        <h5>Tel</h5>
                        <p>08134448582</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;