import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Join for Free!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            praesentium molestias nobis harum eos optio voluptas rem voluptatem
            commodi culpa, mollitia nemo, alias iure saepe accusamus porro,
            natus debitis in.
          </p>
          <span>Do you have a account?</span>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
