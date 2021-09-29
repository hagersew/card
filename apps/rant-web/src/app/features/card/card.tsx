import './card.module.scss';

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
    <div className=" bg-gray-100 py-4 flex flex-col justify-center sm:py-8">
      <div className="relate py-2 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="flex flex-col">
            <img src={'../../../assets/icons/visa-logo.svg'} alt="Card Logo" />
          </div>
          <p className="font-semibold text-lg">MasterCard</p>
        </div>
      </div>
    </div>

  );
}

export default Card;
