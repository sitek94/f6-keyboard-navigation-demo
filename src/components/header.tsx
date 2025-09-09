import {Link} from 'react-router-dom'
import {elementIds, testIds} from '../constants'

export function Header() {
	return (
		<header
			id={elementIds.header}
			data-testid={testIds.header}
			className="bg-white shadow-lg border-b border-gray-200"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
							F6 Demo
						</div>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:block">
						<nav className="ml-10 flex items-baseline space-x-4">
							<Link
								to="/"
								className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Home
							</Link>
							<Link
								to="/features"
								className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Features
							</Link>
							<Link
								to="/docs"
								className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Docs
							</Link>
							<Link
								to="/contact"
								className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Contact
							</Link>
						</nav>
					</div>

					{/* User Actions */}
					<div className="flex items-center space-x-4">
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
							Get Started
						</button>
						<button className="md:hidden text-gray-500 hover:text-gray-700">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
