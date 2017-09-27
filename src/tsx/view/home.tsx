import * as React from 'react';

import Layout from '../component/base/Layout';

export default class View extends Layout<{}, {}>{
	constructor( props: any ){
		super( props );
	}
	
	public renderContent(){
		const content =
			<div className="right_col" role="main">
				<div className="page-title">
					<div className="title_left">
						<h3>Dashboard</h3>
						<div className="clearfix"></div>
					</div>
				</div>

				<div className="clearfix"></div>

				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<h2>Requests</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<canvas id="requestChart"></canvas>
							</div>
						</div>
					</div>
					
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="x_panel">
							<div className="x_title">
								<h2>Acqusitions</h2>
								<div className="clearfix"></div>
							</div>
							<div className="x_content">
								<canvas id="acqusitionChart"></canvas>
							</div>
						</div>
					</div>
					
					<div className="clearfix"></div>
				</div>
			</div>
		
		return content;
	}
}