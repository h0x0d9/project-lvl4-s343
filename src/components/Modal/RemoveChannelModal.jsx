import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import Alert from '../Alert';
import connect from '../../connect';


@connect(null)
@reduxForm({
  form: 'removeChannel',
  onSubmitSuccess: (...args) => {
    const [, , props] = args;
    props.reset();
  },
})
class removeChannelModal extends React.Component {
  removeChannel = () => {
    const { removeChannel, id } = this.props;
    return removeChannel(id);
  }

  render() {
    const {
      submitting,
      handleSubmit,
      hideModal,
    } = this.props;

    return (
      <>
        <Modal show onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Are you absolutely sure?</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit(this.removeChannel)}>
            <Modal.Body>
              <p>
                This action cannot be undone.
                This will permanently delete the channel and remove all messages in.
              </p>
              <Alert type="channel" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideModal}>Cancel</Button>
              <Button
                type="submit"
                variant="danger"
                disabled={submitting}
              >
                Remove
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}

export default removeChannelModal;
