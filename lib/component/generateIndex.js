module.exports = name => `import React, { Component } from 'react'

export default class ${name} extends Component {
  render() {
    return (
      <div>
        ${name} component
      </div>
    )
  }
}

`
