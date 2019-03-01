import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <section class="main">
      <div class="container">
        <article id="main-col">
          <h1 class="page-title">Our Values</h1>
            <ul id="services">
              <li>
                <h3>Excellency</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
              </li>
              <li>
                <h3>Passionate</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
              </li>
              <li>
                <h3>Integrity</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
              </li>
              <li>
                <h3>Collaboration</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
              </li>
            </ul>
        </article>
        <aside id="sidebar">
          <div class="dark">
            <h3>Contact Us</h3>
            <form class="contact">
              <div>
                <label>Name</label>
                <input type="text"/>
              </div>
              <div>
                <label>Email Address</label>
                <input type="email"/>
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Your message ..."></textarea>
              </div>
              <button class="button_1" type="submit">Send</button>
            </form>
          </div>
        </aside>
      </div>
    </section>
    )
  }
}
