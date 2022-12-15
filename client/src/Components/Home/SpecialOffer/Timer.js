import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Available,
  Button,
  Caption,
  Counter,
  Img,
  ImgWrapper,
  Item,
  Offerprice,
  PriceBtn,
  Progress,
  Progressbar,
  Roatoted,
  SpecialOffer,
  Timer,
} from "./Styles";

const OffierCounter = () => {
  const [clock, setClock] = useState(null);
  useEffect(() => {
    (() => {
      var start = new Date();
      start.setHours(23, 0, 0); // 11pm

      let pad = (num) => {
        return ("0" + parseInt(num)).substr(-2);
      };

      (function tick() {
        var now = new Date();
        if (now > start) {
          // too late, go to tomorrow
          start.setDate(start.getDate() + 1);
        }
        var remain = (start - now) / 1000;
        var h = pad((remain / 60 / 60) % 60);
        var m = pad((remain / 60) % 60);
        var s = pad(remain % 60);
        setClock({ h, m, s });
        setTimeout(tick, 1000);
      })();
    })();
  }, []);

  return (
    <Item>
      <SpecialOffer>
        <Offerprice>
          <span>
            <span className="text-light">Save</span>
            <h6>$20.00</h6>
          </span>
        </Offerprice>
      </SpecialOffer>
      <ImgWrapper>
        <span>Special offer</span>
        <Img
          src={
            "https://res.cloudinary.com/dza2t1htw/image/upload/v1668918282/remot.64ed6179dc9fda7cec4a_uyztho.png"
          }
          alt="remot"
        />
      </ImgWrapper>
      <Caption>
        <Button>
          <h6>Game Console Controner + USB 3.0 cable</h6>
          <PriceBtn>
            $ 79.00 <Roatoted>$ 119.00</Roatoted>
          </PriceBtn>
        </Button>
      </Caption>
      <Progressbar>
        <Progress>
          <span></span>
        </Progress>
        <Available>
          <span>
            Already Sold : <span>70</span>
          </span>
          <span>
            Available : <span>28</span>
          </span>
        </Available>
      </Progressbar>
      <Timer>
        <h6>Hurry Up! Offer Ends In :</h6>
        {clock && (
          <Counter>
            <span>
              <span>{clock.h}</span>
              <p>HOURS</p>
            </span>
            <p>:</p>
            <span>
              <span>{clock.m}</span>
              <p>MENS</p>
            </span>
            <p>:</p>
            <span>
              <span>{clock.s}</span>
              <p>SEC</p>
            </span>
          </Counter>
        )}
      </Timer>
    </Item>
  );
};

export default OffierCounter;
