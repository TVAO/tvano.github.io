import React from 'react';
import '../styles/about.css';

const About = ({props}) => (

  <section id="about">

    <div className="row">
      <h2> About Me </h2>
      {props.content.summary.map((content, index) => {
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
        {props.content.characteristics.map((trait, index) => {
          return (
            <li key={index}> {trait} </li>
          );
        })}
      </ol>
    </div>

    <div className="row">
      <h2> Contact Details </h2>
      <p className="address">
        <span>{props.content.location.region}</span>
        <br/>
        <span>{props.content.location.countryCode}</span>
        <br/>
        <a href={'skype:' + props.content.phone}>
          <span>{props.content.phone}</span>
        </a>
        <br/>
        <a href={"mailto:" + props.content.email}>
          <span>{props.content.email}</span>
        </a>
      </p>
    </div>

  </section>
);

export default About;
