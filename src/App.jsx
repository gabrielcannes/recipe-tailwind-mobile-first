import Header from "./components/header";
import Ingredients from "./components/ingredients";
import Instructions from "./components/instructions";
import Nutrition from "./components/nutrition";
import PreparationTime from "./components/preparationTime";

export default function App() {
  return (
    <div className="lg:h-fill lg:w-screen bg-orange-100 flex font-outfit">
      <div className="bg-slate-50 lg:w-1/2 w-screen h-fit lg:mx-auto lg:my-40 p-6 rounded-2xl">
        <Header />
        <PreparationTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}
