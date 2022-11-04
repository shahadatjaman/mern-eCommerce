import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import {
  Body,
  Close,
  Content,
  H3,
  Header,
  ModalWrapper,
  Title,
} from "./Styles";
/**
 *
 * @param {title, children, closeModal,isOpen} param0
 * @returns Modal
 */

const Modal = ({ title, children, closeModal, isOpen }) => {
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <ModalWrapper isOpen={isOpen}>
      <Content width="700">
        <Header>
          <Title>
            <H3> {title}</H3>
          </Title>
          <Close>
            <i onClick={closeModal} className="fa-solid fa-xmark"></i>
          </Close>
        </Header>
        <Body>{children}</Body>
      </Content>
    </ModalWrapper>
  );
};

export default Modal;
