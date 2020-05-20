import React from "react";

const Header = ({ todos }) => {
  const handleCount = todos.length ? <p>{todos.length} Things to do</p> : <p />;
  return (
    <div>
      <h1>Todolite Apps</h1>
      {handleCount}
    </div>
  );
};

export default Header;
