import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
	const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)	
	return (
		<div className={headerStyles.container}>
			<h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
			
		</div>
	);
}

export default Header