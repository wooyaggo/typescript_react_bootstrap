import * as React from 'react';

export default class View extends React.Component{
	render(){
		const html = 
			<div className="top_nav">
				<div className="nav_menu">
					<nav className="" role="navigation">
						<div className="nav toggle">
							<a id="menu_toggle"><i className="fa fa-bars"></i></a>
						</div>

						<ul className="nav navbar-nav navbar-right">
							<li className="">
								<a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<span className=" fa fa-angle-down"></span>
								</a>
								<ul className="dropdown-menu dropdown-usermenu pull-right">
									<li><a href="#"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		
		return html;
	}
}