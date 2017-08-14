import React from 'react';
import '../styles/education.css';


const Courses = ({props}) => (
  <section id="courses">
    <h3> Courses </h3>
    <ul className="course-list list-unstyled small">
      {props.map((course, index) => {
        <li className="course">
          <span className="text-muted pull-right">
            {course.ects}
          </span>
          <b> {course.title} </b>
        </li>
      })}
    </ul>
  </section>
);

const Entry = ({props}) => (
  <div className="row item">
    <div className="twelve columns">
      <p className="info">
        <b>{props.degree}</b> @ <a href={props.url}> {props.institution} </a>
        <em className="date"> {props.startDate} - {props.endDate} </em>
      </p>
    </div>
    <Courses props={props.courses}/>
  </div>
);

const Education = ({props}) => (
  <section id="education">
    <div className="row education">
      <div className="two columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>
      <div className="ten columns main-col">
        {props.map((education, index) => {
          return (
            <Entry key={index} props={education}/>
          );
        })}
      </div>
    </div>
  </section>
);

/*
const Education = ({props}) => (
  <section>
    <h1> Education </h1>
    <article className="compact">
      {props.map((education, index) => {
          <p>
            <b>{education.degree}</b>
            "@"
            <a href={education.url}>{education.institution}</a>
            <br></br>
          <small className="text-muted"> {`${education.startDate} - ${education.endDate}`}</small>
          </p>
        })
      }
      <p>
        {props.summary}
      </p>
    </article>
  </section>
);
*/

export default Education;
