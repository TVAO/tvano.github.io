import React from 'react';

const Entry = ({entry}) => (
  <div className="row item">
      <div className="twelve columns">
        <h3>
          <a href={entry.website}> {entry.company} </a>
        </h3>
        <p className="info">
          {entry.position}
          <span> &bull; </span>
          <span className="info-summary">{entry.summary}</span>
          <span> &bull; </span>
          <em className="date"> {entry.startDate} { entry.endDate ? `- ${entry.endDate}` : "" } </em>
        </p>
      </div>
  </div>
);

const Work = ({props}) => (
  <section id="work">
    <div className="row work">
      <div className="two columns header-col">
        <h1>
          <span> Work </span>
        </h1>
      </div>
      <div className="ten columns main-col">
        {props.map(function (entry, index) {
          return (
              <Entry key={index} entry={entry}/>
          );
        })}
      </div>
    </div>
  </section>
);

export default Work;
