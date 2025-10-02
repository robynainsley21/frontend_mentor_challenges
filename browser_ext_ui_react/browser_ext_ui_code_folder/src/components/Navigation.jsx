export default function Navigation({ theme }) {
  return (
    <>
      <div id="navigation">
        <div className="nav_logo"><img src="./src/assets/images/logo.svg" alt="logo" /></div>
        <div className="settings_items">{theme}</div>
      </div>
    </>
  );
}
