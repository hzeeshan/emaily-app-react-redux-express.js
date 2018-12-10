import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends Component {
  renderContent() {
    if (!this.props.auth) {
      //return "loading";
      return (
        <li key={1}>
          <a href="/auth/google">Login with Google</a>
        </li>
      );
    } else if (this.props.auth.googleId) {
      return [
        <li key={2}>
          <Payment />
        </li>,
        <li key={3}>
          <a href="/api/logout">LogOut</a>
        </li>
      ];
    }
    /* switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
        dafault: return (
          <li>
            <a>LogOut</a>
          </li>
        );
    }*/
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
