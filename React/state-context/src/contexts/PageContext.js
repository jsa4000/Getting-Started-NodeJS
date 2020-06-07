import React, { useState, createContext } from "react";

const PageContext = createContext();

const PageProvider = props => {
  const [index, setIndex] = useState("default");
  return (
    <PageContext.Provider value={{ index, setIndex }}>
      {props.children}
    </PageContext.Provider>
  );
};

// JavaScript automatically assign names to a key-value pair if not provided
// {children} This makes the context to be used for the DOM children assigned.
/*
const PageProvider = () => {
    const [index, setIndex] = useState(0);
    return (
      <PageContext.Provider value={{ 
          index: index, 
          setIndex: setIndex }}>
        {children}
      </PageContext.Provider>
    );
  };
*/

export {PageContext, PageProvider};
