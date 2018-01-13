import React from 'react'
import get from 'lodash/get'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './dotmatrix_200.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={this.props.author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I’m <strong>{this.props.author}</strong> and I makes websites and I ride bikes.{' '}
          I’m a software engineer. You could follow me{' '}
          <a href={`https://twitter.com/${this.props.twitter}`}>
            @{this.props.twitter}
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
