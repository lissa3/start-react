import { useParams } from "react-router-dom";
export const Post = () => {
    const {id} = useParams();
    console.log("id is",id)
    return (
        <div className="bg-red-200">
            I am a Post component with id: {id}
        </div>
    );
};
