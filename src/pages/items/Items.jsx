import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import styles from "./Items.module.css";
import { useState } from "react";
import {
  AiFillEye,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export default function Items() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("stockItems"))
  );
  const [itemsQuantity, setItemsQuantity] = useState();

  const removeItem = (id) => {
    const removedItems = items.filter((item) => {
      return item.id != id;
    });
    setItems(removedItems);
    localStorage.setItem("stockItems", JSON.stringify(removedItems));
  };

  const remove1Item = (item) => {
    const lastSelectedItem = items.filter((selectedItem) => {
      return selectedItem == item;
    });
    lastSelectedItem[0].quantity -= 1;
    setItems((items) => [...items]);
    localStorage.setItem("stockItems", JSON.stringify(items));
  };

  const add1Item = (item) => {
    const lastSelectedItem = items.filter((selectedItem) => {
      return selectedItem == item;
    });
    lastSelectedItem[0].quantity += 1;
    setItems((items) => [...items]);
    localStorage.setItem("stockItems", JSON.stringify(items));
  };

  return (
    <>
      <Header />
      <section>
        <div className={styles.header}>
          <h2>Todos itens</h2>
          <Link to={"/addItem"} className={styles.addItemsButton}>
            Adicionar item
          </Link>
        </div>
        <section id="listContainer" className={styles.listContainer}>
          <section className={styles.recentItems}>
            <div className={styles.list}>
              <div className={styles.listTitle1}>
                <p className={styles.titleId}>ID</p>
                <p className={styles.titleItem}>Item</p>
                <p className={styles.titleInStock}>Em estoque</p>
                <p className={styles.titleActions}>Ações</p>
              </div>
              {(items == [].length) == 0 ? (
                items.map((item) => (
                  <div key={item.id} className={styles.itemCard}>
                    <p className={styles.itemId}>{item.id}</p>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemQuantity}>{item.quantity}</p>
                    <div className={styles.itemButtons}>
                      <button>
                        <Link to={`/items/${item.id}`}>
                          <AiFillEye className={styles.icon} />
                        </Link>
                      </button>
                      <button onClick={() => removeItem(item.id)}>
                        <BsFillTrashFill className={styles.icon} />
                      </button>
                      <button onClick={() => add1Item(item)}>
                        <AiOutlinePlusCircle className={styles.icon} />
                      </button>
                      <button onClick={() => remove1Item(item)}>
                        <AiOutlineMinusCircle className={styles.icon} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Nenhum item cadastrado!</h1>
              )}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
