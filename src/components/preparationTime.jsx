export default function PreparationTime() {
  return (
    <div className="bg-pink-50 rounded-lg p-6 my-6">
      <h2 className="text-pink-900 text-lg mb-2">Preparation Time</h2>
      <ul className="list-inside list-disc text-pink-900">
        <li className="font-thin mb-2">
          <span className="font-semibold text-gray-600 ml-4">Total: </span>
          Approximately 10 minutes
        </li>
        <li className="font-thin mb-2">
          <span className="font-semibold text-gray-600 ml-4">
            Preparation:{" "}
          </span>
          5 minutes
        </li>
        <li className="font-thin mb-2">
          <span className="font-semibold text-gray-600 ml-4">Cooking: </span>5
          minutes
        </li>
      </ul>
    </div>
  );
}
