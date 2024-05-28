import Card from "site/components/ui/Timeline/Card.tsx";
import { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Slider from "../components/ui/Slider/index.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";

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
  year?: string;
  /**
   * @title Data
   * @format html
   */
  data?: string;
}

export default function Timeline({ title, cards }: Itimeline) {
  console.log("Timeline main: ", cards);
  const modal1 = useRef<HTMLDialogElement>(null);
  const modalData = useSignal<ICard>({});
  console.log("modalData: ", modalData.value);

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
            <Card cardData={card} modal1={modal1} modalData={modalData} />
          </Slider.Item>
        ))}
      </Slider>

      {/* Timeline Slider */}

      <dialog id="modal1" ref={modal1} class="modal">
        <div class="modal-box max-w-none">
          <div id="header" class="flex justify-between items-center mb-5">
            <div class="flex flex-col">
              <h3>{modalData.value.year}</h3>
              <p>{modalData.value.name}</p>
            </div>

            <div class="modal-action m-0">
              <form method="dialog">
                <button
                  class="btn"
                  onClick={() => {
                    modalData.value = {};
                  }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>

          <div id="body" class="flex w-full scrollbarModal overflow-x-scroll">
            <div class="w-max flex gap-4 mb-3">
              {modalData.value.details?.map((detail) => (
                <div class="bg-slate-400 rounded-md p-4 min-w-min w-[320px]">
                  <h3>{detail.year}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: detail.data || "" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
