import { useEffect, type FC } from 'react'
import { AppRouter } from '@/app/router';
import { Header } from '@/components/Header/Header';
import { useTheme } from '@/hooks/useTheme/useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router-dom';

interface AppProps {}

export const App: FC<AppProps> = () => {
  const { theme } = useTheme();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && window.location.pathname !== '/auth') {
      navigate('/auth')
    }
  }, [ isAuth ])

  return (
    <div className={`app ${theme}`}>
      { isAuth && <Header /> }
      <AppRouter />
    </div>
  );
}