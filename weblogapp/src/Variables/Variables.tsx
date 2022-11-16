export const headerProps = {
    title: 'My Website Title',
    user: 'Avatar',
    home: 'Home',
    nav: 'Navigation',
    more: 'Search Bar and Stuff'
}

export const footerProps = {
    author: 'Zoe Guidry',
    contact: 'LinkedIn & GitHub',
    citation: 'router, page, and link information'
}

export const articleProps = {
    id: '0',
    name: 'My first blog post.',
    author: 'Me.',
    date: '11/15/2022',
    content: 'articleLinkorURI'
}


import { json } from "react-router-dom";
/**
 * @async use for REST requests... i think
 * @returns new Response(JSON.stringify(vals), { headers: {"Content-Type": "application/json; utf-8",},});
 */
const loader = async () => {
    const data = getSomeData();
    return json(data)
}