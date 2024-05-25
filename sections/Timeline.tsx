import Card from "../islands/Card.tsx";
import { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Slider from "../components/ui/Slider/index.tsx";

export interface Itimeline {
  /**
   * @title Título
   */
  title?: string;
  cards?: ICard[];
}

/**
 * @title {{year}} {{name}}
 */
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

/**
 * @title {{{year}}}
 */
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

export default function Timeline({ title, cards }: Itimeline) {
  return (
    <div class="container  mt-10 mb-40 ">
      <p class="text-[#f48024] text-3xl mb-20">{title}</p>
      {/* Searchbar */}

      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={"test"}
        infinite
      >
        {cards?.map((card, index) => (
          <Slider.Item index={index} class="carousel-item">
            <Card cardData={card} />
          </Slider.Item>
        ))}
      </Slider>

      {/* Timeline Slider */}
    </div>
  );
}
