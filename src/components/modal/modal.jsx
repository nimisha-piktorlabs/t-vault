import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

// We get hold of the div with the id modal that we have created in index.html
const modalRoot = document.getElementById("modal");

class Modal extends Component {
  constructor(props) {
    super(props);
    // We create an element div for this modal
    this.element = document.createElement("div");
    this.element.classList.add("modal");
    this.element.id = "myModal";
  }

  // We append the created div to the div#modal
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }
  /**
   * We remove the created div when this Modal Component is unmounted
   * Used to clean up the memory to avoid memory leak
   */
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    return createPortal(
      <div className="modal-content">{this.props.children}</div>,
      this.element
    );
  }
}
export default Modal;
