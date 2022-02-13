import '../InfoBoxes/InfoBoxes.css';
import { Modal } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import React from 'react';

function InfoBoxes({ text }) {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };

    return (
        <div>
            <Button auto color="gradient" shadow onClick={handler}>
                Read More
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                width={"60%"}
                noPadding={false}>
                    <div id="info-box-text">
                        { text }
                    </div>
            </Modal>
        </div>

    )
}

export default InfoBoxes;