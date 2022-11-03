const React = require('react');
const Layout = require('./Layout');

module.exports = function (props) {
  return (
    <Layout>
      <div>
        <h1>Main</h1>
        <div className="wrapMain">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="button-block">
                  <button name="buttonTag" type="button" className="buttonBox">Показать запись по тегу</button>
                  <input name="inputTag" className="form-control" type="text" id="fname" />
                  <button name="buttonId" type="button" className="buttonBox">Показать запись по ID</button>
                  <input name="inputId" className="form-control" type="text" id="fname" />
                  <button name="buttonAll" type="button" className="buttonBox">Показать Все записи</button>
                  <button name="buttonCreate" type="button" className="buttonBox" data-bs-toggle="modal" data-bs-target="#createModal">Создать запись</button>
                </div>
              </div>
              <div className="col-2" />
              <div className="col-6">
                <div className="post-block" />
              </div>

            </div>
          </div>
          <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Бобро Пост</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <form action="/" method="post">
                  <div className="modal-body">
                    <label>
                      <p>Title Post</p>
                      <input name="createTitle" className="form-control" type="text" id="modalTitle" />
                    </label>
                    <label>
                      <p>Body Post</p>
                      <textarea name="createBody" className="form-control" type="text" id="modalBody" />
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button name="modalClose" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button name="modalSaveChange" type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  );
};
