export interface Itimeline {
    title?: string;
}

export default function Timeline({ title }: Itimeline) {
    return (
        <div>
            <h1>Timeline</h1>
            <p>{title}</p>
        </div>
    );
}
