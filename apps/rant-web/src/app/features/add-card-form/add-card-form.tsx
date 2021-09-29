import { Form, Drawer, Input } from 'antd';
import { useState } from 'react';

import './add-card-form.module.scss';
import moment from 'moment';

export interface IAddCardFormProps {
  showAddCardDrawer: boolean;
  setShowAddCardDrawer: (value: boolean) => void;
}

export function AddCardForm(props: IAddCardFormProps) {
  const [addCardForm] = Form.useForm();
  const { validateFields } = addCardForm;
  const [isValidName, setIsValidName] = useState<any>();
  const [isExpirayDate, setIsExpirayDate] = useState<any>();

  const handleAddCardFormSubmit = async () => {
    await validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDrawerClose = () => {
    props?.setShowAddCardDrawer(false);
  };

  return (
    <Drawer
      closable
      title={<h1 className="font-bold text-xl">Add your card details</h1>}
      height={500}
      placement="bottom"
      visible={props.showAddCardDrawer}
      onClose={onDrawerClose}
    >
      <Form
        layout="vertical"
        form={addCardForm}
        onFinish={handleAddCardFormSubmit}
      >
        <Form.Item
          label={<p className="font-semibold">Name in card</p>}
          name="cardName"
          hasFeedback
          validateStatus={isValidName}
          // rules={
          //   [
          //     ()=>({
          //       validator(rule,value){
          //         setIsValidName("validating");
          //         if(value === ''){
          //           setIsValidName("error");
          //           return Promise.reject(new Error("Please enter unique name"))
          //         }
          //       }
          //     })
          //   ]
          // }
        >
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          label={<p className="font-semibold"> Card number</p>}
          name="cardNumber"
        >
          <Input placeholder="0000 0000 0000 0000" />
        </Form.Item>
        <Form.Item
          name="cardExpirayDate"
          label={<p className="font-semibold"> Expiry date</p>}
          validateStatus={isExpirayDate}
          hasFeedback
          rules={[
            () => ({
              validator(rule, value) {
                setIsExpirayDate('validating');
                if (!moment(value, 'MM/YY',true).isValid()) {
                  setIsExpirayDate('error');
                  return Promise.reject(new Error('Please fill in your new'));
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
          name="cardCVC"
        >
          <Input maxLength={3} placeholder="000" />
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default AddCardForm;
