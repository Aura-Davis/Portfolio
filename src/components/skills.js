import React from 'react'
import Info from './skillsInfo'
import SkillsStyles from './skills.module.scss'
 

const Skills = () => {
	return (
			<div>
			<h1>Skills</h1>

			<div className={SkillsStyles.container}>
				{Info.objs.map((obj) => {
					return (<div className={SkillsStyles.card}>
						<h1 className={SkillsStyles.title}> {obj.title}</h1>
						{obj.indexes.map((index) => {
							return (<li className={SkillsStyles.body}>{index}</li>)
					})}</div>)
				})}
			</div>
			</div>
	);
}

export default Skills