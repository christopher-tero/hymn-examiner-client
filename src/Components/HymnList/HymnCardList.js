import React from 'react'
import Hymn from './Hymn'

export default function HymnCardList(props) {
  const hymns = props.hymns.map((hymn) => {
    console.log(hymn)
    return <Hymn key={hymn.id}
      title={hymn.title}
      description={hymn.description}
      story={hymn.story}
      editorRating={hymn.editorRating}
      editorReview={hymn.editorReview}
      doctrine={hymn.doctrine}
      scriptural={hymn.scriptural}
    />
  })

  return(
    <div className="hymn-card">
      {hymns}
    </div>
  )
}
