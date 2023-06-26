import { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({
  options = [],
  label = "Select",
  placeholder = "Select Option",
  onChange = () => {},
}) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(options);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
    onChange(id);
  };
  return (
    <div>
      <div className="dropdown-label">{label}</div>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id === selectedItem).label
            : placeholder}
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item, index) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
              key={index}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
