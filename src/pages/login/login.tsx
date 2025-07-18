import type { FC, SyntheticEvent /*useEffect,*/ } from 'react';
import { /*useEffect,*/ useState } from 'react';
import { LoginUI } from '@/shared/ui/loginUI';
//import { useDispatch, useSelector } from '../../services/store';
//import { useLocation, useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //раскоментить когда будет взаимодействие с апи
  //const dispatch = useDispatch();
  const error = '';//useSelector(selectError);
  //const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.from || { pathname: '/' };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  /*  const data = { email, password };

    dispatch(fetchLoginUser(data)).then(() => {
      navigate(from);
    });
    */
  };
/*
  useEffect(() => {
    dispatch(clearErrorMessage());
  }, []);
*/
  return (
    <LoginUI
      errorText={error}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
