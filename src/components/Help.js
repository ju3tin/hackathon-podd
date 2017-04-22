import React from 'react'

import Header from './Header'
import Footer from './Footer'

class Help extends React.Component {

  static defaultProps = {
  }

  render () {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
                Help
            </div>
          </main>
          <Footer />
        </div>
    )
  }

}

export default Help
