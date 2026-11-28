import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
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

function Main() {
  const { tasks, isLoading, error } = useContext(TaskContext);
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {error ? (
            <S.LoadingMessage>
              <p>Ошибка загрузки: {error}</p>
            </S.LoadingMessage>
          ) : isLoading ? (
            <S.LoadingMessage>
              <S.LoaderDots>
                <S.LoaderSquare $bg="#FF6D00" $delay="0s" />
                <S.LoaderSquare $bg="#06B16E" $delay="0.2s" />
                <S.LoaderSquare $bg="#9A48F1" $delay="0.4s" />
              </S.LoaderDots>
              <p>Данные загружаются</p>
            </S.LoadingMessage>
          ) : tasks.length === 0 ? (
            <S.LoadingMessage>
              <p>Новых задач нет</p>
            </S.LoadingMessage>
          ): (
            <S.MainContent>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={tasks.filter((card) => card.status === status)}
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
