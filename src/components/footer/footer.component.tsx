import React from "react";
import "./footer.css";

export class FooterComponent extends React.Component {
  render() {
    return (
      <div className="dlc-footer">
        <div className="dlc-footer-payment">
          <h3>CÁCH THỨC THANH TOÁN</h3>
          <img src={process.env.PUBLIC_URL + "images/payments.png"} alt="payments" />
        </div>
        <div className="dlc-footer-contact">
          <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div>
            <img className="dlc-footer-contact-icon" src={process.env.PUBLIC_URL + "svgs/facebook.svg"} alt="facebook-icon"/>
            <img className="dlc-footer-contact-icon" src={process.env.PUBLIC_URL + "svgs/google.svg"} alt="google-icon"/>
            <img className="dlc-footer-contact-icon" src={process.env.PUBLIC_URL + "svgs/youtube.svg"} alt="youtube-icon"/>
          </div>
        </div>
        <div className="dlc-footer-tag">
          Copyright ©2021 Đức Long Cafe
        </div>
      </div>
    );
  }
}
