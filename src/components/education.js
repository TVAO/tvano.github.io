import React from 'react';
import '../styles/education.css';

const Courses = ({courses}) => (
  <section id="courses">
    <ul className="list-group">
      {courses.map((course, index) => {
        <li key={index} className="list-group-item"> {course.title} {course.ects} </li>
      })}
    </ul>
  </section>
);

/*
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
          <span> &bull; </span>
          <a href={course.project}> Project Link </a>
        </li>
      })}
    </ul>
  </section>
);
*/

const Entry = ({education}) => (
  <div className="row item">
    <div className="twelve columns">
      <p className="info">
        <b>{education.degree}</b> @ <a href={education.url}> {education.institution} </a>
        <em className="date"> {education.startDate} - {education.endDate} </em>
      </p>
      <div className="center">
      <p className="info-summary">
        {education.summary}
      </p>
      </div>
    </div>
    <Courses courses={education.courses}/>
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
            <Entry key={index} education={education}/>
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
