import React from 'react'

export default function Resources(props) {
  const listResources = console.log(props.resources);
  // const listResources = props.resources.map((resource) => {
  //   console.log(props)
  //   return(
  //     <p>{props}</p>
  //   )
  // })

  return(
    <div>
      <h1>Resources</h1>
      {listResources}
    </div>
  )
}
