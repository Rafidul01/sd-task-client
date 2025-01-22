import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ShowCard from "../components/ShowCard";
import TableShow from "../components/TableShow";

const ContentPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category, type } = useParams();
    const aixiosSecure = useAxiosSecure();

    useEffect(() => {

        aixiosSecure
            .get(`/${type}/${category}`)
            .then((data) => {
                setLoading(false);
                console.log(data.data);
                setData(data.data);
            })
            .catch((err) => console.error(err));
    }, [category, type]);



    return (
        <div className="mx-auto">

            <p className="p-8 uppercase text-center text-4xl text-green-600 font-bold">{category!==type ? category + " " + type: category}</p>

            {
                type === "collection" && <ShowCard data={data} loading={loading}/>
            }
            {
                type === "sells" && <TableShow data={data} loading={loading}/>
            }
            
        </div>
    );
};

export default ContentPage;