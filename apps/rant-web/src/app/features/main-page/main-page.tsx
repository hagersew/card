import './main-page.module.scss';
import { allCards } from '../../utilities/data.json';
import React, { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import AddCardForm from '../add-card-form/add-card-form';
import Card from '../card/card';

/* eslint-disable-next-line */
export interface IMainPageProps {}
export interface ICardDetailProps {
  id: number;
  ownerFullName: string;
  cardNumber: string;
  cvc: number;
  expires: string;
}

export function MainPage(props: IMainPageProps) {
  const [allCardItems, setAllCardItems] = useState<ICardDetailProps[]>([]);
  const [showAddCardDrawer, setShowAddCardDrawer] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);
  const handleShowDrawer = () => {
    setShowAddCardDrawer(true);
  };

  const addCardFormProps = {
    showAddCardDrawer,
    setShowAddCardDrawer,
  };

  useEffect(() => {
    setLoadingCards(true);
    // Simulating API call
    allCards?.length && setAllCardItems(allCards);
    setLoadingCards(false);
    return () => {
      // Cancel API calls
      setLoadingCards(false);
      setAllCardItems([]);
    };
  }, [allCardItems]);

  return (
    <div className="container mx-auto ">
      {loadingCards ? (
        <div className="min-h-screen grid place-content-center mx-auto">
          <Spin size="large" />
          <div>Loading your cards...</div>
        </div>
      ) : (
        <React.Fragment>
          <div className="font-bold text-4xl  text-indigo-600">Your Cards</div>
          <p className="px-2 text-gray-500">
            Add, edit or delete your cards any time
          </p>
          {allCardItems?.map((cardDetail: ICardDetailProps) => {
            return <Card cardDetail={cardDetail} />;
          })}
          <Button className="flex flex-col justify-center" onClick={handleShowDrawer} type="primary">
            Add Cards
          </Button>
          <AddCardForm {...addCardFormProps} />
        </React.Fragment>
      )}
    </div>
  );
}

export default MainPage;
