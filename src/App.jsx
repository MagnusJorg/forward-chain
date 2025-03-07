import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import ForwardChain from "./views/ForwardChain";
import BackwardChain from "./views/BackwardChain";
import MashineLearning from "./views/MachineLearning";
import SimpleNLP from "./views/SimpleNlp";
import Home from "./views/Home";''
import League from "./views/League";

const router = createBrowserRouter([
  {
    path: "/aisystems/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "zero",
        element: <SimpleNLP />
      },
      {
        path: "first",
        element: <ForwardChain />,
      },
      {
        path: "second",
        element: <BackwardChain />,
      },
      {
        path: "third",
        element: <MashineLearning />,
      },
      {
        path: "four",
        element: <League />,
      },
      
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
