import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    let heading = "Head in the Clouds";
    let subheading = "Since 1993.";

    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{ heading }</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{ subheading }</h2>
              </div>
              <a className="button is-large is-primary" id="learn">Follow</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title"><strong>If you’re looking for some new ideas for your business I’d love to spend some time brainstorming ideas with you!</strong></p>
              </div>
              <div className="column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh dolor, gravida eget imperdiet a, maximus sed elit. </p>
              </div>
            </div>
          </div>

          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
                  <p className="subtitle">- John Doe</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
                  <p className="subtitle">- John Doe</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
                  <p className="subtitle">- John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
