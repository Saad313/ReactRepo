import React from "react";

export default function Pet (props) {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.getName),
    React.createElement('h2', {}, props.getAge),
  ]);
};
