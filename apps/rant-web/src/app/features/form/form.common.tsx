import React, { useEffect } from 'react';
import { Form, Drawer, Input } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import validator from 'validator';
import { CardType } from '../../types/cardType';

export interface IFormProps {
  buttonName : string;
  buttonCallback : (values : CardType) => void,
  initialValues : CardType | null;
}

export function CardForm(props : IFormProps) {

  const [ cardForm] = Form.useForm<CardType>();
  const [isValidName, setIsValidName] = useState<any>();
  const [isValidExpirayDate, setIsExpirayDate] = useState<any>();
  const [isValidCVC, setIsValidCVC] = useState<any>();
  const [isValidCreditCard, setIsValidCreditCard] = useState<any>();

  const handleFormSubmit = async () => {
    await cardForm.validateFields().then((values) => {
      props.buttonCallback(values);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
      cardForm.resetFields();
      console.log(props.initialValues);
  }, [props.initialValues])

  return(
    <Form
      layout="vertical"
      form={cardForm}
      onFinish={handleFormSubmit}
    >
      <Form.Item
        label={<p className="font-semibold">Name in card</p>}
        name="ownerFullName"
        hasFeedback
        validateStatus={isValidName}
        initialValue={props.initialValues?.ownerFullName}
        rules={[
          () => ({
            validator(rule, value) {
              setIsValidName('validating');
              if (value === '') {
                setIsValidName('error');
                return Promise.reject(new Error('Please fill in your name'));
              } else {
                setIsValidName('success');
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input placeholder="John Doe" />
      </Form.Item>
      <Form.Item
        label={<p className="font-semibold"> Card number</p>}
        name="cardNumber"
        validateStatus={isValidCreditCard}
        hasFeedback
        initialValue={props.initialValues?.cardNumber}
        rules={[
          () => ({
            validator(rule, value) {
              setIsValidCreditCard('validating');
              if (value == '' || !validator.isCreditCard(value)) {
                setIsValidCreditCard('error');
                return Promise.reject(new Error('Please enter a valid credit card number'));
              } else {
                setIsValidCreditCard('success');
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input placeholder="0000 0000 0000 0000" />
      </Form.Item>
      <Form.Item
        name="expires"
        label={<p className="font-semibold"> Expiry date</p>}
        validateStatus={isValidExpirayDate}
        hasFeedback
        initialValue={props.initialValues?.expires}
        rules={[
          () => ({
            validator(rule, value) {
              setIsExpirayDate('validating');
              if (!moment(value, 'MM/YY', true).isValid()) {
                setIsExpirayDate('error');
                return Promise.reject(new Error('Please enter a valid expiray date'));
              } else {
                setIsExpirayDate('success');
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input name="cardExpirayDate" placeholder="00/00" />
      </Form.Item>
      <Form.Item
        label={<p className="font-semibold"> CVC (Security code)</p>}
        name="cvc"
        validateStatus={isValidCVC}
        hasFeedback
        initialValue={props.initialValues?.cvc}
        rules={[
          () => ({
            validator(rule, value) {
              setIsValidCVC('validating');
              if (isNaN(value)) {
                setIsValidCVC('error');
                return Promise.reject(new Error('Please enter a valid security code'));
              } else if(value === ''){
                setIsValidCVC('error');
                return Promise.reject(new Error('Please enter a valid security code'));
              }
              else {
                setIsValidCVC('success');
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input maxLength={3} placeholder="000" />
      </Form.Item>
      <div className="flex justify-center p-5">
        <button style={{backgroundColor:'#4C00C2'}} onClick={handleFormSubmit} className="rounded-3xl text-white font-bold px-10 py-4 sm:max-w-xl sm:mx-auto md:w-3/6 lg:w-2/6">
          {props.buttonName}
        </button>
      </div>
    </Form>
  )

}
