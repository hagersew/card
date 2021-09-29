import './main-page.module.scss';
// import allCards from '../../utilities/data.json';
/* eslint-disable-next-line */
export interface MainPageProps {}

export function MainPage(props: MainPageProps) {
  return (
    <div className="container mx-auto ">
      <div className="font-bold text-3xl  text-purple-600">
        Your Cards
      </div>
        <p className="px-2 text-gray-500">Add, edit or delete your cards any time</p>
    </div>
  );
}

export default MainPage;
