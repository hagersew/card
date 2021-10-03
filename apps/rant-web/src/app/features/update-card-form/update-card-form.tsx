import React from 'react';
import { CardType } from '../../types/cardType';
import { CardForm } from '../form/form.common';

export interface IUpdateCardFormProps {
  closeDrawer : () => void;
  initialValue : CardType | null;
  updateCard : (card : CardType) => void
}

export default function UpdateCardForm(props : IUpdateCardFormProps) {

  const updateCard = (value : CardType) => {
    value.id = props.initialValue?.id as number;
    props.updateCard(value);
    props.closeDrawer();
  }


  return(
    <CardForm buttonName={"Update Card"} buttonCallback={updateCard} initialValues={props.initialValue} />
  )


}
