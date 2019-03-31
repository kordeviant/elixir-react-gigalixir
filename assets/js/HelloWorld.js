import React, { Component, createElement } from 'react'

class HelloWorld extends Component {
  render() {
    const { name } = this.props

    return <section class="sheet padding-10mm">

      <article>This is an A4 document. {name}</article>

    </section>
  }
}

export default HelloWorld