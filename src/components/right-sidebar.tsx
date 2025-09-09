import { elementIds, testIds } from "../constants";

export function RightSidebar() {
  return (
    <aside
      id={elementIds.rightSidebar}
      data-testid={testIds.rightSidebar}
      className="w-64 bg-white shadow-sm border-l border-gray-200"
    >
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors flex items-center">
            <svg
              className="w-4 h-4 mr-3 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Document
          </button>

          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors flex items-center">
            <svg
              className="w-4 h-4 mr-3 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            Share Project
          </button>

          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors flex items-center">
            <svg
              className="w-4 h-4 mr-3 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Add to Favorites
          </button>
        </div>

        {/* Status Panel */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-medium text-gray-800 mb-3">Project Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-800">73%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "73%" }}></div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>12 tasks completed</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span>4 tasks pending</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span>1 task overdue</span>
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-3">Quick Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">Auto-save</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Dark mode</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">Notifications</span>
            </label>
          </div>
        </div>

        {/* Mini Widget */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <h4 className="text-sm font-medium text-blue-800 mb-2">💡 Tip of the Day</h4>
          <p className="text-xs text-blue-700">
            Use F6 to navigate between page sections including this right sidebar!
          </p>
          <button className="mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
            Got it →
          </button>
        </div>
      </div>
    </aside>
  );
}
