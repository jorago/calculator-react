import freeCodeCampLogo from '../images/logo.png';

function Logo() {
  return (
    <div className="freecodecamp-logo-container">
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
}

export default Logo;