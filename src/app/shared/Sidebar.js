import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
		 { path: '/rules', state: 'rulesMenuOpen' },
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>Henry Klein</Trans></h5>
                  <span><Trans>Gold Member</Trans></span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
				 <li className={ this.isPathActive('/rules/rules-index') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
					 <div className={ this.state.rulesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('rulesMenuOpen') } data-toggle="collapse">
						 <span className="menu-icon">
							 <i className="mdi mdi-laptop"></i>
						 </span>
						 <span className="menu-title"><Trans>Unit Card Generator</Trans></span>
						 <i className="menu-arrow"></i>
					 </div>
					 <Collapse in={ this.state.rulesMenuOpen }>
						 <div>
							 <ul className="nav flex-column sub-menu">
								 <li className="nav-item"> <Link className={ this.isPathActive('/rules/rules-index') ? 'nav-link active' : 'nav-link' } to="/rules/rules-index"><Trans>Rules</Trans></Link></li>
								
							 </ul>
						 </div>
					 </Collapse>
				 </li>
        


        
          <li className={ this.isPathActive('/icons') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title"><Trans>Icons</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title"><Trans>Documentation</Trans></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);