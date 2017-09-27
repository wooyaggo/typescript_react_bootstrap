import * as Express from 'express';
import * as BodyParser from 'body-parser';

import react from './core/react';

const app = Express();
app.use( BodyParser.urlencoded( { extended: true } ) );
app.use( BodyParser.json() );

// Register static folders
[ "js", "css", "libs", "vendors" ].forEach( addStatic );

function addStatic( $path: string ): void{
	app.use( "/" + $path, Express.static( "./public/" + $path ) );
}

app.use( react );

export interface Req extends Express.Request{};
export interface Res extends Express.Response{
	react( $view: string, $param?: any, $html?: string ): void;
};

app.get( "/", ( $req: Req, $res: Res ) => {
	$res.react( "home", {} );
})

app.listen( 80, ()=>{
	console.log( 'Listening~' );
})