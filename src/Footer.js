import React from "react";
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
	return (
		<div className="box">
			<div className="container">
				<div className="row">
					<div className="section">
						<h2 >Food Lab</h2>
						<p>
							203, Abc road, xyz
						</p>
						<p>
							<span style={{ fontWeight: "bolder" }}>Phone:</span> +91 44 4269 2288
						</p>
						<p>

							<span style={{ fontWeight: "bolder" }}>Email:</span>  admin@parikshan.net.in
						</p>

					</div>
					<div className="right">
						<div className="column">
						<div className="heading" style={{color:"green",fontWeight:"bolder",fontSize:"30px"}}>______</div>
							<div className="heading">Useful Link</div>
							<a href="#" className="footer-link">
								<i className="fab fa-facebook-f"></i>
								<span style={{ marginLeft: "10px" }}>Facebook</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-instagram"></i>
								<span style={{ marginLeft: "10px" }}>Instagram</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-twitter"></i>
								<span style={{ marginLeft: "10px" }}>Twitter</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-youtube"></i>
								<span style={{ marginLeft: "10px" }}>Youtube</span>
							</a>
						</div>
						<div className="column">
							<a href="#" className="footer-link">
								<i className="fab fa-facebook-f"></i>
								<span style={{ marginLeft: "10px",visibility: "hidden"  }}>Support</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-facebook-f"></i>
								<span style={{ marginLeft: "10px",visibility: "hidden"  }}>Support</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-facebook-f"></i>
								<span style={{ marginLeft: "10px",visibility: "hidden" }}>Support</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-facebook-f"></i>
								<span style={{ marginLeft: "10px" }}>Support</span>
							</a>
							<a href="#" className="footer-link">
								<i className="fab fa-instagram"></i>
								<span style={{ marginLeft: "10px" }}>Contact Us</span>
							</a>
						</div>
						<div className="column">
						<div className="heading" style={{color:"green",fontWeight:"bolder",fontSize:"30px"}}>______</div>
							<div className="heading">Site Map</div>
							<a href="#" className="footer-link">Uttar Pradesh</a>
							<a href="#" className="footer-link">Ahemdabad</a>
							<a href="#" className="footer-link">Indore</a>
							<a href="#" className="footer-link">Mumbai</a>
						</div>
						<div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
