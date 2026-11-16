import Column from "../Column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cardList, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading-message">
              <p>Данные загружаются...</p>
            </div>
          ) : (
            <div className="main__content">
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cardList.filter((card) => card.status === status)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
