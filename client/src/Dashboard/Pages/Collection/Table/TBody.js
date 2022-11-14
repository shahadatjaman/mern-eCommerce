import React from "react";
import {
  Actions,
  Circle,
  Name,
  Status,
  StatusWrapper,
  TableBody,
  TableRow,
  Td,
} from "./Styles";
import { Checkbox } from "pretty-checkbox-react";
import { ImageWrapper, Img } from "../Styles";
import Poper from "../Poper";
import { useState } from "react";
const img =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='164' height='120' viewBox='0 0 164 120'%3E%3Cg fill='none'%3E%3Crect width='164' height='120' fill='%23DAEFFE'/%3E%3Cpath fill='%23B9E3FF' d='M-8.52651283e-14,120 L49.0917544,74.9616932 C52.151039,72.1550101 56.848961,72.1550101 59.9082456,74.9616932 L71.293,85.4057534 L96.9019846,59.8591624 C100.0299,56.7386931 105.095216,56.744729 108.215685,59.8726439 C108.284098,59.9412201 108.35126,60.0110332 108.417137,60.0820486 L164,120 L-8.52651283e-14,120 Z'/%3E%3Ccircle cx='67.5' cy='43.5' r='10.5' fill='%23F5FBFF'/%3E%3C/g%3E%3C/svg%3E%0A";
const Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <TableBody>
      {[1].map((item, index) => (
        <TableRow key={index}>
          <Td>
            <Name>
              <Checkbox />
            </Name>
          </Td>
          <Td width="120">
            <ImageWrapper>
              <Img src={img} alt="img" />
            </ImageWrapper>
          </Td>
          <Td width="200">
            <Name>Product Name</Name>
          </Td>
          <Td width="170">
            <StatusWrapper>
              <Status>
                <Circle></Circle>
                Active
              </Status>
            </StatusWrapper>
          </Td>
          <Td width="220">
            <Name>56566256265565</Name>
          </Td>
          <Td width="200">
            <Name>0.00 $</Name>
          </Td>
          <Td>
            <Name>In stock</Name>
          </Td>
          <Td>
            <Actions>
              {isOpen && <Poper />}

              <i onClick={openHandler} className="fa-solid fa-ellipsis"></i>
            </Actions>
          </Td>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
