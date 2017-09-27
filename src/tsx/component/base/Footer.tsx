import * as React from 'react';

export default class View extends React.Component{
	constructor( props: any ){
		super( props );
	}

	render(){
		const html = 
			<footer>
				<div className="pull-right">
					Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
				</div>
				<div className="clearfix"></div>
			</footer>
			
		return html;
	}
}