import './card.module.scss';
import { EditOutlined } from "@ant-design/icons";
/* eslint-disable-next-line */
export interface ICardProps {
  cardDetail: {
    id: number,
    ownerFullName: string,
    cardNumber: string,
    cvc: number,
    expires: string
  }
}

export function Card(props: ICardProps) {


  return (
    <div key={props?.cardDetail?.id} className="bg-gray-100 flex flex-col justify-center sm:py-4 md:py-2">
      <div  className="py-2 sm:max-w-xl sm:mx-auto md:w-3/6 lg:w-2/6">
        <div  className="px-4 bg-blue-600 shadow-lg sm:rounded-3xl sm:p-20 md:p-10">
          <div className="flex justify-between pb-10">
            <img src={'../../../assets/icons/mastercard-logo.svg'} className="w-auto h-6" alt="Card Logo" />
            <div className="flex space-x-2">
              <div className="flex flex-col">
                <div className="text-gray-400 font-semibold">CVC</div>
                <div className="font-bold text-white text-lg">{props?.cardDetail?.cvc}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-400 font-semibold">EXPIRES</div>
                <div className="font-bold text-white text-lg">{props?.cardDetail?.expires}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white">{props?.cardDetail?.ownerFullName}</span>
              <span className=" font-bold text-gray-200">{props?.cardDetail?.cardNumber}</span>
            </div>
            <div className="flex flex-col self-end">
            <EditOutlined style={{fontSize: '24px', color:"white"}} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;
