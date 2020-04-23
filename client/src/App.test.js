import React from 'react';
import ReactDom from "react-dom";
import { render, waitForElement} from '@testing-library/react';
import App from "./App";
import Navbar from "./component/Navbar";



// import axios from "./_mocks_/axios";
// import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});


test('renders without crashing', () => {
 render(<App />);
});

test('contains World Cup', () => {
  const container = render (<Navbar />);
  container.getAllByText(/World/i);
  container.getAllByText(/Cup/i);

});

test("list of player", () => {
  const container = render (<App />);
  container.getByTestId("list-of-player");
});




// test("render user's name ", async () => {
//   axios.get.mockResolvedValueOnce({
//     data: [
//         {
//         name: "ale"
      
//       }

//     ]
//   })

//   const value = await waitForElement(() => 
//   getAllByTestId("row")
//   );

//   expect(value).toHaveTextContent("ale");
//   expect(axios.get).toHaveBeenCalledWith(url);
//   expect(axios.get).toHaveBeenCalledTimes(1);

// })
