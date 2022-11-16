// import React, {useState, Component} from 'react';
// import Container from 'react-bootstrap/Container';
// // import logo from './logo.svg';
// import './App.css';
// /** import Components from `./components/` */
import Header from './Header'
// import Article from './components/Article.js'
// // import Footer from './components/Footer.js'
// // import Main from './components/Main.js'




import React from 'react';
import './App.css';


/**
 * export interface Props {
  heading: string;
}
const App = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className="App">
      <Header/>
      <p>hello</p>
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Header>
        <Welcome />
        <Navigation />
        <Avatar />
      </Header>
      <Article>
        <
      </Article>
      <Media>
        <MediaCards />
      </Media>
      <Sidebar>
        <SidebarItems />
      </Sidebar>
      <Footer /> 


      
      <p>hello</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Article /> */}
    </div>
  );
}

export default App;
