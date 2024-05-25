import { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
export interface ICard {
  /**
   * @title Nome
   */
  name?: string;
  /**
   * @title Ano
   */
  year?: number;
  /**
   * @title Imagem
   */
  image?: LiveImage;
  /**
   * @title Descrição
   */
  description?: string;
  /**
   * @title Categoria
   */
  categories?: string;
  /**
   * @title Cor
   * @format color
   */
  color?: string;
  details?: IDetails[];
}
export interface IDetails {
  /**
   * @title Ano
   */
  year?: number;
  /**
   * @title Data
   * @format html
   */
  data?: string;
}

export interface Props {
  cardData: ICard;
}

const Card = ({ cardData }: Props) => {
  const { name, year, image, description, categories, color, details } =
    cardData;

  console.log("cardData: ", cardData);

  const handleClick = () => {
    console.log("HandleClick");
  };

  return (
    <div
      class="bg-slate-400 w-[320px] flex flex-col justify-between rounded-md"
      onClick={() => handleClick()}
    >
      <div class="p-2 text-white">
        <p class="text-4xl text-right mb-3">{year}</p>
        <h2 class="text-xl">{name}</h2>
      </div>
      <Image
        class="rounded-b-md"
        src={image || ""}
        alt={name || ""}
        width={320}
        height={279}
      />
    </div>
  );
};

export default Card;
