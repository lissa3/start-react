import {Link} from "react-router-dom";
export const PageNotFound = () => {
    return (
        <div className="bg-orange-200">
            Page not found
            <Link to="/">Back to Home Page</Link>
        </div>
    );
};
