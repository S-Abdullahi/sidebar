import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({ showModal, setShowModal }) {
  return (
    <article className={`modal ${showModal && "show"}`}>
      <FaTimes
        className="modal-cancel"
        onClick={() => setShowModal((prev) => !prev)}
      />
      <p className="modal-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt
        eleifend turpis id vehicula. Maecenas vitae erat turpis. Aenean
        consequat dui a tempor tristique. Ut auctor diam ligula, quis sagittis
        velit egestas a. Pellentesque mi purus, suscipit vel viverra sit amet,
        maximus nec sem. Duis elit diam, elementum id molestie non, commodo sed
        nibh. Sed vel bibendum urna, et ullamcorper enim. Pellentesque in
        condimentum lacus
      </p>
    </article>
  );
}
