import "./style.scss";
import SignInForm from "../components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="signin">
      <SignInForm />
    </div>
    //   <div className="signin">
    //   <div className="row">
    //     <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3 p-5">
    //       <div className="panel border bg-white">
    //         <div className="panel-heading mt-3">
    //           <h3 className="text-center">Sign In</h3>
    //         </div>
    //         <div className="panel-body p-3">
    //           <SignInForm />
    //         </div>
    //         <div className="mx-3 py-2 bordert">
    //           <div className="text-center py-3">
    //             {/* <ThirdPartySignIns /> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignIn;
