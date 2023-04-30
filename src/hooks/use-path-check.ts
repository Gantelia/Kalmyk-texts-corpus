import { useLocation } from 'react-router-dom';
import { AppRoute } from '../const';

export function usePathCheck() {
  const { pathname } = useLocation();
  return pathname === AppRoute.Main;
}
