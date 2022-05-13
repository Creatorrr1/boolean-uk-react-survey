import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;
  // Alternative way of doing props.answersList

  return (
    <ul>
      {/* <h1>
        {anotherProp} - {props.anotherProp}
      </h1> */}
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
