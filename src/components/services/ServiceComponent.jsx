import React from 'react'

export default function ServiceComponent(prop) {
  return (
    <div className="column">
    <div className="card">
        <prop.icon/> 
      <h3>{prop.name}</h3>
      
    </div>
  </div>
  )
}
