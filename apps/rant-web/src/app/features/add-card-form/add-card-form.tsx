import React from 'react';
import './add-card-form.module.scss';
import { CardType } from '../../types/cardType';
import { CardForm } from '../form/form.common';

export interface IAddCardFormProps {
  closeDrawer : () => void
}

export function AddCardForm(props : IAddCardFormProps) {
  const addCard = (values : CardType) => {
     console.log(values);
     props.closeDrawer();
  }

  return (
      <CardForm buttonName={"Add Card"} buttonCallback={addCard} initialValues={null} />
  );
}

export default AddCardForm;
