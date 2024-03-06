export default function Ingredients() {
  return (
    <div className="border-b-2 border-gray-200 pb-4">
      <h2 className="text-2xl text-orange-900 font-youngSerif mb-4">
        Ingredients
      </h2>
      <ul className="list-inside list-disc text-orange-900">
        <li className="font-thin mb-2">
          <span className="text-gray-900 ml-4">2-3 large eggs</span>
        </li>
        <li className="font-thin mb-2">
          <span className="text-gray-900 ml-4">salt, to taste</span>
        </li>
        <li className="font-thin mb-2">
          <span className="text-gray-900 ml-4">Pepper, to taste</span>
        </li>
        <li className="font-thin mb-2">
          <span className="text-gray-900 ml-4">
            1 tablespoon of butter or oil
          </span>
        </li>
        <li className="font-thin mb-2">
          <span className="text-gray-900 ml-4">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </span>
        </li>
      </ul>
    </div>
  );
}
