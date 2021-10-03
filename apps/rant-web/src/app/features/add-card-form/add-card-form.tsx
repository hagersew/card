import React from 'react';
import './add-card-form.module.scss';
import { CardType } from '../../types/cardType';
import { CardForm } from '../form/form.common';

export interface IAddCardFormProps {
  closeDrawer : () => void,
  addCard : (card : CardType) => void
}

export function AddCardForm(props : IAddCardFormProps) {
  const addCard = (values : CardType) => {
     props.addCard(values);
     props.closeDrawer();
  }

  return (
      <CardForm buttonName={"Add Card"} buttonCallback={addCard} initialValues={null} />
  );
}

export default AddCardForm;
