import React, { Component } from 'react';
import Button from './Button/Button';


import './styles.css';

// This component is not connected to the store. 

export class ModalExample extends Component {
	render() {
		const {  text, buttons, exit } = this.props.modalProps;



		return (
			<div className="ModalExample">
				{exit && (

					<div className="ModalExample__exit">
					{exit.map((exitProps, i) => {
						return <Button {...exitProps} key={`ModalButton${i}`} />;
					})}
					</div>

				)}

	
				{text && (
					<div className="ModalExample__body">
						<div className="ModalExample__text">{text}</div>
					</div>
				)}
				{buttons && (
					<div className="ModalExample__buttons">
						{buttons.map((buttonProps, i) => {
							return <Button {...buttonProps} key={`ModalButton${i}`} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

export default ModalExample;
