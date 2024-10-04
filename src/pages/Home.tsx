import { Link } from "react-router-dom";
/********** Components **********/
import MainContainer from "../components/common/MainContainer";


const Home = () => {

  return (
    <>
      <MainContainer>
        <div>hi</div>
        <Link to='/register'><button>register</button></Link>
        <Link to='/login'><button>Login</button></Link>
      </MainContainer>
    </>
  );
};

export default Home;
