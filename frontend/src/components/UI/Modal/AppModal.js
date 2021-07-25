import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';

const AppModal = (props) => {
	const { show, heading, size, handleClose, children } = props;

	return (
		<Modal show={show} size={size} onHide={handleClose} backdrop={'static'}>
			{heading && (
				<Modal.Header closeButton>
					<Modal.Title>{heading}</Modal.Title>
				</Modal.Header>
			)}
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
};

export default AppModal;
