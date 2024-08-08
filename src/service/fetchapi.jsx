import {useEffect, useState} from "react";
import {json} from "react-router-dom";
import {Card} from "../components/Card";

export const ServiceGet = () => {
    const [getData,setData] = useState([])

    useEffect(()=> {

        const data = {
            data:[
            {
                Id:    0,
                    Title: "Nike Air Max Dn Men's Shoes",
                Price: 170,
                Color: 13,
            },
            {
                Id:    1,
                    Title: "Nike Air VaporMax Flyknit Electric",
                Price: 220,
                Color: 14,
            },
            {
                Id:    2,
                    Title: "Nike Air VaporMax Moc Roam Electric",
                Price: 230,
                Color: 4,
            },
            {
                Id:    3,
                    Title: "Air Jordan XXXIX \"Lumier\" ",
                Price: 200,
                Color: 2,
            },
            {
                Id:    4,
                    Title: "Nike G.T. Cut 3 Electric",
                Price: 190,
                Color: 9,
            },
            {
                Id:    5,
                    Title: "Nike G.T. Jump 2 Electric",
                Price: 180,
                Color: 6,
            },
            {
                Id:    6,
                    Title: "Nike SB Zoom Janoski OG+ Electric",
                Price: 105,
                Color: 8,
            },
            {
                Id:    7,
                    Title: "Nike G.T. Jump 2 Electric",
                Price: 180,
                Color: 6,
            },
            {
                Id:    8,
                    Title: "Nike G.T. Jump 2 Electric",
                Price: 180,
                Color: 6,
            },
            {
                Id:    9,
                    Title: "Nike G.T. Jump 2 Electric",
                Price: 180,
                Color: 6,
            },]
        }
        console.log(data)
        setData(data.data)
        }
        ,[]
    )
    return (<>{getData ? <Card apiData={getData}/> :<p>Loading ...</p>}</>)
}