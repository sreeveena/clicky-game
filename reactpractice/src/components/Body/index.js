import React from "react";
class Body extends Component{
    state={

    };

    render() {
    return (
        <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
        </div>
    );
    }
}
export default Body;