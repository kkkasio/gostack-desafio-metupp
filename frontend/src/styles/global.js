import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:none;
}

*:focus {
outline: none;
}


html,body,#root {
  height:100%;
}
body {
  -webkit-font-smoothing: antialiased;
}

body,input,button {
  font:14px 'Lato', sans-serif;
}

a{
  text-decoration:none;
}

ul{
  list-style:none;
}

button{
  cursor:pointer;
}


`;
