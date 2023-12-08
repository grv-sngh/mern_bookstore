import axios from "axios";
import { useEffect, useState } from "react"

const HomeItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get(`https://super-space-acorn-v9wxvwvw56g2p4gj-5555.app.github.dev/items`)
            .then((response) => {
                setItems(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            Home Item
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <br />
                        <p>{item._id}</p>
                        <ul>
                            <li>- {item.name}</li>
                            <li>- {item.quantity}</li>
                            <li>- {item.description}</li>
                        </ul>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeItem