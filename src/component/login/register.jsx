import React  from "react";


export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">FirstName</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
            <label htmlFor="lastname">LastName</label>
              <input type="text" name="lastName" placeholder="lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber">phonenumber</label>
              <input type="text" name="phonenumber" placeholder="phonenumber" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
              </div>
            <div className="form-group">
              <label htmlFor="comfirmpassword">Comfirm Password</label>
              <input type="text" name="comfirmpassword" placeholder="comfirmpassword" />
            </div>
            
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}