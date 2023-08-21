import { useState } from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import styles from "./Item.module.css";

export default function Item() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("stockItems"))
  );
  const [newPrice, setNewPrice] = useState();

  const { itemId } = useParams();

  const item = items.filter((element) => {
    return element.id == itemId;
  });

  const addItem = (item) => {
    item[0].quantity += 1;
    setItems((items) => [...items]);
    localStorage.setItem("stockItems", JSON.stringify(items));
  };

  const removeItem = (item) => {
    item[0].quantity -= 1;
    setItems((items) => [...items]);
    localStorage.setItem("stockItems", JSON.stringify(items));
  };

  const editValue = () => {
    item[0].price = newPrice;
    setItems((items) => [...items]);
    localStorage.setItem("stockItems", JSON.stringify(items));
  };

  console.log(item);
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.secondaryContainer}>
          <div className={styles.flexRow}>
            <h1 className={styles.title}>{item[0].name}</h1>

            <div className={styles.alignEnd}>
              <h1>Valor:</h1>
              <p className={styles.result}>R$ {item[0].price}</p>
            </div>
          </div>
          <div className={styles.flexRow}>
            <div>
              <h1>Descrição:</h1>
              <p className={styles.description}>{item[0].description}</p>
            </div>
            <div className={styles.alignEnd}>
              <h1>Estoque:</h1>
              {item[0].quantity.length != 1 ? (
                <p className={styles.result}>{item[0].quantity} unidades</p>
              ) : (
                <p className={styles.result}>{item[0].quantity} unidade</p>
              )}
            </div>
          </div>
          <div className={styles.divButtons}>
            <form className={styles.form} onSubmit={editValue}>
              <input
                type="text"
                value={newPrice}
                onChange={(ev) => {
                  setNewPrice(ev.target.value);
                }}
                className={styles.editValueInput}
              />
              <button className={styles.editValueButton} type="submit">
                Atualizar valor
              </button>
            </form>
            <button className={styles.buttons} onClick={() => addItem(item)}>
              Adicionar unidade (+1)
            </button>
            <button className={styles.buttons} onClick={() => removeItem(item)}>
              Subtrair unidade (-1)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
