import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProfileStyles from './profile.module.scss'

 

const Profile = (props) => {
	const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {
      title: {
        eq: "About Me"
      }
    }) {
      html
      frontmatter {
        title
      }
    }
  }
`)

	return (
			<div>
			<h1>Profile</h1>
			
			<div className={ProfileStyles.container}>
				<p className={ProfileStyles.email}>Contact me: auradavis@yahoo.com</p>
				<a className={ProfileStyles.option} href="https://github.com/Aura-Davis" target="_blank" rel="noopener noreferrer">Github</a>
				<a className={ProfileStyles.option} href="https://www.linkedin.com/in/aura-davis-62449b166" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>

			<div className={ProfileStyles.about}>
			<h1>{data.markdownRemark.frontmatter.title}</h1>
			<div className={ProfileStyles.body} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
			</div>
			</div>
	);
}

export default Profile