import React from 'react';
import { CardType } from '../../types/cardType';
import { CardForm } from '../form/form.common';

export interface IUpdateCardFormProps {
  closeDrawer : () => void;
  initialValue : CardType | null;
}

export default function UpdateCardForm(props : IUpdateCardFormProps) {

  const updateCard = (value : CardType) => {
    console.log(value);
    props.closeDrawer();
  }


  return(
    <CardForm buttonName={"Update Card"} buttonCallback={updateCard} initialValues={props.initialValue} />
  )


}
