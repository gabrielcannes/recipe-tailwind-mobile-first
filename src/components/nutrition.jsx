

export default function Nutrition() {
  return (
    <div>
          <h2 className="text-2xl text-orange-900 font-youngSerif mt-4 mb-2">
            Nutrition
          </h2>
          <span className="mb-4 text-gray-900 text-sm font-semibold">
            The table below shows nutritional values per serving without the additional fillings
          </span>
          <div className="flex flex-col mt-4">
            <div className="flex border-b-2 border-gray-200 my-3 pb-3 space-x-52">
              <span className="ml-3 text-gray-600">Calories</span>
              <span className="text-orange-900 font-semibold">277kcal</span>
            </div>
            <div className="flex border-b-2 border-gray-200 my-3 pb-3 space-x-52">
              <span className="ml-3 text-gray-600 mr-4">Carbs</span>
              <span className="text-orange-900 font-semibold">0g</span>
            </div>
            <div className="flex border-b-2 border-gray-200 my-3 pb-3 space-x-52">
              <span className="ml-3 text-gray-600 mr-2">Protein</span>
              <span className="text-orange-900 font-semibold">20g</span>
            </div>
            <div className="flex  my-3 pb-3 space-x-52">
              <span className="ml-3 text-gray-600 mr-9">Fat</span>
              <span className="text-orange-900 font-semibold">22g</span>
            </div>
          </div>
        </div>
  );
}
