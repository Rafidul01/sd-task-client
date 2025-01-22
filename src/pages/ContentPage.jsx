import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ContentPage = () => {
    const { category, type } = useParams();
    const aixiosSecure = useAxiosSecure();

    useEffect(() => {
        aixiosSecure
            .get(`/${type}/${category}`)
            .then((data) => {
                console.log(data.data);
            })
            .catch((err) => console.error(err));
    }, [category, type]);

    // milk

    //fect-> milk

    return (
        <div>

            <p className="uppercase">{category!==type ? category + " " + type: category}</p>
            
        </div>
    );
};

export default ContentPage;