import './main-page.module.scss';
import React, { useState } from 'react';
import { Drawer, Spin } from 'antd';
import AddCardForm from '../add-card-form/add-card-form';
import UpdateCardForm from '../update-card-form/update-card-form';
import Card from '../card/card';
import { CardType } from '../../types/cardType';
import { useCards } from './use-cards';

/* eslint-disable-next-line */
export interface IMainPageProps {}

export function MainPage(props: IMainPageProps) {

  const [showAddCardDrawer, setShowAddCardDrawer] = useState(false);

  const { loadingCards, allCardItems, addCard,updateCard } = useCards();


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
          {allCardItems?.map((cardDetail: CardType) => {
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
                <AddCardForm  closeDrawer={() => setShowAddCardDrawer(false)} addCard={addCard} />
                : formMode == "edit" ?
                <UpdateCardForm initialValue={selectedCard} closeDrawer={() => setShowAddCardDrawer(false)} updateCard={updateCard} />
                : null
            }

          </Drawer>

        </React.Fragment>
      )}
    </div>
  );
}

export default MainPage;
