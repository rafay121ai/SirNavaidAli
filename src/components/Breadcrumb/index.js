import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
	const { pageTitle } = props;

	return (
		<div className="react-breadcrumbs">
			<div className="breadcrumbs-wrap">
				<div className="breadcrumbs-inner">
					<div className="container">
						<div className="breadcrumbs-text">
							<h1 className="breadcrumbs-title wow animate__fadeInUp" data-wow-duration="0.3s">{pageTitle ? pageTitle : 'Page'}</h1>
							<div className="back-nav wow animate__fadeInUp" data-wow-duration="0.5s">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>{pageTitle ? pageTitle : 'Page'}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>                
		</div>
	);
}

export default Breadcrumb;




