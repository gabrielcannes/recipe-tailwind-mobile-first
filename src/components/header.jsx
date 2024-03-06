import ometeleImg from "../../assets/images/image-omelette.jpeg";

export default function Header() {
  return (
    <>
      <img className="rounded-xl" src={ometeleImg} alt="omelete" />
      <h1 className="font-normal text-4xl font-youngSerif mt-8">
        Simple Omelette Recipe
      </h1>
      <p className="text-sm font-light mt-2">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choise of cheese, vegetables, or meats.
      </p>
    </>
  );
}
