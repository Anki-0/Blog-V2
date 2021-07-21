// import axios from 'axios';
import React from 'react';
import Loader from '../src/Loader/Loader';
import useCheckAuth from '../src/_services/useCheckAuth';
import toast, { Toaster } from 'react-hot-toast';

// interface response {
//   status: string | boolean;
//   token: string | boolean;
//   message: string;
// }
// const initi = { status: false, token: false, message: 'null' };

export default function SignIn(): JSX.Element {
  // const [test, settest] = useState<response>(initi);
  const { isAuthenticated, user, status } = useCheckAuth();
  const success = (): string => toast('Here is your toast.');
  console.log(
    `isAuthenticated => ${isAuthenticated} ?  user => ${JSON.stringify(user)} ? status => ${status}`
  );

  const loginHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    // try {
    //   // const res = await axios.get(`http://127.0.0.1:3001/api/v1/posts/60f3c0a6e0d72304b8213614`, {
    //   //   withCredentials: true
    //   // });
    //   // const data: response = res.data;
    //   // settest(data);
    //   // console.log('res : =====> ', data);
    // } catch (error) {
    //   const { data } = error.response;
    //   await settest(data);

    //   console.log('err : =====> ', data);
    // }
  };

  return (
    <>
      <button onClick={loginHandler}>LoginHandler</button>
      <button onClick={success}>LOG ME</button>
      <Toaster />
      <Loader />
    </>
  );
}
