import React from 'react'

export default function Resources(props) {
  const listResources = props.resources.map((resource) => {
    console.log(props)
    return(
      <p></p>
    )
  })

  return(
    <div>
      <h1>Resources</h1>
      {listResources}
    </div>
  )
}
