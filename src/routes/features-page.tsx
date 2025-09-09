export function FeaturesPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Features
        </h1>
        <p className="text-gray-600">
          This page demonstrates a layout without a footer to test F6 navigation filtering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            F6 Navigation
          </h2>
          <p className="text-gray-600 mb-4">
            Use F6 to navigate between main sections (header, sidebar, main content).
            On this page, there's no footer, so F6 will skip it automatically.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Try it:</strong> Press F6 to cycle through sections, or Shift+F6 to go in reverse.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Responsive Design
          </h2>
          <p className="text-gray-600 mb-4">
            The layout adapts to different screen sizes while maintaining F6 navigation.
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Desktop: Full sidebar and header
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              Tablet: Collapsible sidebar
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              Mobile: Mobile-friendly navigation
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Interactive Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Success Action
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
              Warning Action
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Danger Action
            </button>
          </div>
        </div>
      </div>
    </>
  )
}