
import SignIn from "../Login";
import SignUp from "../SignUp";
import { AuthDetails } from "./AuthDetails";

function AuthView() {
    return (
      <div className="App">
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    );
  }

export default AuthView;