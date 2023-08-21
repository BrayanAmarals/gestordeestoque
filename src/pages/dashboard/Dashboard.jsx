import { useState } from "react";

import { Link } from "react-router-dom";

import DashboardCard from "../../components/dashboardCard/DashboardCard";
import azul3 from "../../../src/assets/azul3.png";
import laranja3 from "../../../src/assets/laranja3.png";
import verde3 from "../../../src/assets/verde3.png";
import rosa3 from "../../../src/assets/rosa3.png";
import styles from "./Dashboard.module.css";
import Header from "../../components/header/Header";

import { AiFillEye } from "react-icons/ai";

export default function Dashboard() {
  const [actualItems, setActualItems] = useState(
    JSON.parse(localStorage.getItem("stockItems"))
  );

  const diversityItems = actualItems.length;

  const items2 = [...actualItems];

  let total = 0;
  items2.forEach(({ quantity }) => {
    +quantity;
    total += +quantity;
  });

  let endingItems = items2.filter((element) => {
    return element.quantity <= 3;
  });

  const date = new Date();
  const today = date.getDate();

  const recentItems = items2.filter((element) => {
    return today - element.date < 1;
  });

  return (
    <>
      <Header />
      <section className={styles.cardsSection}>
        <DashboardCard
          backgroundImg={laranja3}
          cardName="Diversidade de Itens"
          quantity={diversityItems ? diversityItems : 0}
        />
        <DashboardCard
          backgroundImg={rosa3}
          cardName="Inventário Total"
          quantity={total ? total : 0}
        />
        <DashboardCard
          backgroundImg={azul3}
          cardName="Itens Recentes"
          quantity={recentItems ? recentItems.length : 0}
        />
        <DashboardCard
          backgroundImg={verde3}
          cardName="Itens Acabando"
          quantity={endingItems ? endingItems.length : 0}
        />
      </section>
      <section className={styles.listContainer}>
        <section className={styles.recentItems}>
          <h2 className={styles.titles}>Itens Recentes</h2>
          <div className={styles.list}>
            <div className={styles.listTitle1}>
              <p className={styles.title1}>Itens</p>
              <p>Ações</p>
            </div>
            {(recentItems == [].length) == 0 ? (
              recentItems.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <p className={styles.nameItem1}>{item.name}</p>
                  <div id="secondPart">
                    <Link to={`/items/${item.id}`}>
                      <AiFillEye className={styles.icon} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <h3
                style={{ padding: "0rem 0 2rem 2.5rem ", color: "#c4c4c488" }}
              >
                Nenhum item cadastrado recentemente!
              </h3>
            )}
          </div>
        </section>
        <section className={styles.underItems}>
          <h2>Itens Acabando</h2>
          <div className={styles.list}>
            <div className={styles.listTitle1}>
              <p className={styles.title2}>Itens</p>
              <div className={styles.listTitle2}>
                <p>Qtd.</p>
                <p>Ações</p>
              </div>
            </div>
            {(endingItems == [].length) == 0 ? (
              endingItems.map((item) => (
                <div key={item.id} className={styles.itemCard}>
                  <p className={styles.nameItem2}>{item.name}</p>
                  <div className={styles.secondPart}>
                    <p>{item.quantity}</p>
                    <Link>
                      <Link to={`/items/${item.id}`}>
                        <AiFillEye className={styles.icon} />
                      </Link>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <h3 style={{ padding: "0rem 0 2rem 2rem ", color: "#c4c4c488" }}>
                Nenhum item acabando!
              </h3>
            )}
          </div>
        </section>
      </section>
    </>
  );
}
