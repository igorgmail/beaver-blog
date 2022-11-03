const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUpModal(props) {
  return (
    <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">SignUp</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form action="/" method="post">
            <div className="modal-body">
              <label className="title-text">
                Name
                <input name="setName" className="form-control" type="text" autoComplete="off" />
              </label>
              <label className="title-text">
                Email
                <input name="setEmail" className="form-control" type="email" autoComplete="off" />
              </label>
              <label className="title-text">
                Password
                <input name="setPassword" className="form-control" type="password" />
              </label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="check1" name="showPassword" />
                <label className="form-check-label">Show Password</label>
              </div>
            </div>
            <div className="modal-footer">
              <button name="modalClose" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button name="modalSaveChange" type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
