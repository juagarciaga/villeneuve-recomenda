export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Villeneuve Recomenda</h1>
          <p className="mt-2 text-blue-100">
            Services recommended by residents on Residential Villeneuve neighborhoods
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Welcome to Villeneuve Recomenda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is a community platform where residents of Residential Villeneuve 
            neighborhoods can share and discover trusted local services and recommendations.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🏠 Home Services
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find trusted contractors, plumbers, electricians, and more.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🍽️ Restaurants
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover local dining spots recommended by your neighbors.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🏥 Healthcare
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with healthcare professionals in the area.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🎓 Education
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find tutors, schools, and educational resources.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🛍️ Shopping
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Local shops and services for all your needs.
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              🚗 Transportation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Auto repair, car services, and transportation options.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2026 Villeneuve Recomenda. Built with Next.js</p>
        </div>
      </footer>
    </div>
  );
}
