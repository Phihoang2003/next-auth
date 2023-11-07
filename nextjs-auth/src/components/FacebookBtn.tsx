import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

interface Facebook {
  children: ReactNode;
}
const FacebookBtn: FC<Facebook> = ({ children }) => {
  const loginWithFacebook = () => console.log("login with facebook");
  

  return (
    <Button onClick={loginWithFacebook} className='w-full mt-3'>
      {children}
    </Button>
  );
};

export default FacebookBtn;
