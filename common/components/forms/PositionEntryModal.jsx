// @flow

import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {TagDefinition} from "../utils/ProjectAPIUtils.js";
import TagSelector from "../common/tags/TagSelector.jsx";
import TagCategory from "../common/tags/TagCategory.jsx";
import {PositionInfo} from "./PositionInfo.jsx";
import url from "../utils/url.js";
import _ from 'lodash'

type Props = {|
  showModal: boolean,
  existingPosition: PositionInfo,
  onSavePosition: (PositionInfo) => void,
  onCancel: (void) => void
|};
type State = {|
  positionInfo: PositionInfo
|};

/**
 * Modal for adding/editing project positions
 */
class PositionEntryModal extends React.PureComponent<Props,State> {
  close: Function;
  save: Function;
  
  constructor(props: Props): void {
    super(props);
    this.state = {
      showModal: false,
      positionInfo: {
        roleTag: null,
        descriptionUrl: ""
      }
    };
  
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
  }
  
  resetModal(existingPosition: ?PositionInfo): void {
    if(existingPosition) {
      this.setState({
        "positionInfo": _.cloneDeep(existingPosition)
      });
      this.forceUpdate();
    } else {
      this.setState({
        "positionInfo": {
          roleTag: null,
          descriptionUrl: ""
        }
      });
    }
  }
  
  componentWillReceiveProps(nextProps: Props): void {
    this.setState({ showModal: nextProps.showModal });
    this.resetModal(nextProps.existingPosition);
  }
  
  close(): void {
    this.setState({showModal: false});
    this.props.onCancel();
  }
  
  save(): void {
    this.state.positionInfo.descriptionUrl = url.appendHttpIfMissingProtocol(this.state.positionInfo.descriptionUrl);
    this.props.onSavePosition(this.state.positionInfo);
    this.close();
  }
  
  onRoleChange(role: $ReadOnlyArray<TagDefinition>): void {
    this.state.positionInfo.roleTag = role[0];
    this.forceUpdate();
  }
  
  onDescriptionChange(event: SyntheticInputEvent<HTMLInputElement>): void {
    this.state.positionInfo.descriptionUrl = event.target.value;
    this.forceUpdate();
  }
  
  render(): React$Node {
    return (
      <div>
          <Modal show={this.state.showModal}
                 onHide={this.close}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Position Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="form-group">
                    <label htmlFor="project_technologies">Position</label>
                    <TagSelector
                      value={[this.state.positionInfo.roleTag]}
                      category={TagCategory.ROLE}
                      allowMultiSelect={false}
                      onSelection={this.onRoleChange.bind(this)}
                    />
                  </div>
  
                <div className="form-group">
                  <label htmlFor="link-position-description">Link to Description</label>
                  <input type="text" className="form-control" id="link-position-description" maxLength="2075" value={this.state.positionInfo.descriptionUrl} onChange={this.onDescriptionChange.bind(this)}/>
                </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                  <Button disabled={!this.state.positionInfo.roleTag} onClick={this.save}>Save</Button>
              </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default PositionEntryModal;