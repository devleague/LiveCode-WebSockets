import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inviteUser, acceptInvite, declineInvite } from '../actions';

class LobbyContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser : null,
    };

    this.selectUser = this.selectUser.bind(this);
    this.onInvite = this.onInvite.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onClickDecline = this.onClickDecline.bind(this);
  }
  selectUser(username){
    return () => { // onClick handler
      this.setState({
        selectedUser : username
      });
    }
  }
  onInvite(){
    this.props.inviteUser( this.state.selectedUser );
  }
  onClickAccept(){
    this.props.acceptInvite( this.props.invitesFrom );
  }
  onClickDecline(){
    this.props.declineInvite( this.props.invitesFrom );
  }
  render() {
    return (
      <div>
        <div>You are logged in as: {this.props.username}</div>
        <div>
          <ul>
            {
              this.props.users
                .filter( username => username !== this.props.username )
                .map( username =>
                  <li
                    onClick={this.selectUser(username)}
                    className={ this.state.selectedUser === username ? 'selectedUser' : '' }
                    style={{cursor:'pointer'}}>
                    { username }
                  </li>
              )
            }
          </ul>
          <button onClick={this.onInvite} type="button">Invite to Game</button>
          {
            ( this.props.invitesFrom !== null ) ?
              <div>
                <p>
                  You were invited to play a game with { this.props.invitesFrom }
                </p>
                <button onClick={this.onClickAccept} type="button">Accept</button>
                <button onClick={this.onClickDecline} type="button">DECLINE</button>
              </div>
            : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    users: state.users,
    invitesFrom : state.invitesFrom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inviteUser: selectedUser => {
      dispatch(inviteUser(selectedUser))
    },
    acceptInvite: invitesFrom => {
      dispatch(acceptInvite(invitesFrom))
    },
    declineInvite: invitesFrom => {
      dispatch(declineInvite(invitesFrom))
    }
  }
}

const Lobby = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);

export default Lobby;

