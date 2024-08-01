import imgUrl from "../assets/add.svg";
export const Empty = () => {
  return (
    <div className="empty" id="empty">
      <img src={imgUrl} alt={imgUrl} />

      <p className="no">no list found!</p>
    </div>
  );
};
