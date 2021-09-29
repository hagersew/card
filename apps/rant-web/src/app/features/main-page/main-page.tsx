import './main-page.module.scss';
import * as allCards from '../../utilities/data.json' ;
import React, { useState } from 'react';
import { Button } from 'antd';
import AddCardForm from '../add-card-form/add-card-form';

/* eslint-disable-next-line */
export interface MainPageProps {}

export function MainPage(props: MainPageProps) {
  const [allCardItems,setAllCardItems] = useState(allCards);
  const [showAddCardDrawer, setShowAddCardDrawer] = useState(false);
  const handleShowDrawer = ()=>{
    setShowAddCardDrawer(true)
  }

  const addCardFormProps = {
    showAddCardDrawer,setShowAddCardDrawer
  }
  return (
    <React.Fragment>
      <div className="container mx-auto ">
        <div className="font-bold text-3xl  text-indingo-600">
          Your Cards
        </div>
          <p className="px-2 text-gray-500">Add, edit or delete your cards any time</p>
          <Button className="block" onClick={handleShowDrawer} type="primary">
            Add Cards
          </Button>
      </div>
      <AddCardForm {...addCardFormProps}/>
    </React.Fragment>
  );
}

export default MainPage;
