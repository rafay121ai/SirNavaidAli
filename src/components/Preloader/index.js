import React from "react";

import loaderImg from '../../assets/images/logos/navaid-logo.png'

const Preloader = () => {
  return (
    <div id="react__preloader">
		<div className="react__loader_logo animated-logo">
			<img src={loaderImg} alt="Navaid Logo" />
		</div>
	</div> 
  );
};

export default Preloader;
