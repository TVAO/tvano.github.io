import React from 'react';
import '../styles/about.css';

const About = ({props}) => (

  <section id="about">

    <div className="row">
      <h2> About Me </h2>
      {props.summary.map((content, index) => {
        return (
          <p key={index}>
            {content}
          </p>
        );
      })}
    </div>

    <div className="row" id="traits">
      <h2> Characteristics </h2>
      <ol>
        {props.characteristics.map((trait, index) => {
          return (
            <li key={index}> {trait} </li>
          );
        })}
      </ol>
    </div>

    <div className="row">
      <h2> Contact Details </h2>
      <p className="address">
        <span>{props.location.region}</span>
        <br/>
        <span>{props.location.countryCode}</span>
        <br/>
        <a href={'skype:' + props.phone}>
          <span>{props.phone}</span>
        </a>
        <br/>
        <a href={"mailto:" + props.email}>
          <span>{props.email}</span>
        </a>
      </p>
    </div>

  </section>
);

export default About;
