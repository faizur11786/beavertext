const Logo = () => {
  return (
    <a href="/" className="brand">
      <div className="brand__logo">
        <svg viewBox="0 0 24 24" width="30" height="30">
          <path
            fill="#0089FF"
            d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"
          />
        </svg>
      </div>
      <div className="brand__title">
        <h3>TextApp</h3>
      </div>
    </a>
  );
};

export default Logo;
