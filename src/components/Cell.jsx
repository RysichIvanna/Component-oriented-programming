import React from "react";

/**
 * @function Cell
 * @description Компонент ігрової клітинки
 * @param {Object} props - Властивості
 * @param {string} props.value - Значення клітинки (X або O)
 * @param {Function} props.onClick - Обробник кліку
 */
export default function Cell({ value, onClick }) {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
}
