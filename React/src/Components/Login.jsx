
const Login = () => {
  return (
    <div>
       <div>
  <section className="main py-5 d-flex align-items-center">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">           
              {/* form start */}
              <form className="form">
                <div className="row login flex-md-row ms-md-3">
                  <div className="col-md-3">
                    <img className="img-logo" src="./img/logo3.jpg" alt />
                  </div>
                  <div className="col-md-9">
                    <h2 className="ms-md-5 mb-4">Login</h2>
                  </div>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" autofocus />
                  <div id="emailHelp" className="form-text" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="pass" placeholder="password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input mt-1" id="exampleCheck1" onClick="showHide(); return " />
                  <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>
                <div className="text-center">
                  <button onClick="loginForm(); return false" className="btn py-2 btn">
                    Sign In
                  </button>
                </div>
                <div>
                  <p className="text-center mt-2">
                    Forgot
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                      Username/Password?
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-center">
                    Dont have an account?
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                      Sign Up
                    </a>
                  </p>
                </div>
                <div className="msg" />
              </form>
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="text-center py-1 mb-0 bg-light">
    <p className="mb-0">© 2024 All Rights Reserved.</p>
  </footer>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./js/login.js"></script>
    </div>
  )
}

export default Login
