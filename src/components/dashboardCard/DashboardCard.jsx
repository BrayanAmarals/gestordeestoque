import "./styles.css";

export default function DashboardCard(props) {
  return (
    <div
      id="dashboardCard"
      style={{
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h3 id="cardQuantity">{props.quantity}</h3>
      <p id="cardName">{props.cardName}</p>
    </div>
  );
}
