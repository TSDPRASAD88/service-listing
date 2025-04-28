import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div>
       <h2>Title:{data.title}</h2>
       <p>Description:{data.description}</p>
    </div>
  )
}

export default ServiceCard
