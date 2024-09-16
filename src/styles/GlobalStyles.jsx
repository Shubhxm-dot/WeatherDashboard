import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: white;
    color: black;
    padding: 20px;
  }

  input, button {
    padding: 10px;
    font-size: 16px;
    margin: 10px 0;
  }

  h1, h2 {
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    width: 200px;
  }

  button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  div {
    margin-top: 20px;
  }
`;

export default GlobalStyles;
