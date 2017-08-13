import React from 'react';
import BulletPoints from '../components/bullet_points';

const Entry = ({key, entry, index, total}) => {

  const newIndex = index + 1;
  const divider = newIndex === total ? (<br/>) : (<hr/>);

  return (
    <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href={entry.website}> {entry.company} </a>
          </h3>
          <p className="info">
            {entry.position}
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
        <div className="two columns header-col">
          <h1>
            <span> Work </span>
          </h1>
        </div>
        <div className="ten columns main-col">
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
