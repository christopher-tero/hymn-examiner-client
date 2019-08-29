import React from 'react'

export default function Resources(props) {
  console.log(props.resources);
  const listResources = props.resources.map((resource) => {
    console.log(resource)
    return(
      <div className="resource">
        <p>{resource.name}</p>
        <p>{resource.description}</p>
        <p>{resource.url}</p>
        <p>{resource.price}</p>
      </div>
    )
  })

  return(
    <div>
      <h1>Resources</h1>
      {listResources}
    </div>
  )
}
