import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
