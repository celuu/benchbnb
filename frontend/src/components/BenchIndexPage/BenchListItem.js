import { useHistory } from "react-router-dom";

const BenchListItem = ({bench}) => {
  const history = useHistory();

  const handleClick = (e) => {
    console.log(bench)
    e.preventDefault();
    history.push(`/benches/${bench.id}`);
  }

    return (
      <>
        <div onClick={handleClick}>
          <h2>{bench.title}</h2>
          <h2>{bench.price}</h2>
        </div>
      </>
    );
}

export default BenchListItem;