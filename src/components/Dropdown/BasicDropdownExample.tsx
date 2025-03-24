import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { DropdownItem } from "../DropdownItem";
import { Button } from "../Button/Button";

export const BasicDropdownExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2>Ejemplo de Dropdown</h2>
      <div>
        <Dropdown
          trigger={<Button>Abrir menú</Button>}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DropdownItem
            label="Opción 1"
            onClick={() => handleItemClick("Opción 1")}
          />
          <DropdownItem
            label="Opción 2"
            onClick={() => handleItemClick("Opción 2")}
          />
          <DropdownItem
            label="Opción 3"
            onClick={() => handleItemClick("Opción 3")}
          />
          <DropdownItem
            label="Opción con texto muy largo que debería truncarse"
            onClick={() => handleItemClick("Opción larga")}
          />
          <DropdownItem
            type="checkbox"
            label="Opción con checkbox"
            checked={selectedItem === "Checkbox"}
            onClick={() => handleItemClick("Checkbox")}
          />
          <DropdownItem
            type="icon"
            label="Opción con icono"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="currentColor"
                />
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  fill="currentColor"
                />
              </svg>
            }
            onClick={() => handleItemClick("Icono")}
          />
          <DropdownItem
            label="Opción deshabilitada"
            disabled
            onClick={() => handleItemClick("Deshabilitada")}
          />
        </Dropdown>
      </div>
      {selectedItem && (
        <div style={{ marginTop: "16px" }}>
          Elemento seleccionado: <strong>{selectedItem}</strong>
        </div>
      )}
    </div>
  );
};

export default BasicDropdownExample;
