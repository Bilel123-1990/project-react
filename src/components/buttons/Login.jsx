import React from 'react'

const Login = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-toggle="modal"
        data-target="#loginModal"
      >
        <span className='fa fa-sign-in me-1'></span>Login
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
  <div classeName="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" classeName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" classeName="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div classeName="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" classeName="form-control" id="exampleInputPassword1"/>
  </div>
  <div classeName="form-group form-check">
    <input type="checkbox" classeName="form-check-input" id="exampleCheck1"/>
    <label classeName="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classeName="btn btn-outline-primary w-100">Submit</button>
</form>

            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
