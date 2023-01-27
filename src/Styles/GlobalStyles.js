import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
@media print {
   body {
      -webkit-print-color-adjust: exact;
   }
}
body{
    font-family: 'Montserrat', sans-serif;
   // user-select: none;
    overflow: auto ;
    background: #edf2fd;
}
a{
    text-decoration: none;
    color: #000;
    display: inline-block;
}

@media (min-width: 600px){

.css-pqafgp {
     margin-left: 0 !important; 
    width: auto;
}}
a:hover {
    text-decoration: none !important;
    color:  #000;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,a{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}

.slick-arrow.slick-next {
  display: none !important;
}

.pretty.p-switch input:checked~.state label:after {
    background-color: #259de7!important;
    left: 1em;
}
.pretty.p-switch input:checked~.state:before {
    border-color: #69c3ff;
}
button{
    border: none;
    background: transparent;
}
:no-button:focus{
   border: none
}
input:focus{
    /* border: none !important; */
   outline: none;
//    background: transparent !important;
}

ul{
   
margin: 0;
  padding: 0;
  list-style: outside none none;
}
.swiper {
  width: 100%;
  height: 100%;
}
span.sc-bxSTMQ.dujOJd.active {
    border: 2px solid #000 !important;
    margin: 0px;
}
.swiper-slide{
    background: transparent
}
.error {
    border: 1px solid #dc3545;
}
.notload {
    cursor: pointer;
}
.m-0 {
    margin : 0 !important;
}
.width-100{
    width: 100%;
}
.p-0 {
    padding : 0 !important;
}

#tab .css-jpln7h-MuiTabs-scroller {
    display: flex;
    justify-content: center;
    align-items: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

@media (min-width: 1400px){
.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1675px !important;
}
}

@media (max-width: 767.98px) {
    .sm-w-100{
    width: 100%;
}
}
@media (max-width: 990px) {
    .container{
     max-width: 100%;

    }
}

.notiLogin{
    margin-left: 4px;
    font-weight: 800;
}
input.emoji-search {
    display: none;
}
ul.skin-tones-list {
    display: none;
}
.disabled{
    background: #8db7f6
}
.smnone-true{
    display: none;
}

aside.emoji-picker-react .content-wrapper:before {
    content: none !important;
}
// Loading CSS
.loader {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 20px;
    height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@media (min-width: 1400px){
.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1200px;
}
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// Tabs style of product details
button.nav-link {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    margin: 0 15px;
    padding: 0 0 13px;
    color: #666;
    border-bottom: 3px solid transparent;
    background-color: transparent;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    border : #fff;
    font-weight: 600;
    border-bottom: 3px solid #000;
    color: #000;
}
.tab-content {
    width: 100%;
    padding: 33px 0 0;
}

ul.mb-3.nav.nav-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

// Margin
.mb-1{
 margin-bottom: 1r3em;
}

// Bootstrap 
@media (min-width: 1400px){

.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1420px;
}
}
.active{
   // background: #f1f2f3;
    color: #000;
}

.pretty .state label:before {
    border-color: #221ecd;
    border-radius: 5px;
    transition: all 0.5s;
}

.pretty.p-default input:checked~.state label:after {
    background-color: #221ecd!important;
    border-radius: 5px;
    transition: all 0.5s;
}

@media (max-width: 1199px) {
    .carosel_items__7YoKv {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

    .verified_caption__K7xti p {
    font-size: 10px;
}
    .verified_caption__K7xti h5 {
    font-size: 14px;
}
    .verified_items__NB8WN {
    padding: 20px 30px;
}
    .verified_img__LDAcI {
    height: 108px;
    max-width: 115px;
}
    .shopping_cartImg__XH6xG {
    margin-bottom: 6px;
}
    .specialshop_caption__Uj9og {
    margin-top: 1rem;
}
  .dispaly-none {
      display: none !important;
  }
  .width-100{
      width: 100%;
  }
  .fetureItems {
    margin-top: 1rem;
}
 .display-flex {
     display: flex !important;
 }
 .justify-between{
    justify-content: space-between;
 }
 .m-top-4{
     margin-top: 1rem;
 }
 .mediumdevice{
    display: block !important;
}
.slider_carousel__sMuoU img {
    height: inherit !important;
}
.timerpart_caroselTitle__3O0AW h4 {
    font-size: 16px;
}
.banner_button__P-0GP span {
    width: 142px ;
    height: 51px ;
    font-size: 19.37px;
}
.banner_button__P-0GP span p {
    top: 9px;
    right: 24px;
    color: #e65353;
}
.banner_banner__1jrEf::before {
    left: -151px;
}
}
  @media (max-width: 767.98px) {
    .sm-d-none {
      display: none !important;
    }
  }

  .carousel-inner {
    background: #fff;
}
`;
