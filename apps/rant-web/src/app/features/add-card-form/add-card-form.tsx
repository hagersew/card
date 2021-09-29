import { Form, Drawer, Input } from 'antd';

import './add-card-form.module.scss';

/* eslint-disable-next-line */
export interface IAddCardFormProps {
  showAddCardDrawer: boolean;
  setShowAddCardDrawer: (value: boolean) => void;
}

export function AddCardForm(props: IAddCardFormProps) {
  const [addCardForm] = Form.useForm();
  const { validateFields } = addCardForm;

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
        <Form.Item label={<p className="font-bold"></p>} name="cardName">
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item name="cardNumber">
          <Input placeholder="0000 0000 0000 0000 " />
        </Form.Item>
        <Form.Item name="cardExpiryDate">
          <Input placeholder="00/00" />
        </Form.Item>
        <Form.Item name="cardCVC">
          <Input maxLength={3} placeholder="000" />
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default AddCardForm;
