import { useState } from "react";
import Header from "../../components/header/Header";
import styles from "./AddItem.module.css";

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stockItems, setStockItems] = useState(() => {
    // Carregar os itens existentes do localStorage quando o componente é renderizado
    const existingItems = JSON.parse(localStorage.getItem("stockItems")) || [];
    return existingItems;
  });

  function handleSubmit(ev) {
    ev.preventDefault();

    const id = Math.floor(Math.random() * 1000000);
    const date = new Date();
    // Criar o novo item
    const newItem = {
      name: name,
      quantity: +quantity >= 0 ? quantity : 0,
      price: price,
      description: description,
      id: id,
      date: date.getDate(),
    };

    // Adicionar o novo item à lista existente
    const updatedItems = [...stockItems, newItem];

    // Salvar a lista atualizada no localStorage
    localStorage.setItem("stockItems", JSON.stringify(updatedItems));

    // Atualizar o estado com os novos itens
    setStockItems(updatedItems);

    // Limpar os campos do formulário após a submissão
    setName("");
    setQuantity("");
    setPrice("");
    setDescription("");
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className={styles.form}>
        <section className={styles.section}>
          <h2 className={styles.title}>Adicionar item</h2>
          <div className={styles.firstForm}>
            <div className={styles.sectionForm}>
              <label htmlFor="">Nome:</label>
              <input
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.sectionForm}>
              <label htmlFor="">Quantidade:</label>
              <input
                type="number"
                value={quantity}
                onChange={(ev) => setQuantity(ev.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.sectionForm}>
              <label htmlFor="">Preço:</label>
              <input
                type="text"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.secondForm}>
            <label htmlFor="">Descrição:</label>
            <textarea
              type="text"
              id="descriptionInput"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              className={styles.textarea}
            />
          </div>
          <div className={styles.buttonSection}>
            <button type="submit" className={styles.button}>
              Adicionar item
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
