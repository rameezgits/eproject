import React from 'react'

const Header = ({pageTitle}) => {
  return (
      <div>
          <section class="page-title" style={{backgroundImage: 'url("images/background/page-title-bg.png")'}}>
              <div class="auto-container">
                  <div class="title-outer text-center">
                      <h1 className="title">{pageTitle}</h1>
                      <ul class="page-breadcrumb">
                          <li><a href="index.html">Home</a></li>
                          <li>{pageTitle}</li>
                      </ul>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Header
