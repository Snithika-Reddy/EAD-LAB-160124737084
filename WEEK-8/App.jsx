import React, { useDeferredValue } from "react";
import Counter from "./ReactPrograms/Counter";
import {BrowserRouter,Routes,Link,Route} from "react-router-dom";
import Timer from "./ReactPrograms/Timer";
import Timer60 from "./ReactPrograms/Timer60";
import PassworrdStrength from "./ReactPrograms/PassworrdStrength";
import Parent from "./ReactPrograms/Props/Parent";
import Pagination from "./ReactPrograms/Pagination";
function App()
{
  return(
    <div>
      <BrowserRouter>
          <nav>
              <Link to="/home">Home</Link>|{" "}
              <Link to="/counter">CounterProgram</Link>|{" "}
              <Link to="/timer">TimerProgram</Link>|{" "}
              <Link to="/Password">PasswordChecker</Link>|{" "}
              <Link to="/Props">PropStudentDetails</Link>|{" "}
              <Link to="/timer60">Timer60Program</Link>|{" "}
              <Link to="/pagination">Pagination</Link>
          </nav>
          <Routes>
              <Route path="/home" element={<h2>HOME PAGE</h2>} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/Password" element={<PassworrdStrength />} />
              <Route path="/Props" element={<Parent />} />
              <Route path="/timer60" element={<Timer60 />} />
              <Route path="/pagination" element={<Pagination />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}export default App;