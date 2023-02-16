import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const NoteBody = ({ content }: Props) => {
  return (
    <div className="mb-4">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default NoteBody;
