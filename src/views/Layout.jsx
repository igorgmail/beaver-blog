const React = require('react');
const SignUpModal = require('./signUpModal');
const SigInpModal = require('./signInModal');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        <title>Beaver Blog</title>
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div className="header">
              <div className="col-8">
                <div className="header-text">Бобро Блог</div>
              </div>
              <div className="col-4">
                <div className="sign-block">
                  <a href="./" data-bs-toggle="modal" data-bs-target="#signInModal">
                    <div className="sign-in">SignIn</div>
                  </a>
                  {' '}
                  <a href="./" data-bs-toggle="modal" data-bs-target="#signUpModal">
                    <div className="sign-up">SignUp</div>
                  </a>
                  <div className="sign-out" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="icon">
                  <img src="/img/beaver.png" alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <input name="setName" className="form-control" type="text" />
                  </label>
                  <label className="title-text">
                    Email
                    <input name="setEmail" className="form-control" type="email" />
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
        </div> */}
        <SigInpModal />
        <SignUpModal />
        {children}
        <script src="/js/script.js" />
      </body>
    </html>
  );
};
