import React from "react";
interface Props {
    
    user: 
}
const Contact: React.FC<Props> = ( { user } ) => {
    const { name, email } = user;
    //const [state, useState] = SetState([]);
    return (
        <div>
            <h1>Hey you, did you know that the term blog
                comes from web-log?
            </h1>
            <q>The more you know............</q>
            <span/>
            <button>Press to see what happens.</button>
            <button>Or this one.</button>
            <span/>
            <h3>Owner: Zoe Guidry</h3>
        </div>
    );
};
export default Contact;