import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', percentage: 100, barClass: 'htmlBar', icon: 'fab fa-html5' },
  { name: 'CSS3', percentage: 100, barClass: 'cssBar', icon: 'fab fa-css3-alt' },
  { name: 'Media Query', percentage: 100, barClass: 'mqBAr', icon: 'fas fa-mobile-alt' },
  { name: 'jQuery', percentage: 100, barClass: 'jqBar', icon: 'fas fa-code' },
  { name: 'Bootstrap', percentage: 100, barClass: 'bsBar', icon: 'fab fa-bootstrap' },
  { name: 'JavaScript', percentage: 100, barClass: 'jspBar', icon: 'fab fa-js-square' },
  { name: 'React js', percentage: 100, barClass: 'reactBar', icon: 'fab fa-react' },
  { name: 'Node.js', percentage: 100, barClass: 'nodeBar', icon: 'fab fa-node-js' },
  { name: 'Express.js', percentage: 100, barClass: 'esBar', icon: 'fas fa-server' },
  { name: 'MongoDB', percentage: 100, barClass: 'mdBar', icon: 'fas fa-leaf' },
];

export default function Skills() {
  return (
    <div className="skills">
      <p className="skl">MY SKILLS :</p>
      <p className="skl sklLine">_________</p>
      {skillsData.map((skill, index) => (
        <div key={index} className="ProgWidth">
          <div className="p">
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </div>
          <div className="pp">
            <div className="skillDiv">
              <span
                className={`skillBar ${skill.barClass}`}
                style={{ width: `${skill.percentage}%` }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
