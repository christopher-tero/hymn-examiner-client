import React, {Component} from 'react'

export default class Hymn extends Component {
  constructor(){
    super()

    this.state = {
      hymn: {}
    }
  }

  componentDidMount = () => {
    console.log(this.props.location.state)
    const {hymn} = this.props.location.state
    this.setState(() => ({hymn: hymn}))
  }

  doctrine = () => {
    if (this.state.doctrine === 3) {
      return "Balanced"
    } else if (this.state.doctrine < 3) {
      return "Armenian"
    } else return "Calvinist"
  }

  scriptural = () => {
    switch (this.state.scriptural) {
      case 1: return "None"
      case 2: return "Low"
      case 3: return "Fair"
      case 4: return "Good"
      case 5: return "Strong"
    }
  }

  render() {
    return(
      <div>
      <p>Hymn Test</p>
      <h4>Title: {this.props.title}</h4>
      <p>Description: {this.props.description}</p>
      <p>Story: {this.state.story}</p>
      <p>Editor Rating: {this.state.editorRating}</p>
      <p>Editor Review: {this.state.editorReview}</p>
      <p>Doctrine: {this.doctrine()}</p>
      <p>Scripturality: {this.scriptural()}</p>
      </div>
    )
  }
}
