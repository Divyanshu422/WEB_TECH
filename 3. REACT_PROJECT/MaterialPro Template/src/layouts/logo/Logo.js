import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
// import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/Indian_Navy_Insignia_(2022).svg.svg';
// import { ReactComponent as LogoDarkText } from '../../assets/images/logos/dark-logo-text.svg';
// import { ReactComponent as LogoWhiteIcon } from '../../assets/images/logos/AIIMSLOGO.svg';
import { ReactComponent as LogoWhiteText } from '../../assets/images/logos/white-logo-text.svg';
import image1 from '../../assets/images/logos/logo.png';

const Logo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const toggleMiniSidebar = useSelector((state) => state.customizer.isMiniSidebar);
  const activeTopbarBg = useSelector((state) => state.customizer.topbarBg);

  return (
    <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
      {isDarkMode || activeTopbarBg !== 'white' ? (
        <>
         <img src={image1} alt="Logo" width="100"  />
          {!toggleMiniSidebar && <span className="text-white fw-bolder">Student Management System(SMS)</span>}
        </>
      ) : (
        <>
          <LogoWhiteIcon />
          {!toggleMiniSidebar && <LogoWhiteText className="fw-bold" />}
        </>
      )}
    </Link>
  );
};

export default Logo;
