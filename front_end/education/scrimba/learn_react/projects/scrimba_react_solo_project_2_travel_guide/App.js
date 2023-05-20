import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import BlankFooter from "./components/BlankFooter.js"
import data from "./data.js"

export default function App() {
    // Below we are mapping over the data array and returning a new array of Card components
    const cards = data.map(item => {
        // Below we are returning a new Card component for each item in the data array
        return (
            <Card
                // Below we are passing the item as a prop to the Card component
                key={item.id}
                // Below we are spreading the item object so that each property is passed as a prop to the Card component
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="cards--list">
                {cards}
            </section>
            <BlankFooter />
        </div>
    )
}