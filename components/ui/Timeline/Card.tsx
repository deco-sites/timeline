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
  year?: string;
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
  year?: string;
  /**
   * @title Data
   * @format html
   */
  data?: string;
}

export interface Props {
  cardData: ICard;
  modal1: any;
  modalData: any;
}

const Card = ({ cardData, modal1, modalData }: Props) => {
  const { name, year, image, description, categories, color, details } =
    cardData;

  // console.log("cardData: ", cardData);

  const handleClick = () => {
    console.log("HandleClick");
    modalData.value = cardData;
    modal1.current.showModal();
  };

  return (
    <div
      class="bg-slate-400 w-[320px] h-[380px] flex flex-col justify-between rounded-md"
      onClick={() => handleClick()}
    >
      <div class="p-2 text-white">
        <p class="text-4xl text-right mb-3">{year}</p>
        <h2 class="text-xl">{name}</h2>
      </div>
      {/* <span class="max-w-[320px] max-h-[279px] object-cover"> */}
      <Image
        class="rounded-b-md h-[280px]"
        src={image || ""}
        alt={name || ""}
        loading={"eager"}
        width={320}
        height={280}
        decoding="async"
      />
      {/* </span> */}
    </div>
  );
};

export default Card;
