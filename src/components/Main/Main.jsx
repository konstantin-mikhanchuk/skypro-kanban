import Column from "../Column/Column";
import { Container } from "../../styled/Common.styled";
import * as S from "./Main.styled";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoading }) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoading ? (
            <S.LoadingMessage>
              <p>Данные загружаются...</p>
            </S.LoadingMessage>
          ) : (
            <S.MainContent>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cardList.filter((card) => card.status === status)}
                />
              ))}
            </S.MainContent>
          )}
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
