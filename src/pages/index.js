import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import Head from '../components/head'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Projects from '../components/projects'
import headerStyles from '../components/header.module.scss'




class IndexPage extends React.Component {

	
	state = {
		tab: null
	}

	

	render() {
		
	return (
		<Layout>
			<Head title="Home"/>
			<Header />
			<div className={headerStyles.container}>
			<div className={headerStyles.navbar}>
				<button className={headerStyles.option}
				onClick={() => {
					this.setState({tab: <Projects />});
				}}
				>
				Projects
				</button>

				<button className={headerStyles.option}
				onClick={() => {
					this.setState({tab: <Skills />});
				}}
				>
				Skills
				</button>

				<button className={headerStyles.option}
				onClick={() => {
					this.setState({tab: <Profile />});
				}}
				>
				Profile
				</button>
			</div>
			</div>
			
			{this.state.tab}
			

		</Layout>
	);
	}
}


export default IndexPage