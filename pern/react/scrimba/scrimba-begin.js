
// 6 - index.js

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>,
  document.getElementById("root")
);


_______________________________________

// index.js (functional component)

import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
        <h1>Akil</h1>
        <p>Normal guy :)</p>
        <ol>
          <li>Cape Town</li>
          <li>Miami</li>
          <li>London</li>
        </ol>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
);

_______________________________________