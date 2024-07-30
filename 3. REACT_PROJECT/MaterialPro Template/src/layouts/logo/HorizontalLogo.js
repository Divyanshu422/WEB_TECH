import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/dark-logo-icon.svg';
import { ReactComponent as LogoDarkText } from '../../assets/images/logos/dark-logo-text.svg';
import aiims from '../../assets/images/logos/aiims.jpg';
// import { ReactComponent as LogoWhiteText } from '../../assets/images/logos/white-logo-text.svg';

const HorizontalLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const activetopbarBg = useSelector((state) => state.customizer.topbarBg);
  return (
    <Link to="/" className="d-flex align-items-center gap-2">
      {isDarkMode || activetopbarBg !== 'white' ? (
        <>
          <div className="logo">
            {/* <img src={aiims} alt='AIIMS' style={{height:'20px'}}/> */}
            <br></br>
            <label style={{fontWeight:'bold',color:'white'}}>Student Management System(SMS)</label>
            </div>
        </>
      ) : (
        <>
          <LogoDarkIcon />
          <LogoDarkText className="d-none d-lg-block" />
        </>
      )}
    </Link>
  );
};

export default HorizontalLogo;
