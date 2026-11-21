import Card from "../Card/Card";
import * as S from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{ title }</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            theme={card.topic}
            title={card.title}
            date={card.date}
          />
          ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;