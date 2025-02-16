const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-73px)] bg-gray-50">
      <div className="w-96 h-64 relative mb-8">
        {/* Placeholder for the illustration */}
        <div className="w-full h-full rounded-lg flex items-center justify-center">
          <img 
            src="/welcome_illustration.png" 
            alt="Descriptive text"
            className="w-auto h-auto" // Adjust size as needed
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Hi there! Add an email account to get started
      </h2>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
        <span>+</span>
        ADD NEW
      </button>
    </div>
  )
}

export default EmptyState