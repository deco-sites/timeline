import Card from "../components/ui/Timeline/Card.tsx";

export interface Itimeline {
  title?: string;
  cards?: ICard[];
}

/**
 * @title {{{name}}}
 */
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

export default function Timeline({ title }: Itimeline) {
  return (
    <div>
      <h1>Timeline</h1>
      <p>{title}</p>
      {/* Searchbar */}
      <Card />
      {/* Timeline Slider */}
    </div>
  );
}
