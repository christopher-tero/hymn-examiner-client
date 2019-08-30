import React, {Component} from 'react'
import HymnCardList from './HymnCardList'

export default class HymnList extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <h1>List of Hymns</h1>
        <HymnCardList hymns={this.props.hymns} />
      </div>
    );
  }
}
