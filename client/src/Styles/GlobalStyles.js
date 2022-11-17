import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body{
    font-family: 'Montserrat', sans-serif;
   // user-select: none;
    overflow: auto ;
    background: #f0f4f7;
}
a{
    text-decoration: none;
    color: #000;
    display: inline-block;
}
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
.p-0 {
    padding : 0 !important;
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
`;
