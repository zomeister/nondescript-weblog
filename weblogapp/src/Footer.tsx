
import React from "react"
import { footerProps } from './Variables/Variables'
// @filename: Header.tsx
//let {props: {title, user , home, nav, more}} =headerProps
export default function Footer (): JSX.Element {
    return(
    <header>
        
        <h1>{author}</h1>
        <h2>{contact}</h2>
        <h4>{citation} 1</h4>
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