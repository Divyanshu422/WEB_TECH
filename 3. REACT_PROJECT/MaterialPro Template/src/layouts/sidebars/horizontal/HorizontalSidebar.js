import { Container, Nav } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SidebarData from '../sidebardata/HorizontalSidebarData';
import NavSubItem from './NavSubItem';
import NavSingleItem from './NavSingleItem';

const HorizontalSidebar = () => {
  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const isMobileSidebar = useSelector((state) => state.customizer.isMobileSidebar);
  return (
    <></>
  );
};

export default HorizontalSidebar;
