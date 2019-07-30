import React from 'react'
import Info from './projectsInfo'
import SkillsStyles from './skills.module.scss'
 

const Projects = () => {
	return (
			<div>
			<h1>Projects</h1>

			<div className={SkillsStyles.container}>
				{Info.objs.map((obj) => {
					return (<div className={SkillsStyles.card}>
						<h1 className={SkillsStyles.title}> {obj.title}</h1>
						<div className={SkillsStyles.body}>
						
						<div className={SkillsStyles.projectfield}> <a href={obj.link} target="_blank" rel="noopener noreferrer">View</a> </div>
						<div className={SkillsStyles.projectfield}> <a href={obj.github} target="_blank" rel="noopener noreferrer">Source Code</a> </div>
						<div className={SkillsStyles.projectfield}>Description: {obj.desc}</div>
						</div>
						</div>)
				})}
			</div>
			</div>
	);
}

export default Projects