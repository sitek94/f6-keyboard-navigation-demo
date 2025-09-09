import {elementIds, testIds} from '../constants'

export function Footer() {
	return (
		<footer id={elementIds.footer} data-testid={testIds.footer} className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">F6 Demo</h3>
						<p className="text-gray-300 mb-4">
							A comprehensive demonstration of F6 framework features and capabilities. Explore
							interactive elements and modern UI components.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Documentation
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									API Reference
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Examples
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Support
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-300 text-sm">© 2024 F6 Demo. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
							Terms of Service
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
