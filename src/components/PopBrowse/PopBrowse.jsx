import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import Calendar from "../Calendar/Calendar";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const topicColors = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

function PopBrowse({ cardId }) {
  const navigate = useNavigate();
  const { tasks, editTask, removeTask } = useContext(TaskContext);
  const currentTask = tasks.find((item) => item._id === cardId);

  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState("Без статуса");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentTask) {
      setStatus(currentTask.status);
      setDescription(currentTask.description || "");
      setDate(currentTask.date || "");
    }
  }, [currentTask])

  const handleSave = async (e) => {
    e.preventDefault();
    if (!currentTask) return;

    try {
      setError("");
      await editTask(cardId, {
        title: currentTask.title,
        topic: currentTask.topic,
        date,
        status,
        description,
      });
      setIsEdit(false);
      navigate("/");
    } catch (err) {
      setError(err.message)
    }
  };

    const handleDelete = async (e) => {
      e.preventDefault();
      try {
        setError("");
        await removeTask(cardId);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    };


    const handleCancelEdit = (e) => {
      e.preventDefault();
      if (currentTask) {
        setStatus(currentTask.status);
        setDescription(currentTask.description || "");
        setDate(currentTask.date || "");
      }
      setIsEdit(false);
    };

    const colorClass = topicColors[currentTask?.topic] || "_orange";

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: "block" }}>
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">
                    {currentTask ? currentTask.title : `Задача #${cardId}`}
                  </h3>
                  <div className={`categories__theme theme-top ${colorClass} _active-category`}>
                    <p className={colorClass}>{currentTask?.topic || "Web Design"}</p>
                  </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    {statusList.map((item) => {
                      const isActive = item === status;
                      if (!isEdit && !isActive) return null;
                      return (
                    <div
                      key={item}
                      onClick={() => isEdit && setStatus(item)}
                      className={`status__theme ${isActive ? "_gray" : ""}`}
                      style={{ cursor: isEdit ? "pointer" : "default" }}
                    >
                      <p className={isActive ? "_gray" : ""}>{item}</p>
                    </div>
                  );
                })}
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  <form
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly={!isEdit}
                        placeholder="Введите описание задачи..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                  <Calendar
                    selectedDate={date}
                    setSelectedDate={setDate}
                    isReadOnly={!isEdit} 
                  />
                </div>
                <div className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className={`categories__theme ${colorClass} _active-category`}>
                    <p className={colorClass}>{currentTask?.topic || "Web Design"}</p>
                  </div>
                </div>
                 {error && (
              <p
                style={{
                  color: "#F84D4D",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {error}
              </p>
            )}
                {!isEdit ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={() => setIsEdit(true)}
                    className="btn-browse__edit _btn-bor _hover03"
                  >
                    Редактировать задачу
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn-browse__delete _btn-bor _hover03"
                  >
                    Удалить задачу
                  </button>
                </div>
                <Link to="/">
                  <button
                    type="button"
                    className="btn-browse__close _btn-bg _hover01"
                  >
                    Закрыть
                  </button>
                </Link>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    Сохранить
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="btn-edit__edit _btn-bor _hover03"
                  >
                    Отменить
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn-edit__delete _btn-bor _hover03"
                  >
                    Удалить задачу
                  </button>
                </div>
                <Link to="/">
                  <button
                    type="button"
                    className="btn-edit__close _btn-bg _hover01"
                  >
                    Закрыть
                  </button>
                </Link>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
  );
}
export default PopBrowse;