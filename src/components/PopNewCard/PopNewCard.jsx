import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import Calendar from "../Calendar/Calendar";

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    setError("")

    if (!title.trim()) {
      setError("Введите название задачи")
      return
    }

    try {
      setIsSubmitting(true);
      await addTask({
        title: title.trim(),
        description: description.trim(),
        topic,
        status: "Без статуса",
        date: date || new Date().toISOString(),
      })
      navigate("/")
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
        <div className="pop-new-card" id="popNewCard" style={{ display: "block" }}>
          <div className="pop-new-card__container">
            <div className="pop-new-card__block">
              <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <Link to="/" className="pop-new-card__close">
                  &#10006;
                </Link>
                <div className="pop-new-card__wrap">
                  <form
                    className="pop-new-card__form form-new"
                    id="formNewCard"
                    onSubmit={handleCreateTask}
                  >
                    <div className="form-new__block">
                      <label htmlFor="formTitle" className="subttl">
                        Название задачи
                      </label>
                      <input
                        className="form-new__input"
                        type="text"
                        name="name"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-new__block">
                      <label htmlFor="textArea" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                  <Calendar 
                  selectedDate={date}
                  setSelectedDate={setDate}
                  />
                </div>
                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div onClick={() => setTopic("Web Design")}
                    className={`categories__theme _orange ${
                    topic === "Web Design" ? "_active-category" : ""
                  }`}
                    style={{ cursor: "pointer" }}>
                    <p className="_orange">Web Design</p>
                    </div>
                    <div onClick={() => setTopic("Research")}
                    className={`categories__theme _green ${
                    topic === "Research" ? "_active-category" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  onClick={() => setTopic("Copywriting")}
                  className={`categories__theme _purple ${
                    topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <p className="_purple">Copywriting</p>
                </div>
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
                <button 
                type="button"
                onClick={handleCreateTask}
                disabled={isSubmitting}
                className="form-new__create _hover01"
                id="btnCreate"
                >
                  {isSubmitting ? "Создаём..." : "Создать задачу"}
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}
export default PopNewCard;