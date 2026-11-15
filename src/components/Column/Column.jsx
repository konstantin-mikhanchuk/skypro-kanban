import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{ title }</p>
      </div>
      <div className="cards">
        <Card topic="Web Design" color="_orange" />
        <Card topic="Research" color="_green" /> 
        <Card topic="Copywriting" color="_purple" />
      </div>
    </div>
  );
}

export default Column;