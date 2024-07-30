import React, { useState } from 'react';
import { Nav } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import SidebarData from '../sidebardata/SidebarData';
import NavItemContainer from './NavItemContainer';
import NavSubMenu from './NavSubMenu';
import user1 from '../../../assets/images/logos/offcier.jpg';
import probg from '../../../assets/images/logos/anchor.jpg';
import aiims from '../../../assets/images/logos/aiims.jpg';
import aiims2 from '../../../assets/images/logos/photonavy.jpg';
import divsion from '../../../assets/images/logos/Divisions_at_INA.jpg';
import divsion1 from '../../../assets/images/logos/640px-INS_Vikrant_(R11)_and_INS_Vikramaditya_(R33)_during_joint_exercise.jpg';

const Sidebar = () => {
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');

  const [logoCentered, setLogoCentered] = useState(false);

  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);

  const handleSidebarHover = () => {
    setLogoCentered(!logoCentered);
  };

  return (
    <div className={`sidebarBox shadow bg-${activeBg} ${isFixed ? 'fixedSidebar' : ''}`} onMouseEnter={handleSidebarHover} onMouseLeave={handleSidebarHover}>
      {/* <SimpleBar style={{ height: '100%' }}>
        <div className="profilebg" style={{}}>
          <div className="p-3 d-flex" style={{ justifyContent: logoCentered ? 'center' : 'flex-start', }}>
            <img src={aiims} alt="user" width="60" className="rounded-" />
          </div>
          {/* <div className="bg-dark text-dark-white p-2 opacity-75 text-truncate">Steave Rojer</div> */}
        {/* </div> */}
        <SimpleBar style={{ height: '100%' }}>
        {/* <div className="profilebg" style={{ background: `url(${probg}) no-repeat`, backgroundSize: 'cover' , backdropFilter: 'blur(50px)' }}>
          <div className="p-3 d-flex">
            <img src={user1} alt="user" width="50" className="rounded-circle" />
          </div>
          <div className="bg-dark text-dark-white p-2 opacity-75 text-truncate">NAI User</div>
        </div> */}

        {/********Sidebar Content*******/}
        <div className="p-3 pt-1 mt-2">
          <Nav vertical className={activeBg === 'white' ? '' : 'lightText'}>
            {SidebarData.map((navi) => {
              if (navi.caption) {
                return (
                  <div className="navCaption text-uppercase mt-4" key={navi.caption}>
                    {navi.caption}
                  </div>
                );
              }
              if (navi.children) {
                return (
                  <NavSubMenu
                    key={navi.id}
                    icon={navi.icon}
                    title={navi.title}
                    items={navi.children}
                    suffix={navi.suffix}
                    suffixColor={navi.suffixColor}
                    isUrl={currentURL === navi.href}
                  />
                );
              }
              return (
                <NavItemContainer
                  key={navi.id}
                  className={location.pathname === navi.href ? 'activeLink' : ''}
                  to={navi.href}
                  title={navi.title}
                  suffix={navi.suffix}
                  suffixColor={navi.suffixColor}
                  icon={navi.icon}
                />
              );
            })}
          </Nav>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
