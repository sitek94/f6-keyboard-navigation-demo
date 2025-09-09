import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Layout} from './components/layout'
import {ContactPage} from './routes/contact-page'
import {DocsPage} from './routes/docs-page'
import {FeaturesPage} from './routes/features-page'
import {HomePage} from './routes/home-page'

export function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route
					path="/"
					element={
						<Layout showLeftSidebar showFooter>
							<HomePage />
						</Layout>
					}
				/>
				<Route
					path="/features"
					element={
						<Layout showLeftSidebar showRightSidebar showFooter>
							<FeaturesPage />
						</Layout>
					}
				/>
				<Route
					path="/docs"
					element={
						<Layout showLeftSidebar>
							<DocsPage />
						</Layout>
					}
				/>
				<Route
					path="/contact"
					element={
						<Layout showRightSidebar showFooter>
							<ContactPage />
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
