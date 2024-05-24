export interface ICard {
  /**
   * @title Nome
   */
  name?: string;
  /**
   * @title Data
   * @format html
   */
  data?: string;
}

const Card = ({ name }: ICard) => {
  return <div>Card</div>;
};

export default Card;
