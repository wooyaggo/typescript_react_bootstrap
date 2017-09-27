import * as React from 'react';

export default class View extends React.Component{
	render(){
		const html =
			<div className="col-md-3 left_col">
				<div className="left_col scroll-view">
					<div className="navbar nav_title" style={{border: 0}}>
						<a href="/" className="site_title"><i className="fa fa-adn"></i> <span>Machi Knights</span></a>
					</div>

					<div className="clearfix"></div>

					<div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
						<div className="menu_section">
							<ul className="nav side-menu">
								<li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
									<ul className="nav child_menu">
										<li><a href="/">Dashboard</a></li>
									</ul>
								</li>
								<li><a><i className="fa fa-user"></i> User <span className="fa fa-chevron-down"></span></a>
									<ul className="nav child_menu">
										<li><a href="/user/hourly_activations">Hourly Activations</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		return html;
	}
}