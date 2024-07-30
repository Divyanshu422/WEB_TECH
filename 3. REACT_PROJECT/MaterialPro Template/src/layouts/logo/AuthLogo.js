import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/dark-logo-icon.svg';
import { ReactComponent as LogoDarkText } from '../../assets/images/logos/dark-logo-text.svg';
import aiims from '../../assets/images/logos/aiims.jpg';
// import { ReactComponent as LogoWhiteText } from '../../assets/images/logos/white-logo-text.svg';

const AuthLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);

  return (
    <div className="p-4 d-flex justify-content-center gap-2">
      {isDarkMode !== false ? (
        <>
          <div className="logo">
            {/* <img src={aiims} alt='AIIMS' style={{height:'70px'}}/> */}
            <br></br>
            <label style={{fontWeight:'bold',color:'white'}}>Student Management System(SMS)</label>
            </div>
        </>
      ) : (
        <>
          <LogoDarkIcon />
          <LogoDarkText />
        </>
      )}
    </div>
  );
};

export default AuthLogo;
