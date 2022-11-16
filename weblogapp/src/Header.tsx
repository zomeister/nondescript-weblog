
import React from "react"
import {headerProps} from './Variables'
// @filename: Header.tsx

let {title, user , home, nav, more} = headerProps

function NavItem(props) {
    return <li>{props.value}</li>;
}

function NavBar(props) {
    const nums = props.nums;
    const navItems = nums.map(
        (n: number) => <NavItem key={n.toString()} value={n}/>
    );
    return (<ul>{navItems}</ul>);
}

export default function Header(): JSX.Element {
    return(
    <header>
        
        <h1>{title}</h1>
        <h2>{user}</h2>
        <h4>{home} 1</h4>
        <h4>{home} 2</h4>
        <h4>{home} 3</h4>
        <h4>{home} 4</h4>
        <p>{nav}</p>
        <p>{more}</p>
    </header> )
}


// let headerProps = {
//     title: 'My Website Title',
//     user: 'Avatar',
//     home: 'Home',
//     nav: 'Navigation',
//     more: 'Search Bar and Stuff'
// }