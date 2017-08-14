import React from 'react';
import BulletPoints from '../components/bullet_points';
import '../styles/work.css';

const Entry = ({key, entry, index, total}) => {

  const newIndex = index + 1;
  const divider = newIndex === total ? (<br/>) : (<hr width="50%"/>);

  return (
    <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href={entry.website}> {entry.company} </a>
          </h3>
          <p className="info">
            <b>{entry.position}</b> @ <a href={entry.website}> {entry.company} </a>
            <span> &bull; </span>
            <em className="date"> {entry.startDate} { entry.endDate ? `- ${entry.endDate}` : "" } </em>
          </p>
          <BulletPoints points={entry.highlights}/>
        </div>
        {divider}
    </div>
  );
}

const Work = ({props}) => {
  const numEntries = props.length;

  return (
    <section id="work">
      <div className="row work">
        <div className="two columns header-col" id="left_column">
          <h1>
            <span> Work </span>
          </h1>
        </div>
        <div className="ten columns main-col" id="right_column">
          {props.map((entry, index) => {
            return (
                <Entry key={index} entry={entry} index={index} total={numEntries}/>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
