export function DocsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Documentation
        </h1>
        <p className="text-gray-600">
          This page demonstrates a layout without a sidebar to test F6 navigation filtering.
        </p>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          F6 Navigation Hook
        </h2>
        <p className="text-gray-600 mb-4">
          The useF6Navigation hook automatically detects available sections and enables keyboard navigation between them.
          When sections are missing (like the sidebar on this page), the hook filters them out automatically.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Code Example</h3>
          <pre className="text-sm text-gray-700 overflow-x-auto">
{`import { useF6Navigation } from './useF6Navigation'

export function MyComponent() {
  useF6Navigation() // Automatically enables F6 navigation

  return (
    <div>
      {/* Your layout with header, sidebar, main, footer */}
    </div>
  )
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Keyboard Navigation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Navigation Keys</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><code className="bg-gray-100 px-2 py-1 rounded">F6</code> - Navigate to next section</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">Shift+F6</code> - Navigate to previous section</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Sections</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-2"></span>Header</li>
              <li><span className="w-3 h-3 bg-gray-400 rounded-full inline-block mr-2"></span>Sidebar (not on this page)</li>
              <li><span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>Main Content</li>
              <li><span className="w-3 h-3 bg-purple-500 rounded-full inline-block mr-2"></span>Footer</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Note</h3>
          <p className="text-yellow-700">
            This page intentionally excludes the sidebar component to demonstrate how the F6 navigation 
            automatically adapts to the available page structure.
          </p>
        </div>
      </div>
    </>
  )
}