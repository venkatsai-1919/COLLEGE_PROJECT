import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {SCHEME2020,SCHEME2023,SEM1_2020_CSE,SEM2_2020_CSE,SEM3_2020_CSE,SEM4_2020_CSE,SEM5_2020_CSE,SEM6_2020_CSE,SEM1_2020_ECE,SEM2_2020_ECE,SEM3_2020_ECE,SEM4_2020_ECE,SEM5_2020_ECE,SEM6_2020_ECE,SEM1_2020_ECS,SEM2_2020_ECS,SEM3_2020_ECS,SEM4_2020_ECS,SEM5_2020_ECS,SEM6_2020_ECS,SEM1_2020_EEE,SEM2_2020_EEE,SEM3_2020_EEE,SEM4_2020_EEE,SEM5_2020_EEE,SEM6_2020_EEE,SEM1_2020_CIV,SEM2_2020_CIV,SEM3_2020_CIV,SEM4_2020_CIV,SEM5_2020_CIV,SEM6_2020_CIV,SEM1_2020_MECH,SEM2_2020_MECH,SEM3_2020_MECH,SEM4_2020_MECH,SEM5_2020_MECH,SEM6_2020_MECH,SUB_SEM1_2020_CSE,SUB_SEM2_2020_CSE,SUB_SEM3_2020_CSE,SUB_SEM4_2020_CSE,SUB_SEM5_2020_CSE,SUB_SEM6_2020_CSE,} from './abc';
import {SUB_SEM1_2020_CIV,SUB_SEM2_2020_CIV,SUB_SEM3_2020_CIV,SUB_SEM4_2020_CIV,SUB_SEM5_2020_CIV,SUB_SEM6_2020_CIV} from "./abc";
import {SUB_SEM1_2020_ECE,SUB_SEM2_2020_ECE,SUB_SEM3_2020_ECE,SUB_SEM4_2020_ECE,SUB_SEM5_2020_ECE,SUB_SEM6_2020_ECE} from "./abc";
import {SUB_SEM1_2020_ECS,SUB_SEM2_2020_ECS,SUB_SEM3_2020_ECS,SUB_SEM4_2020_ECS,SUB_SEM5_2020_ECS,SUB_SEM6_2020_ECS} from "./abc";
import {SUB_SEM1_2020_EEE,SUB_SEM2_2020_EEE,SUB_SEM3_2020_EEE,SUB_SEM4_2020_EEE,SUB_SEM5_2020_EEE,SUB_SEM6_2020_EEE} from "./abc";
import {SUB_SEM1_2020_MECH,SUB_SEM2_2020_MECH,SUB_SEM3_2020_MECH,SUB_SEM4_2020_MECH,SUB_SEM5_2020_MECH,SUB_SEM6_2020_MECH} from "./abc";

import Nopage from './Nopage';
import Navbar from './Navbar';
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
  },
  {
    path : "/scheme2020",
    element : <SCHEME2020/>,
  },
  {
    path : "/scheme2023",
    element : <SCHEME2023/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM1_2020_CSE/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM2_2020_CSE/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM3_2020_CSE/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM4_2020_CSE/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM5_2020_CSE/>
  },
  {
    path : "/scheme2020cse",
    element : <SEM6_2020_CSE/>
  },
  {
    path : "/scheme2020ece",
    element : <SEM1_2020_ECE/>
  },
  {
    path : "/scheme2020ece",
    element : <SEM2_2020_ECE/>
  }, {
    path : "/scheme2020ece",
    element : <SEM3_2020_ECE/>
  }, 
  {
    path : "/scheme2020ece",
    element : <SEM4_2020_ECE/>
  }, {
    path : "/scheme2020ece",
    element : <SEM5_2020_ECE/>
  }, 
  {
    path : "/scheme2020ece",
    element : <SEM6_2020_ECE/>
  },
  {
    path : "/scheme2020ecs",
    element : <SEM1_2020_ECS/>
  }, 
  {
    path : "/scheme2020ecs",
    element : <SEM2_2020_ECS/>
  }, 
  {
    path : "/scheme2020ecs",
    element : <SEM3_2020_ECS/>
  }, 
  {
    path : "/scheme2020ecs",
    element : <SEM4_2020_ECS/>
  }, 
  {
    path : "/scheme2020ecs",
    element : <SEM5_2020_ECS/>
  }, 
  {
    path : "/scheme2020ecs",
    element : <SEM6_2020_ECS/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM1_2020_EEE/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM2_2020_EEE/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM3_2020_EEE/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM4_2020_EEE/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM5_2020_EEE/>
  },
  {
    path : "/scheme2020eee",
    element : <SEM6_2020_EEE/>
  },
  {
    path : "/scheme2020civ",
    element : <SEM1_2020_CIV/>
  }, 
  {
    path : "/scheme2020civ",
    element : <SEM2_2020_CIV/>
  }, 
  {
    path : "/scheme2020civ",
    element : <SEM3_2020_CIV/>
  }, 
  {
    path : "/scheme2020civ",
    element : <SEM4_2020_CIV/>
  }, 
  {
    path : "/scheme2020civ",
    element : <SEM5_2020_CIV/>
  }, 
  {
    path : "/scheme2020civ",
    element : <SEM6_2020_CIV/>
  },
  {
    path : "/scheme2020mech",
    element : <SEM1_2020_MECH/>
  }, 
  {
    path : "/scheme2020mech",
    element : <SEM2_2020_MECH/>
  }, 
  {
    path : "/scheme2020mech",
    element : <SEM3_2020_MECH/>
  }, 
  {
    path : "/scheme2020mech",
    element : <SEM4_2020_MECH/>
  }, 
  {
    path : "/scheme2020mech",
    element : <SEM5_2020_MECH/>
  }, 
  {
    path : "/scheme2020mech",
    element : <SEM6_2020_MECH/>
  },
  {
    path:"/scheme2020csesem1",
    element: <SUB_SEM1_2020_CSE />
  },
  {
    path:"/scheme2020csesem2",
    element: <SUB_SEM2_2020_CSE />
  },
  {
    path:"/scheme2020csesem3",
    element: <SUB_SEM3_2020_CSE />
  },
  {
    path:"/scheme2020csesem4",
    element: <SUB_SEM4_2020_CSE />
  },
  {
    path:"/scheme2020csesem5",
    element: <SUB_SEM5_2020_CSE />
  },
  {
    path:"/scheme2020csesem6",
    element: <SUB_SEM6_2020_CSE />
  },
  {
    path:"/scheme2020civsem1",
    element: <SUB_SEM1_2020_CIV />
  },
  {
    path:"/scheme2020civsem2",
    element: <SUB_SEM2_2020_CIV />
  },
  {
    path:"/scheme2020civsem3",
    element: <SUB_SEM3_2020_CIV />
  },
  {
    path:"/scheme2020civsem4",
    element: <SUB_SEM4_2020_CIV />
  },
  {
    path:"/scheme2020civsem5",
    element: <SUB_SEM5_2020_CIV />
  },
  {
    path:"/scheme2020civsem6",
    element: <SUB_SEM6_2020_CIV />
  },
  

  {
    path:"/scheme2020ecesem1",
    element: <SUB_SEM1_2020_ECE />
  },
  {
    path:"/scheme2020ecesem2",
    element: <SUB_SEM2_2020_ECE />
  },
  {
    path:"/scheme2020ecesem3",
    element: <SUB_SEM3_2020_ECE />
  },
  {
    path:"/scheme2020ecesem4",
    element: <SUB_SEM4_2020_ECE />
  },
  {
    path:"/scheme2020ecesem5",
    element: <SUB_SEM5_2020_ECE />
  },
  {
    path:"/scheme2020ecesem6",
    element: <SUB_SEM6_2020_ECE />
  },
  {
    path:"/scheme2020ecssem1",
    element: <SUB_SEM1_2020_ECS />
  },
  {
    path:"/scheme2020ecssem2",
    element: <SUB_SEM2_2020_ECS />
  },
  {
    path:"/scheme2020ecssem3",
    element: <SUB_SEM3_2020_ECS />
  },
  {
    path:"/scheme2020ecssem4",
    element: <SUB_SEM4_2020_ECS />
  },
  {
    path:"/scheme2020ecssem5",
    element: <SUB_SEM5_2020_ECS />
  },
  {
    path:"/scheme2020ecssem6",
    element: <SUB_SEM6_2020_ECS />
  },

  {
    path:"/scheme2020eeesem1",
    element: <SUB_SEM1_2020_EEE />
  },
  {
    path:"/scheme2020eeesem2",
    element: <SUB_SEM2_2020_EEE />
  },
  {
    path:"/scheme2020eeesem3",
    element: <SUB_SEM3_2020_EEE />
  },
  {
    path:"/scheme2020eeesem4",
    element: <SUB_SEM4_2020_EEE />
  },
  {
    path:"/scheme2020eeesem5",
    element: <SUB_SEM5_2020_EEE />
  },
  {
    path:"/scheme2020eeesem6",
    element: <SUB_SEM6_2020_EEE />
  },
  {
    path:"/scheme2020mechsem1",
    element: <SUB_SEM1_2020_MECH />
  },
  {
    path:"/scheme2020mechsem2",
    element: <SUB_SEM2_2020_MECH />
  },
  {
    path:"/scheme2020mechsem3",
    element: <SUB_SEM3_2020_MECH />
  },
  {
    path:"/scheme2020mechsem4",
    element: <SUB_SEM4_2020_MECH />
  },
  {
    path:"/scheme2020mechsem5",
    element: <SUB_SEM5_2020_MECH />
  },
  {
    path:"/scheme2020mechsem6",
    element: <SUB_SEM6_2020_MECH />
  },
  {
    path : "*",
    element : <Nopage />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

