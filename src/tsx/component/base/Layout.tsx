import * as React from 'react';

import SideMenu from './SideMenu';
import Navigation from './Navigation';
import Footer from './Footer';

interface View<P = {}, S = {}> extends React.Component<P,S>{}

abstract class View<P,S> extends React.Component<P,S>{

	abstract renderContent(): JSX.Element;

	public render(): JSX.Element{
		
		const html = 
		<div>
			<SideMenu />
			<Navigation />
			{this.renderContent()}
			<Footer />
		</div>
		
		return html;
	}
}

export default View;