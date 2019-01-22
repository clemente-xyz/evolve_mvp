import React from "react";
import Apollo from "./apollo/client";
import { Signup } from "./pages";

const App = () => Apollo(<Signup />);

export default App;
