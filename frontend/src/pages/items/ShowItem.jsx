import React from 'react'
import ItemsCard from '../../components/items/ItemsCard'

const ShowItem = ({items}) => {
  return (
    <>
      {items.map((item) => {
        return(
          <ItemsCard item={item}/>
        )
      })}
    </>
  )
}

export default ShowItem