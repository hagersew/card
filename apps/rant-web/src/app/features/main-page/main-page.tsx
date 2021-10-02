import './main-page.module.scss';
import { allCards } from '../../utilities/data.json';
import React, { useEffect, useState } from 'react';
import { Button, Drawer, Spin } from 'antd';
import AddCardForm from '../add-card-form/add-card-form';
import UpdateCardForm from '../update-card-form/update-card-form';
import Card from '../card/card';
import { CardForm } from '../form/form.common';
import { CardType } from '../../types/cardType';

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


  const [ formMode, setFormMode ] = useState<string>("add");
  const [ selectedCard, selectCard ] = useState<CardType | null>(null);
  const openEditForm = (card : CardType) => {

    setFormMode("edit");
    setShowAddCardDrawer(true);
    selectCard(card);
  }

  const openAddForm = () => {
    setFormMode("add");
    selectCard(null);
    setShowAddCardDrawer(true);
  }

  return (
    <div className="container mx-auto ">
      {loadingCards ? (
        <div className="min-h-screen grid place-content-center mx-auto">
          <Spin size="large" />
          <div>Loading your cards...</div>
        </div>
      ) : (
        <React.Fragment>
          <div style={{color:'#4C00C2'}} className="font-bold text-4xl">Your Cards</div>
          <p
         style={{color:'#798291'}}
          className="px-2 text-gray-500">
            Add, edit or delete your cards any time
          </p>
          {allCardItems?.map((cardDetail: ICardDetailProps) => {
            return <Card cardDetail={cardDetail} editButtonCallback={openEditForm} />;
          })}
          <div className="flex justify-center p-5">
            <button onClick={openAddForm} style={{backgroundColor:'#4C00C2'}} className="rounded-3xl text-white font-bold px-10 py-4 sm:max-w-xl sm:mx-auto md:w-3/6 lg:w-2/6">
              Add new card
            </button>
          </div>

          <Drawer
            closable
            title={<h1 className="font-bold text-xl">Add your card details</h1>}
            height={600}
            placement="bottom"
            visible={showAddCardDrawer}
            onClose={() => setShowAddCardDrawer(false)}
          >
            {
              formMode == "add" ?
                <AddCardForm  closeDrawer={() => setShowAddCardDrawer(false)} />
                : formMode == "edit" ?
                <UpdateCardForm initialValue={selectedCard} closeDrawer={() => setShowAddCardDrawer(false)} />
                : null
            }

          </Drawer>

        </React.Fragment>
      )}
    </div>
  );
}

export default MainPage;
