import React, { useEffect, useState } from "react";
import { Tab, TabGroupStyle } from "./TabGroup.styled";
import { useLocation, useNavigate } from "react-router-dom";

const TabGroup = ({ types }) => {
  const [active, setActive] = useState(types[0]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let arr = location.pathname.split("/");
    let data = types.find(
      (type) => type.toLowerCase() === arr[arr.length - 1].toLowerCase()
    );

    if (data) {
      setActive(data);
    }

    console.log(data);
  }, [location, types]);

  const handleClick = (type) => {
    const lower = type.toString().toLowerCase();
    setActive(type);
    navigate(`${lower}`);
  };
  return (
    <TabGroupStyle>
      {types.map((type) => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => handleClick(type)}
        >
          {type}
        </Tab>
      ))}
    </TabGroupStyle>
  );
};

export default TabGroup;
