import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { ScaleLoader } from 'react-spinners';
import './connect.css';
import DecorativeRectangleContainer from '../components/DecorativeRectangleContainer/DecorativeRectangleContainer';
import GroupCard from './components/GroupCard/GroupCard';

/**
 * Import dispatch actions
 */
import { getConnectGroups } from '../../services/api/connectGroup/connectGroupActions';

/**
 * import images
 */
import connectBackground from './images/connect.jpg';
import AlignItemCenter from '../components/AlignItemCenter/AlignItemCenter';

/**
 * setup vars
 */
const title = 'CONNECT GROUPS';
const loadingFailed = 'Loading events failed!';
const description_ln1 =
  'Our connect groups are the core of who we are. Connect groups are not just another program but the place where you can grow and really be known. We run 3 seasons of Connect Groups throughout the year: fall; winter; and spring. Our current season launches the last week of September.';
const description_ln2 =
  'Choose a group, contact the leader and try it out. Sometimes it takes a little while to find your fit, but you will.';

class Connect extends React.Component {
  constructor(props) {
    super(props);

    this.props.connectGroupsActions.getConnectGroups();
  }

  /**
   *
   * custom render functions
   */
  renderGroupCards(groups) {
    if (groups !== null) {
      return groups.map((group, index) => (
        <Col key={index} sm="12" md="6" lg="3">
          <GroupCard
            latitude={group.latitude}
            longitude={group.longitude}
            name={group.name}
            leader={group.leader}
            address={group.address}
            locationName={group.location.name}
            phone={group.phone}
            time={group.time}
          />
        </Col>
      ));
    }
  }
  render() {
    let { loading, connectGroups, error } = this.props;
    let bShowError = false;

    // If error then show the loading and error message
    if (error !== null) {
      bShowError = true;
      loading = true;
    }

    // Check if loading ... show loading spinner

    let loadingEventClass = 'loading-events-container';
    if (loading === false) {
      loadingEventClass = 'loading-events-container hide';
    }
    //
    return (
      <div className="connect-scene">
        <img src={connectBackground} alt="" />
        <Container>
          <DecorativeRectangleContainer>
            <div className="title">{title}</div>
            <p className="description">{description_ln1}</p>
            <p className="description">{description_ln2}</p>
          </DecorativeRectangleContainer>

          <div className="groups-container">
            <div className={loadingEventClass}>
              <AlignItemCenter className="loading-events">
                <ScaleLoader color={'#84A4C3'} loading={loading} />
                {bShowError ? (
                  <div className="groups-loading-error-text">
                    {loadingFailed}
                  </div>
                ) : (
                  ''
                )}
              </AlignItemCenter>
            </div>
            <Row>{this.renderGroupCards(connectGroups)}</Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.connectGroups.loading,
    error: state.connectGroups.error,
    connectGroups: state.connectGroups.connectGroups
  }),
  dispatch => ({
    connectGroupsActions: bindActionCreators(
      {
        getConnectGroups
      },
      dispatch
    )
  })
)(Connect);
