// @flow

import React from 'react';
import metrics from "../../utils/metrics.js";
import {Modal, Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import ProjectAPIUtils from '../../utils/ProjectAPIUtils.js'

type Props = {|
  applicationId: number,
  showModal: boolean,
  handleClose: (boolean) => void
|};
type State = {|
  showModal: boolean,
  isSending: boolean,
  message: ?string
|};


/**
 * Modal for concluding volunteer commitment
 */

class ProjectVolunteerConcludeModal extends React.PureComponent<Props, State> {
  constructor(props: Props): void {
    super(props);
    this.state = {
      showModal: false,
      isSending: false,
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  
  componentWillReceiveProps(nextProps: Props): void {
    let state: State = {
      showModal: nextProps.showModal
    };

    this.setState(state);
    this.forceUpdate();
  }
  
  handleMessageChange(event: SyntheticInputEvent<HTMLInputElement>): void {
      this.setState({message: event.target.value});
  }
  
  handleSubmit() {
    this.setState({isSending:true});
    // TODO: Add metrics
    ProjectAPIUtils.post("/volunteer/conclude/" + this.props.applicationId + "/",
      {
        message: this.state.message
      },
      response => this.closeModal(true),
      response => null /* TODO: Report error to user */
      );
  }

  closeModal(concluded: boolean){
    this.setState({
      isSending: false
    });
    this.props.handleClose(concluded);
  }

  render(): React$Node {
    return (
      <div>
          <Modal show={this.state.showModal}
             onHide={this.closeModal.bind(this, false)}
          >
              <Modal.Header >
                  <Modal.Title>Conclude Volunteering</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup>
                  <ControlLabel>Message:</ControlLabel>
                  <div className="character-count">
                    { (this.state.message || "").length} / 3000
                  </div>
                  <FormControl componentClass="textarea"
                    placeholder="Message for Project Owner (Optional)"
                    rows="4"
                    cols="50"
                    name="message"
                    maxLength="3000"
                    value={this.state.message}
                    onChange={this.handleMessageChange}/>
                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeModal.bind(this, false)}>{"Cancel"}</Button>
                <Button
                  onClick={this.handleSubmit}>{this.state.isSending ? "Sending" : "Send"}
                </Button>
              </Modal.Footer>
          </Modal>
      </div>
    );
  }
  
}

export default ProjectVolunteerConcludeModal;