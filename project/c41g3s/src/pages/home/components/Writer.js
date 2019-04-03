import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style';
import imgurl from "./百年孤独.jpeg"

class Writer extends PureComponent {

	render() {
		const styles={
			width:"278px",
			height:"300px"
			
		}
		return (
			<WriterWrapper >
				<img src={imgurl}	style={styles}></img>
		
			</WriterWrapper>
		)
	}
}
<style>
	img{
		// width:	100%;
		
	}
</style>


export default Writer;
