(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`@charset "UTF-8";/*!
* Bootstrap  v5.2.3 (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Copyright 2011-2022 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-2xl:2rem;--bs-border-radius-pill:50rem;--bs-link-color:#0d6efd;--bs-link-hover-color:#0a58ca;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled,.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer:before{content:"\\2014\\a0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:.25rem}.g-1,.gy-1{--bs-gutter-y:.25rem}.g-2,.gx-2{--bs-gutter-x:.5rem}.g-2,.gy-2{--bs-gutter-y:.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color:var(--bs-body-color);--bs-table-bg:transparent;--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0, 0, 0, .05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0, 0, 0, .1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0, 0, 0, .075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#bacbe6;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#cbccce;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#bcd0c7;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#badce3;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#e6dbb9;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#dfc2c4;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#dfe0e1;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#373b3e;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + .75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem #0d6efd40}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#198754e6;border-radius:.375rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem #19875440}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem #19875440}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3.75rem + 1.5em)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem #19875440}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:#dc3545e6;border-radius:.375rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem #dc354540}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem #dc354540}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3.75rem + 1.5em)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem #dc354540}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:.75rem;--bs-btn-padding-y:.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:#212529;--bs-btn-bg:transparent;--bs-btn-border-width:1px;--bs-btn-border-color:transparent;--bs-btn-border-radius:.375rem;--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15),0 1px 1px rgba(0, 0, 0, .075);--bs-btn-disabled-opacity:.65;--bs-btn-focus-box-shadow:0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:none;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:.5rem}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:.25rem;--bs-btn-padding-x:.5rem;--bs-btn-font-size:.875rem;--bs-btn-border-radius:.25rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:.5rem;--bs-dropdown-spacer:.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:#212529;--bs-dropdown-bg:#fff;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:.375rem;--bs-dropdown-border-width:1px;--bs-dropdown-inner-border-radius:calc(.375rem - 1px);--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:.5rem;--bs-dropdown-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-dropdown-link-color:#212529;--bs-dropdown-link-hover-color:#1e2125;--bs-dropdown-link-hover-bg:#e9ecef;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle:after{display:none}.dropstart .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, .15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:#6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width:1px;--bs-nav-tabs-border-color:#dee2e6;--bs-nav-tabs-border-radius:.375rem;--bs-nav-tabs-link-hover-border-color:#e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color:#495057;--bs-nav-tabs-link-active-bg:#fff;--bs-nav-tabs-link-active-border-color:#dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));background:0 0;border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius:.375rem;--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{background:0 0;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(0, 0, 0, .55);--bs-navbar-hover-color:rgba(0, 0, 0, .7);--bs-navbar-disabled-color:rgba(0, 0, 0, .3);--bs-navbar-active-color:rgba(0, 0, 0, .9);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(0, 0, 0, .9);--bs-navbar-brand-hover-color:rgba(0, 0, 0, .9);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(0, 0, 0, .1);--bs-navbar-toggler-border-radius:.375rem;--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link.active,.navbar-nav .show>.nav-link{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color:rgba(255, 255, 255, .55);--bs-navbar-hover-color:rgba(255, 255, 255, .75);--bs-navbar-disabled-color:rgba(255, 255, 255, .25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, .1);--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:.5rem;--bs-card-border-width:1px;--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(.375rem - 1px);--bs-card-cap-padding-y:.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(0, 0, 0, .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:#fff;--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:#212529;--bs-accordion-bg:#fff;--bs-accordion-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:1px;--bs-accordion-border-radius:.375rem;--bs-accordion-inner-border-radius:calc(.375rem - 1px);--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:#212529;--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform .2s ease-in-out;--bs-accordion-btn-active-icon:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:#0c63e4;--bs-accordion-active-bg:#e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:#6c757d;--bs-breadcrumb-item-padding-x:.5rem;--bs-breadcrumb-item-active-color:#6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, "/")}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:.75rem;--bs-pagination-padding-y:.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:#fff;--bs-pagination-border-width:1px;--bs-pagination-border-color:#dee2e6;--bs-pagination-border-radius:.375rem;--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:#e9ecef;--bs-pagination-hover-border-color:#dee2e6;--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:#e9ecef;--bs-pagination-focus-box-shadow:0 0 0 .25rem rgba(13, 110, 253, .25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:#6c757d;--bs-pagination-disabled-bg:#fff;--bs-pagination-disabled-border-color:#dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:.5rem}.pagination-sm{--bs-pagination-padding-x:.5rem;--bs-pagination-padding-y:.25rem;--bs-pagination-font-size:.875rem;--bs-pagination-border-radius:.25rem}.badge{--bs-badge-padding-x:.65em;--bs-badge-padding-y:.35em;--bs-badge-font-size:.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:1px solid var(--bs-alert-border-color);--bs-alert-border-radius:.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color:#084298;--bs-alert-bg:#cfe2ff;--bs-alert-border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color:#41464b;--bs-alert-bg:#e2e3e5;--bs-alert-border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color:#0f5132;--bs-alert-bg:#d1e7dd;--bs-alert-border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color:#055160;--bs-alert-bg:#cff4fc;--bs-alert-border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color:#664d03;--bs-alert-bg:#fff3cd;--bs-alert-border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color:#842029;--bs-alert-bg:#f8d7da;--bs-alert-border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color:#636464;--bs-alert-bg:#fefefe;--bs-alert-border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color:#141619;--bs-alert-bg:#d3d3d4;--bs-alert-border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height:1rem;--bs-progress-font-size:.75rem;--bs-progress-bg:#e9ecef;--bs-progress-border-radius:.375rem;--bs-progress-box-shadow:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width .6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:#212529;--bs-list-group-bg:#fff;--bs-list-group-border-color:rgba(0, 0, 0, .125);--bs-list-group-border-width:1px;--bs-list-group-border-radius:.375rem;--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:.5rem;--bs-list-group-action-color:#495057;--bs-list-group-action-hover-color:#495057;--bs-list-group-action-hover-bg:#f8f9fa;--bs-list-group-action-active-color:#212529;--bs-list-group-action-active-bg:#e9ecef;--bs-list-group-disabled-color:#6c757d;--bs-list-group-disabled-bg:#fff;--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item:before{content:counters(section,".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em;color:#000;background:transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem #0d6efd40;opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:.75rem;--bs-toast-padding-y:.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(255, 255, 255, .85);--bs-toast-border-width:1px;--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:.375rem;--bs-toast-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-toast-header-color:#6c757d;--bs-toast-header-bg:rgba(255, 255, 255, .85);--bs-toast-header-border-color:rgba(0, 0, 0, .05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;position:absolute;z-index:var(--bs-toast-zindex);width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:.5rem;--bs-modal-color: ;--bs-modal-bg:#fff;--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:1px;--bs-modal-border-radius:.5rem;--bs-modal-box-shadow:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-modal-inner-border-radius:calc(.5rem - 1px);--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:1px;--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin:calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:.5rem;--bs-tooltip-padding-y:.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:.875rem;--bs-tooltip-color:#fff;--bs-tooltip-bg:#000;--bs-tooltip-border-radius:.375rem;--bs-tooltip-opacity:.9;--bs-tooltip-arrow-width:.8rem;--bs-tooltip-arrow-height:.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow:before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:.875rem;--bs-popover-bg:#fff;--bs-popover-border-width:1px;--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:.5rem;--bs-popover-inner-border-radius:calc(.5rem - 1px);--bs-popover-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg:#f0f0f0;--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:#212529;--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow:after,.popover .popover-arrow:before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid;border-width:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translate(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translate(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-border,.spinner-grow{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-border-width:.25em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-.125em;--bs-spinner-animation-speed:.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg:#fff;--bs-offcanvas-border-width:1px;--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 .125rem .25rem rgba(0, 0, 0, .075)}@media (max-width:575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:575.98px){.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}}@media (max-width:575.98px){.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:767.98px){.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}}@media (max-width:767.98px){.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:991.98px){.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}}@media (max-width:991.98px){.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1199.98px){.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}}@media (max-width:1199.98px){.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}}@media (max-width:1399.98px){.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translate(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin-top:calc(-.5 * var(--bs-offcanvas-padding-y));margin-right:calc(-.5 * var(--bs-offcanvas-padding-x));margin-bottom:calc(-.5 * var(--bs-offcanvas-padding-y))}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn:before{display:inline-block;content:""}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.clearfix:after{display:block;clear:both;content:""}.text-bg-primary{color:#fff!important;background-color:RGBA(13,110,253,var(--bs-bg-opacity,1))!important}.text-bg-secondary{color:#fff!important;background-color:RGBA(108,117,125,var(--bs-bg-opacity,1))!important}.text-bg-success{color:#fff!important;background-color:RGBA(25,135,84,var(--bs-bg-opacity,1))!important}.text-bg-info{color:#000!important;background-color:RGBA(13,202,240,var(--bs-bg-opacity,1))!important}.text-bg-warning{color:#000!important;background-color:RGBA(255,193,7,var(--bs-bg-opacity,1))!important}.text-bg-danger{color:#fff!important;background-color:RGBA(220,53,69,var(--bs-bg-opacity,1))!important}.text-bg-light{color:#000!important;background-color:RGBA(248,249,250,var(--bs-bg-opacity,1))!important}.text-bg-dark{color:#fff!important;background-color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important}.link-primary{color:#0d6efd!important}.link-primary:focus,.link-primary:hover{color:#0a58ca!important}.link-secondary{color:#6c757d!important}.link-secondary:focus,.link-secondary:hover{color:#565e64!important}.link-success{color:#198754!important}.link-success:focus,.link-success:hover{color:#146c43!important}.link-info{color:#0dcaf0!important}.link-info:focus,.link-info:hover{color:#3dd5f3!important}.link-warning{color:#ffc107!important}.link-warning:focus,.link-warning:hover{color:#ffcd39!important}.link-danger{color:#dc3545!important}.link-danger:focus,.link-danger:hover{color:#b02a37!important}.link-light{color:#f8f9fa!important}.link-light:focus,.link-light:hover{color:#f9fafb!important}.link-dark{color:#212529!important}.link-dark:focus,.link-dark:hover{color:#1a1e21!important}.ratio{position:relative;width:100%}.ratio:before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem #00000026!important}.shadow-sm{box-shadow:0 .125rem .25rem #00000013!important}.shadow-lg{box-shadow:0 1rem 3rem #0000002d!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translate(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-1{--bs-border-width:1px}.border-2{--bs-border-width:2px}.border-3{--bs-border-width:3px}.border-4{--bs-border-width:4px}.border-5{--bs-border-width:5px}.border-opacity-10{--bs-border-opacity:.1}.border-opacity-25{--bs-border-opacity:.25}.border-opacity-50{--bs-border-opacity:.5}.border-opacity-75{--bs-border-opacity:.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-semibold{font-weight:600!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:#6c757d!important}.text-black-50{--bs-text-opacity:1;color:#00000080!important}.text-white-50{--bs-text-opacity:1;color:#ffffff80!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:.25}.text-opacity-50{--bs-text-opacity:.5}.text-opacity-75{--bs-text-opacity:.75}.text-opacity-100{--bs-text-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-opacity-10{--bs-bg-opacity:.1}.bg-opacity-25{--bs-bg-opacity:.25}.bg-opacity-50{--bs-bg-opacity:.5}.bg-opacity-75{--bs-bg-opacity:.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-2xl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}.wrapper{position:relative;top:0;height:100vh}.wrapper.wrapper-full-page{min-height:100vh;height:auto}.full-page>.content,.full-page>.footer{position:relative;z-index:4}.full-page.section-image{position:initial}.full-page>.content{padding-bottom:150px;padding-top:150px}.full-page .footer{position:absolute;width:100%;bottom:0}.full-page .footer .container{color:#fff}.full-page .full-page-background{position:absolute;z-index:1;height:100%;width:100%;display:block;top:0;left:0;background-size:cover;background-position:center center}.full-page:after{position:absolute;z-index:1;width:100%;height:100%;display:block;left:0;top:0;content:"";background-color:#0009}.full-page.pricing-page .description{margin-bottom:65px}.full-page.register-page .info-horizontal{padding:0 0 20px}.full-page.register-page .info-horizontal{text-align:left!important}.full-page.register-page .info-horizontal .icon{margin-top:0}.full-page.register-page .info-horizontal .icon>i{font-size:2em}.full-page.register-page .info-horizontal .icon.icon-circle{width:65px;height:65px;max-width:65px;margin-top:8px}.full-page.register-page .info-horizontal .icon.icon-circle i{display:table;margin:0 auto;line-height:3.5;font-size:1.9em}.full-page.register-page .info-horizontal .description{overflow:hidden}.footer{padding:24px 0}.footer.footer-default{background-color:#f2f2f2}.footer nav{display:inline-block;float:left;padding-left:7px}.footer ul{margin-bottom:0;padding:0;list-style:none}.footer ul li{display:inline-block}.footer ul li a{color:inherit;padding:.5rem;font-size:.8571em;text-transform:uppercase;text-decoration:none}.footer ul li a:hover{text-decoration:none}.footer .copyright{font-size:.8571em;line-height:1.8}.footer:after{display:table;clear:both;content:" "}.section-image{background-size:cover;background-position:center center;position:relative;width:100%}.section-image .title,.section-image .card-plain .card-title{color:#fff}.section-image .nav-pills .nav-link{background-color:#fff}.section-image .nav-pills .nav-link:hover,.section-image .nav-pills .nav-link:focus{background-color:#fff}.section-image .info-title,.section-image .info-area.info-horizontal .icon i,.section-image .card-pricing.card-plain ul li{color:#fff}.section-image .description,.section-image .info-area .icon:not(.icon-circle){color:#fffc}.section-image .card:not(.card-plain) .info-title{color:#2c2c2c}.section-image .card:not(.card-plain) .info-area p,.section-image .card:not(.card-plain) .info-area .icon,.section-image .card:not(.card-plain) .description{color:#9a9a9a}.section-image .footer,.section-image .card-plain [class*=text-],.section-image .card-plain ul li b{color:#fff}.section-image .card-plain .category{color:#ffffff80}.section-image:after{position:absolute;z-index:1;width:100%;height:100%;display:block;left:0;top:0;content:"";background-color:#000000b3}.section-image .container{z-index:2;position:relative}.form-check .form-check-label{display:inline-block;position:relative;cursor:pointer;padding-left:35px;line-height:26px;margin-bottom:0;-webkit-transition:color .3s linear;transition:color .3s linear}`)),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var sh = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Rg = sh((Mg, zi) => {
  function Dn(e, t) {
    const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
    for (let s = 0; s < r.length; s++)
      n[r[s]] = !0;
    return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
  }
  function io(e) {
    if ($(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], s = He(r) ? lh(r) : io(r);
        if (s)
          for (const i in s)
            t[i] = s[i];
      }
      return t;
    } else {
      if (He(e))
        return e;
      if (ge(e))
        return e;
    }
  }
  const ih = /;(?![^(]*\))/g, oh = /:([^]+)/, ah = /\/\*.*?\*\//gs;
  function lh(e) {
    const t = {};
    return e.replace(ah, "").split(ih).forEach((n) => {
      if (n) {
        const r = n.split(oh);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  function Da(e) {
    let t = "";
    if (He(e))
      t = e;
    else if ($(e))
      for (let n = 0; n < e.length; n++) {
        const r = Da(e[n]);
        r && (t += r + " ");
      }
    else if (ge(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  const uh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ch = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fh = /* @__PURE__ */ Dn(uh), dh = /* @__PURE__ */ Dn(ch), ph = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hh = /* @__PURE__ */ Dn(ph);
  function Hc(e) {
    return !!e || e === "";
  }
  const Ia = (e) => He(e) ? e : e == null ? "" : $(e) || ge(e) && (e.toString === Xc || !te(e.toString)) ? JSON.stringify(e, kc, 2) : String(e), kc = (e, t) => t && t.__v_isRef ? kc(e, t.value) : sr(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
  } : Kc(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : ge(t) && !$(t) && !Dc(t) ? String(t) : t, Re = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pr = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], Be = () => {
  }, Zc = () => !1, mh = /^on[^a-z]/, Ds = (e) => mh.test(e), Ti = (e) => e.startsWith("onUpdate:"), Ke = Object.assign, Ca = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, yh = Object.prototype.hasOwnProperty, ce = (e, t) => yh.call(e, t), $ = Array.isArray, sr = (e) => oo(e) === "[object Map]", Kc = (e) => oo(e) === "[object Set]", te = (e) => typeof e == "function", He = (e) => typeof e == "string", Ja = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Ga = (e) => ge(e) && te(e.then) && te(e.catch), Xc = Object.prototype.toString, oo = (e) => Xc.call(e), Ba = (e) => oo(e).slice(8, -1), Dc = (e) => oo(e) === "[object Object]", Qa = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mi = /* @__PURE__ */ Dn(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ), bh = /* @__PURE__ */ Dn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ao = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  }, vh = /-(\w)/g, rn = ao((e) => e.replace(vh, (t, n) => n ? n.toUpperCase() : "")), Oh = /\B([A-Z])/g, Un = ao((e) => e.replace(Oh, "-$1").toLowerCase()), fr = ao((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qn = ao((e) => e ? `on${fr(e)}` : ""), qs = (e, t) => !Object.is(e, t), ns = (e, t) => {
    for (let n = 0; n < e.length; n++)
      e[n](t);
  }, Ei = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    });
  }, xh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  let ou;
  const Ic = () => ou || (ou = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function ji(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t);
  }
  let mt;
  class Cc {
    constructor(t = !1) {
      this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const n = mt;
        try {
          return mt = this, t();
        } finally {
          mt = n;
        }
      } else
        ({}).NODE_ENV !== "production" && ji("cannot run an inactive effect scope.");
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      mt = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      mt = this.parent;
    }
    stop(t) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0, this._active = !1;
      }
    }
  }
  function Jc(e) {
    return new Cc(e);
  }
  function Vh(e, t = mt) {
    t && t.active && t.effects.push(e);
  }
  function Gc() {
    return mt;
  }
  function Lh(e) {
    mt ? mt.cleanups.push(e) : {}.NODE_ENV !== "production" && ji("onScopeDispose() is called when there is no active effect scope to be associated with.");
  }
  const Rs = (e) => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  }, Bc = (e) => (e.w & Hn) > 0, Qc = (e) => (e.n & Hn) > 0, Ah = ({ deps: e }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++)
        e[t].w |= Hn;
  }, wh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        Bc(s) && !Qc(s) ? s.delete(e) : t[n++] = s, s.w &= ~Hn, s.n &= ~Hn;
      }
      t.length = n;
    }
  }, Si = /* @__PURE__ */ new WeakMap();
  let us = 0, Hn = 1;
  const ea = 30;
  let at;
  const ir = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), ta = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
  class _a {
    constructor(t, n = null, r) {
      this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Vh(this, r);
    }
    run() {
      if (!this.active)
        return this.fn();
      let t = at, n = Yn;
      for (; t; ) {
        if (t === this)
          return;
        t = t.parent;
      }
      try {
        return this.parent = at, at = this, Yn = !0, Hn = 1 << ++us, us <= ea ? Ah(this) : au(this), this.fn();
      } finally {
        us <= ea && wh(this), Hn = 1 << --us, at = this.parent, Yn = n, this.parent = void 0, this.deferStop && this.stop();
      }
    }
    stop() {
      at === this ? this.deferStop = !0 : this.active && (au(this), this.onStop && this.onStop(), this.active = !1);
    }
  }
  function au(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++)
        t[n].delete(e);
      t.length = 0;
    }
  }
  let Yn = !0;
  const _c = [];
  function br() {
    _c.push(Yn), Yn = !1;
  }
  function vr() {
    const e = _c.pop();
    Yn = e === void 0 ? !0 : e;
  }
  function lt(e, t, n) {
    if (Yn && at) {
      let r = Si.get(e);
      r || Si.set(e, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || r.set(n, s = Rs());
      const i = {}.NODE_ENV !== "production" ? { effect: at, target: e, type: t, key: n } : void 0;
      na(s, i);
    }
  }
  function na(e, t) {
    let n = !1;
    us <= ea ? Qc(e) || (e.n |= Hn, n = !Bc(e)) : n = !e.has(at), n && (e.add(at), at.deps.push(e), {}.NODE_ENV !== "production" && at.onTrack && at.onTrack(Object.assign({ effect: at }, t)));
  }
  function Vn(e, t, n, r, s, i) {
    const o = Si.get(e);
    if (!o)
      return;
    let a = [];
    if (t === "clear")
      a = [...o.values()];
    else if (n === "length" && $(e)) {
      const f = Number(r);
      o.forEach((c, u) => {
        (u === "length" || u >= f) && a.push(c);
      });
    } else
      switch (n !== void 0 && a.push(o.get(n)), t) {
        case "add":
          $(e) ? Qa(n) && a.push(o.get("length")) : (a.push(o.get(ir)), sr(e) && a.push(o.get(ta)));
          break;
        case "delete":
          $(e) || (a.push(o.get(ir)), sr(e) && a.push(o.get(ta)));
          break;
        case "set":
          sr(e) && a.push(o.get(ir));
          break;
      }
    const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: s, oldTarget: i } : void 0;
    if (a.length === 1)
      a[0] && ({}.NODE_ENV !== "production" ? zr(a[0], l) : zr(a[0]));
    else {
      const f = [];
      for (const c of a)
        c && f.push(...c);
      ({}).NODE_ENV !== "production" ? zr(Rs(f), l) : zr(Rs(f));
    }
  }
  function zr(e, t) {
    const n = $(e) ? e : [...e];
    for (const r of n)
      r.computed && lu(r, t);
    for (const r of n)
      r.computed || lu(r, t);
  }
  function lu(e, t) {
    (e !== at || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ke({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
  }
  function gh(e, t) {
    var n;
    return (n = Si.get(e)) === null || n === void 0 ? void 0 : n.get(t);
  }
  const Wh = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), $c = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ja)
  ), Nh = /* @__PURE__ */ lo(), qh = /* @__PURE__ */ lo(!1, !0), Rh = /* @__PURE__ */ lo(!0), Fh = /* @__PURE__ */ lo(!0, !0), uu = /* @__PURE__ */ Mh();
  function Mh() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const r = ee(this);
        for (let i = 0, o = this.length; i < o; i++)
          lt(r, "get", i + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(ee)) : s;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        br();
        const r = ee(this)[t].apply(this, n);
        return vr(), r;
      };
    }), e;
  }
  function zh(e) {
    const t = ee(this);
    return lt(t, "has", e), t.hasOwnProperty(e);
  }
  function lo(e = !1, t = !1) {
    return function(r, s, i) {
      if (s === "__v_isReactive")
        return !e;
      if (s === "__v_isReadonly")
        return e;
      if (s === "__v_isShallow")
        return t;
      if (s === "__v_raw" && i === (e ? t ? lf : af : t ? of : sf).get(r))
        return r;
      const o = $(r);
      if (!e) {
        if (o && ce(uu, s))
          return Reflect.get(uu, s, i);
        if (s === "hasOwnProperty")
          return zh;
      }
      const a = Reflect.get(r, s, i);
      return (Ja(s) ? $c.has(s) : Wh(s)) || (e || lt(r, "get", s), t) ? a : ve(a) ? o && Qa(s) ? a : a.value : ge(a) ? e ? uf(a) : Wt(a) : a;
    };
  }
  const Th = /* @__PURE__ */ ef(), Eh = /* @__PURE__ */ ef(!0);
  function ef(e = !1) {
    return function(n, r, s, i) {
      let o = n[r];
      if (kn(o) && ve(o) && !ve(s))
        return !1;
      if (!e && (!Yi(s) && !kn(s) && (o = ee(o), s = ee(s)), !$(n) && ve(o) && !ve(s)))
        return o.value = s, !0;
      const a = $(n) && Qa(r) ? Number(r) < n.length : ce(n, r), l = Reflect.set(n, r, s, i);
      return n === ee(i) && (a ? qs(s, o) && Vn(n, "set", r, s, o) : Vn(n, "add", r, s)), l;
    };
  }
  function jh(e, t) {
    const n = ce(e, t), r = e[t], s = Reflect.deleteProperty(e, t);
    return s && n && Vn(e, "delete", t, void 0, r), s;
  }
  function Sh(e, t) {
    const n = Reflect.has(e, t);
    return (!Ja(t) || !$c.has(t)) && lt(e, "has", t), n;
  }
  function Yh(e) {
    return lt(e, "iterate", $(e) ? "length" : ir), Reflect.ownKeys(e);
  }
  const tf = {
    get: Nh,
    set: Th,
    deleteProperty: jh,
    has: Sh,
    ownKeys: Yh
  }, nf = {
    get: Rh,
    set(e, t) {
      return {}.NODE_ENV !== "production" && ji(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
    deleteProperty(e, t) {
      return {}.NODE_ENV !== "production" && ji(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    }
  }, Ph = /* @__PURE__ */ Ke({}, tf, {
    get: qh,
    set: Eh
  }), Uh = /* @__PURE__ */ Ke({}, nf, {
    get: Fh
  }), $a = (e) => e, uo = (e) => Reflect.getPrototypeOf(e);
  function ri(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = ee(e), i = ee(t);
    n || (t !== i && lt(s, "get", t), lt(s, "get", i));
    const { has: o } = uo(s), a = r ? $a : n ? el : Fs;
    if (o.call(s, t))
      return a(e.get(t));
    if (o.call(s, i))
      return a(e.get(i));
    e !== s && e.get(t);
  }
  function si(e, t = !1) {
    const n = this.__v_raw, r = ee(n), s = ee(e);
    return t || (e !== s && lt(r, "has", e), lt(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
  }
  function ii(e, t = !1) {
    return e = e.__v_raw, !t && lt(ee(e), "iterate", ir), Reflect.get(e, "size", e);
  }
  function cu(e) {
    e = ee(e);
    const t = ee(this);
    return uo(t).has.call(t, e) || (t.add(e), Vn(t, "add", e, e)), this;
  }
  function fu(e, t) {
    t = ee(t);
    const n = ee(this), { has: r, get: s } = uo(n);
    let i = r.call(n, e);
    i ? {}.NODE_ENV !== "production" && rf(n, r, e) : (e = ee(e), i = r.call(n, e));
    const o = s.call(n, e);
    return n.set(e, t), i ? qs(t, o) && Vn(n, "set", e, t, o) : Vn(n, "add", e, t), this;
  }
  function du(e) {
    const t = ee(this), { has: n, get: r } = uo(t);
    let s = n.call(t, e);
    s ? {}.NODE_ENV !== "production" && rf(t, n, e) : (e = ee(e), s = n.call(t, e));
    const i = r ? r.call(t, e) : void 0, o = t.delete(e);
    return s && Vn(t, "delete", e, void 0, i), o;
  }
  function pu() {
    const e = ee(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? sr(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
    return t && Vn(e, "clear", void 0, void 0, n), r;
  }
  function oi(e, t) {
    return function(r, s) {
      const i = this, o = i.__v_raw, a = ee(o), l = t ? $a : e ? el : Fs;
      return !e && lt(a, "iterate", ir), o.forEach((f, c) => r.call(s, l(f), l(c), i));
    };
  }
  function ai(e, t, n) {
    return function(...r) {
      const s = this.__v_raw, i = ee(s), o = sr(i), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, f = s[e](...r), c = n ? $a : t ? el : Fs;
      return !t && lt(i, "iterate", l ? ta : ir), {
        // iterator protocol
        next() {
          const { value: u, done: d } = f.next();
          return d ? { value: u, done: d } : {
            value: a ? [c(u[0]), c(u[1])] : c(u),
            done: d
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Rn(e) {
    return function(...t) {
      if ({}.NODE_ENV !== "production") {
        const n = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(`${fr(e)} operation ${n}failed: target is readonly.`, ee(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  function Hh() {
    const e = {
      get(i) {
        return ri(this, i);
      },
      get size() {
        return ii(this);
      },
      has: si,
      add: cu,
      set: fu,
      delete: du,
      clear: pu,
      forEach: oi(!1, !1)
    }, t = {
      get(i) {
        return ri(this, i, !1, !0);
      },
      get size() {
        return ii(this);
      },
      has: si,
      add: cu,
      set: fu,
      delete: du,
      clear: pu,
      forEach: oi(!1, !0)
    }, n = {
      get(i) {
        return ri(this, i, !0);
      },
      get size() {
        return ii(this, !0);
      },
      has(i) {
        return si.call(this, i, !0);
      },
      add: Rn(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: Rn(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: Rn(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: Rn(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: oi(!0, !1)
    }, r = {
      get(i) {
        return ri(this, i, !0, !0);
      },
      get size() {
        return ii(this, !0);
      },
      has(i) {
        return si.call(this, i, !0);
      },
      add: Rn(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: Rn(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: Rn(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: Rn(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: oi(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      e[i] = ai(i, !1, !1), n[i] = ai(i, !0, !1), t[i] = ai(i, !1, !0), r[i] = ai(i, !0, !0);
    }), [
      e,
      n,
      t,
      r
    ];
  }
  const [kh, Zh, Kh, Xh] = /* @__PURE__ */ Hh();
  function co(e, t) {
    const n = t ? e ? Xh : Kh : e ? Zh : kh;
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ce(n, s) && s in r ? n : r, s, i);
  }
  const Dh = {
    get: /* @__PURE__ */ co(!1, !1)
  }, Ih = {
    get: /* @__PURE__ */ co(!1, !0)
  }, Ch = {
    get: /* @__PURE__ */ co(!0, !1)
  }, Jh = {
    get: /* @__PURE__ */ co(!0, !0)
  };
  function rf(e, t, n) {
    const r = ee(n);
    if (r !== n && t.call(e, r)) {
      const s = Ba(e);
      console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  const sf = /* @__PURE__ */ new WeakMap(), of = /* @__PURE__ */ new WeakMap(), af = /* @__PURE__ */ new WeakMap(), lf = /* @__PURE__ */ new WeakMap();
  function Gh(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Bh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Gh(Ba(e));
  }
  function Wt(e) {
    return kn(e) ? e : fo(e, !1, tf, Dh, sf);
  }
  function Qh(e) {
    return fo(e, !1, Ph, Ih, of);
  }
  function uf(e) {
    return fo(e, !0, nf, Ch, af);
  }
  function Tr(e) {
    return fo(e, !0, Uh, Jh, lf);
  }
  function fo(e, t, n, r, s) {
    if (!ge(e))
      return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const i = s.get(e);
    if (i)
      return i;
    const o = Bh(e);
    if (o === 0)
      return e;
    const a = new Proxy(e, o === 2 ? r : n);
    return s.set(e, a), a;
  }
  function dt(e) {
    return kn(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function kn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Yi(e) {
    return !!(e && e.__v_isShallow);
  }
  function Pi(e) {
    return dt(e) || kn(e);
  }
  function ee(e) {
    const t = e && e.__v_raw;
    return t ? ee(t) : e;
  }
  function At(e) {
    return Ei(e, "__v_skip", !0), e;
  }
  const Fs = (e) => ge(e) ? Wt(e) : e, el = (e) => ge(e) ? uf(e) : e;
  function cf(e) {
    Yn && at && (e = ee(e), {}.NODE_ENV !== "production" ? na(e.dep || (e.dep = Rs()), {
      target: e,
      type: "get",
      key: "value"
    }) : na(e.dep || (e.dep = Rs())));
  }
  function tl(e, t) {
    e = ee(e);
    const n = e.dep;
    n && ({}.NODE_ENV !== "production" ? zr(n, {
      target: e,
      type: "set",
      key: "value",
      newValue: t
    }) : zr(n));
  }
  function ve(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function Xe(e) {
    return ff(e, !1);
  }
  function _h(e) {
    return ff(e, !0);
  }
  function ff(e, t) {
    return ve(e) ? e : new $h(e, t);
  }
  class $h {
    constructor(t, n) {
      this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ee(t), this._value = n ? t : Fs(t);
    }
    get value() {
      return cf(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || Yi(t) || kn(t);
      t = n ? t : ee(t), qs(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Fs(t), tl(this, t));
    }
  }
  function li(e) {
    tl(e, {}.NODE_ENV !== "production" ? e.value : void 0);
  }
  function re(e) {
    return ve(e) ? e.value : e;
  }
  const em = {
    get: (e, t, n) => re(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const s = e[t];
      return ve(s) && !ve(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
    }
  };
  function df(e) {
    return dt(e) ? e : new Proxy(e, em);
  }
  function hu(e) {
    ({}).NODE_ENV !== "production" && !Pi(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
    const t = $(e) ? new Array(e.length) : {};
    for (const n in e)
      t[n] = ms(e, n);
    return t;
  }
  class tm {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
    }
    get value() {
      const t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return gh(ee(this._object), this._key);
    }
  }
  function ms(e, t, n) {
    const r = e[t];
    return ve(r) ? r : new tm(e, t, n);
  }
  var pf;
  class nm {
    constructor(t, n, r, s) {
      this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[pf] = !1, this._dirty = !0, this.effect = new _a(t, () => {
        this._dirty || (this._dirty = !0, tl(this));
      }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
    }
    get value() {
      const t = ee(this);
      return cf(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
    }
    set value(t) {
      this._setter(t);
    }
  }
  pf = "__v_isReadonly";
  function rm(e, t, n = !1) {
    let r, s;
    const i = te(e);
    i ? (r = e, s = {}.NODE_ENV !== "production" ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : Be) : (r = e.get, s = e.set);
    const o = new nm(r, s, i || !s, n);
    return {}.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
  }
  const or = [];
  function yi(e) {
    or.push(e);
  }
  function bi() {
    or.pop();
  }
  function Y(e, ...t) {
    if ({}.NODE_ENV === "production")
      return;
    br();
    const n = or.length ? or[or.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = sm();
    if (r)
      vn(r, n, 11, [
        e + t.join(""),
        n && n.proxy,
        s.map(({ vnode: i }) => `at <${vo(n, i.type)}>`).join(`
`),
        s
      ]);
    else {
      const i = [`[Vue warn]: ${e}`, ...t];
      s.length && i.push(`
`, ...im(s)), console.warn(...i);
    }
    vr();
  }
  function sm() {
    let e = or[or.length - 1];
    if (!e)
      return [];
    const t = [];
    for (; e; ) {
      const n = t[0];
      n && n.vnode === e ? n.recurseCount++ : t.push({
        vnode: e,
        recurseCount: 0
      });
      const r = e.component && e.component.parent;
      e = r && r.vnode;
    }
    return t;
  }
  function im(e) {
    const t = [];
    return e.forEach((n, r) => {
      t.push(...r === 0 ? [] : [`
`], ...om(n));
    }), t;
  }
  function om({ vnode: e, recurseCount: t }) {
    const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${vo(e.component, e.type, r)}`, i = ">" + n;
    return e.props ? [s, ...am(e.props), i] : [s + i];
  }
  function am(e) {
    const t = [], n = Object.keys(e);
    return n.slice(0, 3).forEach((r) => {
      t.push(...hf(r, e[r]));
    }), n.length > 3 && t.push(" ..."), t;
  }
  function hf(e, t, n) {
    return He(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ve(t) ? (t = hf(e, ee(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : te(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ee(t), n ? t : [`${e}=`, t]);
  }
  const nl = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    [
      0
      /* ErrorCodes.SETUP_FUNCTION */
    ]: "setup function",
    [
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ]: "render function",
    [
      2
      /* ErrorCodes.WATCH_GETTER */
    ]: "watcher getter",
    [
      3
      /* ErrorCodes.WATCH_CALLBACK */
    ]: "watcher callback",
    [
      4
      /* ErrorCodes.WATCH_CLEANUP */
    ]: "watcher cleanup function",
    [
      5
      /* ErrorCodes.NATIVE_EVENT_HANDLER */
    ]: "native event handler",
    [
      6
      /* ErrorCodes.COMPONENT_EVENT_HANDLER */
    ]: "component event handler",
    [
      7
      /* ErrorCodes.VNODE_HOOK */
    ]: "vnode hook",
    [
      8
      /* ErrorCodes.DIRECTIVE_HOOK */
    ]: "directive hook",
    [
      9
      /* ErrorCodes.TRANSITION_HOOK */
    ]: "transition hook",
    [
      10
      /* ErrorCodes.APP_ERROR_HANDLER */
    ]: "app errorHandler",
    [
      11
      /* ErrorCodes.APP_WARN_HANDLER */
    ]: "app warnHandler",
    [
      12
      /* ErrorCodes.FUNCTION_REF */
    ]: "ref function",
    [
      13
      /* ErrorCodes.ASYNC_COMPONENT_LOADER */
    ]: "async component loader",
    [
      14
      /* ErrorCodes.SCHEDULER */
    ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
  };
  function vn(e, t, n, r) {
    let s;
    try {
      s = r ? e(...r) : e();
    } catch (i) {
      po(i, t, n);
    }
    return s;
  }
  function Zt(e, t, n, r) {
    if (te(e)) {
      const i = vn(e, t, n, r);
      return i && Ga(i) && i.catch((o) => {
        po(o, t, n);
      }), i;
    }
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Zt(e[i], t, n, r));
    return s;
  }
  function po(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const o = t.proxy, a = {}.NODE_ENV !== "production" ? nl[n] : n;
      for (; i; ) {
        const f = i.ec;
        if (f) {
          for (let c = 0; c < f.length; c++)
            if (f[c](e, o, a) === !1)
              return;
        }
        i = i.parent;
      }
      const l = t.appContext.config.errorHandler;
      if (l) {
        vn(l, null, 10, [e, o, a]);
        return;
      }
    }
    lm(e, n, s, r);
  }
  function lm(e, t, n, r = !0) {
    if ({}.NODE_ENV !== "production") {
      const s = nl[t];
      if (n && yi(n), Y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && bi(), r)
        throw e;
      console.error(e);
    } else
      console.error(e);
  }
  let Ms = !1, ra = !1;
  const _e = [];
  let _t = 0;
  const Ur = [];
  let Qt = null, Mn = 0;
  const mf = /* @__PURE__ */ Promise.resolve();
  let rl = null;
  const um = 100;
  function zs(e) {
    const t = rl || mf;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function cm(e) {
    let t = _t + 1, n = _e.length;
    for (; t < n; ) {
      const r = t + n >>> 1;
      Ts(_e[r]) < e ? t = r + 1 : n = r;
    }
    return t;
  }
  function ho(e) {
    (!_e.length || !_e.includes(e, Ms && e.allowRecurse ? _t + 1 : _t)) && (e.id == null ? _e.push(e) : _e.splice(cm(e.id), 0, e), yf());
  }
  function yf() {
    !Ms && !ra && (ra = !0, rl = mf.then(Of));
  }
  function fm(e) {
    const t = _e.indexOf(e);
    t > _t && _e.splice(t, 1);
  }
  function bf(e) {
    $(e) ? Ur.push(...e) : (!Qt || !Qt.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && Ur.push(e), yf();
  }
  function mu(e, t = Ms ? _t + 1 : 0) {
    for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < _e.length; t++) {
      const n = _e[t];
      if (n && n.pre) {
        if ({}.NODE_ENV !== "production" && sl(e, n))
          continue;
        _e.splice(t, 1), t--, n();
      }
    }
  }
  function vf(e) {
    if (Ur.length) {
      const t = [...new Set(Ur)];
      if (Ur.length = 0, Qt) {
        Qt.push(...t);
        return;
      }
      for (Qt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Qt.sort((n, r) => Ts(n) - Ts(r)), Mn = 0; Mn < Qt.length; Mn++)
        ({}).NODE_ENV !== "production" && sl(e, Qt[Mn]) || Qt[Mn]();
      Qt = null, Mn = 0;
    }
  }
  const Ts = (e) => e.id == null ? 1 / 0 : e.id, dm = (e, t) => {
    const n = Ts(e) - Ts(t);
    if (n === 0) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1;
    }
    return n;
  };
  function Of(e) {
    ra = !1, Ms = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _e.sort(dm);
    const t = {}.NODE_ENV !== "production" ? (n) => sl(e, n) : Be;
    try {
      for (_t = 0; _t < _e.length; _t++) {
        const n = _e[_t];
        if (n && n.active !== !1) {
          if ({}.NODE_ENV !== "production" && t(n))
            continue;
          vn(
            n,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      _t = 0, _e.length = 0, vf(e), Ms = !1, rl = null, (_e.length || Ur.length) && Of(e);
    }
  }
  function sl(e, t) {
    if (!e.has(t))
      e.set(t, 1);
    else {
      const n = e.get(t);
      if (n > um) {
        const r = t.ownerInstance, s = r && hl(r.type);
        return Y(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
      } else
        e.set(t, n + 1);
    }
  }
  let ar = !1;
  const Rr = /* @__PURE__ */ new Set();
  ({}).NODE_ENV !== "production" && (Ic().__VUE_HMR_RUNTIME__ = {
    createRecord: So(xf),
    rerender: So(mm),
    reload: So(ym)
  });
  const dr = /* @__PURE__ */ new Map();
  function pm(e) {
    const t = e.type.__hmrId;
    let n = dr.get(t);
    n || (xf(t, e.type), n = dr.get(t)), n.instances.add(e);
  }
  function hm(e) {
    dr.get(e.type.__hmrId).instances.delete(e);
  }
  function xf(e, t) {
    return dr.has(e) ? !1 : (dr.set(e, {
      initialDef: ys(t),
      instances: /* @__PURE__ */ new Set()
    }), !0);
  }
  function ys(e) {
    return Gf(e) ? e.__vccOpts : e;
  }
  function mm(e, t) {
    const n = dr.get(e);
    n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
      t && (r.render = t, ys(r.type).render = t), r.renderCache = [], ar = !0, r.update(), ar = !1;
    }));
  }
  function ym(e, t) {
    const n = dr.get(e);
    if (!n)
      return;
    t = ys(t), yu(n.initialDef, t);
    const r = [...n.instances];
    for (const s of r) {
      const i = ys(s.type);
      Rr.has(i) || (i !== n.initialDef && yu(i, t), Rr.add(i)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Rr.add(i), s.ceReload(t.styles), Rr.delete(i)) : s.parent ? ho(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    bf(() => {
      for (const s of r)
        Rr.delete(ys(s.type));
    });
  }
  function yu(e, t) {
    Ke(e, t);
    for (const n in e)
      n !== "__file" && !(n in t) && delete e[n];
  }
  function So(e) {
    return (t, n) => {
      try {
        return e(t, n);
      } catch (r) {
        console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
      }
    };
  }
  let $t, cs = [], sa = !1;
  function Is(e, ...t) {
    $t ? $t.emit(e, ...t) : sa || cs.push({ event: e, args: t });
  }
  function Vf(e, t) {
    var n, r;
    $t = e, $t ? ($t.enabled = !0, cs.forEach(({ event: s, args: i }) => $t.emit(s, ...i)), cs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
      Vf(i, t);
    }), setTimeout(() => {
      $t || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, sa = !0, cs = []);
    }, 3e3)) : (sa = !0, cs = []);
  }
  function bm(e, t) {
    Is("app:init", e, t, {
      Fragment: wt,
      Text: Cs,
      Comment: ht,
      Static: Os
    });
  }
  function vm(e) {
    Is("app:unmount", e);
  }
  const Om = /* @__PURE__ */ il(
    "component:added"
    /* DevtoolsHooks.COMPONENT_ADDED */
  ), Lf = /* @__PURE__ */ il(
    "component:updated"
    /* DevtoolsHooks.COMPONENT_UPDATED */
  ), xm = /* @__PURE__ */ il(
    "component:removed"
    /* DevtoolsHooks.COMPONENT_REMOVED */
  ), Vm = (e) => {
    $t && typeof $t.cleanupBuffer == "function" && // remove the component if it wasn't buffered
    !$t.cleanupBuffer(e) && xm(e);
  };
  function il(e) {
    return (t) => {
      Is(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
    };
  }
  const Lm = /* @__PURE__ */ Af(
    "perf:start"
    /* DevtoolsHooks.PERFORMANCE_START */
  ), Am = /* @__PURE__ */ Af(
    "perf:end"
    /* DevtoolsHooks.PERFORMANCE_END */
  );
  function Af(e) {
    return (t, n, r) => {
      Is(e, t.appContext.app, t.uid, t, n, r);
    };
  }
  function wm(e, t, n) {
    Is("component:emit", e.appContext.app, e, t, n);
  }
  function gm(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const r = e.vnode.props || Re;
    if ({}.NODE_ENV !== "production") {
      const { emitsOptions: c, propsOptions: [u] } = e;
      if (c)
        if (!(t in c))
          (!u || !(Qn(t) in u)) && Y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qn(t)}" prop.`);
        else {
          const d = c[t];
          te(d) && (d(...n) || Y(`Invalid event arguments: event validation failed for event "${t}".`));
        }
    }
    let s = n;
    const i = t.startsWith("update:"), o = i && t.slice(7);
    if (o && o in r) {
      const c = `${o === "modelValue" ? "model" : o}Modifiers`, { number: u, trim: d } = r[c] || Re;
      d && (s = n.map((m) => He(m) ? m.trim() : m)), u && (s = n.map(xh));
    }
    if ({}.NODE_ENV !== "production" && wm(e, t, s), {}.NODE_ENV !== "production") {
      const c = t.toLowerCase();
      c !== t && r[Qn(c)] && Y(`Event "${c}" is emitted in component ${vo(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Un(t)}" instead of "${t}".`);
    }
    let a, l = r[a = Qn(t)] || // also try camelCase event handler (#2249)
    r[a = Qn(rn(t))];
    !l && i && (l = r[a = Qn(Un(t))]), l && Zt(l, e, 6, s);
    const f = r[a + "Once"];
    if (f) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[a])
        return;
      e.emitted[a] = !0, Zt(f, e, 6, s);
    }
  }
  function wf(e, t, n = !1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0)
      return s;
    const i = e.emits;
    let o = {}, a = !1;
    if (!te(e)) {
      const l = (f) => {
        const c = wf(f, t, !0);
        c && (a = !0, Ke(o, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !i && !a ? (ge(e) && r.set(e, null), null) : ($(i) ? i.forEach((l) => o[l] = null) : Ke(o, i), ge(e) && r.set(e, o), o);
  }
  function mo(e, t) {
    return !e || !Ds(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, Un(t)) || ce(e, t));
  }
  let Je = null, gf = null;
  function Ui(e) {
    const t = Je;
    return Je = e, gf = e && e.type.__scopeId || null, t;
  }
  function bt(e, t = Je, n) {
    if (!t || e._n)
      return e;
    const r = (...s) => {
      r._d && Nu(-1);
      const i = Ui(t);
      let o;
      try {
        o = e(...s);
      } finally {
        Ui(i), r._d && Nu(1);
      }
      return {}.NODE_ENV !== "production" && Lf(t), o;
    };
    return r._n = !0, r._c = !0, r._d = !0, r;
  }
  let ia = !1;
  function Hi() {
    ia = !0;
  }
  function Yo(e) {
    const { type: t, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [o], slots: a, attrs: l, emit: f, render: c, renderCache: u, data: d, setupState: m, ctx: L, inheritAttrs: O } = e;
    let v, b;
    const A = Ui(e);
    ({}).NODE_ENV !== "production" && (ia = !1);
    try {
      if (n.shapeFlag & 4) {
        const w = s || r;
        v = Et(c.call(w, w, u, i, m, d, L)), b = l;
      } else {
        const w = t;
        ({}).NODE_ENV !== "production" && l === i && Hi(), v = Et(w.length > 1 ? w(i, {}.NODE_ENV !== "production" ? {
          get attrs() {
            return Hi(), l;
          },
          slots: a,
          emit: f
        } : { attrs: l, slots: a, emit: f }) : w(
          i,
          null
          /* we know it doesn't need it */
        )), b = t.props ? l : Nm(l);
      }
    } catch (w) {
      xs.length = 0, po(
        w,
        e,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      ), v = Le(ht);
    }
    let j = v, V;
    if ({}.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([j, V] = Wm(v)), b && O !== !1) {
      const w = Object.keys(b), { shapeFlag: M } = j;
      if (w.length) {
        if (M & 7)
          o && w.some(Ti) && (b = qm(b, o)), j = Zn(j, b);
        else if ({}.NODE_ENV !== "production" && !ia && j.type !== ht) {
          const y = Object.keys(l), E = [], g = [];
          for (let q = 0, Z = y.length; q < Z; q++) {
            const X = y[q];
            Ds(X) ? Ti(X) || E.push(X[2].toLowerCase() + X.slice(3)) : g.push(X);
          }
          g.length && Y(`Extraneous non-props attributes (${g.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), E.length && Y(`Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
    return n.dirs && ({}.NODE_ENV !== "production" && !bu(j) && Y("Runtime directive used on component with non-element root node. The directives will not function as intended."), j = Zn(j), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !bu(j) && Y("Component inside <Transition> renders non-element root node that cannot be animated."), j.transition = n.transition), {}.NODE_ENV !== "production" && V ? V(j) : v = j, Ui(A), v;
  }
  const Wm = (e) => {
    const t = e.children, n = e.dynamicChildren, r = Wf(t);
    if (!r)
      return [e, void 0];
    const s = t.indexOf(r), i = n ? n.indexOf(r) : -1, o = (a) => {
      t[s] = a, n && (i > -1 ? n[i] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
    };
    return [Et(r), o];
  };
  function Wf(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (Ir(r)) {
        if (r.type !== ht || r.children === "v-if") {
          if (t)
            return;
          t = r;
        }
      } else
        return;
    }
    return t;
  }
  const Nm = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ds(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, qm = (e, t) => {
    const n = {};
    for (const r in e)
      (!Ti(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  }, bu = (e) => e.shapeFlag & 7 || e.type === ht;
  function Rm(e, t, n) {
    const { props: r, children: s, component: i } = e, { props: o, children: a, patchFlag: l } = t, f = i.emitsOptions;
    if ({}.NODE_ENV !== "production" && (s || a) && ar || t.dirs || t.transition)
      return !0;
    if (n && l >= 0) {
      if (l & 1024)
        return !0;
      if (l & 16)
        return r ? vu(r, o, f) : !!o;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let u = 0; u < c.length; u++) {
          const d = c[u];
          if (o[d] !== r[d] && !mo(f, d))
            return !0;
        }
      }
    } else
      return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? vu(r, o, f) : !0 : !!o;
    return !1;
  }
  function vu(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
      return !0;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (t[i] !== e[i] && !mo(n, i))
        return !0;
    }
    return !1;
  }
  function Fm({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; )
      (e = t.vnode).el = n, t = t.parent;
  }
  const Mm = (e) => e.__isSuspense;
  function zm(e, t) {
    t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : bf(e);
  }
  function bs(e, t) {
    if (!Pe)
      ({}).NODE_ENV !== "production" && Y("provide() can only be used inside setup().");
    else {
      let n = Pe.provides;
      const r = Pe.parent && Pe.parent.provides;
      r === n && (n = Pe.provides = Object.create(r)), n[e] = t;
    }
  }
  function $e(e, t, n = !1) {
    const r = Pe || Je;
    if (r) {
      const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
      if (s && e in s)
        return s[e];
      if (arguments.length > 1)
        return n && te(t) ? t.call(r.proxy) : t;
      ({}).NODE_ENV !== "production" && Y(`injection "${String(e)}" not found.`);
    } else
      ({}).NODE_ENV !== "production" && Y("inject() can only be used inside setup() or functional components.");
  }
  function hn(e, t) {
    return ol(e, null, t);
  }
  const ui = {};
  function pt(e, t, n) {
    return {}.NODE_ENV !== "production" && !te(t) && Y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ol(e, t, n);
  }
  function ol(e, t, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = Re) {
    ({}).NODE_ENV !== "production" && !t && (n !== void 0 && Y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && Y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
    const a = (V) => {
      Y("Invalid watch source: ", V, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    }, l = Gc() === (Pe == null ? void 0 : Pe.scope) ? Pe : null;
    let f, c = !1, u = !1;
    if (ve(e) ? (f = () => e.value, c = Yi(e)) : dt(e) ? (f = () => e, r = !0) : $(e) ? (u = !0, c = e.some((V) => dt(V) || Yi(V)), f = () => e.map((V) => {
      if (ve(V))
        return V.value;
      if (dt(V))
        return Er(V);
      if (te(V))
        return vn(
          V,
          l,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      ({}).NODE_ENV !== "production" && a(V);
    })) : te(e) ? t ? f = () => vn(
      e,
      l,
      2
      /* ErrorCodes.WATCH_GETTER */
    ) : f = () => {
      if (!(l && l.isUnmounted))
        return d && d(), Zt(e, l, 3, [m]);
    } : (f = Be, {}.NODE_ENV !== "production" && a(e)), t && r) {
      const V = f;
      f = () => Er(V());
    }
    let d, m = (V) => {
      d = A.onStop = () => {
        vn(
          V,
          l,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    }, L;
    if (js)
      if (m = Be, t ? n && Zt(t, l, 3, [
        f(),
        u ? [] : void 0,
        m
      ]) : f(), s === "sync") {
        const V = Sy();
        L = V.__watcherHandles || (V.__watcherHandles = []);
      } else
        return Be;
    let O = u ? new Array(e.length).fill(ui) : ui;
    const v = () => {
      if (A.active)
        if (t) {
          const V = A.run();
          (r || c || (u ? V.some((w, M) => qs(w, O[M])) : qs(V, O))) && (d && d(), Zt(t, l, 3, [
            V,
            // pass undefined as the old value when it's changed for the first time
            O === ui ? void 0 : u && O[0] === ui ? [] : O,
            m
          ]), O = V);
        } else
          A.run();
    };
    v.allowRecurse = !!t;
    let b;
    s === "sync" ? b = v : s === "post" ? b = () => ct(v, l && l.suspense) : (v.pre = !0, l && (v.id = l.uid), b = () => ho(v));
    const A = new _a(f, b);
    ({}).NODE_ENV !== "production" && (A.onTrack = i, A.onTrigger = o), t ? n ? v() : O = A.run() : s === "post" ? ct(A.run.bind(A), l && l.suspense) : A.run();
    const j = () => {
      A.stop(), l && l.scope && Ca(l.scope.effects, A);
    };
    return L && L.push(j), j;
  }
  function Tm(e, t, n) {
    const r = this.proxy, s = He(e) ? e.includes(".") ? Nf(r, e) : () => r[e] : e.bind(r, r);
    let i;
    te(t) ? i = t : (i = t.handler, n = t);
    const o = Pe;
    Cr(this);
    const a = ol(s, i.bind(r), n);
    return o ? Cr(o) : ur(), a;
  }
  function Nf(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++)
        r = r[n[s]];
      return r;
    };
  }
  function Er(e, t) {
    if (!ge(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
      return e;
    if (t.add(e), ve(e))
      Er(e.value, t);
    else if ($(e))
      for (let n = 0; n < e.length; n++)
        Er(e[n], t);
    else if (Kc(e) || sr(e))
      e.forEach((n) => {
        Er(n, t);
      });
    else if (Dc(e))
      for (const n in e)
        Er(e[n], t);
    return e;
  }
  function Se(e) {
    return te(e) ? { setup: e, name: e.name } : e;
  }
  const vs = (e) => !!e.type.__asyncLoader, al = (e) => e.type.__isKeepAlive;
  function Em(e, t) {
    qf(e, "a", t);
  }
  function jm(e, t) {
    qf(e, "da", t);
  }
  function qf(e, t, n = Pe) {
    const r = e.__wdc || (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated)
          return;
        s = s.parent;
      }
      return e();
    });
    if (yo(t, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; )
        al(s.parent.vnode) && Sm(r, t, n, s), s = s.parent;
    }
  }
  function Sm(e, t, n, r) {
    const s = yo(
      t,
      e,
      r,
      !0
      /* prepend */
    );
    Ff(() => {
      Ca(r[t], s);
    }, n);
  }
  function yo(e, t, n = Pe, r = !1) {
    if (n) {
      const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
        if (n.isUnmounted)
          return;
        br(), Cr(n);
        const a = Zt(t, n, e, o);
        return ur(), vr(), a;
      });
      return r ? s.unshift(i) : s.push(i), i;
    } else if ({}.NODE_ENV !== "production") {
      const s = Qn(nl[e].replace(/ hook$/, ""));
      Y(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  const Wn = (e) => (t, n = Pe) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!js || e === "sp") && yo(e, (...r) => t(...r), n)
  ), Ym = Wn(
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  ), Pm = Wn(
    "m"
    /* LifecycleHooks.MOUNTED */
  ), Um = Wn(
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  ), Hm = Wn(
    "u"
    /* LifecycleHooks.UPDATED */
  ), Rf = Wn(
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  ), Ff = Wn(
    "um"
    /* LifecycleHooks.UNMOUNTED */
  ), km = Wn(
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  ), Zm = Wn(
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  ), Km = Wn(
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  );
  function Xm(e, t = Pe) {
    yo("ec", e, t);
  }
  function Mf(e) {
    bh(e) && Y("Do not use built-in directive ids as custom directive id: " + e);
  }
  function Jn(e, t, n, r) {
    const s = e.dirs, i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      i && (a.oldValue = i[o].value);
      let l = a.dir[r];
      l && (br(), Zt(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), vr());
    }
  }
  const oa = "components";
  function zf(e, t) {
    return Im(oa, e, !0, t) || e;
  }
  const Dm = Symbol();
  function Im(e, t, n = !0, r = !1) {
    const s = Je || Pe;
    if (s) {
      const i = s.type;
      if (e === oa) {
        const a = hl(
          i,
          !1
          /* do not include inferred name to avoid breaking existing code */
        );
        if (a && (a === t || a === rn(t) || a === fr(rn(t))))
          return i;
      }
      const o = (
        // local registration
        // check instance[type] first which is resolved for options API
        Ou(s[e] || i[e], t) || // global registration
        Ou(s.appContext[e], t)
      );
      if (!o && r)
        return i;
      if ({}.NODE_ENV !== "production" && n && !o) {
        const a = e === oa ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
        Y(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
      }
      return o;
    } else
      ({}).NODE_ENV !== "production" && Y(`resolve${fr(e.slice(0, -1))} can only be used in render() or setup().`);
  }
  function Ou(e, t) {
    return e && (e[t] || e[rn(t)] || e[fr(rn(t))]);
  }
  function Dr(e, t, n = {}, r, s) {
    if (Je.isCE || Je.parent && vs(Je.parent) && Je.parent.isCE)
      return t !== "default" && (n.name = t), Le("slot", n, r && r());
    let i = e[t];
    ({}).NODE_ENV !== "production" && i && i.length > 1 && (Y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), i = () => []), i && i._c && (i._d = !1), We();
    const o = i && Tf(i(n)), a = Ge(
      wt,
      {
        key: n.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        o && o.key || `_${t}`
      },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2
      /* PatchFlags.BAIL */
    );
    return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
  }
  function Tf(e) {
    return e.some((t) => Ir(t) ? !(t.type === ht || t.type === wt && !Tf(t.children)) : !0) ? e : null;
  }
  const aa = (e) => e ? Cf(e) ? pl(e) || e.proxy : aa(e.parent) : null, lr = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ Ke(/* @__PURE__ */ Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => ({}).NODE_ENV !== "production" ? Tr(e.props) : e.props,
      $attrs: (e) => ({}).NODE_ENV !== "production" ? Tr(e.attrs) : e.attrs,
      $slots: (e) => ({}).NODE_ENV !== "production" ? Tr(e.slots) : e.slots,
      $refs: (e) => ({}).NODE_ENV !== "production" ? Tr(e.refs) : e.refs,
      $parent: (e) => aa(e.parent),
      $root: (e) => aa(e.root),
      $emit: (e) => e.emit,
      $options: (e) => ul(e),
      $forceUpdate: (e) => e.f || (e.f = () => ho(e.update)),
      $nextTick: (e) => e.n || (e.n = zs.bind(e.proxy)),
      $watch: (e) => Tm.bind(e)
    })
  ), ll = (e) => e === "_" || e === "$", Po = (e, t) => e !== Re && !e.__isScriptSetup && ce(e, t), Ef = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l } = e;
      if ({}.NODE_ENV !== "production" && t === "__isVue")
        return !0;
      let f;
      if (t[0] !== "$") {
        const m = o[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Po(r, t))
            return o[t] = 1, r[t];
          if (s !== Re && ce(s, t))
            return o[t] = 2, s[t];
          if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (f = e.propsOptions[0]) && ce(f, t)
          )
            return o[t] = 3, i[t];
          if (n !== Re && ce(n, t))
            return o[t] = 4, n[t];
          la && (o[t] = 0);
        }
      }
      const c = lr[t];
      let u, d;
      if (c)
        return t === "$attrs" && (lt(e, "get", t), {}.NODE_ENV !== "production" && Hi()), c(e);
      if (
        // css module (injected by vue-loader)
        (u = a.__cssModules) && (u = u[t])
      )
        return u;
      if (n !== Re && ce(n, t))
        return o[t] = 4, n[t];
      if (
        // global properties
        d = l.config.globalProperties, ce(d, t)
      )
        return d[t];
      ({}).NODE_ENV !== "production" && Je && (!He(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      t.indexOf("__v") !== 0) && (s !== Re && ll(t[0]) && ce(s, t) ? Y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Je && Y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Po(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && ce(s, t) ? (Y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Re && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) ? ({}.NODE_ENV !== "production" && Y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && Y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
        enumerable: !0,
        configurable: !0,
        value: n
      }) : i[t] = n, !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
      let a;
      return !!n[o] || e !== Re && ce(e, o) || Po(t, o) || (a = i[0]) && ce(a, o) || ce(r, o) || ce(lr, o) || ce(s.config.globalProperties, o);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  ({}).NODE_ENV !== "production" && (Ef.ownKeys = (e) => (Y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
  function Cm(e) {
    const t = {};
    return Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e
    }), Object.keys(lr).forEach((n) => {
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        get: () => lr[n](e),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: Be
      });
    }), t;
  }
  function Jm(e) {
    const { ctx: t, propsOptions: [n] } = e;
    n && Object.keys(n).forEach((r) => {
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[r],
        set: Be
      });
    });
  }
  function Gm(e) {
    const { ctx: t, setupState: n } = e;
    Object.keys(ee(n)).forEach((r) => {
      if (!n.__isScriptSetup) {
        if (ll(r[0])) {
          Y(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t, r, {
          enumerable: !0,
          configurable: !0,
          get: () => n[r],
          set: Be
        });
      }
    });
  }
  function Bm() {
    const e = /* @__PURE__ */ Object.create(null);
    return (t, n) => {
      e[n] ? Y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
    };
  }
  let la = !0;
  function Qm(e) {
    const t = ul(e), n = e.proxy, r = e.ctx;
    la = !1, t.beforeCreate && xu(
      t.beforeCreate,
      e,
      "bc"
      /* LifecycleHooks.BEFORE_CREATE */
    );
    const {
      // state
      data: s,
      computed: i,
      methods: o,
      watch: a,
      provide: l,
      inject: f,
      // lifecycle
      created: c,
      beforeMount: u,
      mounted: d,
      beforeUpdate: m,
      updated: L,
      activated: O,
      deactivated: v,
      beforeDestroy: b,
      beforeUnmount: A,
      destroyed: j,
      unmounted: V,
      render: w,
      renderTracked: M,
      renderTriggered: y,
      errorCaptured: E,
      serverPrefetch: g,
      // public API
      expose: q,
      inheritAttrs: Z,
      // assets
      components: X,
      directives: ye,
      filters: Ye
    } = t, Ae = {}.NODE_ENV !== "production" ? Bm() : null;
    if ({}.NODE_ENV !== "production") {
      const [D] = e.propsOptions;
      if (D)
        for (const le in D)
          Ae("Props", le);
    }
    if (f && _m(f, r, Ae, e.appContext.config.unwrapInjectedRef), o)
      for (const D in o) {
        const le = o[D];
        te(le) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(r, D, {
          value: le.bind(n),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[D] = le.bind(n), {}.NODE_ENV !== "production" && Ae("Methods", D)) : {}.NODE_ENV !== "production" && Y(`Method "${D}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`);
      }
    if (s) {
      ({}).NODE_ENV !== "production" && !te(s) && Y("The data option must be a function. Plain object usage is no longer supported.");
      const D = s.call(n, n);
      if ({}.NODE_ENV !== "production" && Ga(D) && Y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ge(D))
        ({}).NODE_ENV !== "production" && Y("data() should return an object.");
      else if (e.data = Wt(D), {}.NODE_ENV !== "production")
        for (const le in D)
          Ae("Data", le), ll(le[0]) || Object.defineProperty(r, le, {
            configurable: !0,
            enumerable: !0,
            get: () => D[le],
            set: Be
          });
    }
    if (la = !0, i)
      for (const D in i) {
        const le = i[D], ke = te(le) ? le.bind(n, n) : te(le.get) ? le.get.bind(n, n) : Be;
        ({}).NODE_ENV !== "production" && ke === Be && Y(`Computed property "${D}" has no getter.`);
        const Ft = !te(le) && te(le.set) ? le.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
          Y(`Write operation failed: computed property "${D}" is readonly.`);
        } : Be, rt = Fe({
          get: ke,
          set: Ft
        });
        Object.defineProperty(r, D, {
          enumerable: !0,
          configurable: !0,
          get: () => rt.value,
          set: (Ct) => rt.value = Ct
        }), {}.NODE_ENV !== "production" && Ae("Computed", D);
      }
    if (a)
      for (const D in a)
        jf(a[D], r, n, D);
    if (l) {
      const D = te(l) ? l.call(n) : l;
      Reflect.ownKeys(D).forEach((le) => {
        bs(le, D[le]);
      });
    }
    c && xu(
      c,
      e,
      "c"
      /* LifecycleHooks.CREATED */
    );
    function _(D, le) {
      $(le) ? le.forEach((ke) => D(ke.bind(n))) : le && D(le.bind(n));
    }
    if (_(Ym, u), _(Pm, d), _(Um, m), _(Hm, L), _(Em, O), _(jm, v), _(Xm, E), _(Km, M), _(Zm, y), _(Rf, A), _(Ff, V), _(km, g), $(q))
      if (q.length) {
        const D = e.exposed || (e.exposed = {});
        q.forEach((le) => {
          Object.defineProperty(D, le, {
            get: () => n[le],
            set: (ke) => n[le] = ke
          });
        });
      } else
        e.exposed || (e.exposed = {});
    w && e.render === Be && (e.render = w), Z != null && (e.inheritAttrs = Z), X && (e.components = X), ye && (e.directives = ye);
  }
  function _m(e, t, n = Be, r = !1) {
    $(e) && (e = ua(e));
    for (const s in e) {
      const i = e[s];
      let o;
      ge(i) ? "default" in i ? o = $e(
        i.from || s,
        i.default,
        !0
        /* treat default function as factory */
      ) : o = $e(i.from || s) : o = $e(i), ve(o) ? r ? Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o.value,
        set: (a) => o.value = a
      }) : ({}.NODE_ENV !== "production" && Y(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = o) : t[s] = o, {}.NODE_ENV !== "production" && n("Inject", s);
    }
  }
  function xu(e, t, n) {
    Zt($(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function jf(e, t, n, r) {
    const s = r.includes(".") ? Nf(n, r) : () => n[r];
    if (He(e)) {
      const i = t[e];
      te(i) ? pt(s, i) : {}.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e}"`, i);
    } else if (te(e))
      pt(s, e.bind(n));
    else if (ge(e))
      if ($(e))
        e.forEach((i) => jf(i, t, n, r));
      else {
        const i = te(e.handler) ? e.handler.bind(n) : t[e.handler];
        te(i) ? pt(s, i, e) : {}.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e.handler}"`, i);
      }
    else
      ({}).NODE_ENV !== "production" && Y(`Invalid watch option: "${r}"`, e);
  }
  function ul(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, a = i.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((f) => ki(l, f, o, !0)), ki(l, t, o)), ge(t) && i.set(t, l), l;
  }
  function ki(e, t, n, r = !1) {
    const { mixins: s, extends: i } = t;
    i && ki(e, i, n, !0), s && s.forEach((o) => ki(e, o, n, !0));
    for (const o in t)
      if (r && o === "expose")
        ({}).NODE_ENV !== "production" && Y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
      else {
        const a = $m[o] || n && n[o];
        e[o] = a ? a(e[o], t[o]) : t[o];
      }
    return e;
  }
  const $m = {
    data: Vu,
    props: _n,
    emits: _n,
    // objects
    methods: _n,
    computed: _n,
    // lifecycle
    beforeCreate: it,
    created: it,
    beforeMount: it,
    mounted: it,
    beforeUpdate: it,
    updated: it,
    beforeDestroy: it,
    beforeUnmount: it,
    destroyed: it,
    unmounted: it,
    activated: it,
    deactivated: it,
    errorCaptured: it,
    serverPrefetch: it,
    // assets
    components: _n,
    directives: _n,
    // watch
    watch: ty,
    // provide / inject
    provide: Vu,
    inject: ey
  };
  function Vu(e, t) {
    return t ? e ? function() {
      return Ke(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function ey(e, t) {
    return _n(ua(e), ua(t));
  }
  function ua(e) {
    if ($(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++)
        t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function it(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function _n(e, t) {
    return e ? Ke(Ke(/* @__PURE__ */ Object.create(null), e), t) : t;
  }
  function ty(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = Ke(/* @__PURE__ */ Object.create(null), e);
    for (const r in t)
      n[r] = it(e[r], t[r]);
    return n;
  }
  function ny(e, t, n, r = !1) {
    const s = {}, i = {};
    Ei(i, bo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Sf(e, t, s, i);
    for (const o in e.propsOptions[0])
      o in s || (s[o] = void 0);
    ({}).NODE_ENV !== "production" && Pf(t || {}, s, e), n ? e.props = r ? s : Qh(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
  }
  function ry(e) {
    for (; e; ) {
      if (e.type.__hmrId)
        return !0;
      e = e.parent;
    }
  }
  function sy(e, t, n, r) {
    const { props: s, attrs: i, vnode: { patchFlag: o } } = e, a = ee(s), [l] = e.propsOptions;
    let f = !1;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !({}.NODE_ENV !== "production" && ry(e)) && (r || o > 0) && !(o & 16)
    ) {
      if (o & 8) {
        const c = e.vnode.dynamicProps;
        for (let u = 0; u < c.length; u++) {
          let d = c[u];
          if (mo(e.emitsOptions, d))
            continue;
          const m = t[d];
          if (l)
            if (ce(i, d))
              m !== i[d] && (i[d] = m, f = !0);
            else {
              const L = rn(d);
              s[L] = ca(
                l,
                a,
                L,
                m,
                e,
                !1
                /* isAbsent */
              );
            }
          else
            m !== i[d] && (i[d] = m, f = !0);
        }
      }
    } else {
      Sf(e, t, s, i) && (f = !0);
      let c;
      for (const u in a)
        (!t || // for camelCase
        !ce(t, u) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((c = Un(u)) === u || !ce(t, c))) && (l ? n && // for camelCase
        (n[u] !== void 0 || // for kebab-case
        n[c] !== void 0) && (s[u] = ca(
          l,
          a,
          u,
          void 0,
          e,
          !0
          /* isAbsent */
        )) : delete s[u]);
      if (i !== a)
        for (const u in i)
          (!t || !ce(t, u)) && (delete i[u], f = !0);
    }
    f && Vn(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Pf(t || {}, s, e);
  }
  function Sf(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1, a;
    if (t)
      for (let l in t) {
        if (mi(l))
          continue;
        const f = t[l];
        let c;
        s && ce(s, c = rn(l)) ? !i || !i.includes(c) ? n[c] = f : (a || (a = {}))[c] = f : mo(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, o = !0);
      }
    if (i) {
      const l = ee(n), f = a || Re;
      for (let c = 0; c < i.length; c++) {
        const u = i[c];
        n[u] = ca(s, l, u, f[u], e, !ce(f, u));
      }
    }
    return o;
  }
  function ca(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
      const a = ce(o, "default");
      if (a && r === void 0) {
        const l = o.default;
        if (o.type !== Function && te(l)) {
          const { propsDefaults: f } = s;
          n in f ? r = f[n] : (Cr(s), r = f[n] = l.call(null, t), ur());
        } else
          r = l;
      }
      o[
        0
        /* BooleanFlags.shouldCast */
      ] && (i && !a ? r = !1 : o[
        1
        /* BooleanFlags.shouldCastTrue */
      ] && (r === "" || r === Un(n)) && (r = !0));
    }
    return r;
  }
  function Yf(e, t, n = !1) {
    const r = t.propsCache, s = r.get(e);
    if (s)
      return s;
    const i = e.props, o = {}, a = [];
    let l = !1;
    if (!te(e)) {
      const c = (u) => {
        l = !0;
        const [d, m] = Yf(u, t, !0);
        Ke(o, d), m && a.push(...m);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!i && !l)
      return ge(e) && r.set(e, Pr), Pr;
    if ($(i))
      for (let c = 0; c < i.length; c++) {
        ({}).NODE_ENV !== "production" && !He(i[c]) && Y("props must be strings when using array syntax.", i[c]);
        const u = rn(i[c]);
        Lu(u) && (o[u] = Re);
      }
    else if (i) {
      ({}).NODE_ENV !== "production" && !ge(i) && Y("invalid props options", i);
      for (const c in i) {
        const u = rn(c);
        if (Lu(u)) {
          const d = i[c], m = o[u] = $(d) || te(d) ? { type: d } : Object.assign({}, d);
          if (m) {
            const L = wu(Boolean, m.type), O = wu(String, m.type);
            m[
              0
              /* BooleanFlags.shouldCast */
            ] = L > -1, m[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = O < 0 || L < O, (L > -1 || ce(m, "default")) && a.push(u);
          }
        }
      }
    }
    const f = [o, a];
    return ge(e) && r.set(e, f), f;
  }
  function Lu(e) {
    return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && Y(`Invalid prop name: "${e}" is a reserved property.`), !1);
  }
  function fa(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
  }
  function Au(e, t) {
    return fa(e) === fa(t);
  }
  function wu(e, t) {
    return $(t) ? t.findIndex((n) => Au(n, e)) : te(t) && Au(t, e) ? 0 : -1;
  }
  function Pf(e, t, n) {
    const r = ee(t), s = n.propsOptions[0];
    for (const i in s) {
      let o = s[i];
      o != null && iy(i, r[i], o, !ce(e, i) && !ce(e, Un(i)));
    }
  }
  function iy(e, t, n, r) {
    const { type: s, required: i, validator: o } = n;
    if (i && r) {
      Y('Missing required prop: "' + e + '"');
      return;
    }
    if (!(t == null && !n.required)) {
      if (s != null && s !== !0) {
        let a = !1;
        const l = $(s) ? s : [s], f = [];
        for (let c = 0; c < l.length && !a; c++) {
          const { valid: u, expectedType: d } = ay(t, l[c]);
          f.push(d || ""), a = u;
        }
        if (!a) {
          Y(ly(e, t, f));
          return;
        }
      }
      o && !o(t) && Y('Invalid prop: custom validator check failed for prop "' + e + '".');
    }
  }
  const oy = /* @__PURE__ */ Dn("String,Number,Boolean,Function,Symbol,BigInt");
  function ay(e, t) {
    let n;
    const r = fa(t);
    if (oy(r)) {
      const s = typeof e;
      n = s === r.toLowerCase(), !n && s === "object" && (n = e instanceof t);
    } else
      r === "Object" ? n = ge(e) : r === "Array" ? n = $(e) : r === "null" ? n = e === null : n = e instanceof t;
    return {
      valid: n,
      expectedType: r
    };
  }
  function ly(e, t, n) {
    let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(fr).join(" | ")}`;
    const s = n[0], i = Ba(t), o = gu(t, s), a = gu(t, i);
    return n.length === 1 && Wu(s) && !uy(s, i) && (r += ` with value ${o}`), r += `, got ${i} `, Wu(i) && (r += `with value ${a}.`), r;
  }
  function gu(e, t) {
    return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
  }
  function Wu(e) {
    return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
  }
  function uy(...e) {
    return e.some((t) => t.toLowerCase() === "boolean");
  }
  const Uf = (e) => e[0] === "_" || e === "$stable", cl = (e) => $(e) ? e.map(Et) : [Et(e)], cy = (e, t, n) => {
    if (t._n)
      return t;
    const r = bt((...s) => ({}.NODE_ENV !== "production" && Pe && Y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), cl(t(...s))), n);
    return r._c = !1, r;
  }, Hf = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Uf(s))
        continue;
      const i = e[s];
      if (te(i))
        t[s] = cy(s, i, r);
      else if (i != null) {
        ({}).NODE_ENV !== "production" && Y(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
        const o = cl(i);
        t[s] = () => o;
      }
    }
  }, kf = (e, t) => {
    ({}).NODE_ENV !== "production" && !al(e.vnode) && Y("Non-function value encountered for default slot. Prefer function slots for better performance.");
    const n = cl(t);
    e.slots.default = () => n;
  }, fy = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = ee(t), Ei(t, "_", n)) : Hf(t, e.slots = {});
    } else
      e.slots = {}, t && kf(e, t);
    Ei(e.slots, bo, 1);
  }, dy = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0, o = Re;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? {}.NODE_ENV !== "production" && ar ? Ke(s, t) : n && a === 1 ? i = !1 : (Ke(s, t), !n && a === 1 && delete s._) : (i = !t.$stable, Hf(t, s)), o = t;
    } else
      t && (kf(e, t), o = { default: 1 });
    if (i)
      for (const a in s)
        !Uf(a) && !(a in o) && delete s[a];
  };
  function Zf() {
    return {
      app: null,
      config: {
        isNativeTag: Zc,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let py = 0;
  function hy(e, t) {
    return function(r, s = null) {
      te(r) || (r = Object.assign({}, r)), s != null && !ge(s) && ({}.NODE_ENV !== "production" && Y("root props passed to app.mount() must be an object."), s = null);
      const i = Zf(), o = /* @__PURE__ */ new Set();
      let a = !1;
      const l = i.app = {
        _uid: py++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: Fu,
        get config() {
          return i.config;
        },
        set config(f) {
          ({}).NODE_ENV !== "production" && Y("app.config cannot be replaced. Modify individual options instead.");
        },
        use(f, ...c) {
          return o.has(f) ? {}.NODE_ENV !== "production" && Y("Plugin has already been applied to target app.") : f && te(f.install) ? (o.add(f), f.install(l, ...c)) : te(f) ? (o.add(f), f(l, ...c)) : {}.NODE_ENV !== "production" && Y('A plugin must either be a function or an object with an "install" function.'), l;
        },
        mixin(f) {
          return i.mixins.includes(f) ? {}.NODE_ENV !== "production" && Y("Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")) : i.mixins.push(f), l;
        },
        component(f, c) {
          return {}.NODE_ENV !== "production" && ha(f, i.config), c ? ({}.NODE_ENV !== "production" && i.components[f] && Y(`Component "${f}" has already been registered in target app.`), i.components[f] = c, l) : i.components[f];
        },
        directive(f, c) {
          return {}.NODE_ENV !== "production" && Mf(f), c ? ({}.NODE_ENV !== "production" && i.directives[f] && Y(`Directive "${f}" has already been registered in target app.`), i.directives[f] = c, l) : i.directives[f];
        },
        mount(f, c, u) {
          if (a)
            ({}).NODE_ENV !== "production" && Y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
          else {
            ({}).NODE_ENV !== "production" && f.__vue_app__ && Y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
            const d = Le(r, s);
            return d.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
              e(Zn(d), f, u);
            }), c && t ? t(d, f) : e(d, f, u), a = !0, l._container = f, f.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = d.component, bm(l, Fu)), pl(d.component) || d.component.proxy;
          }
        },
        unmount() {
          a ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, vm(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && Y("Cannot unmount an app that is not mounted.");
        },
        provide(f, c) {
          return {}.NODE_ENV !== "production" && f in i.provides && Y(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`), i.provides[f] = c, l;
        }
      };
      return l;
    };
  }
  function da(e, t, n, r, s = !1) {
    if ($(e)) {
      e.forEach((d, m) => da(d, t && ($(t) ? t[m] : t), n, r, s));
      return;
    }
    if (vs(r) && !s)
      return;
    const i = r.shapeFlag & 4 ? pl(r.component) || r.component.proxy : r.el, o = s ? null : i, { i: a, r: l } = e;
    if ({}.NODE_ENV !== "production" && !a) {
      Y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
      return;
    }
    const f = t && t.r, c = a.refs === Re ? a.refs = {} : a.refs, u = a.setupState;
    if (f != null && f !== l && (He(f) ? (c[f] = null, ce(u, f) && (u[f] = null)) : ve(f) && (f.value = null)), te(l))
      vn(l, a, 12, [o, c]);
    else {
      const d = He(l), m = ve(l);
      if (d || m) {
        const L = () => {
          if (e.f) {
            const O = d ? ce(u, l) ? u[l] : c[l] : l.value;
            s ? $(O) && Ca(O, i) : $(O) ? O.includes(i) || O.push(i) : d ? (c[l] = [i], ce(u, l) && (u[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value));
          } else
            d ? (c[l] = o, ce(u, l) && (u[l] = o)) : m ? (l.value = o, e.k && (c[e.k] = o)) : {}.NODE_ENV !== "production" && Y("Invalid template ref type:", l, `(${typeof l})`);
        };
        o ? (L.id = -1, ct(L, n)) : L();
      } else
        ({}).NODE_ENV !== "production" && Y("Invalid template ref type:", l, `(${typeof l})`);
    }
  }
  let rs, En;
  function fn(e, t) {
    e.appContext.config.performance && Zi() && En.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Lm(e, t, Zi() ? En.now() : Date.now());
  }
  function dn(e, t) {
    if (e.appContext.config.performance && Zi()) {
      const n = `vue-${t}-${e.uid}`, r = n + ":end";
      En.mark(r), En.measure(`<${vo(e, e.type)}> ${t}`, n, r), En.clearMarks(n), En.clearMarks(r);
    }
    ({}).NODE_ENV !== "production" && Am(e, t, Zi() ? En.now() : Date.now());
  }
  function Zi() {
    return rs !== void 0 || (typeof window < "u" && window.performance ? (rs = !0, En = window.performance) : rs = !1), rs;
  }
  function my() {
    const e = [];
    if ({}.NODE_ENV !== "production" && e.length) {
      const t = e.length > 1;
      console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  const ct = zm;
  function yy(e) {
    return by(e);
  }
  function by(e, t) {
    my();
    const n = Ic();
    n.__VUE__ = !0, {}.NODE_ENV !== "production" && Vf(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
    const { insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: f, setElementText: c, parentNode: u, nextSibling: d, setScopeId: m = Be, insertStaticContent: L } = e, O = (p, h, x, R = null, N = null, S = null, H = !1, T = null, P = {}.NODE_ENV !== "production" && ar ? !1 : !!h.dynamicChildren) => {
      if (p === h)
        return;
      p && !ss(p, h) && (R = J(p), Vt(p, N, S, !0), p = null), h.patchFlag === -2 && (P = !1, h.dynamicChildren = null);
      const { type: F, ref: G, shapeFlag: C } = h;
      switch (F) {
        case Cs:
          v(p, h, x, R);
          break;
        case ht:
          b(p, h, x, R);
          break;
        case Os:
          p == null ? A(h, x, R, H) : {}.NODE_ENV !== "production" && j(p, h, x, H);
          break;
        case wt:
          ye(p, h, x, R, N, S, H, T, P);
          break;
        default:
          C & 1 ? M(p, h, x, R, N, S, H, T, P) : C & 6 ? Ye(p, h, x, R, N, S, H, T, P) : C & 64 || C & 128 ? F.process(p, h, x, R, N, S, H, T, P, Me) : {}.NODE_ENV !== "production" && Y("Invalid VNode type:", F, `(${typeof F})`);
      }
      G != null && N && da(G, p && p.ref, S, h || p, !h);
    }, v = (p, h, x, R) => {
      if (p == null)
        r(h.el = a(h.children), x, R);
      else {
        const N = h.el = p.el;
        h.children !== p.children && f(N, h.children);
      }
    }, b = (p, h, x, R) => {
      p == null ? r(h.el = l(h.children || ""), x, R) : h.el = p.el;
    }, A = (p, h, x, R) => {
      [p.el, p.anchor] = L(p.children, h, x, R, p.el, p.anchor);
    }, j = (p, h, x, R) => {
      if (h.children !== p.children) {
        const N = d(p.anchor);
        w(p), [h.el, h.anchor] = L(h.children, x, N, R);
      } else
        h.el = p.el, h.anchor = p.anchor;
    }, V = ({ el: p, anchor: h }, x, R) => {
      let N;
      for (; p && p !== h; )
        N = d(p), r(p, x, R), p = N;
      r(h, x, R);
    }, w = ({ el: p, anchor: h }) => {
      let x;
      for (; p && p !== h; )
        x = d(p), s(p), p = x;
      s(h);
    }, M = (p, h, x, R, N, S, H, T, P) => {
      H = H || h.type === "svg", p == null ? y(h, x, R, N, S, H, T, P) : q(p, h, N, S, H, T, P);
    }, y = (p, h, x, R, N, S, H, T) => {
      let P, F;
      const { type: G, props: C, shapeFlag: Q, transition: ne, dirs: de } = p;
      if (P = p.el = o(p.type, S, C && C.is, C), Q & 8 ? c(P, p.children) : Q & 16 && g(p.children, P, null, R, N, S && G !== "foreignObject", H, T), de && Jn(p, null, R, "created"), E(P, p, p.scopeId, H, R), C) {
        for (const we in C)
          we !== "value" && !mi(we) && i(P, we, null, C[we], S, p.children, R, N, U);
        "value" in C && i(P, "value", null, C.value), (F = C.onVnodeBeforeMount) && Gt(F, R, p);
      }
      ({}).NODE_ENV !== "production" && (Object.defineProperty(P, "__vnode", {
        value: p,
        enumerable: !1
      }), Object.defineProperty(P, "__vueParentComponent", {
        value: R,
        enumerable: !1
      })), de && Jn(p, null, R, "beforeMount");
      const qe = (!N || N && !N.pendingBranch) && ne && !ne.persisted;
      qe && ne.beforeEnter(P), r(P, h, x), ((F = C && C.onVnodeMounted) || qe || de) && ct(() => {
        F && Gt(F, R, p), qe && ne.enter(P), de && Jn(p, null, R, "mounted");
      }, N);
    }, E = (p, h, x, R, N) => {
      if (x && m(p, x), R)
        for (let S = 0; S < R.length; S++)
          m(p, R[S]);
      if (N) {
        let S = N.subTree;
        if ({}.NODE_ENV !== "production" && S.patchFlag > 0 && S.patchFlag & 2048 && (S = Wf(S.children) || S), h === S) {
          const H = N.vnode;
          E(p, H, H.scopeId, H.slotScopeIds, N.parent);
        }
      }
    }, g = (p, h, x, R, N, S, H, T, P = 0) => {
      for (let F = P; F < p.length; F++) {
        const G = p[F] = T ? zn(p[F]) : Et(p[F]);
        O(null, G, h, x, R, N, S, H, T);
      }
    }, q = (p, h, x, R, N, S, H) => {
      const T = h.el = p.el;
      let { patchFlag: P, dynamicChildren: F, dirs: G } = h;
      P |= p.patchFlag & 16;
      const C = p.props || Re, Q = h.props || Re;
      let ne;
      x && Gn(x, !1), (ne = Q.onVnodeBeforeUpdate) && Gt(ne, x, h, p), G && Jn(h, p, x, "beforeUpdate"), x && Gn(x, !0), {}.NODE_ENV !== "production" && ar && (P = 0, H = !1, F = null);
      const de = N && h.type !== "foreignObject";
      if (F ? (Z(p.dynamicChildren, F, T, x, R, de, S), {}.NODE_ENV !== "production" && x && x.type.__hmrId && vi(p, h)) : H || ke(p, h, T, null, x, R, de, S, !1), P > 0) {
        if (P & 16)
          X(T, h, C, Q, x, R, N);
        else if (P & 2 && C.class !== Q.class && i(T, "class", null, Q.class, N), P & 4 && i(T, "style", C.style, Q.style, N), P & 8) {
          const qe = h.dynamicProps;
          for (let we = 0; we < qe.length; we++) {
            const Ze = qe[we], Mt = C[Ze], Ar = Q[Ze];
            (Ar !== Mt || Ze === "value") && i(T, Ze, Mt, Ar, N, p.children, x, R, U);
          }
        }
        P & 1 && p.children !== h.children && c(T, h.children);
      } else
        !H && F == null && X(T, h, C, Q, x, R, N);
      ((ne = Q.onVnodeUpdated) || G) && ct(() => {
        ne && Gt(ne, x, h, p), G && Jn(h, p, x, "updated");
      }, R);
    }, Z = (p, h, x, R, N, S, H) => {
      for (let T = 0; T < h.length; T++) {
        const P = p[T], F = h[T], G = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          P.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (P.type === wt || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !ss(P, F) || // - In the case of a component, it could contain anything.
          P.shapeFlag & 70) ? u(P.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            x
          )
        );
        O(P, F, G, null, R, N, S, H, !0);
      }
    }, X = (p, h, x, R, N, S, H) => {
      if (x !== R) {
        if (x !== Re)
          for (const T in x)
            !mi(T) && !(T in R) && i(p, T, x[T], null, H, h.children, N, S, U);
        for (const T in R) {
          if (mi(T))
            continue;
          const P = R[T], F = x[T];
          P !== F && T !== "value" && i(p, T, F, P, H, h.children, N, S, U);
        }
        "value" in R && i(p, "value", x.value, R.value);
      }
    }, ye = (p, h, x, R, N, S, H, T, P) => {
      const F = h.el = p ? p.el : a(""), G = h.anchor = p ? p.anchor : a("");
      let { patchFlag: C, dynamicChildren: Q, slotScopeIds: ne } = h;
      ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
      (ar || C & 2048) && (C = 0, P = !1, Q = null), ne && (T = T ? T.concat(ne) : ne), p == null ? (r(F, x, R), r(G, x, R), g(h.children, x, G, N, S, H, T, P)) : C > 0 && C & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      p.dynamicChildren ? (Z(p.dynamicChildren, Q, x, N, S, H, T), {}.NODE_ENV !== "production" && N && N.type.__hmrId ? vi(p, h) : (
        // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        (h.key != null || N && h === N.subTree) && vi(
          p,
          h,
          !0
          /* shallow */
        )
      )) : ke(p, h, x, G, N, S, H, T, P);
    }, Ye = (p, h, x, R, N, S, H, T, P) => {
      h.slotScopeIds = T, p == null ? h.shapeFlag & 512 ? N.ctx.activate(h, x, R, H, P) : Ae(h, x, R, N, S, H, P) : _(p, h, P);
    }, Ae = (p, h, x, R, N, S, H) => {
      const T = p.component = Ny(p, R, N);
      if ({}.NODE_ENV !== "production" && T.type.__hmrId && pm(T), {}.NODE_ENV !== "production" && (yi(p), fn(T, "mount")), al(p) && (T.ctx.renderer = Me), {}.NODE_ENV !== "production" && fn(T, "init"), Ry(T), {}.NODE_ENV !== "production" && dn(T, "init"), T.asyncDep) {
        if (N && N.registerDep(T, D), !p.el) {
          const P = T.subTree = Le(ht);
          b(null, P, h, x);
        }
        return;
      }
      D(T, p, h, x, N, S, H), {}.NODE_ENV !== "production" && (bi(), dn(T, "mount"));
    }, _ = (p, h, x) => {
      const R = h.component = p.component;
      if (Rm(p, h, x))
        if (R.asyncDep && !R.asyncResolved) {
          ({}).NODE_ENV !== "production" && yi(h), le(R, h, x), {}.NODE_ENV !== "production" && bi();
          return;
        } else
          R.next = h, fm(R.update), R.update();
      else
        h.el = p.el, R.vnode = h;
    }, D = (p, h, x, R, N, S, H) => {
      const T = () => {
        if (p.isMounted) {
          let { next: G, bu: C, u: Q, parent: ne, vnode: de } = p, qe = G, we;
          ({}).NODE_ENV !== "production" && yi(G || p.vnode), Gn(p, !1), G ? (G.el = de.el, le(p, G, H)) : G = de, C && ns(C), (we = G.props && G.props.onVnodeBeforeUpdate) && Gt(we, ne, G, de), Gn(p, !0), {}.NODE_ENV !== "production" && fn(p, "render");
          const Ze = Yo(p);
          ({}).NODE_ENV !== "production" && dn(p, "render");
          const Mt = p.subTree;
          p.subTree = Ze, {}.NODE_ENV !== "production" && fn(p, "patch"), O(
            Mt,
            Ze,
            // parent may have changed if it's in a teleport
            u(Mt.el),
            // anchor may have changed if it's in a fragment
            J(Mt),
            p,
            N,
            S
          ), {}.NODE_ENV !== "production" && dn(p, "patch"), G.el = Ze.el, qe === null && Fm(p, Ze.el), Q && ct(Q, N), (we = G.props && G.props.onVnodeUpdated) && ct(() => Gt(we, ne, G, de), N), {}.NODE_ENV !== "production" && Lf(p), {}.NODE_ENV !== "production" && bi();
        } else {
          let G;
          const { el: C, props: Q } = h, { bm: ne, m: de, parent: qe } = p, we = vs(h);
          if (Gn(p, !1), ne && ns(ne), !we && (G = Q && Q.onVnodeBeforeMount) && Gt(G, qe, h), Gn(p, !0), C && se) {
            const Ze = () => {
              ({}).NODE_ENV !== "production" && fn(p, "render"), p.subTree = Yo(p), {}.NODE_ENV !== "production" && dn(p, "render"), {}.NODE_ENV !== "production" && fn(p, "hydrate"), se(C, p.subTree, p, N, null), {}.NODE_ENV !== "production" && dn(p, "hydrate");
            };
            we ? h.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !p.isUnmounted && Ze()
            ) : Ze();
          } else {
            ({}).NODE_ENV !== "production" && fn(p, "render");
            const Ze = p.subTree = Yo(p);
            ({}).NODE_ENV !== "production" && dn(p, "render"), {}.NODE_ENV !== "production" && fn(p, "patch"), O(null, Ze, x, R, p, N, S), {}.NODE_ENV !== "production" && dn(p, "patch"), h.el = Ze.el;
          }
          if (de && ct(de, N), !we && (G = Q && Q.onVnodeMounted)) {
            const Ze = h;
            ct(() => Gt(G, qe, Ze), N);
          }
          (h.shapeFlag & 256 || qe && vs(qe.vnode) && qe.vnode.shapeFlag & 256) && p.a && ct(p.a, N), p.isMounted = !0, {}.NODE_ENV !== "production" && Om(p), h = x = R = null;
        }
      }, P = p.effect = new _a(
        T,
        () => ho(F),
        p.scope
        // track it in component's effect scope
      ), F = p.update = () => P.run();
      F.id = p.uid, Gn(p, !0), {}.NODE_ENV !== "production" && (P.onTrack = p.rtc ? (G) => ns(p.rtc, G) : void 0, P.onTrigger = p.rtg ? (G) => ns(p.rtg, G) : void 0, F.ownerInstance = p), F();
    }, le = (p, h, x) => {
      h.component = p;
      const R = p.vnode.props;
      p.vnode = h, p.next = null, sy(p, h.props, R, x), dy(p, h.children, x), br(), mu(), vr();
    }, ke = (p, h, x, R, N, S, H, T, P = !1) => {
      const F = p && p.children, G = p ? p.shapeFlag : 0, C = h.children, { patchFlag: Q, shapeFlag: ne } = h;
      if (Q > 0) {
        if (Q & 128) {
          rt(F, C, x, R, N, S, H, T, P);
          return;
        } else if (Q & 256) {
          Ft(F, C, x, R, N, S, H, T, P);
          return;
        }
      }
      ne & 8 ? (G & 16 && U(F, N, S), C !== F && c(x, C)) : G & 16 ? ne & 16 ? rt(F, C, x, R, N, S, H, T, P) : U(F, N, S, !0) : (G & 8 && c(x, ""), ne & 16 && g(C, x, R, N, S, H, T, P));
    }, Ft = (p, h, x, R, N, S, H, T, P) => {
      p = p || Pr, h = h || Pr;
      const F = p.length, G = h.length, C = Math.min(F, G);
      let Q;
      for (Q = 0; Q < C; Q++) {
        const ne = h[Q] = P ? zn(h[Q]) : Et(h[Q]);
        O(p[Q], ne, x, null, N, S, H, T, P);
      }
      F > G ? U(p, N, S, !0, !1, C) : g(h, x, R, N, S, H, T, P, C);
    }, rt = (p, h, x, R, N, S, H, T, P) => {
      let F = 0;
      const G = h.length;
      let C = p.length - 1, Q = G - 1;
      for (; F <= C && F <= Q; ) {
        const ne = p[F], de = h[F] = P ? zn(h[F]) : Et(h[F]);
        if (ss(ne, de))
          O(ne, de, x, null, N, S, H, T, P);
        else
          break;
        F++;
      }
      for (; F <= C && F <= Q; ) {
        const ne = p[C], de = h[Q] = P ? zn(h[Q]) : Et(h[Q]);
        if (ss(ne, de))
          O(ne, de, x, null, N, S, H, T, P);
        else
          break;
        C--, Q--;
      }
      if (F > C) {
        if (F <= Q) {
          const ne = Q + 1, de = ne < G ? h[ne].el : R;
          for (; F <= Q; )
            O(null, h[F] = P ? zn(h[F]) : Et(h[F]), x, de, N, S, H, T, P), F++;
        }
      } else if (F > Q)
        for (; F <= C; )
          Vt(p[F], N, S, !0), F++;
      else {
        const ne = F, de = F, qe = /* @__PURE__ */ new Map();
        for (F = de; F <= Q; F++) {
          const st = h[F] = P ? zn(h[F]) : Et(h[F]);
          st.key != null && ({}.NODE_ENV !== "production" && qe.has(st.key) && Y("Duplicate keys found during update:", JSON.stringify(st.key), "Make sure keys are unique."), qe.set(st.key, F));
        }
        let we, Ze = 0;
        const Mt = Q - de + 1;
        let Ar = !1, ru = 0;
        const ts = new Array(Mt);
        for (F = 0; F < Mt; F++)
          ts[F] = 0;
        for (F = ne; F <= C; F++) {
          const st = p[F];
          if (Ze >= Mt) {
            Vt(st, N, S, !0);
            continue;
          }
          let Jt;
          if (st.key != null)
            Jt = qe.get(st.key);
          else
            for (we = de; we <= Q; we++)
              if (ts[we - de] === 0 && ss(st, h[we])) {
                Jt = we;
                break;
              }
          Jt === void 0 ? Vt(st, N, S, !0) : (ts[Jt - de] = F + 1, Jt >= ru ? ru = Jt : Ar = !0, O(st, h[Jt], x, null, N, S, H, T, P), Ze++);
        }
        const su = Ar ? vy(ts) : Pr;
        for (we = su.length - 1, F = Mt - 1; F >= 0; F--) {
          const st = de + F, Jt = h[st], iu = st + 1 < G ? h[st + 1].el : R;
          ts[F] === 0 ? O(null, Jt, x, iu, N, S, H, T, P) : Ar && (we < 0 || F !== su[we] ? Ct(
            Jt,
            x,
            iu,
            2
            /* MoveType.REORDER */
          ) : we--);
        }
      }
    }, Ct = (p, h, x, R, N = null) => {
      const { el: S, type: H, transition: T, children: P, shapeFlag: F } = p;
      if (F & 6) {
        Ct(p.component.subTree, h, x, R);
        return;
      }
      if (F & 128) {
        p.suspense.move(h, x, R);
        return;
      }
      if (F & 64) {
        H.move(p, h, x, Me);
        return;
      }
      if (H === wt) {
        r(S, h, x);
        for (let C = 0; C < P.length; C++)
          Ct(P[C], h, x, R);
        r(p.anchor, h, x);
        return;
      }
      if (H === Os) {
        V(p, h, x);
        return;
      }
      if (R !== 2 && F & 1 && T)
        if (R === 0)
          T.beforeEnter(S), r(S, h, x), ct(() => T.enter(S), N);
        else {
          const { leave: C, delayLeave: Q, afterLeave: ne } = T, de = () => r(S, h, x), qe = () => {
            C(S, () => {
              de(), ne && ne();
            });
          };
          Q ? Q(S, de, qe) : qe();
        }
      else
        r(S, h, x);
    }, Vt = (p, h, x, R = !1, N = !1) => {
      const { type: S, props: H, ref: T, children: P, dynamicChildren: F, shapeFlag: G, patchFlag: C, dirs: Q } = p;
      if (T != null && da(T, null, x, p, !0), G & 256) {
        h.ctx.deactivate(p);
        return;
      }
      const ne = G & 1 && Q, de = !vs(p);
      let qe;
      if (de && (qe = H && H.onVnodeBeforeUnmount) && Gt(qe, h, p), G & 6)
        I(p.component, x, R);
      else {
        if (G & 128) {
          p.suspense.unmount(x, R);
          return;
        }
        ne && Jn(p, null, h, "beforeUnmount"), G & 64 ? p.type.remove(p, h, x, N, Me, R) : F && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (S !== wt || C > 0 && C & 64) ? U(F, h, x, !1, !0) : (S === wt && C & 384 || !N && G & 16) && U(P, h, x), R && Lr(p);
      }
      (de && (qe = H && H.onVnodeUnmounted) || ne) && ct(() => {
        qe && Gt(qe, h, p), ne && Jn(p, null, h, "unmounted");
      }, x);
    }, Lr = (p) => {
      const { type: h, el: x, anchor: R, transition: N } = p;
      if (h === wt) {
        ({}).NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && N && !N.persisted ? p.children.forEach((H) => {
          H.type === ht ? s(H.el) : Lr(H);
        }) : W(x, R);
        return;
      }
      if (h === Os) {
        w(p);
        return;
      }
      const S = () => {
        s(x), N && !N.persisted && N.afterLeave && N.afterLeave();
      };
      if (p.shapeFlag & 1 && N && !N.persisted) {
        const { leave: H, delayLeave: T } = N, P = () => H(x, S);
        T ? T(p.el, S, P) : P();
      } else
        S();
    }, W = (p, h) => {
      let x;
      for (; p !== h; )
        x = d(p), s(p), p = x;
      s(h);
    }, I = (p, h, x) => {
      ({}).NODE_ENV !== "production" && p.type.__hmrId && hm(p);
      const { bum: R, scope: N, update: S, subTree: H, um: T } = p;
      R && ns(R), N.stop(), S && (S.active = !1, Vt(H, p, h, x)), T && ct(T, h), ct(() => {
        p.isUnmounted = !0;
      }, h), h && h.pendingBranch && !h.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), {}.NODE_ENV !== "production" && Vm(p);
    }, U = (p, h, x, R = !1, N = !1, S = 0) => {
      for (let H = S; H < p.length; H++)
        Vt(p[H], h, x, R, N);
    }, J = (p) => p.shapeFlag & 6 ? J(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), he = (p, h, x) => {
      p == null ? h._vnode && Vt(h._vnode, null, null, !0) : O(h._vnode || null, p, h, null, null, null, x), mu(), vf(), h._vnode = p;
    }, Me = {
      p: O,
      um: Vt,
      m: Ct,
      r: Lr,
      mt: Ae,
      mc: g,
      pc: ke,
      pbc: Z,
      n: J,
      o: e
    };
    let oe, se;
    return t && ([oe, se] = t(Me)), {
      render: he,
      hydrate: oe,
      createApp: hy(he, oe)
    };
  }
  function Gn({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function vi(e, t, n = !1) {
    const r = e.children, s = t.children;
    if ($(r) && $(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let a = s[i];
        a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = zn(s[i]), a.el = o.el), n || vi(o, a)), a.type === Cs && (a.el = o.el), {}.NODE_ENV !== "production" && a.type === ht && !a.el && (a.el = o.el);
      }
  }
  function vy(e) {
    const t = e.slice(), n = [0];
    let r, s, i, o, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const f = e[r];
      if (f !== 0) {
        if (s = n[n.length - 1], e[s] < f) {
          t[r] = s, n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          a = i + o >> 1, e[n[a]] < f ? i = a + 1 : o = a;
        f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; )
      n[i] = o, o = t[o];
    return n;
  }
  const Oy = (e) => e.__isTeleport, wt = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Cs = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), ht = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), Os = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), xs = [];
  let jt = null;
  function We(e = !1) {
    xs.push(jt = e ? null : []);
  }
  function xy() {
    xs.pop(), jt = xs[xs.length - 1] || null;
  }
  let Es = 1;
  function Nu(e) {
    Es += e;
  }
  function Kf(e) {
    return e.dynamicChildren = Es > 0 ? jt || Pr : null, xy(), Es > 0 && jt && jt.push(e), e;
  }
  function tn(e, t, n, r, s, i) {
    return Kf(St(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
      /* isBlock */
    ));
  }
  function Ge(e, t, n, r, s) {
    return Kf(Le(
      e,
      t,
      n,
      r,
      s,
      !0
      /* isBlock: prevent a block from tracking itself */
    ));
  }
  function Ir(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function ss(e, t) {
    return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && Rr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
  }
  const Vy = (...e) => Df(...e), bo = "__vInternal", Xf = ({ key: e }) => e ?? null, Oi = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? He(e) || ve(e) || te(e) ? { i: Je, r: e, k: t, f: !!n } : e : null;
  function St(e, t = null, n = null, r = 0, s = null, i = e === wt ? 0 : 1, o = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Xf(t),
      ref: t && Oi(t),
      scopeId: gf,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: Je
    };
    return a ? (dl(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && Y("VNode created with invalid key (NaN). VNode type:", l.type), Es > 0 && // avoid a block node from tracking itself
    !o && // has current parent block
    jt && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    l.patchFlag !== 32 && jt.push(l), l;
  }
  const Le = {}.NODE_ENV !== "production" ? Vy : Df;
  function Df(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === Dm) && ({}.NODE_ENV !== "production" && !e && Y(`Invalid vnode type when creating vnode: ${e}.`), e = ht), Ir(e)) {
      const a = Zn(
        e,
        t,
        !0
        /* mergeRef: true */
      );
      return n && dl(a, n), Es > 0 && !i && jt && (a.shapeFlag & 6 ? jt[jt.indexOf(e)] = a : jt.push(a)), a.patchFlag |= -2, a;
    }
    if (Gf(e) && (e = e.__vccOpts), t) {
      t = Ly(t);
      let { class: a, style: l } = t;
      a && !He(a) && (t.class = Da(a)), ge(l) && (Pi(l) && !$(l) && (l = Ke({}, l)), t.style = io(l));
    }
    const o = He(e) ? 1 : Mm(e) ? 128 : Oy(e) ? 64 : ge(e) ? 4 : te(e) ? 2 : 0;
    return {}.NODE_ENV !== "production" && o & 4 && Pi(e) && (e = ee(e), Y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), St(e, t, n, r, s, o, i, !0);
  }
  function Ly(e) {
    return e ? Pi(e) || bo in e ? Ke({}, e) : e : null;
  }
  function Zn(e, t, n = !1) {
    const { props: r, ref: s, patchFlag: i, children: o } = e, a = t ? wy(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Xf(a),
      ref: t && t.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        n && s ? $(s) ? s.concat(Oi(t)) : [s, Oi(t)] : Oi(t)
      ) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: {}.NODE_ENV !== "production" && i === -1 && $(o) ? o.map(If) : o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: t && e.type !== wt ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Zn(e.ssContent),
      ssFallback: e.ssFallback && Zn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
  }
  function If(e) {
    const t = Zn(e);
    return $(e.children) && (t.children = e.children.map(If)), t;
  }
  function fl(e = " ", t = 0) {
    return Le(Cs, null, e, t);
  }
  function Ay(e, t) {
    const n = Le(Os, null, e);
    return n.staticCount = t, n;
  }
  function pa(e = "", t = !1) {
    return t ? (We(), Ge(ht, null, e)) : Le(ht, null, e);
  }
  function Et(e) {
    return e == null || typeof e == "boolean" ? Le(ht) : $(e) ? Le(
      wt,
      null,
      // #3666, avoid reference pollution when reusing vnode
      e.slice()
    ) : typeof e == "object" ? zn(e) : Le(Cs, null, String(e));
  }
  function zn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zn(e);
  }
  function dl(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null)
      t = null;
    else if ($(t))
      n = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), dl(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !(bo in t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      te(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [fl(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function wy(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r)
        if (s === "class")
          t.class !== r.class && (t.class = Da([t.class, r.class]));
        else if (s === "style")
          t.style = io([t.style, r.style]);
        else if (Ds(s)) {
          const i = t[s], o = r[s];
          o && i !== o && !($(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
        } else
          s !== "" && (t[s] = r[s]);
    }
    return t;
  }
  function Gt(e, t, n, r = null) {
    Zt(e, t, 7, [
      n,
      r
    ]);
  }
  const gy = Zf();
  let Wy = 0;
  function Ny(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || gy, i = {
      uid: Wy++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Cc(
        !0
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: Yf(r, s),
      emitsOptions: wf(r, s),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: Re,
      // inheritAttrs
      inheritAttrs: r.inheritAttrs,
      // state
      ctx: Re,
      data: Re,
      props: Re,
      attrs: Re,
      slots: Re,
      refs: Re,
      setupState: Re,
      setupContext: null,
      // suspense related
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return {}.NODE_ENV !== "production" ? i.ctx = Cm(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = gm.bind(null, i), e.ce && e.ce(i), i;
  }
  let Pe = null;
  const Js = () => Pe || Je, Cr = (e) => {
    Pe = e, e.scope.on();
  }, ur = () => {
    Pe && Pe.scope.off(), Pe = null;
  }, qy = /* @__PURE__ */ Dn("slot,component");
  function ha(e, t) {
    const n = t.isNativeTag || Zc;
    (qy(e) || n(e)) && Y("Do not use built-in or reserved HTML elements as component id: " + e);
  }
  function Cf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let js = !1;
  function Ry(e, t = !1) {
    js = t;
    const { props: n, children: r } = e.vnode, s = Cf(e);
    ny(e, n, s, t), fy(e, r);
    const i = s ? Fy(e, t) : void 0;
    return js = !1, i;
  }
  function Fy(e, t) {
    var n;
    const r = e.type;
    if ({}.NODE_ENV !== "production") {
      if (r.name && ha(r.name, e.appContext.config), r.components) {
        const i = Object.keys(r.components);
        for (let o = 0; o < i.length; o++)
          ha(i[o], e.appContext.config);
      }
      if (r.directives) {
        const i = Object.keys(r.directives);
        for (let o = 0; o < i.length; o++)
          Mf(i[o]);
      }
      r.compilerOptions && My() && Y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
    }
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = At(new Proxy(e.ctx, Ef)), {}.NODE_ENV !== "production" && Jm(e);
    const { setup: s } = r;
    if (s) {
      const i = e.setupContext = s.length > 1 ? zy(e) : null;
      Cr(e), br();
      const o = vn(s, e, 0, [{}.NODE_ENV !== "production" ? Tr(e.props) : e.props, i]);
      if (vr(), ur(), Ga(o)) {
        if (o.then(ur, ur), t)
          return o.then((a) => {
            qu(e, a, t);
          }).catch((a) => {
            po(
              a,
              e,
              0
              /* ErrorCodes.SETUP_FUNCTION */
            );
          });
        if (e.asyncDep = o, {}.NODE_ENV !== "production" && !e.suspense) {
          const a = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
          Y(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      } else
        qu(e, o, t);
    } else
      Jf(e, t);
  }
  function qu(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? ({}.NODE_ENV !== "production" && Ir(t) && Y("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = df(t), {}.NODE_ENV !== "production" && Gm(e)) : {}.NODE_ENV !== "production" && t !== void 0 && Y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Jf(e, n);
  }
  let ma;
  const My = () => !ma;
  function Jf(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && ma && !r.render) {
        const s = r.template || ul(e).template;
        if (s) {
          ({}).NODE_ENV !== "production" && fn(e, "compile");
          const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = r, f = Ke(Ke({
            isCustomElement: i,
            delimiters: a
          }, o), l);
          r.render = ma(s, f), {}.NODE_ENV !== "production" && dn(e, "compile");
        }
      }
      e.render = r.render || Be;
    }
    Cr(e), br(), Qm(e), vr(), ur(), {}.NODE_ENV !== "production" && !r.render && e.render === Be && !t && (r.template ? Y(
      'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
      /* should not happen */
    ) : Y("Component is missing template or render function."));
  }
  function Ru(e) {
    return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return Hi(), lt(e, "get", "$attrs"), t[n];
      },
      set() {
        return Y("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return Y("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return lt(e, "get", "$attrs"), t[n];
      }
    });
  }
  function zy(e) {
    const t = (r) => {
      if ({}.NODE_ENV !== "production" && (e.exposed && Y("expose() should be called only once per setup()."), r != null)) {
        let s = typeof r;
        s === "object" && ($(r) ? s = "array" : ve(r) && (s = "ref")), s !== "object" && Y(`expose() should be passed a plain object, received ${s}.`);
      }
      e.exposed = r || {};
    };
    let n;
    return {}.NODE_ENV !== "production" ? Object.freeze({
      get attrs() {
        return n || (n = Ru(e));
      },
      get slots() {
        return Tr(e.slots);
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    }) : {
      get attrs() {
        return n || (n = Ru(e));
      },
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function pl(e) {
    if (e.exposed)
      return e.exposeProxy || (e.exposeProxy = new Proxy(df(At(e.exposed)), {
        get(t, n) {
          if (n in t)
            return t[n];
          if (n in lr)
            return lr[n](e);
        },
        has(t, n) {
          return n in t || n in lr;
        }
      }));
  }
  const Ty = /(?:^|[-_])(\w)/g, Ey = (e) => e.replace(Ty, (t) => t.toUpperCase()).replace(/[-_]/g, "");
  function hl(e, t = !0) {
    return te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function vo(e, t, n = !1) {
    let r = hl(t);
    if (!r && t.__file) {
      const s = t.__file.match(/([^/\\]+)\.\w+$/);
      s && (r = s[1]);
    }
    if (!r && e && e.parent) {
      const s = (i) => {
        for (const o in i)
          if (i[o] === t)
            return o;
      };
      r = s(e.components || e.parent.type.components) || s(e.appContext.components);
    }
    return r ? Ey(r) : n ? "App" : "Anonymous";
  }
  function Gf(e) {
    return te(e) && "__vccOpts" in e;
  }
  const Fe = (e, t) => rm(e, t, js);
  function pr(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ge(t) && !$(t) ? Ir(t) ? Le(e, null, [t]) : Le(e, t) : Le(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ir(n) && (n = [n]), Le(e, t, n));
  }
  const jy = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Sy = () => {
    {
      const e = $e(jy);
      return e || {}.NODE_ENV !== "production" && Y("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
    }
  };
  function Uo(e) {
    return !!(e && e.__v_isShallow);
  }
  function Yy() {
    if ({}.NODE_ENV === "production" || typeof window > "u")
      return;
    const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, s = {
      header(u) {
        return ge(u) ? u.__isVue ? ["div", e, "VueInstance"] : ve(u) ? [
          "div",
          {},
          ["span", e, c(u)],
          "<",
          a(u.value),
          ">"
        ] : dt(u) ? [
          "div",
          {},
          ["span", e, Uo(u) ? "ShallowReactive" : "Reactive"],
          "<",
          a(u),
          `>${kn(u) ? " (readonly)" : ""}`
        ] : kn(u) ? [
          "div",
          {},
          ["span", e, Uo(u) ? "ShallowReadonly" : "Readonly"],
          "<",
          a(u),
          ">"
        ] : null : null;
      },
      hasBody(u) {
        return u && u.__isVue;
      },
      body(u) {
        if (u && u.__isVue)
          return [
            "div",
            {},
            ...i(u.$)
          ];
      }
    };
    function i(u) {
      const d = [];
      u.type.props && u.props && d.push(o("props", ee(u.props))), u.setupState !== Re && d.push(o("setup", u.setupState)), u.data !== Re && d.push(o("data", ee(u.data)));
      const m = l(u, "computed");
      m && d.push(o("computed", m));
      const L = l(u, "inject");
      return L && d.push(o("injected", L)), d.push([
        "div",
        {},
        [
          "span",
          {
            style: r.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: u }]
      ]), d;
    }
    function o(u, d) {
      return d = Ke({}, d), Object.keys(d).length ? [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          u
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(d).map((m) => [
            "div",
            {},
            ["span", r, m + ": "],
            a(d[m], !1)
          ])
        ]
      ] : ["span", {}];
    }
    function a(u, d = !0) {
      return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ge(u) ? ["object", { object: d ? ee(u) : u }] : ["span", n, String(u)];
    }
    function l(u, d) {
      const m = u.type;
      if (te(m))
        return;
      const L = {};
      for (const O in u.ctx)
        f(m, O, d) && (L[O] = u.ctx[O]);
      return L;
    }
    function f(u, d, m) {
      const L = u[m];
      if ($(L) && L.includes(d) || ge(L) && d in L || u.extends && f(u.extends, d, m) || u.mixins && u.mixins.some((O) => f(O, d, m)))
        return !0;
    }
    function c(u) {
      return Uo(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
    }
    window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
  }
  const Fu = "3.2.47", Py = "http://www.w3.org/2000/svg", er = typeof document < "u" ? document : null, Mu = er && /* @__PURE__ */ er.createElement("template"), Uy = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t ? er.createElementNS(Py, e) : er.createElement(e, n ? { is: n } : void 0);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (e) => er.createTextNode(e),
    createComment: (e) => er.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => er.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
          ;
      else {
        Mu.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = Mu.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; )
            a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        // first
        o ? o.nextSibling : t.firstChild,
        // last
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  function Hy(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  function ky(e, t, n) {
    const r = e.style, s = He(n);
    if (n && !s) {
      if (t && !He(t))
        for (const i in t)
          n[i] == null && ya(r, i, "");
      for (const i in n)
        ya(r, i, n[i]);
    } else {
      const i = r.display;
      s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i);
    }
  }
  const Zy = /[^\\];\s*$/, zu = /\s*!important$/;
  function ya(e, t, n) {
    if ($(n))
      n.forEach((r) => ya(e, t, r));
    else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Zy.test(n) && Y(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const r = Ky(e, t);
      zu.test(n) ? e.setProperty(Un(r), n.replace(zu, ""), "important") : e[r] = n;
    }
  }
  const Tu = ["Webkit", "Moz", "ms"], Ho = {};
  function Ky(e, t) {
    const n = Ho[t];
    if (n)
      return n;
    let r = rn(t);
    if (r !== "filter" && r in e)
      return Ho[t] = r;
    r = fr(r);
    for (let s = 0; s < Tu.length; s++) {
      const i = Tu[s] + r;
      if (i in e)
        return Ho[t] = i;
    }
    return t;
  }
  const Eu = "http://www.w3.org/1999/xlink";
  function Xy(e, t, n, r, s) {
    if (r && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(Eu, t.slice(6, t.length)) : e.setAttributeNS(Eu, t, n);
    else {
      const i = hh(t);
      n == null || i && !Hc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
    }
  }
  function Dy(e, t, n, r, s, i, o) {
    if (t === "innerHTML" || t === "textContent") {
      r && o(r, s, i), e[t] = n ?? "";
      return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
    !e.tagName.includes("-")) {
      e._value = n;
      const l = n ?? "";
      (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
      // textContent if no value attribute is present. And setting .value for
      // OPTION has no side effect
      e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
      return;
    }
    let a = !1;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = Hc(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
    }
    try {
      e[t] = n;
    } catch (l) {
      ({}).NODE_ENV !== "production" && !a && Y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
    }
    a && e.removeAttribute(t);
  }
  function Iy(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Cy(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  function Jy(e, t, n, r, s = null) {
    const i = e._vei || (e._vei = {}), o = i[t];
    if (r && o)
      o.value = r;
    else {
      const [a, l] = Gy(t);
      if (r) {
        const f = i[t] = _y(r, s);
        Iy(e, a, f, l);
      } else
        o && (Cy(e, a, o, l), i[t] = void 0);
    }
  }
  const ju = /(?:Once|Passive|Capture)$/;
  function Gy(e) {
    let t;
    if (ju.test(e)) {
      t = {};
      let r;
      for (; r = e.match(ju); )
        e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
    }
    return [e[2] === ":" ? e.slice(3) : Un(e.slice(2)), t];
  }
  let ko = 0;
  const By = /* @__PURE__ */ Promise.resolve(), Qy = () => ko || (By.then(() => ko = 0), ko = Date.now());
  function _y(e, t) {
    const n = (r) => {
      if (!r._vts)
        r._vts = Date.now();
      else if (r._vts <= n.attached)
        return;
      Zt($y(r, n.value), t, 5, [r]);
    };
    return n.value = e, n.attached = Qy(), n;
  }
  function $y(e, t) {
    if ($(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = !0;
      }, t.map((r) => (s) => !s._stopped && r && r(s));
    } else
      return t;
  }
  const Su = /^on[a-z]/, eb = (e, t, n, r, s = !1, i, o, a, l) => {
    t === "class" ? Hy(e, r, s) : t === "style" ? ky(e, n, r) : Ds(t) ? Ti(t) || Jy(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tb(e, t, r, s)) ? Dy(e, t, r, i, o, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xy(e, t, r, s));
  };
  function tb(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Su.test(t) && te(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Su.test(t) && He(n) ? !1 : t in e;
  }
  const nb = /* @__PURE__ */ Ke({ patchProp: eb }, Uy);
  let Yu;
  function rb() {
    return Yu || (Yu = yy(nb));
  }
  const sb = (...e) => {
    const t = rb().createApp(...e);
    ({}).NODE_ENV !== "production" && (ib(t), ob(t));
    const { mount: n } = t;
    return t.mount = (r) => {
      const s = ab(r);
      if (!s)
        return;
      const i = t._component;
      !te(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
      const o = n(s, !1, s instanceof SVGElement);
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
    }, t;
  };
  function ib(e) {
    Object.defineProperty(e.config, "isNativeTag", {
      value: (t) => fh(t) || dh(t),
      writable: !1
    });
  }
  function ob(e) {
    {
      const t = e.config.isCustomElement;
      Object.defineProperty(e.config, "isCustomElement", {
        get() {
          return t;
        },
        set() {
          Y("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
        }
      });
      const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
      Object.defineProperty(e.config, "compilerOptions", {
        get() {
          return Y(r), n;
        },
        set() {
          Y(r);
        }
      });
    }
  }
  function ab(e) {
    if (He(e)) {
      const t = document.querySelector(e);
      return {}.NODE_ENV !== "production" && !t && Y(`Failed to mount app: mount target selector "${e}" returned null.`), t;
    }
    return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Y('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
  }
  function lb() {
    Yy();
  }
  ({}).NODE_ENV !== "production" && lb();
  function ub() {
    return Bf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function Bf() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
  }
  const cb = typeof Proxy == "function", fb = "devtools-plugin:setup", db = "plugin:settings:set";
  let wr, ba;
  function pb() {
    var e;
    return wr !== void 0 || (typeof window < "u" && window.performance ? (wr = !0, ba = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (wr = !0, ba = global.perf_hooks.performance) : wr = !1), wr;
  }
  function hb() {
    return pb() ? ba.now() : Date.now();
  }
  class mb {
    constructor(t, n) {
      this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
      const r = {};
      if (t.settings)
        for (const o in t.settings) {
          const a = t.settings[o];
          r[o] = a.defaultValue;
        }
      const s = `__vue-devtools-plugin-settings__${t.id}`;
      let i = Object.assign({}, r);
      try {
        const o = localStorage.getItem(s), a = JSON.parse(o);
        Object.assign(i, a);
      } catch {
      }
      this.fallbacks = {
        getSettings() {
          return i;
        },
        setSettings(o) {
          try {
            localStorage.setItem(s, JSON.stringify(o));
          } catch {
          }
          i = o;
        },
        now() {
          return hb();
        }
      }, n && n.on(db, (o, a) => {
        o === this.plugin.id && this.fallbacks.setSettings(a);
      }), this.proxiedOn = new Proxy({}, {
        get: (o, a) => this.target ? this.target.on[a] : (...l) => {
          this.onQueue.push({
            method: a,
            args: l
          });
        }
      }), this.proxiedTarget = new Proxy({}, {
        get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
          method: a,
          args: l,
          resolve: () => {
          }
        }), this.fallbacks[a](...l)) : (...l) => new Promise((f) => {
          this.targetQueue.push({
            method: a,
            args: l,
            resolve: f
          });
        })
      });
    }
    async setRealTarget(t) {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(await this.target[n.method](...n.args));
    }
  }
  function ml(e, t) {
    const n = e, r = Bf(), s = ub(), i = cb && n.enableEarlyProxy;
    if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
      s.emit(fb, e, t);
    else {
      const o = i ? new mb(n, s) : null;
      (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
        pluginDescriptor: n,
        setupFn: t,
        proxy: o
      }), o && t(o.proxiedTarget);
    }
  }
  /*!
    * vue-router v4.1.6
    * (c) 2022 Eduardo San Martin Morote
    * @license MIT
    */
  const mn = typeof window < "u";
  function yb(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module";
  }
  const Ve = Object.assign;
  function Zo(e, t) {
    const n = {};
    for (const r in t) {
      const s = t[r];
      n[r] = Ot(s) ? s.map(e) : e(s);
    }
    return n;
  }
  const Vs = () => {
  }, Ot = Array.isArray;
  function pe(e) {
    const t = Array.from(arguments).slice(1);
    console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
  }
  const bb = /\/$/, vb = (e) => e.replace(bb, "");
  function Ko(e, t, n = "/") {
    let r, s = {}, i = "", o = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), i = t.slice(l + 1, a > -1 ? a : t.length), s = e(i)), a > -1 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = Vb(r ?? t, n), {
      fullPath: r + (i && "?") + i + o,
      path: r,
      query: s,
      hash: o
    };
  }
  function Ob(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Pu(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Uu(e, t, n) {
    const r = t.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && Kn(t.matched[r], n.matched[s]) && Qf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function Kn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Qf(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const n in e)
      if (!xb(e[n], t[n]))
        return !1;
    return !0;
  }
  function xb(e, t) {
    return Ot(e) ? Hu(e, t) : Ot(t) ? Hu(t, e) : e === t;
  }
  function Hu(e, t) {
    return Ot(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Vb(e, t) {
    if (e.startsWith("/"))
      return e;
    if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
      return pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
    if (!e)
      return t;
    const n = t.split("/"), r = e.split("/");
    let s = n.length - 1, i, o;
    for (i = 0; i < r.length; i++)
      if (o = r[i], o !== ".")
        if (o === "..")
          s > 1 && s--;
        else
          break;
    return n.slice(0, s).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/");
  }
  var Ss;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(Ss || (Ss = {}));
  var Ls;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Ls || (Ls = {}));
  function Lb(e) {
    if (!e)
      if (mn) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), vb(e);
  }
  const Ab = /^[^#]+#/;
  function wb(e, t) {
    return e.replace(Ab, "#") + t;
  }
  function gb(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const Oo = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  function Wb(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#");
      if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
        try {
          const i = document.querySelector(e.el);
          if (r && i) {
            pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
            return;
          }
        } catch {
          pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      const s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s) {
        ({}).NODE_ENV !== "production" && pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
        return;
      }
      t = gb(s, e);
    } else
      t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
  }
  function ku(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const va = /* @__PURE__ */ new Map();
  function Nb(e, t) {
    va.set(e, t);
  }
  function qb(e) {
    const t = va.get(e);
    return va.delete(e), t;
  }
  let Rb = () => location.protocol + "//" + location.host;
  function _f(e, t) {
    const { pathname: n, search: r, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      let a = s.includes(e.slice(i)) ? e.slice(i).length : 1, l = s.slice(a);
      return l[0] !== "/" && (l = "/" + l), Pu(l, "");
    }
    return Pu(n, e) + r + s;
  }
  function Fb(e, t, n, r) {
    let s = [], i = [], o = null;
    const a = ({ state: d }) => {
      const m = _f(e, location), L = n.value, O = t.value;
      let v = 0;
      if (d) {
        if (n.value = m, t.value = d, o && o === L) {
          o = null;
          return;
        }
        v = O ? d.position - O.position : 0;
      } else
        r(m);
      s.forEach((b) => {
        b(n.value, L, {
          delta: v,
          type: Ss.pop,
          direction: v ? v > 0 ? Ls.forward : Ls.back : Ls.unknown
        });
      });
    };
    function l() {
      o = n.value;
    }
    function f(d) {
      s.push(d);
      const m = () => {
        const L = s.indexOf(d);
        L > -1 && s.splice(L, 1);
      };
      return i.push(m), m;
    }
    function c() {
      const { history: d } = window;
      d.state && d.replaceState(Ve({}, d.state, { scroll: Oo() }), "");
    }
    function u() {
      for (const d of i)
        d();
      i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c), {
      pauseListeners: l,
      listen: f,
      destroy: u
    };
  }
  function Zu(e, t, n, r = !1, s = !1) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? Oo() : null
    };
  }
  function Mb(e) {
    const { history: t, location: n } = window, r = {
      value: _f(e, n)
    }, s = { value: t.state };
    s.value || i(r.value, {
      back: null,
      current: r.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: t.length - 1,
      replaced: !0,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, !0);
    function i(l, f, c) {
      const u = e.indexOf("#"), d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : Rb() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](f, "", d), s.value = f;
      } catch (m) {
        ({}).NODE_ENV !== "production" ? pe("Error with push/replace State", m) : console.error(m), n[c ? "replace" : "assign"](d);
      }
    }
    function o(l, f) {
      const c = Ve({}, t.state, Zu(
        s.value.back,
        // keep back and forward entries but override current position
        l,
        s.value.forward,
        !0
      ), f, { position: s.value.position });
      i(l, c, !0), r.value = l;
    }
    function a(l, f) {
      const c = Ve(
        {},
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        s.value,
        t.state,
        {
          forward: l,
          scroll: Oo()
        }
      );
      ({}).NODE_ENV !== "production" && !t.state && pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), i(c.current, c, !0);
      const u = Ve({}, Zu(r.value, l, null), { position: c.position + 1 }, f);
      i(l, u, !1), r.value = l;
    }
    return {
      location: r,
      state: s,
      push: a,
      replace: o
    };
  }
  function zb(e) {
    e = Lb(e);
    const t = Mb(e), n = Fb(e, t.state, t.location, t.replace);
    function r(i, o = !0) {
      o || n.pauseListeners(), history.go(i);
    }
    const s = Ve({
      // it's overridden right after
      location: "",
      base: e,
      go: r,
      createHref: wb.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value
    }), s;
  }
  function Tb(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && pe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), zb(e);
  }
  function Eb(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function $f(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const Fn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  }, Oa = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
  var Ku;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Ku || (Ku = {}));
  const jb = {
    [
      1
      /* ErrorTypes.MATCHER_NOT_FOUND */
    ]({ location: e, currentLocation: t }) {
      return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
    },
    [
      2
      /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
    ]({ from: e, to: t }) {
      return `Redirected from "${e.fullPath}" to "${Yb(t)}" via a navigation guard.`;
    },
    [
      4
      /* ErrorTypes.NAVIGATION_ABORTED */
    ]({ from: e, to: t }) {
      return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
    },
    [
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ]({ from: e, to: t }) {
      return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
    },
    [
      16
      /* ErrorTypes.NAVIGATION_DUPLICATED */
    ]({ from: e, to: t }) {
      return `Avoided redundant navigation to current location: "${e.fullPath}".`;
    }
  };
  function Jr(e, t) {
    return {}.NODE_ENV !== "production" ? Ve(new Error(jb[e](t)), {
      type: e,
      [Oa]: !0
    }, t) : Ve(new Error(), {
      type: e,
      [Oa]: !0
    }, t);
  }
  function ln(e, t) {
    return e instanceof Error && Oa in e && (t == null || !!(e.type & t));
  }
  const Sb = ["params", "query", "hash"];
  function Yb(e) {
    if (typeof e == "string")
      return e;
    if ("path" in e)
      return e.path;
    const t = {};
    for (const n of Sb)
      n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
  }
  const Xu = "[^/]+?", Pb = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  }, Ub = /[.+*?^${}()[\]/\\]/g;
  function Hb(e, t) {
    const n = Ve({}, Pb, t), r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const f of e) {
      const c = f.length ? [] : [
        90
        /* PathScore.Root */
      ];
      n.strict && !f.length && (s += "/");
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        let m = 40 + (n.sensitive ? 0.25 : 0);
        if (d.type === 0)
          u || (s += "/"), s += d.value.replace(Ub, "\\$&"), m += 40;
        else if (d.type === 1) {
          const { value: L, repeatable: O, optional: v, regexp: b } = d;
          i.push({
            name: L,
            repeatable: O,
            optional: v
          });
          const A = b || Xu;
          if (A !== Xu) {
            m += 10;
            try {
              new RegExp(`(${A})`);
            } catch (V) {
              throw new Error(`Invalid custom RegExp for param "${L}" (${A}): ` + V.message);
            }
          }
          let j = O ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
          u || (j = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          v && f.length < 2 ? `(?:/${j})` : "/" + j), v && (j += "?"), s += j, m += 20, v && (m += -8), O && (m += -20), A === ".*" && (m += -50);
        }
        c.push(m);
      }
      r.push(c);
    }
    if (n.strict && n.end) {
      const f = r.length - 1;
      r[f][r[f].length - 1] += 0.7000000000000001;
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const o = new RegExp(s, n.sensitive ? "" : "i");
    function a(f) {
      const c = f.match(o), u = {};
      if (!c)
        return null;
      for (let d = 1; d < c.length; d++) {
        const m = c[d] || "", L = i[d - 1];
        u[L.name] = m && L.repeatable ? m.split("/") : m;
      }
      return u;
    }
    function l(f) {
      let c = "", u = !1;
      for (const d of e) {
        (!u || !c.endsWith("/")) && (c += "/"), u = !1;
        for (const m of d)
          if (m.type === 0)
            c += m.value;
          else if (m.type === 1) {
            const { value: L, repeatable: O, optional: v } = m, b = L in f ? f[L] : "";
            if (Ot(b) && !O)
              throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);
            const A = Ot(b) ? b.join("/") : b;
            if (!A)
              if (v)
                d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = !0);
              else
                throw new Error(`Missing required param "${L}"`);
            c += A;
          }
      }
      return c || "/";
    }
    return {
      re: o,
      score: r,
      keys: i,
      parse: a,
      stringify: l
    };
  }
  function kb(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r)
        return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
  }
  function Zb(e, t) {
    let n = 0;
    const r = e.score, s = t.score;
    for (; n < r.length && n < s.length; ) {
      const i = kb(r[n], s[n]);
      if (i)
        return i;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (Du(r))
        return 1;
      if (Du(s))
        return -1;
    }
    return s.length - r.length;
  }
  function Du(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Kb = {
    type: 0,
    value: ""
  }, Xb = /[a-zA-Z0-9_]/;
  function Db(e) {
    if (!e)
      return [[]];
    if (e === "/")
      return [[Kb]];
    if (!e.startsWith("/"))
      throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
    function t(m) {
      throw new Error(`ERR (${n})/"${f}": ${m}`);
    }
    let n = 0, r = n;
    const s = [];
    let i;
    function o() {
      i && s.push(i), i = [];
    }
    let a = 0, l, f = "", c = "";
    function u() {
      f && (n === 0 ? i.push({
        type: 0,
        value: f
      }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
        type: 1,
        value: f,
        regexp: c,
        repeatable: l === "*" || l === "+",
        optional: l === "*" || l === "?"
      })) : t("Invalid state to consume buffer"), f = "");
    }
    function d() {
      f += l;
    }
    for (; a < e.length; ) {
      if (l = e[a++], l === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (f && u(), o()) : l === ":" ? (u(), n = 1) : d();
          break;
        case 4:
          d(), n = r;
          break;
        case 1:
          l === "(" ? n = 2 : Xb.test(l) ? d() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
          break;
        case 2:
          l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
          break;
        case 3:
          u(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), u(), o(), s;
  }
  function Ib(e, t, n) {
    const r = Hb(Db(e.path), n);
    if ({}.NODE_ENV !== "production") {
      const i = /* @__PURE__ */ new Set();
      for (const o of r.keys)
        i.has(o.name) && pe(`Found duplicated params with name "${o.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(o.name);
    }
    const s = Ve(r, {
      record: e,
      parent: t,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
  }
  function Cb(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = Ju({ strict: !1, end: !0, sensitive: !1 }, t);
    function s(c) {
      return r.get(c);
    }
    function i(c, u, d) {
      const m = !d, L = Jb(c);
      ({}).NODE_ENV !== "production" && _b(L, u), L.aliasOf = d && d.record;
      const O = Ju(t, c), v = [
        L
      ];
      if ("alias" in c) {
        const j = typeof c.alias == "string" ? [c.alias] : c.alias;
        for (const V of j)
          v.push(Ve({}, L, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: d ? d.record.components : L.components,
            path: V,
            // we might be the child of an alias
            aliasOf: d ? d.record : L
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }));
      }
      let b, A;
      for (const j of v) {
        const { path: V } = j;
        if (u && V[0] !== "/") {
          const w = u.record.path, M = w[w.length - 1] === "/" ? "" : "/";
          j.path = u.record.path + (V && M + V);
        }
        if ({}.NODE_ENV !== "production" && j.path === "*")
          throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
        if (b = Ib(j, u, O), {}.NODE_ENV !== "production" && u && V[0] === "/" && $b(b, u), d ? (d.alias.push(b), {}.NODE_ENV !== "production" && Qb(d, b)) : (A = A || b, A !== b && A.alias.push(b), m && c.name && !Cu(b) && o(c.name)), L.children) {
          const w = L.children;
          for (let M = 0; M < w.length; M++)
            i(w[M], b, d && d.children[M]);
        }
        d = d || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b);
      }
      return A ? () => {
        o(A);
      } : Vs;
    }
    function o(c) {
      if ($f(c)) {
        const u = r.get(c);
        u && (r.delete(c), n.splice(n.indexOf(u), 1), u.children.forEach(o), u.alias.forEach(o));
      } else {
        const u = n.indexOf(c);
        u > -1 && (n.splice(u, 1), c.record.name && r.delete(c.record.name), c.children.forEach(o), c.alias.forEach(o));
      }
    }
    function a() {
      return n;
    }
    function l(c) {
      let u = 0;
      for (; u < n.length && Zb(c, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
      // https://github.com/vuejs/router/issues/1124
      (c.record.path !== n[u].record.path || !ed(c, n[u])); )
        u++;
      n.splice(u, 0, c), c.record.name && !Cu(c) && r.set(c.record.name, c);
    }
    function f(c, u) {
      let d, m = {}, L, O;
      if ("name" in c && c.name) {
        if (d = r.get(c.name), !d)
          throw Jr(1, {
            location: c
          });
        if ({}.NODE_ENV !== "production") {
          const A = Object.keys(c.params || {}).filter((j) => !d.keys.find((V) => V.name === j));
          A.length && pe(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
        O = d.record.name, m = Ve(
          // paramsFromLocation is a new object
          Iu(
            u.params,
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            d.keys.filter((A) => !A.optional).map((A) => A.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          c.params && Iu(c.params, d.keys.map((A) => A.name))
        ), L = d.stringify(m);
      } else if ("path" in c)
        L = c.path, {}.NODE_ENV !== "production" && !L.startsWith("/") && pe(`The Matcher cannot resolve relative paths but received "${L}". Unless you directly called \`matcher.resolve("${L}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), d = n.find((A) => A.re.test(L)), d && (m = d.parse(L), O = d.record.name);
      else {
        if (d = u.name ? r.get(u.name) : n.find((A) => A.re.test(u.path)), !d)
          throw Jr(1, {
            location: c,
            currentLocation: u
          });
        O = d.record.name, m = Ve({}, u.params, c.params), L = d.stringify(m);
      }
      const v = [];
      let b = d;
      for (; b; )
        v.unshift(b.record), b = b.parent;
      return {
        name: O,
        path: L,
        params: m,
        matched: v,
        meta: Bb(v)
      };
    }
    return e.forEach((c) => i(c)), { addRoute: i, resolve: f, removeRoute: o, getRoutes: a, getRecordMatcher: s };
  }
  function Iu(e, t) {
    const n = {};
    for (const r of t)
      r in e && (n[r] = e[r]);
    return n;
  }
  function Jb(e) {
    return {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: void 0,
      beforeEnter: e.beforeEnter,
      props: Gb(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && { default: e.component }
    };
  }
  function Gb(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e)
      t.default = n;
    else
      for (const r in e.components)
        t[r] = typeof n == "boolean" ? n : n[r];
    return t;
  }
  function Cu(e) {
    for (; e; ) {
      if (e.record.aliasOf)
        return !0;
      e = e.parent;
    }
    return !1;
  }
  function Bb(e) {
    return e.reduce((t, n) => Ve(t, n.meta), {});
  }
  function Ju(e, t) {
    const n = {};
    for (const r in e)
      n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function xa(e, t) {
    return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
  }
  function Qb(e, t) {
    for (const n of e.keys)
      if (!n.optional && !t.keys.find(xa.bind(null, n)))
        return pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
    for (const n of t.keys)
      if (!n.optional && !e.keys.find(xa.bind(null, n)))
        return pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  }
  function _b(e, t) {
    t && t.record.name && !e.name && !e.path && pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
  function $b(e, t) {
    for (const n of t.keys)
      if (!e.keys.find(xa.bind(null, n)))
        return pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
  }
  function ed(e, t) {
    return t.children.some((n) => n === e || ed(e, n));
  }
  const td = /#/g, ev = /&/g, tv = /\//g, nv = /=/g, rv = /\?/g, nd = /\+/g, sv = /%5B/g, iv = /%5D/g, rd = /%5E/g, ov = /%60/g, sd = /%7B/g, av = /%7C/g, id = /%7D/g, lv = /%20/g;
  function yl(e) {
    return encodeURI("" + e).replace(av, "|").replace(sv, "[").replace(iv, "]");
  }
  function uv(e) {
    return yl(e).replace(sd, "{").replace(id, "}").replace(rd, "^");
  }
  function Va(e) {
    return yl(e).replace(nd, "%2B").replace(lv, "+").replace(td, "%23").replace(ev, "%26").replace(ov, "`").replace(sd, "{").replace(id, "}").replace(rd, "^");
  }
  function cv(e) {
    return Va(e).replace(nv, "%3D");
  }
  function fv(e) {
    return yl(e).replace(td, "%23").replace(rv, "%3F");
  }
  function dv(e) {
    return e == null ? "" : fv(e).replace(tv, "%2F");
  }
  function Ys(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
      ({}).NODE_ENV !== "production" && pe(`Error decoding "${e}". Using original value`);
    }
    return "" + e;
  }
  function pv(e) {
    const t = {};
    if (e === "" || e === "?")
      return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
      const i = r[s].replace(nd, " "), o = i.indexOf("="), a = Ys(o < 0 ? i : i.slice(0, o)), l = o < 0 ? null : Ys(i.slice(o + 1));
      if (a in t) {
        let f = t[a];
        Ot(f) || (f = t[a] = [f]), f.push(l);
      } else
        t[a] = l;
    }
    return t;
  }
  function Gu(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = cv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (Ot(r) ? r.map((i) => i && Va(i)) : [r && Va(r)]).forEach((i) => {
        i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
      });
    }
    return t;
  }
  function hv(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = Ot(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
    }
    return t;
  }
  const mv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), xo = Symbol({}.NODE_ENV !== "production" ? "router" : ""), od = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), La = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
  function is() {
    let e = [];
    function t(r) {
      return e.push(r), () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      };
    }
    function n() {
      e = [];
    }
    return {
      add: t,
      list: () => e,
      reset: n
    };
  }
  function Tn(e, t, n, r, s) {
    const i = r && // name is defined if record is because of the function overload
    (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((o, a) => {
      const l = (u) => {
        u === !1 ? a(Jr(4, {
          from: n,
          to: t
        })) : u instanceof Error ? a(u) : Eb(u) ? a(Jr(2, {
          from: t,
          to: u
        })) : (i && // since enterCallbackArray is truthy, both record and name also are
        r.enterCallbacks[s] === i && typeof u == "function" && i.push(u), o());
      }, f = e.call(r && r.instances[s], t, n, {}.NODE_ENV !== "production" ? yv(l, t, n) : l);
      let c = Promise.resolve(f);
      if (e.length < 3 && (c = c.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
        const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
        if (typeof f == "object" && "then" in f)
          c = c.then((d) => l._called ? d : (pe(u), Promise.reject(new Error("Invalid navigation guard"))));
        else if (f !== void 0 && !l._called) {
          pe(u), a(new Error("Invalid navigation guard"));
          return;
        }
      }
      c.catch((u) => a(u));
    });
  }
  function yv(e, t, n) {
    let r = 0;
    return function() {
      r++ === 1 && pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
    };
  }
  function Xo(e, t, n, r) {
    const s = [];
    for (const i of e) {
      ({}).NODE_ENV !== "production" && !i.components && !i.children.length && pe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
      for (const o in i.components) {
        let a = i.components[o];
        if ({}.NODE_ENV !== "production") {
          if (!a || typeof a != "object" && typeof a != "function")
            throw pe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`), new Error("Invalid route component");
          if ("then" in a) {
            pe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
            const l = a;
            a = () => l;
          } else
            a.__asyncLoader && // warn only once per component
            !a.__warnedDefineAsync && (a.__warnedDefineAsync = !0, pe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
        }
        if (!(t !== "beforeRouteEnter" && !i.instances[o]))
          if (bv(a)) {
            const f = (a.__vccOpts || a)[t];
            f && s.push(Tn(f, n, r, i, o));
          } else {
            let l = a();
            ({}).NODE_ENV !== "production" && !("catch" in l) && (pe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((f) => {
              if (!f)
                return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
              const c = yb(f) ? f.default : f;
              i.components[o] = c;
              const d = (c.__vccOpts || c)[t];
              return d && Tn(d, n, r, i, o)();
            }));
          }
      }
    }
    return s;
  }
  function bv(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Qu(e) {
    const t = $e(xo), n = $e(od), r = Fe(() => t.resolve(re(e.to))), s = Fe(() => {
      const { matched: l } = r.value, { length: f } = l, c = l[f - 1], u = n.matched;
      if (!c || !u.length)
        return -1;
      const d = u.findIndex(Kn.bind(null, c));
      if (d > -1)
        return d;
      const m = _u(l[f - 2]);
      return (
        // we are dealing with nested routes
        f > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        _u(c) === m && // avoid comparing the child with its parent
        u[u.length - 1].path !== m ? u.findIndex(Kn.bind(null, l[f - 2])) : d
      );
    }), i = Fe(() => s.value > -1 && Vv(n.params, r.value.params)), o = Fe(() => s.value > -1 && s.value === n.matched.length - 1 && Qf(n.params, r.value.params));
    function a(l = {}) {
      return xv(l) ? t[re(e.replace) ? "replace" : "push"](
        re(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Vs) : Promise.resolve();
    }
    if ({}.NODE_ENV !== "production" && mn) {
      const l = Js();
      if (l) {
        const f = {
          route: r.value,
          isActive: i.value,
          isExactActive: o.value
        };
        l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(f), hn(() => {
          f.route = r.value, f.isActive = i.value, f.isExactActive = o.value;
        }, { flush: "post" });
      }
    }
    return {
      route: r,
      href: Fe(() => r.value.href),
      isActive: i,
      isExactActive: o,
      navigate: a
    };
  }
  const vv = /* @__PURE__ */ Se({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      // inactiveClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: Qu,
    setup(e, { slots: t }) {
      const n = Wt(Qu(e)), { options: r } = $e(xo), s = Fe(() => ({
        [$u(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        // [getLinkClass(
        //   props.inactiveClass,
        //   options.linkInactiveClass,
        //   'router-link-inactive'
        // )]: !link.isExactActive,
        [$u(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom ? i : pr("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: n.navigate,
          class: s.value
        }, i);
      };
    }
  }), Ov = vv;
  function xv(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t))
          return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function Vv(e, t) {
    for (const n in t) {
      const r = t[n], s = e[n];
      if (typeof r == "string") {
        if (r !== s)
          return !1;
      } else if (!Ot(s) || s.length !== r.length || r.some((i, o) => i !== s[o]))
        return !1;
    }
    return !0;
  }
  function _u(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const $u = (e, t, n) => e ?? t ?? n, Lv = /* @__PURE__ */ Se({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      ({}).NODE_ENV !== "production" && wv();
      const r = $e(La), s = Fe(() => e.route || r.value), i = $e(Bu, 0), o = Fe(() => {
        let f = re(i);
        const { matched: c } = s.value;
        let u;
        for (; (u = c[f]) && !u.components; )
          f++;
        return f;
      }), a = Fe(() => s.value.matched[o.value]);
      bs(Bu, Fe(() => o.value + 1)), bs(mv, a), bs(La, s);
      const l = Xe();
      return pt(() => [l.value, a.value, e.name], ([f, c, u], [d, m, L]) => {
        c && (c.instances[u] = f, m && m !== c && f && f === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), f && c && // if there is no instance but to and from are the same this might be
        // the first visit
        (!m || !Kn(c, m) || !d) && (c.enterCallbacks[u] || []).forEach((O) => O(f));
      }, { flush: "post" }), () => {
        const f = s.value, c = e.name, u = a.value, d = u && u.components[c];
        if (!d)
          return ec(n.default, { Component: d, route: f });
        const m = u.props[c], L = m ? m === !0 ? f.params : typeof m == "function" ? m(f) : m : null, v = pr(d, Ve({}, L, t, {
          onVnodeUnmounted: (b) => {
            b.component.isUnmounted && (u.instances[c] = null);
          },
          ref: l
        }));
        if ({}.NODE_ENV !== "production" && mn && v.ref) {
          const b = {
            depth: o.value,
            name: u.name,
            path: u.path,
            meta: u.meta
          };
          (Ot(v.ref) ? v.ref.map((j) => j.i) : [v.ref.i]).forEach((j) => {
            j.__vrv_devtools = b;
          });
        }
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          ec(n.default, { Component: v, route: f }) || v
        );
      };
    }
  });
  function ec(e, t) {
    if (!e)
      return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const Av = Lv;
  function wv() {
    const e = Js(), t = e.parent && e.parent.type.name;
    if (t && (t === "KeepAlive" || t.includes("Transition"))) {
      const n = t === "KeepAlive" ? "keep-alive" : "transition";
      pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`);
    }
  }
  function os(e, t) {
    const n = Ve({}, e, {
      // remove variables that can contain vue instances
      matched: e.matched.map((r) => Tv(r, ["instances", "children", "aliasOf"]))
    });
    return {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.fullPath,
        tooltip: t,
        value: n
      }
    };
  }
  function ci(e) {
    return {
      _custom: {
        display: e
      }
    };
  }
  let gv = 0;
  function Wv(e, t, n) {
    if (t.__hasDevtools)
      return;
    t.__hasDevtools = !0;
    const r = gv++;
    ml({
      id: "org.vuejs.router" + (r ? "." + r : ""),
      label: "Vue Router",
      packageName: "vue-router",
      homepage: "https://router.vuejs.org",
      logo: "https://router.vuejs.org/logo.png",
      componentStateTypes: ["Routing"],
      app: e
    }, (s) => {
      typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((c, u) => {
        c.instanceData && c.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: !1,
          value: os(t.currentRoute.value, "Current Route")
        });
      }), s.on.visitComponentTree(({ treeNode: c, componentInstance: u }) => {
        if (u.__vrv_devtools) {
          const d = u.__vrv_devtools;
          c.tags.push({
            label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
            textColor: 0,
            tooltip: "This component is rendered by &lt;router-view&gt;",
            backgroundColor: ad
          });
        }
        Ot(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((d) => {
          let m = cd, L = "";
          d.isExactActive ? (m = ud, L = "This is exactly active") : d.isActive && (m = ld, L = "This link is active"), c.tags.push({
            label: d.route.path,
            textColor: 0,
            tooltip: L,
            backgroundColor: m
          });
        }));
      }), pt(t.currentRoute, () => {
        l(), s.notifyComponentUpdate(), s.sendInspectorTree(a), s.sendInspectorState(a);
      });
      const i = "router:navigations:" + r;
      s.addTimelineLayer({
        id: i,
        label: `Router${r ? " " + r : ""} Navigations`,
        color: 4237508
      }), t.onError((c, u) => {
        s.addTimelineEvent({
          layerId: i,
          event: {
            title: "Error during Navigation",
            subtitle: u.fullPath,
            logType: "error",
            time: s.now(),
            data: { error: c },
            groupId: u.meta.__navigationId
          }
        });
      });
      let o = 0;
      t.beforeEach((c, u) => {
        const d = {
          guard: ci("beforeEach"),
          from: os(u, "Current Location during this navigation"),
          to: os(c, "Target location")
        };
        Object.defineProperty(c.meta, "__navigationId", {
          value: o++
        }), s.addTimelineEvent({
          layerId: i,
          event: {
            time: s.now(),
            title: "Start of navigation",
            subtitle: c.fullPath,
            data: d,
            groupId: c.meta.__navigationId
          }
        });
      }), t.afterEach((c, u, d) => {
        const m = {
          guard: ci("afterEach")
        };
        d ? (m.failure = {
          _custom: {
            type: Error,
            readOnly: !0,
            display: d ? d.message : "",
            tooltip: "Navigation Failure",
            value: d
          }
        }, m.status = ci("❌")) : m.status = ci("✅"), m.from = os(u, "Current Location during this navigation"), m.to = os(c, "Target location"), s.addTimelineEvent({
          layerId: i,
          event: {
            title: "End of navigation",
            subtitle: c.fullPath,
            time: s.now(),
            data: m,
            logType: d ? "warning" : "default",
            groupId: c.meta.__navigationId
          }
        });
      });
      const a = "router-inspector:" + r;
      s.addInspector({
        id: a,
        label: "Routes" + (r ? " " + r : ""),
        icon: "book",
        treeFilterPlaceholder: "Search routes"
      });
      function l() {
        if (!f)
          return;
        const c = f;
        let u = n.getRoutes().filter((d) => !d.parent);
        u.forEach(pd), c.filter && (u = u.filter((d) => (
          // save matches state based on the payload
          Aa(d, c.filter.toLowerCase())
        ))), u.forEach((d) => dd(d, t.currentRoute.value)), c.rootNodes = u.map(fd);
      }
      let f;
      s.on.getInspectorTree((c) => {
        f = c, c.app === e && c.inspectorId === a && l();
      }), s.on.getInspectorState((c) => {
        if (c.app === e && c.inspectorId === a) {
          const d = n.getRoutes().find((m) => m.record.__vd_id === c.nodeId);
          d && (c.state = {
            options: qv(d)
          });
        }
      }), s.sendInspectorTree(a), s.sendInspectorState(a);
    });
  }
  function Nv(e) {
    return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
  }
  function qv(e) {
    const { record: t } = e, n = [
      { editable: !1, key: "path", value: t.path }
    ];
    return t.name != null && n.push({
      editable: !1,
      key: "name",
      value: t.name
    }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
      editable: !1,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: !0,
          display: e.keys.map((r) => `${r.name}${Nv(r)}`).join(" "),
          tooltip: "Param keys",
          value: e.keys
        }
      }
    }), t.redirect != null && n.push({
      editable: !1,
      key: "redirect",
      value: t.redirect
    }), e.alias.length && n.push({
      editable: !1,
      key: "aliases",
      value: e.alias.map((r) => r.record.path)
    }), Object.keys(e.record.meta).length && n.push({
      editable: !1,
      key: "meta",
      value: e.record.meta
    }), n.push({
      key: "score",
      editable: !1,
      value: {
        _custom: {
          type: null,
          readOnly: !0,
          display: e.score.map((r) => r.join(", ")).join(" | "),
          tooltip: "Score used to sort routes",
          value: e.score
        }
      }
    }), n;
  }
  const ad = 15485081, ld = 2450411, ud = 8702998, Rv = 2282478, cd = 16486972, Fv = 6710886;
  function fd(e) {
    const t = [], { record: n } = e;
    n.name != null && t.push({
      label: String(n.name),
      textColor: 0,
      backgroundColor: Rv
    }), n.aliasOf && t.push({
      label: "alias",
      textColor: 0,
      backgroundColor: cd
    }), e.__vd_match && t.push({
      label: "matches",
      textColor: 0,
      backgroundColor: ad
    }), e.__vd_exactActive && t.push({
      label: "exact",
      textColor: 0,
      backgroundColor: ud
    }), e.__vd_active && t.push({
      label: "active",
      textColor: 0,
      backgroundColor: ld
    }), n.redirect && t.push({
      label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: Fv
    });
    let r = n.__vd_id;
    return r == null && (r = String(Mv++), n.__vd_id = r), {
      id: r,
      label: n.path,
      tags: t,
      children: e.children.map(fd)
    };
  }
  let Mv = 0;
  const zv = /^\/(.*)\/([a-z]*)$/;
  function dd(e, t) {
    const n = t.matched.length && Kn(t.matched[t.matched.length - 1], e.record);
    e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => Kn(r, e.record))), e.children.forEach((r) => dd(r, t));
  }
  function pd(e) {
    e.__vd_match = !1, e.children.forEach(pd);
  }
  function Aa(e, t) {
    const n = String(e.re).match(zv);
    if (e.__vd_match = !1, !n || n.length < 3)
      return !1;
    if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
      return e.children.forEach((o) => Aa(o, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
    const s = e.record.path.toLowerCase(), i = Ys(s);
    return !t.startsWith("/") && (i.includes(t) || s.includes(t)) || i.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((o) => Aa(o, t));
  }
  function Tv(e, t) {
    const n = {};
    for (const r in e)
      t.includes(r) || (n[r] = e[r]);
    return n;
  }
  function Ev(e) {
    const t = Cb(e.routes, e), n = e.parseQuery || pv, r = e.stringifyQuery || Gu, s = e.history;
    if ({}.NODE_ENV !== "production" && !s)
      throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
    const i = is(), o = is(), a = is(), l = _h(Fn);
    let f = Fn;
    mn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Zo.bind(null, (W) => "" + W), u = Zo.bind(null, dv), d = (
      // @ts-expect-error: intentionally avoid the type check
      Zo.bind(null, Ys)
    );
    function m(W, I) {
      let U, J;
      return $f(W) ? (U = t.getRecordMatcher(W), J = I) : J = W, t.addRoute(J, U);
    }
    function L(W) {
      const I = t.getRecordMatcher(W);
      I ? t.removeRoute(I) : {}.NODE_ENV !== "production" && pe(`Cannot remove non-existent route "${String(W)}"`);
    }
    function O() {
      return t.getRoutes().map((W) => W.record);
    }
    function v(W) {
      return !!t.getRecordMatcher(W);
    }
    function b(W, I) {
      if (I = Ve({}, I || l.value), typeof W == "string") {
        const se = Ko(n, W, I.path), p = t.resolve({ path: se.path }, I), h = s.createHref(se.fullPath);
        return {}.NODE_ENV !== "production" && (h.startsWith("//") ? pe(`Location "${W}" resolved to "${h}". A resolved location cannot start with multiple slashes.`) : p.matched.length || pe(`No match found for location with path "${W}"`)), Ve(se, p, {
          params: d(p.params),
          hash: Ys(se.hash),
          redirectedFrom: void 0,
          href: h
        });
      }
      let U;
      if ("path" in W)
        ({}).NODE_ENV !== "production" && "params" in W && !("name" in W) && // @ts-expect-error: the type is never
        Object.keys(W.params).length && pe(`Path "${// @ts-expect-error: the type is never
        W.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), U = Ve({}, W, {
          path: Ko(n, W.path, I.path).path
        });
      else {
        const se = Ve({}, W.params);
        for (const p in se)
          se[p] == null && delete se[p];
        U = Ve({}, W, {
          params: u(W.params)
        }), I.params = u(I.params);
      }
      const J = t.resolve(U, I), he = W.hash || "";
      ({}).NODE_ENV !== "production" && he && !he.startsWith("#") && pe(`A \`hash\` should always start with the character "#". Replace "${he}" with "#${he}".`), J.params = c(d(J.params));
      const Me = Ob(r, Ve({}, W, {
        hash: uv(he),
        path: J.path
      })), oe = s.createHref(Me);
      return {}.NODE_ENV !== "production" && (oe.startsWith("//") ? pe(`Location "${W}" resolved to "${oe}". A resolved location cannot start with multiple slashes.`) : J.matched.length || pe(`No match found for location with path "${"path" in W ? W.path : W}"`)), Ve({
        fullPath: Me,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash: he,
        query: (
          // if the user is using a custom query lib like qs, we might have
          // nested objects, so we keep the query as is, meaning it can contain
          // numbers at `$route.query`, but at the point, the user will have to
          // use their own type anyway.
          // https://github.com/vuejs/router/issues/328#issuecomment-649481567
          r === Gu ? hv(W.query) : W.query || {}
        )
      }, J, {
        redirectedFrom: void 0,
        href: oe
      });
    }
    function A(W) {
      return typeof W == "string" ? Ko(n, W, l.value.path) : Ve({}, W);
    }
    function j(W, I) {
      if (f !== W)
        return Jr(8, {
          from: I,
          to: W
        });
    }
    function V(W) {
      return y(W);
    }
    function w(W) {
      return V(Ve(A(W), { replace: !0 }));
    }
    function M(W) {
      const I = W.matched[W.matched.length - 1];
      if (I && I.redirect) {
        const { redirect: U } = I;
        let J = typeof U == "function" ? U(W) : U;
        if (typeof J == "string" && (J = J.includes("?") || J.includes("#") ? J = A(J) : (
          // force empty params
          { path: J }
        ), J.params = {}), {}.NODE_ENV !== "production" && !("path" in J) && !("name" in J))
          throw pe(`Invalid redirect found:
${JSON.stringify(J, null, 2)}
 when navigating to "${W.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
        return Ve({
          query: W.query,
          hash: W.hash,
          // avoid transferring params if the redirect has a path
          params: "path" in J ? {} : W.params
        }, J);
      }
    }
    function y(W, I) {
      const U = f = b(W), J = l.value, he = W.state, Me = W.force, oe = W.replace === !0, se = M(U);
      if (se)
        return y(
          Ve(A(se), {
            state: typeof se == "object" ? Ve({}, he, se.state) : he,
            force: Me,
            replace: oe
          }),
          // keep original redirectedFrom if it exists
          I || U
        );
      const p = U;
      p.redirectedFrom = I;
      let h;
      return !Me && Uu(r, J, U) && (h = Jr(16, { to: p, from: J }), Ft(
        J,
        J,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        !0,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        !1
      )), (h ? Promise.resolve(h) : g(p, J)).catch((x) => ln(x) ? (
        // navigation redirects still mark the router as ready
        ln(
          x,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? x : ke(x)
      ) : (
        // reject any unknown error
        D(x, p, J)
      )).then((x) => {
        if (x) {
          if (ln(
            x,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          ))
            return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
            Uu(r, b(x.to), p) && // and we have done it a couple of times
            I && // @ts-expect-error: added only in dev
            (I._count = I._count ? (
              // @ts-expect-error
              I._count + 1
            ) : 1) > 10 ? (pe(`Detected an infinite redirection in a navigation guard when going from "${J.fullPath}" to "${p.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : y(
              // keep options
              Ve({
                // preserve an existing replacement but allow the redirect to override it
                replace: oe
              }, A(x.to), {
                state: typeof x.to == "object" ? Ve({}, he, x.to.state) : he,
                force: Me
              }),
              // preserve the original redirectedFrom if any
              I || p
            );
        } else
          x = Z(p, J, !0, oe, he);
        return q(p, J, x), x;
      });
    }
    function E(W, I) {
      const U = j(W, I);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function g(W, I) {
      let U;
      const [J, he, Me] = jv(W, I);
      U = Xo(J.reverse(), "beforeRouteLeave", W, I);
      for (const se of J)
        se.leaveGuards.forEach((p) => {
          U.push(Tn(p, W, I));
        });
      const oe = E.bind(null, W, I);
      return U.push(oe), gr(U).then(() => {
        U = [];
        for (const se of i.list())
          U.push(Tn(se, W, I));
        return U.push(oe), gr(U);
      }).then(() => {
        U = Xo(he, "beforeRouteUpdate", W, I);
        for (const se of he)
          se.updateGuards.forEach((p) => {
            U.push(Tn(p, W, I));
          });
        return U.push(oe), gr(U);
      }).then(() => {
        U = [];
        for (const se of W.matched)
          if (se.beforeEnter && !I.matched.includes(se))
            if (Ot(se.beforeEnter))
              for (const p of se.beforeEnter)
                U.push(Tn(p, W, I));
            else
              U.push(Tn(se.beforeEnter, W, I));
        return U.push(oe), gr(U);
      }).then(() => (W.matched.forEach((se) => se.enterCallbacks = {}), U = Xo(Me, "beforeRouteEnter", W, I), U.push(oe), gr(U))).then(() => {
        U = [];
        for (const se of o.list())
          U.push(Tn(se, W, I));
        return U.push(oe), gr(U);
      }).catch((se) => ln(
        se,
        8
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? se : Promise.reject(se));
    }
    function q(W, I, U) {
      for (const J of a.list())
        J(W, I, U);
    }
    function Z(W, I, U, J, he) {
      const Me = j(W, I);
      if (Me)
        return Me;
      const oe = I === Fn, se = mn ? history.state : {};
      U && (J || oe ? s.replace(W.fullPath, Ve({
        scroll: oe && se && se.scroll
      }, he)) : s.push(W.fullPath, he)), l.value = W, Ft(W, I, U, oe), ke();
    }
    let X;
    function ye() {
      X || (X = s.listen((W, I, U) => {
        if (!Lr.listening)
          return;
        const J = b(W), he = M(J);
        if (he) {
          y(Ve(he, { replace: !0 }), J).catch(Vs);
          return;
        }
        f = J;
        const Me = l.value;
        mn && Nb(ku(Me.fullPath, U.delta), Oo()), g(J, Me).catch((oe) => ln(
          oe,
          12
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? oe : ln(
          oe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? (y(
          oe.to,
          J
          // avoid an uncaught rejection, let push call triggerError
        ).then((se) => {
          ln(
            se,
            20
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          ) && !U.delta && U.type === Ss.pop && s.go(-1, !1);
        }).catch(Vs), Promise.reject()) : (U.delta && s.go(-U.delta, !1), D(oe, J, Me))).then((oe) => {
          oe = oe || Z(
            // after navigation, all matched components are resolved
            J,
            Me,
            !1
          ), oe && (U.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !ln(
            oe,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          ) ? s.go(-U.delta, !1) : U.type === Ss.pop && ln(
            oe,
            20
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          ) && s.go(-1, !1)), q(J, Me, oe);
        }).catch(Vs);
      }));
    }
    let Ye = is(), Ae = is(), _;
    function D(W, I, U) {
      ke(W);
      const J = Ae.list();
      return J.length ? J.forEach((he) => he(W, I, U)) : ({}.NODE_ENV !== "production" && pe("uncaught error during route navigation:"), console.error(W)), Promise.reject(W);
    }
    function le() {
      return _ && l.value !== Fn ? Promise.resolve() : new Promise((W, I) => {
        Ye.add([W, I]);
      });
    }
    function ke(W) {
      return _ || (_ = !W, ye(), Ye.list().forEach(([I, U]) => W ? U(W) : I()), Ye.reset()), W;
    }
    function Ft(W, I, U, J) {
      const { scrollBehavior: he } = e;
      if (!mn || !he)
        return Promise.resolve();
      const Me = !U && qb(ku(W.fullPath, 0)) || (J || !U) && history.state && history.state.scroll || null;
      return zs().then(() => he(W, I, Me)).then((oe) => oe && Wb(oe)).catch((oe) => D(oe, W, I));
    }
    const rt = (W) => s.go(W);
    let Ct;
    const Vt = /* @__PURE__ */ new Set(), Lr = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: L,
      hasRoute: v,
      getRoutes: O,
      resolve: b,
      options: e,
      push: V,
      replace: w,
      go: rt,
      back: () => rt(-1),
      forward: () => rt(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Ae.add,
      isReady: le,
      install(W) {
        const I = this;
        W.component("RouterLink", Ov), W.component("RouterView", Av), W.config.globalProperties.$router = I, Object.defineProperty(W.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => re(l)
        }), mn && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !Ct && l.value === Fn && (Ct = !0, V(s.location).catch((he) => {
          ({}).NODE_ENV !== "production" && pe("Unexpected error when starting the router:", he);
        }));
        const U = {};
        for (const he in Fn)
          U[he] = Fe(() => l.value[he]);
        W.provide(xo, I), W.provide(od, Wt(U)), W.provide(La, l);
        const J = W.unmount;
        Vt.add(W), W.unmount = function() {
          Vt.delete(W), Vt.size < 1 && (f = Fn, X && X(), X = null, l.value = Fn, Ct = !1, _ = !1), J();
        }, {}.NODE_ENV !== "production" && mn && Wv(W, I, t);
      }
    };
    return Lr;
  }
  function gr(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
  }
  function jv(e, t) {
    const n = [], r = [], s = [], i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
      const a = t.matched[o];
      a && (e.matched.find((f) => Kn(f, a)) ? r.push(a) : n.push(a));
      const l = e.matched[o];
      l && (t.matched.find((f) => Kn(f, l)) || s.push(l));
    }
    return [n, r, s];
  }
  function bl() {
    return $e(xo);
  }
  const Sv = { key: 0 }, Yv = { key: 1 }, Pv = /* @__PURE__ */ Se({
    __name: "Label",
    props: ["value"],
    setup(e) {
      return (t, n) => (We(), tn("label", null, [
        e.value ? (We(), tn("span", Sv, Ia(e.value), 1)) : (We(), tn("span", Yv, [
          Dr(t.$slots, "default")
        ]))
      ]));
    }
  }), Uv = {
    key: 0,
    class: "my-4"
  }, Hv = { class: "d-flex align-items-center" }, kv = {
    key: 1,
    class: "my-4"
  }, As = /* @__PURE__ */ Se({
    __name: "FormGroup",
    props: {
      label: null
    },
    setup(e) {
      const t = e;
      return (n, r) => t.label ? (We(), tn("div", Uv, [
        t.label ? (We(), Ge(re(Pv), {
          key: 0,
          class: "col-12"
        }, {
          default: bt(() => [
            fl(Ia(t.label), 1)
          ]),
          _: 1
        })) : pa("", !0),
        St("div", Hv, [
          Dr(n.$slots, "default")
        ])
      ])) : (We(), tn("div", kv, [
        Dr(n.$slots, "default", { class: "col-12" })
      ]));
    }
  }), hd = [
    "__key",
    "__init",
    "__shim",
    "__original",
    "__index",
    "__prevKey"
  ];
  function _r() {
    return Math.random().toString(36).substring(2, 15);
  }
  function Zv(e, t) {
    const n = e instanceof Set ? e : new Set(e);
    return t && t.forEach((r) => n.add(r)), [...n];
  }
  function ae(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Nt(e, t, n = !0, r = ["__key"]) {
    if (e === t)
      return !0;
    if (typeof t == "object" && typeof e == "object") {
      if (e instanceof Map || e instanceof Set || e instanceof Date || e === null || t === null || Object.keys(e).length !== Object.keys(t).length)
        return !1;
      for (const s of r)
        if ((s in e || s in t) && e[s] !== t[s])
          return !1;
      for (const s in e)
        if (!(s in t) || e[s] !== t[s] && !n || n && !Nt(e[s], t[s], n, r))
          return !1;
      return !0;
    }
    return !1;
  }
  function Ps(e) {
    const t = typeof e;
    if (t === "number")
      return !1;
    if (e === void 0)
      return !0;
    if (t === "string")
      return e === "";
    if (t === "object") {
      if (e === null)
        return !0;
      for (const n in e)
        return !1;
      return !(e instanceof RegExp || e instanceof Date);
    }
    return !1;
  }
  function Kv(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Xv(e) {
    const t = `^${Kv(e)}$`, n = {
      MM: "(0[1-9]|1[012])",
      M: "([1-9]|1[012])",
      DD: "([012][0-9]|3[01])",
      D: "([012]?[0-9]|3[01])",
      YYYY: "\\d{4}",
      YY: "\\d{2}"
    }, r = Object.keys(n);
    return new RegExp(r.reduce((s, i) => s.replace(i, n[i]), t));
  }
  function wa(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function ga(e) {
    return wa(e) || Array.isArray(e);
  }
  function hr(e) {
    if (wa(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
      return !1;
    const t = e.constructor;
    if (t === void 0)
      return !0;
    const n = t.prototype;
    return !(wa(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1);
  }
  function mr(e, t, n = !1, r = !1) {
    if (t === null)
      return null;
    const s = {};
    if (typeof t == "string")
      return t;
    for (const i in e)
      if (ae(t, i) && (t[i] !== void 0 || !r)) {
        if (n && Array.isArray(e[i]) && Array.isArray(t[i])) {
          s[i] = e[i].concat(t[i]);
          continue;
        }
        if (t[i] === void 0)
          continue;
        hr(e[i]) && hr(t[i]) ? s[i] = mr(e[i], t[i], n, r) : s[i] = t[i];
      } else
        s[i] = e[i];
    for (const i in t)
      !ae(s, i) && t[i] !== void 0 && (s[i] = t[i]);
    return s;
  }
  function Dv(e) {
    if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1])
      return !1;
    const t = e[0];
    for (let n = 1; n < e.length; n++)
      if (e[n] === t && (n === 1 || e[n - 1] !== "\\") && n !== e.length - 1)
        return !1;
    return !0;
  }
  function Iv(e) {
    if (!e.length)
      return "";
    let t = "", n = "";
    for (let r = 0; r < e.length; r++) {
      const s = e.charAt(r);
      (s !== "\\" || n === "\\") && (t += s), n = s;
    }
    return t;
  }
  function Wr(...e) {
    return e.reduce((t, n) => {
      const { value: r, name: s, modelValue: i, config: o, plugins: a, ...l } = n;
      return Object.assign(t, l);
    }, {});
  }
  function Cv(e) {
    const t = [];
    let n = "", r = 0, s = "", i = "";
    for (let o = 0; o < e.length; o++) {
      const a = e.charAt(o);
      a === s && i !== "\\" ? s = "" : (a === "'" || a === '"') && !s && i !== "\\" ? s = a : a === "(" && !s ? r++ : a === ")" && !s && r--, a === "," && !s && r === 0 ? (t.push(n), n = "") : (a !== " " || s) && (n += a), i = a;
    }
    return n && t.push(n), t;
  }
  function tc(e, t) {
    const n = {}, r = t.filter((i) => i instanceof RegExp), s = new Set(t);
    for (const i in e)
      !s.has(i) && !r.some((o) => o.test(i)) && (n[i] = e[i]);
    return n;
  }
  function nc(e, t) {
    const n = {}, r = t.filter((s) => s instanceof RegExp);
    return t.forEach((s) => {
      s instanceof RegExp || (n[s] = e[s]);
    }), Object.keys(e).forEach((s) => {
      r.some((i) => i.test(s)) && (n[s] = e[s]);
    }), n;
  }
  function Hr(e) {
    return e.replace(/-([a-z0-9])/gi, (t, n) => n.toUpperCase());
  }
  function md(e) {
    return e.replace(/([a-z0-9])([A-Z])/g, (t, n, r) => n + "-" + r.toLowerCase()).replace(" ", "-").toLowerCase();
  }
  function rc(e, t = hd) {
    if (e !== null && typeof e == "object") {
      let n;
      if (Array.isArray(e) ? n = [...e] : hr(e) && (n = { ...e }), n)
        return Gv(e, n, t), n;
    }
    return e;
  }
  function Gr(e, t = hd) {
    if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
      return e;
    let n;
    Array.isArray(e) ? n = e.map((r) => typeof r == "object" ? Gr(r, t) : r) : n = Object.keys(e).reduce((r, s) => (r[s] = typeof e[s] == "object" ? Gr(e[s], t) : e[s], r), {});
    for (const r of t)
      r in e && Object.defineProperty(n, r, {
        enumerable: !1,
        value: e[r]
      });
    return n;
  }
  function Yt(e) {
    return typeof e == "object" ? Gr(e) : e;
  }
  function Jv(e, t) {
    if (!e || typeof e != "object")
      return null;
    const n = t.split(".");
    let r = e;
    for (const s in n) {
      const i = n[s];
      if (ae(r, i) && (r = r[i]), +s === n.length - 1)
        return r;
      if (!r || typeof r != "object")
        return null;
    }
    return null;
  }
  function Pt(e) {
    return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
  }
  function Us(e) {
    return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
      enumerable: !1,
      value: !0
    });
  }
  function vl(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
  }
  function Gv(e, t, n) {
    for (const r of n)
      r in e && Object.defineProperty(t, r, {
        enumerable: !1,
        value: e[r]
      });
    return t;
  }
  function Ol() {
    const e = [];
    let t = 0;
    const n = (s) => e.push(s), r = (s) => {
      const i = e[t];
      return typeof i == "function" ? i(s, (o) => (t++, r(o === void 0 ? s : o))) : (t = 0, s);
    };
    return n.dispatch = r, n.unshift = (s) => e.unshift(s), n.remove = (s) => {
      const i = e.indexOf(s);
      i > -1 && e.splice(i, 1);
    }, n;
  }
  function yd() {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
    let n;
    const r = (s, i) => {
      if (n) {
        n.set(i.name, [s, i]);
        return;
      }
      e.has(i.name) && e.get(i.name).forEach((o) => {
        (i.origin === s || o.modifiers.includes("deep")) && o.listener(i);
      }), i.bubble && s.bubble(i);
    };
    return r.on = (s, i) => {
      const [o, ...a] = s.split("."), l = i.receipt || _r(), f = {
        modifiers: a,
        event: o,
        listener: i,
        receipt: l
      };
      return e.has(o) ? e.get(o).push(f) : e.set(o, [f]), t.has(l) ? t.get(l).push(o) : t.set(l, [o]), l;
    }, r.off = (s) => {
      var i;
      t.has(s) && ((i = t.get(s)) === null || i === void 0 || i.forEach((o) => {
        const a = e.get(o);
        Array.isArray(a) && e.set(o, a.filter((l) => l.receipt !== s));
      }), t.delete(s));
    }, r.pause = (s) => {
      n || (n = /* @__PURE__ */ new Map()), s && s.walk((i) => i._e.pause());
    }, r.play = (s) => {
      if (!n)
        return;
      const i = n;
      n = void 0, i.forEach(([o, a]) => r(o, a)), s && s.walk((o) => o._e.play());
    }, r;
  }
  function Bv(e, t, n, r, s = !0) {
    return t._e(e, {
      payload: r,
      name: n,
      bubble: s,
      origin: e
    }), e;
  }
  function Qv(e, t, n) {
    return Bs(e.parent) && e.parent._e(e.parent, n), e;
  }
  function _v(e, t, n, r) {
    return t._e.on(n, r);
  }
  function $v(e, t, n) {
    return t._e.off(n), e;
  }
  const xl = Ol();
  xl((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
  const Vl = Ol();
  Vl((e, t) => {
    e.message || (e.message = `W${e.code}`);
    const n = t(e);
    return console && typeof console.warn == "function" && console.warn(n.message), n;
  });
  function Or(e, t = {}) {
    Vl.dispatch({ code: e, data: t });
  }
  function vt(e, t = {}) {
    throw Error(xl.dispatch({ code: e, data: t }).message);
  }
  function Kt(e, t) {
    const n = {
      blocking: !1,
      key: _r(),
      meta: {},
      type: "state",
      visible: !0,
      ...e
    };
    return t && n.value && n.meta.localize !== !1 && (n.value = t.t(n), n.meta.locale = t.config.locale), n;
  }
  const sc = {
    apply: iO,
    set: tO,
    remove: bd,
    filter: rO,
    reduce: sO,
    release: lO,
    touch: nO
  };
  function eO(e = !1) {
    const t = {};
    let n, r = e, s = [];
    const i = /* @__PURE__ */ new Map();
    let o;
    const a = new Proxy(t, {
      get(...l) {
        const [f, c] = l;
        return c === "buffer" ? r : c === "_b" ? s : c === "_m" ? i : c === "_r" ? o : ae(sc, c) ? sc[c].bind(null, t, a, n) : Reflect.get(...l);
      },
      set(l, f, c) {
        return f === "_n" ? (n = c, o === "__n" && vd(n, a), !0) : f === "_b" ? (s = c, !0) : f === "buffer" ? (r = c, !0) : f === "_r" ? (o = c, !0) : (vt(101, n), !1);
      }
    });
    return a;
  }
  function tO(e, t, n, r) {
    if (t.buffer)
      return t._b.push([[r]]), t;
    if (e[r.key] !== r) {
      if (typeof r.value == "string" && r.meta.localize !== !1) {
        const i = r.value;
        r.value = n.t(r), r.value !== i && (r.meta.locale = n.props.locale);
      }
      const s = `message-${ae(e, r.key) ? "updated" : "added"}`;
      e[r.key] = Object.freeze(n.hook.message.dispatch(r)), n.emit(s, r);
    }
    return t;
  }
  function nO(e, t) {
    for (const n in e) {
      const r = { ...e[n] };
      t.set(r);
    }
  }
  function bd(e, t, n, r) {
    if (ae(e, r)) {
      const s = e[r];
      delete e[r], n.emit("message-removed", s);
    }
    return t.buffer === !0 && (t._b = t._b.filter((s) => (s[0] = s[0].filter((i) => i.key !== r), s[1] || s[0].length))), t;
  }
  function rO(e, t, n, r, s) {
    for (const i in e) {
      const o = e[i];
      (!s || o.type === s) && !r(o) && bd(e, t, n, i);
    }
  }
  function sO(e, t, n, r, s) {
    for (const i in e) {
      const o = e[i];
      s = r(s, o);
    }
    return s;
  }
  function iO(e, t, n, r, s) {
    if (Array.isArray(r)) {
      if (t.buffer) {
        t._b.push([r, s]);
        return;
      }
      const i = new Set(r.map((o) => (t.set(o), o.key)));
      typeof s == "string" ? t.filter((o) => o.type !== s || i.has(o.key)) : typeof s == "function" && t.filter((o) => !s(o) || i.has(o.key));
    } else
      for (const i in r) {
        const o = n.at(i);
        o ? o.store.apply(r[i], s) : aO(n, t, i, r[i], s);
      }
  }
  function oO(e, ...t) {
    const n = `${e.name}-set`, r = (s) => Kt({
      key: vl(s),
      type: "error",
      value: s,
      meta: { source: n, autoClear: !0 }
    });
    return t.filter((s) => !!s).map((s) => {
      if (typeof s == "string" && (s = [s]), Array.isArray(s))
        return s.map((i) => r(i));
      {
        const i = {};
        for (const o in s)
          Array.isArray(s[o]) ? i[o] = s[o].map((a) => r(a)) : i[o] = [r(s[o])];
        return i;
      }
    });
  }
  function aO(e, t, n, r, s) {
    var i;
    const o = t._m;
    o.has(n) || o.set(n, []), t._r || (t._r = vd(e, t)), (i = o.get(n)) === null || i === void 0 || i.push([r, s]);
  }
  function vd(e, t) {
    return e.on("child.deep", ({ payload: n }) => {
      t._m.forEach((r, s) => {
        e.at(s) === n && (r.forEach(([i, o]) => {
          n.store.apply(i, o);
        }), t._m.delete(s));
      }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0);
    });
  }
  function lO(e, t) {
    t.buffer = !1, t._b.forEach(([n, r]) => t.apply(n, r)), t._b = [];
  }
  function uO() {
    const e = {};
    let t;
    return {
      count: (...n) => cO(t, e, ...n),
      init(n) {
        t = n, n.on("message-added.deep", ic(e, 1)), n.on("message-removed.deep", ic(e, -1));
      },
      merge: (n) => oc(t, e, n),
      settled(n) {
        return ae(e, n) ? e[n].promise : Promise.resolve();
      },
      unmerge: (n) => oc(t, e, n, !0),
      value(n) {
        return ae(e, n) ? e[n].count : 0;
      }
    };
  }
  function cO(e, t, n, r, s = 0) {
    if (r = fO(r || n), !ae(t, n)) {
      const i = {
        condition: r,
        count: 0,
        name: n,
        node: e,
        promise: Promise.resolve(),
        resolve: () => {
        }
        // eslint-disable-line @typescript-eslint/no-empty-function
      };
      t[n] = i, s = e.store.reduce((o, a) => o + i.condition(a) * 1, s), e.each((o) => {
        o.ledger.count(i.name, i.condition), s += o.ledger.value(i.name);
      });
    }
    return Od(t[n], s).promise;
  }
  function fO(e) {
    return typeof e == "function" ? e : (t) => t.type === e;
  }
  function Od(e, t) {
    const n = e.count, r = e.count + t;
    return e.count = r, n === 0 && r !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((s) => e.resolve = s)) : n !== 0 && r === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
  }
  function ic(e, t) {
    return (n) => {
      for (const r in e) {
        const s = e[r];
        s.condition(n.payload) && Od(s, t);
      }
    };
  }
  function oc(e, t, n, r = !1) {
    for (const s in t) {
      const i = t[s].condition;
      r || n.ledger.count(s, i);
      const o = n.ledger.value(s) * (r ? -1 : 1);
      if (e)
        do
          e.ledger.count(s, i, o), e = e.parent;
        while (e);
    }
  }
  const Ll = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Al = yd(), dO = [];
  function pO(e) {
    e.props.id && (Ll.set(e.props.id, e), xi.set(e, e.props.id), Al(e, {
      payload: e,
      name: e.props.id,
      bubble: !1,
      origin: e
    }));
  }
  function hO(e) {
    if (xi.has(e)) {
      const t = xi.get(e);
      xi.delete(e), Ll.delete(t), Al(e, {
        payload: null,
        name: t,
        bubble: !1,
        origin: e
      });
    }
  }
  function Gs(e) {
    return Ll.get(e);
  }
  function mO(e, t) {
    dO.push(Al.on(e, t));
  }
  function Wa(e, t, n) {
    let r = !0;
    return t in e.config._t ? r = !1 : e.emit(`config:${t}`, n, !1), t in e.props || (e.emit("prop", { prop: t, value: n }), e.emit(`prop:${t}`, n)), r;
  }
  function yO(e = {}) {
    const t = /* @__PURE__ */ new Set(), n = {
      ...e,
      _add: (s) => t.add(s),
      _rm: (s) => t.delete(s)
    };
    return new Proxy(n, {
      set(s, i, o, a) {
        return typeof i == "string" && t.forEach((l) => Wa(l, i, o)), Reflect.set(s, i, o, a);
      }
    });
  }
  function xd(e) {
    const t = document.getElementById(e);
    if (t instanceof HTMLFormElement) {
      const n = new Event("submit", { cancelable: !0, bubbles: !0 });
      t.dispatchEvent(n);
      return;
    }
    Or(151, e);
  }
  function bO(e) {
    const t = (n) => {
      for (const r in n.store) {
        const s = n.store[r];
        s.type === "error" || s.type === "ui" && r === "incomplete" ? n.store.remove(r) : s.type === "state" && n.store.set({ ...s, value: !1 });
      }
    };
    t(e), e.walk(t);
  }
  function Vd(e, t) {
    const n = typeof e == "string" ? Gs(e) : e;
    if (n) {
      const r = (i) => Yt(i.props.initial) || (i.type === "group" ? {} : i.type === "list" ? [] : void 0);
      n._e.pause(n), n.input(Yt(t) || r(n), !1), n.walk((i) => i.input(r(i), !1));
      const s = r(n);
      return n.input(typeof s == "object" ? Yt(t) || Us(s) : s, !1), n._e.play(n), bO(n), n.emit("reset", n), n;
    }
    Or(152, e);
  }
  const vO = {
    delimiter: ".",
    delay: 0,
    locale: "en",
    rootClasses: (e) => ({ [`formkit-${md(e)}`]: !0 })
  }, Ld = Symbol("index"), Na = Symbol("removed"), qa = Symbol("moved"), Ad = Symbol("inserted");
  function OO(e) {
    return e.type === "list" && Array.isArray(e._value);
  }
  function Bs(e) {
    return e && typeof e == "object" && e.__FKNode__ === !0;
  }
  const Vi = (e, t, n) => {
    vt(102, [e, n]);
  }, xO = {
    _c: be(kO, Vi, !1),
    add: be(TO),
    addProps: be(zO),
    address: be(KO, Vi, !1),
    at: be(XO),
    bubble: be(Qv),
    clearErrors: be(_O),
    calm: be(RO),
    config: be(!1),
    define: be(MO),
    disturb: be(qO),
    destroy: be(FO),
    hydrate: be(NO),
    index: be(HO, UO, !1),
    input: be(gd),
    each: be(SO),
    emit: be(Bv),
    find: be(IO),
    on: be(_v),
    off: be($v),
    parent: be(!1, EO),
    plugins: be(!1),
    remove: be(jO),
    root: be(JO, Vi, !1),
    reset: be(QO),
    resetConfig: be(PO),
    setErrors: be(qd),
    submit: be(BO),
    t: be(GO),
    use: be(wl),
    name: be(ZO, !1, !1),
    walk: be(YO)
  };
  function VO() {
    return new Map(Object.entries(xO));
  }
  function be(e, t, n = !0) {
    return {
      get: e ? (r, s) => n ? (...i) => e(r, s, ...i) : e(r, s) : !1,
      set: t !== void 0 ? t : Vi.bind(null)
    };
  }
  function LO() {
    const e = /* @__PURE__ */ new Map();
    return new Proxy(e, {
      get(t, n) {
        return e.has(n) || e.set(n, Ol()), e.get(n);
      }
    });
  }
  let AO = 0, wO = 0;
  function gO(e) {
    var t, n;
    return ((t = e.parent) === null || t === void 0 ? void 0 : t.type) === "list" ? Ld : e.name || `${((n = e.props) === null || n === void 0 ? void 0 : n.type) || "input"}_${++AO}`;
  }
  function wd(e) {
    return e.type === "group" ? Us(e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}) : e.type === "list" ? Us(Array.isArray(e.value) ? e.value : []) : e.value;
  }
  function gd(e, t, n, r = !0) {
    return t._value = WO(e, e.hook.input.dispatch(n)), e.emit("input", t._value), t.isSettled && e.disturb(), r ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(Ki, e.props.delay, e, t)) : Ki(e, t), t.settled;
  }
  function WO(e, t) {
    switch (e.type) {
      case "input":
        break;
      case "group":
        (!t || typeof t != "object") && vt(107, [e, t]);
        break;
      case "list":
        Array.isArray(t) || vt(108, [e, t]);
        break;
    }
    return t;
  }
  function Ki(e, t, n = !0, r = !0) {
    t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && r && e.hydrate(), e.emit("commit", t.value), n && e.calm();
  }
  function Wd(e, { name: t, value: n, from: r }) {
    if (!Object.isFrozen(e._value)) {
      if (OO(e)) {
        const s = n === Na ? [] : n === qa && typeof r == "number" ? e._value.splice(r, 1) : [n];
        e._value.splice(t, n === qa || r === Ad ? 0 : 1, ...s);
        return;
      }
      n !== Na ? e._value[t] = n : delete e._value[t];
    }
  }
  function NO(e, t) {
    const n = t._value;
    return t.children.forEach((r) => {
      if (typeof n == "object")
        if (r.name in n) {
          const s = r.type !== "input" || n[r.name] && typeof n[r.name] == "object" ? Us(n[r.name]) : n[r.name];
          r.input(s, !1);
        } else
          (e.type !== "list" || typeof r.name == "number") && Wd(t, { name: r.name, value: r.value }), n.__init || (r.type === "group" ? r.input({}, !1) : r.type === "list" ? r.input([], !1) : r.input(void 0, !1));
    }), e;
  }
  function qO(e, t) {
    var n;
    return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise((r) => {
      t._resolve = r;
    }), e.parent && ((n = e.parent) === null || n === void 0 || n.disturb())), t._d++, e;
  }
  function RO(e, t, n) {
    var r;
    if (n !== void 0 && e.type !== "input")
      return Wd(t, n), Ki(e, t, !0, !1);
    t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((r = e.parent) === null || r === void 0 || r.calm({ name: e.name, value: t.value })), t._resolve && t._resolve(t.value));
  }
  function FO(e, t) {
    e.emit("destroying", e), e.store.filter(() => !1), e.parent && (e.parent.emit("childRemoved", e), e.parent.remove(e)), hO(e), t._value = t.value = void 0, e.emit("destroyed", e);
  }
  function MO(e, t, n) {
    t.type = n.type, t.props.definition = Gr(n), t.value = t._value = wd({
      type: e.type,
      value: t.value
    }), n.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = n.forceTypeProp), n.family && (t.props.family = n.family), n.features && n.features.forEach((r) => r(e)), n.props && e.addProps(n.props), e.emit("defined", n);
  }
  function zO(e, t, n) {
    var r;
    if (e.props.attrs) {
      const s = { ...e.props.attrs };
      e.props._emit = !1;
      for (const o in s) {
        const a = Hr(o);
        n.includes(a) && (e.props[a] = s[o], delete s[o]);
      }
      const i = Yt(t._value);
      e.props.initial = e.type !== "input" ? Us(i) : i, e.props._emit = !0, e.props.attrs = s, e.props.definition && (e.props.definition.props = [
        ...((r = e.props.definition) === null || r === void 0 ? void 0 : r.props) || [],
        ...n
      ]);
    }
    return e.emit("added-props", n), e;
  }
  function TO(e, t, n, r) {
    if (e.type === "input" && vt(100, e), n.parent && n.parent !== e && n.parent.remove(n), t.children.includes(n) || (r !== void 0 && e.type === "list" ? (t.children.splice(r, 0, n), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
      name: r,
      value: n.value,
      from: Ad
    })) : t.children.push(n), n.isSettled || e.disturb()), n.parent !== e) {
      if (n.parent = e, n.parent !== e)
        return e.remove(n), n.parent.add(n), e;
    } else
      n.use(e.plugins);
    return Ki(e, t, !1), e.ledger.merge(n), e.emit("child", n), e;
  }
  function EO(e, t, n, r) {
    return Bs(r) ? (e.parent && e.parent !== r && e.parent.remove(e), t.parent = r, e.resetConfig(), r.children.includes(e) ? e.use(r.plugins) : r.add(e), !0) : r === null ? (t.parent = null, !0) : !1;
  }
  function jO(e, t, n) {
    const r = t.children.indexOf(n);
    if (r !== -1) {
      n.isSettled && e.disturb(), t.children.splice(r, 1);
      let s = Pt(n.props.preserve), i = n.parent;
      for (; s === void 0 && i; )
        s = Pt(i.props.preserve), i = i.parent;
      s ? e.calm() : e.calm({
        name: e.type === "list" ? r : n.name,
        value: Na
      }), n.parent = null, n.config._rmn = n;
    }
    return e.ledger.unmerge(n), e;
  }
  function SO(e, t, n) {
    t.children.forEach((r) => n(r));
  }
  function YO(e, t, n, r = !1) {
    t.children.forEach((s) => {
      (n(s) !== !1 || !r) && s.walk(n, r);
    });
  }
  function PO(e, t) {
    const n = e.parent || void 0;
    t.config = Nd(e.config._t, n), e.walk((r) => r.resetConfig());
  }
  function wl(e, t, n, r = !0, s = !0) {
    return Array.isArray(n) || n instanceof Set ? (n.forEach((i) => wl(e, t, i)), e) : (t.plugins.has(n) || (s && typeof n.library == "function" && n.library(e), r && n(e) !== !1 && (t.plugins.add(n), e.children.forEach((i) => i.use(n)))), e);
  }
  function UO(e, t, n, r) {
    if (Bs(e.parent)) {
      const s = e.parent.children, i = r >= s.length ? s.length - 1 : r < 0 ? 0 : r, o = s.indexOf(e);
      return o === -1 ? !1 : (s.splice(o, 1), s.splice(i, 0, e), e.parent.children = s, e.parent.type === "list" && e.parent.disturb().calm({ name: i, value: qa, from: o }), !0);
    }
    return !1;
  }
  function HO(e) {
    if (e.parent) {
      const t = [...e.parent.children].indexOf(e);
      return t === -1 ? e.parent.children.length : t;
    }
    return -1;
  }
  function kO(e, t) {
    return t;
  }
  function ZO(e, t) {
    var n;
    return ((n = e.parent) === null || n === void 0 ? void 0 : n.type) === "list" ? e.index : t.name !== Ld ? t.name : e.index;
  }
  function KO(e, t) {
    return t.parent ? t.parent.address.concat([e.name]) : [e.name];
  }
  function XO(e, t, n) {
    const r = typeof n == "string" ? n.split(e.config.delimiter) : n;
    if (!r.length)
      return;
    const s = r[0];
    let i = e.parent;
    for (i || (String(r[0]) === String(e.name) && r.shift(), i = e), s === "$parent" && r.shift(); i && r.length; ) {
      const o = r.shift();
      switch (o) {
        case "$root":
          i = e.root;
          break;
        case "$parent":
          i = i.parent;
          break;
        case "$self":
          i = e;
          break;
        default:
          i = i.children.find((a) => String(a.name) === String(o)) || DO(i, o);
      }
    }
    return i || void 0;
  }
  function DO(e, t) {
    const n = String(t).match(/^(find)\((.*)\)$/);
    if (n) {
      const [, r, s] = n, i = s.split(",").map((o) => o.trim());
      switch (r) {
        case "find":
          return e.find(i[0], i[1]);
        default:
          return;
      }
    }
  }
  function IO(e, t, n, r) {
    return CO(e, n, r);
  }
  function CO(e, t, n = "name") {
    const r = typeof n == "string" ? (i) => i[n] == t : n, s = [e];
    for (; s.length; ) {
      const i = s.shift();
      if (r(i, t))
        return i;
      s.push(...i.children);
    }
  }
  function JO(e) {
    let t = e;
    for (; t.parent; )
      t = t.parent;
    return t;
  }
  function Nd(e = {}, t) {
    let n;
    return new Proxy(e, {
      get(...r) {
        const s = r[1];
        if (s === "_t")
          return e;
        const i = Reflect.get(...r);
        if (i !== void 0)
          return i;
        if (t) {
          const o = t.config[s];
          if (o !== void 0)
            return o;
        }
        if (e.rootConfig && typeof s == "string") {
          const o = e.rootConfig[s];
          if (o !== void 0)
            return o;
        }
        return s === "delay" && (n == null ? void 0 : n.type) === "input" ? 20 : vO[s];
      },
      set(...r) {
        const s = r[1], i = r[2];
        if (s === "_n")
          return n = i, e.rootConfig && e.rootConfig._add(n), !0;
        if (s === "_rmn")
          return e.rootConfig && e.rootConfig._rm(n), n = void 0, !0;
        if (!Nt(e[s], i, !1)) {
          const o = Reflect.set(...r);
          return n && (n.emit(`config:${s}`, i, !1), Wa(n, s, i), n.walk((a) => Wa(a, s, i), !0)), o;
        }
        return !0;
      }
    });
  }
  function GO(e, t, n, r = "ui") {
    const s = typeof n == "string" ? { key: n, value: n, type: r } : n, i = e.hook.text.dispatch(s);
    return e.emit("text", i, !1), i.value;
  }
  function BO(e) {
    const t = e.name;
    do {
      if (e.props.isForm === !0)
        break;
      e.parent || vt(106, t), e = e.parent;
    } while (e);
    e.props.id && xd(e.props.id);
  }
  function QO(e, t, n) {
    return Vd(e, n);
  }
  function qd(e, t, n, r) {
    const s = `${e.name}-set`, i = e.hook.setErrors.dispatch({ localErrors: n, childErrors: r });
    return oO(e, i.localErrors, i.childErrors).forEach((o) => {
      e.store.apply(o, (a) => a.meta.source === s);
    }), e;
  }
  function _O(e, t, n = !0, r) {
    return qd(e, t, []), n && (r = r || `${e.name}-set`, e.walk((s) => {
      s.store.filter((i) => !(i.type === "error" && i.meta && i.meta.source === r));
    })), e;
  }
  function $O(e) {
    return ae(e.props, "id") || (e.props.id = `input_${wO++}`), e;
  }
  function ex(e) {
    const t = {
      initial: typeof e == "object" ? Yt(e) : e
    };
    let n, r = !0;
    return new Proxy(t, {
      get(...s) {
        const [i, o] = s;
        if (ae(t, o))
          return Reflect.get(...s);
        if (n && typeof o == "string" && n.config[o] !== void 0)
          return n.config[o];
      },
      set(s, i, o, a) {
        if (i === "_n")
          return n = o, !0;
        if (i === "_emit")
          return r = o, !0;
        const { prop: l, value: f } = n.hook.prop.dispatch({
          prop: i,
          value: o
        });
        if (!Nt(t[l], f, !1) || typeof f == "object") {
          const c = Reflect.set(s, l, f, a);
          return r && (n.emit("prop", { prop: l, value: f }), typeof l == "string" && n.emit(`prop:${l}`, f)), c;
        }
        return !0;
      }
    });
  }
  function tx(e, t) {
    if (e.props.definition)
      return e.define(e.props.definition);
    for (const n of t) {
      if (e.props.definition)
        return;
      typeof n.library == "function" && n.library(e);
    }
  }
  function nx(e) {
    const t = wd(e), n = Nd(e.config || {}, e.parent);
    return {
      _d: 0,
      _e: yd(),
      _resolve: !1,
      _tmo: !1,
      _value: t,
      children: Zv(e.children || []),
      config: n,
      hook: LO(),
      isCreated: !1,
      isSettled: !0,
      ledger: uO(),
      name: gO(e),
      parent: e.parent || null,
      plugins: /* @__PURE__ */ new Set(),
      props: ex(t),
      settled: Promise.resolve(t),
      store: eO(!0),
      traps: VO(),
      type: e.type || "input",
      value: t
    };
  }
  function rx(e, t) {
    var n;
    if (e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, t.props && Object.assign(e.props, t.props), e.props._emit = !0, tx(e, /* @__PURE__ */ new Set([
      ...t.plugins || [],
      ...e.parent ? e.parent.plugins : []
    ])), t.plugins)
      for (const r of t.plugins)
        wl(e, e._c, r, !0, !1);
    return $O(e), e.each((r) => e.add(r)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && vt(100, e), gd(e, e._c, e._value, !1), e.store.release(), !((n = t.props) === null || n === void 0) && n.id && pO(e), e.emit("created", e), e.isCreated = !0, e;
  }
  function sx(e) {
    const t = e || {}, n = nx(t), r = new Proxy(n, {
      get(...s) {
        const [, i] = s;
        if (i === "__FKNode__")
          return !0;
        const o = n.traps.get(i);
        return o && o.get ? o.get(r, n) : Reflect.get(...s);
      },
      set(...s) {
        const [, i, o] = s, a = n.traps.get(i);
        return a && a.set ? a.set(r, n, i, o) : Reflect.set(...s);
      }
    });
    return rx(r, t);
  }
  function Ra(e) {
    return typeof e != "string" && ae(e, "$el");
  }
  function Fa(e) {
    return typeof e != "string" && ae(e, "$cmp");
  }
  function Fr(e) {
    return !e || typeof e == "string" ? !1 : ae(e, "if") && ae(e, "then");
  }
  function ix(e) {
    return typeof e != "string" && "$formkit" in e;
  }
  function ox(e) {
    if (typeof e == "string")
      return {
        $el: "text",
        children: e
      };
    if (ix(e)) {
      const { $formkit: t, for: n, if: r, children: s, bind: i, ...o } = e;
      return Object.assign({
        $cmp: "FormKit",
        props: { ...o, type: t }
      }, r ? { if: r } : {}, n ? { for: n } : {}, s ? { children: s } : {}, i ? { bind: i } : {});
    }
    return e;
  }
  function zt(e) {
    let t;
    const n = /* @__PURE__ */ new Set(), r = function(v, b) {
      return typeof v == "function" ? v(b) : v;
    }, s = [
      {
        "&&": (O, v, b) => r(O, b) && r(v, b),
        "||": (O, v, b) => r(O, b) || r(v, b)
      },
      {
        "===": (O, v, b) => r(O, b) === r(v, b),
        "!==": (O, v, b) => r(O, b) !== r(v, b),
        "==": (O, v, b) => r(O, b) == r(v, b),
        "!=": (O, v, b) => r(O, b) != r(v, b),
        ">=": (O, v, b) => r(O, b) >= r(v, b),
        "<=": (O, v, b) => r(O, b) <= r(v, b),
        ">": (O, v, b) => r(O, b) > r(v, b),
        "<": (O, v, b) => r(O, b) < r(v, b)
      },
      {
        "+": (O, v, b) => r(O, b) + r(v, b),
        "-": (O, v, b) => r(O, b) - r(v, b)
      },
      {
        "*": (O, v, b) => r(O, b) * r(v, b),
        "/": (O, v, b) => r(O, b) / r(v, b),
        "%": (O, v, b) => r(O, b) % r(v, b)
      }
    ], i = s.reduce((O, v) => O.concat(Object.keys(v)), []), o = new Set(i.map((O) => O.charAt(0)));
    function a(O, v, b, A) {
      const j = O.filter((V) => V.startsWith(v));
      return j.length ? j.find((V) => A.length >= b + V.length && A.substring(b, b + V.length) === V ? V : !1) : !1;
    }
    function l(O, v, b = 1) {
      let A = b ? v.substring(O + 1).trim() : v.substring(0, O).trim();
      if (!A.length)
        return -1;
      if (!b) {
        const V = A.split("").reverse(), w = V.findIndex((M) => o.has(M));
        A = V.slice(w).join("");
      }
      const j = A[0];
      return s.findIndex((V) => {
        const w = Object.keys(V);
        return !!a(w, j, 0, A);
      });
    }
    function f(O, v) {
      let b = "";
      const A = v.length;
      let j = 0;
      for (let V = O; V < A; V++) {
        const w = v.charAt(V);
        if (w === "(")
          j++;
        else if (w === ")")
          j--;
        else if (j === 0 && w === " ")
          continue;
        if (j === 0 && a(i, w, V, v))
          return [b, V - 1];
        b += w;
      }
      return [b, v.length - 1];
    }
    function c(O, v = 0) {
      const b = s[v], A = O.length, j = Object.keys(b);
      let V = 0, w = !1, M = null, y = "", E = null, g, q = "", Z = "", X = "", ye = "", Ye = 0;
      const Ae = (_, D) => {
        _ ? X += D : y += D;
      };
      for (let _ = 0; _ < A; _++)
        if (q = Z, Z = O.charAt(_), (Z === "'" || Z === '"') && q !== "\\" && (V === 0 && !w || V && !ye)) {
          V ? ye = Z : w = Z, Ae(V, Z);
          continue;
        } else if (w && (Z !== w || q === "\\") || ye && (Z !== ye || q === "\\")) {
          Ae(V, Z);
          continue;
        } else if (w === Z) {
          w = !1, Ae(V, Z);
          continue;
        } else if (ye === Z) {
          ye = !1, Ae(V, Z);
          continue;
        } else {
          if (Z === " ")
            continue;
          if (Z === "(")
            V === 0 ? Ye = _ : X += Z, V++;
          else if (Z === ")")
            if (V--, V === 0) {
              const D = typeof y == "string" && y.startsWith("$") ? y : void 0, le = D && O.charAt(_ + 1) === ".";
              let ke = "";
              le && ([ke, _] = f(_ + 2, O));
              const Ft = M ? v : l(Ye, O, 0), rt = l(_, O);
              Ft === -1 && rt === -1 ? y = u(X, -1, D, ke) : M && (Ft >= rt || rt === -1) && v === Ft ? (E = M.bind(null, u(X, -1, D, ke)), M = null, y = "") : rt > Ft && v === rt ? y = u(X, -1, D, ke) : y += `(${X})${le ? `.${ke}` : ""}`, X = "";
            } else
              X += Z;
          else if (V === 0 && (g = a(j, Z, _, O))) {
            _ === 0 && vt(103, [g, O]), _ += g.length - 1, _ === O.length - 1 && vt(104, [g, O]), M ? y && (E = M.bind(null, u(y, v)), M = b[g].bind(null, E), y = "") : E ? (M = b[g].bind(null, u(E, v)), E = null) : (M = b[g].bind(null, u(y, v)), y = "");
            continue;
          } else
            Ae(V, Z);
        }
      return y && M && (M = M.bind(null, u(y, v))), M = !M && E ? E : M, !M && y && (M = (_, D) => typeof _ == "function" ? _(D) : _, M = M.bind(null, u(y, v))), !M && !y && vt(105, O), M;
    }
    function u(O, v, b, A) {
      if (b) {
        const j = u(b, s.length);
        let V, w = A ? zt(`$${A}`) : !1;
        if (typeof j == "function") {
          const M = Cv(String(O)).map((y) => u(y, -1));
          return (y) => {
            const E = j(y);
            return typeof E != "function" ? (Or(150, b), E) : (V = E(...M.map((g) => typeof g == "function" ? g(y) : g)), w && (w = w.provide((g) => {
              const q = t(g);
              return g.reduce((X, ye) => {
                if (ye === A || (A == null ? void 0 : A.startsWith(`${ye}(`))) {
                  const Ae = Jv(V, ye);
                  X[ye] = () => Ae;
                } else
                  X[ye] = q[ye];
                return X;
              }, {});
            })), w ? w() : V);
          };
        }
      } else if (typeof O == "string") {
        if (O === "true")
          return !0;
        if (O === "false")
          return !1;
        if (O === "undefined")
          return;
        if (Dv(O))
          return Iv(O.substring(1, O.length - 1));
        if (!isNaN(+O))
          return Number(O);
        if (v < s.length - 1)
          return c(O, v + 1);
        if (O.startsWith("$")) {
          const j = O.substring(1);
          return n.add(j), function(w) {
            return j in w ? w[j]() : void 0;
          };
        }
        return O;
      }
      return O;
    }
    const d = c(e.startsWith("$:") ? e.substring(2) : e), m = Array.from(n);
    function L(O) {
      return t = O, Object.assign(d.bind(null, O(m)), {
        provide: L
      });
    }
    return Object.assign(d, {
      provide: L
    });
  }
  function Li(e, t, n) {
    return n ? typeof n == "string" ? n.split(" ").reduce((s, i) => Object.assign(s, { [i]: !0 }), {}) : typeof n == "function" ? Li(e, t, n(t, e)) : n : {};
  }
  function ax(e, t, ...n) {
    const r = n.reduce((s, i) => {
      if (!i)
        return Do(s);
      const { $reset: o, ...a } = i;
      return Do(o ? a : Object.assign(s, a));
    }, {});
    return Object.keys(e.hook.classes.dispatch({ property: t, classes: r }).classes).filter((s) => r[s]).join(" ") || null;
  }
  function Do(e) {
    const t = "$remove:";
    let n = !1;
    const r = Object.keys(e).filter((s) => (e[s] && s.startsWith(t) && (n = !0), e[s]));
    return r.length > 1 && n && r.filter((i) => i.startsWith(t)).map((i) => {
      const o = i.substring(t.length);
      e[o] = !1, e[i] = !1;
    }), e;
  }
  function lx(e, t, n) {
    const r = Gs(e);
    r ? r.setErrors(t, n) : Or(651, e);
  }
  function ux(e, t = !0) {
    const n = Gs(e);
    n ? n.clearErrors(t) : Or(652, e);
  }
  const Xi = "0.16.4";
  function cx(...e) {
    const t = e.reduce((r, s) => mr(r, s), {}), n = () => {
    };
    return n.library = function(r) {
      const s = Hr(r.props.type);
      ae(t, s) && r.define(t[s]);
    }, n;
  }
  function fx(e) {
    let t = 1;
    return Array.isArray(e) ? e.map((n) => typeof n == "string" || typeof n == "number" ? {
      label: String(n),
      value: String(n)
    } : (typeof n == "object" && "value" in n && typeof n.value != "string" && Object.assign(n, {
      value: `__mask_${t++}`,
      __original: n.value
    }), n)) : Object.keys(e).map((n) => ({
      label: e[n],
      value: n
    }));
  }
  function Br(e, t) {
    if (Array.isArray(e)) {
      for (const n of e)
        if (t == n.value)
          return "__original" in n ? n.__original : n.value;
    }
    return t;
  }
  function Qr(e, t) {
    return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : hr(e) && hr(t) ? Nt(e, t) : !1;
  }
  function gl(e) {
    e.hook.prop((t, n) => (t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : t.value = fx(t.value)), n(t)));
  }
  const xr = fe("outer", () => ({
    $el: "div",
    attrs: {
      key: "$id",
      "data-family": "$family || undefined",
      "data-type": "$type",
      "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
      "data-disabled": "$disabled || undefined",
      "data-complete": "$state.complete || undefined",
      "data-invalid": "$state.valid === false && $state.validationVisible || undefined",
      "data-errors": "$state.errors || undefined",
      "data-submitted": "$state.submitted || undefined",
      "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
      "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
      "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
      "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
    }
  }), !0), Xn = fe("inner", "div"), Qs = fe("wrapper", "div"), Vo = fe("label", () => ({
    $el: "label",
    if: "$label",
    attrs: {
      for: "$id"
    }
  })), In = fe("messages", () => ({
    $el: "ul",
    if: "$defaultMessagePlacement && $fns.length($messages)"
  })), Cn = fe("message", () => ({
    $el: "li",
    for: ["message", "$messages"],
    attrs: {
      key: "$message.key",
      id: "$id + '-' + $message.key",
      "data-message-type": "$message.type"
    }
  })), Ln = fe("prefix", null), An = fe("suffix", null), wn = fe("help", () => ({
    $el: "div",
    if: "$help",
    attrs: {
      id: '$: "help-" + $id'
    }
  })), Rd = fe("fieldset", () => ({
    $el: "fieldset",
    attrs: {
      id: "$id",
      "aria-describedby": {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  })), Di = fe("decorator", () => ({
    $el: "span",
    attrs: {
      "aria-hidden": "true"
    }
  })), Ii = fe("input", () => ({
    $el: "input",
    bind: "$attrs",
    attrs: {
      type: "$type",
      name: "$node.props.altName || $node.name",
      disabled: "$option.attrs.disabled || $disabled",
      onInput: "$handlers.toggleChecked",
      checked: "$fns.eq($_value, $onValue)",
      onBlur: "$handlers.blur",
      value: "$: true",
      id: "$id",
      "aria-describedby": {
        if: "$options.length",
        then: {
          if: "$option.help",
          then: '$: "help-" + $option.attrs.id',
          else: void 0
        },
        else: {
          if: "$help",
          then: '$: "help-" + $id',
          else: void 0
        }
      }
    }
  })), Fd = fe("legend", () => ({
    $el: "legend",
    if: "$label"
  })), Md = fe("option", () => ({
    $el: "li",
    for: ["option", "$options"],
    attrs: {
      "data-disabled": "$option.attrs.disabled || $disabled"
    }
  })), zd = fe("options", "ul"), Ci = fe("wrapper", () => ({
    $el: "label",
    attrs: {
      "data-disabled": {
        if: "$options.length",
        then: void 0,
        else: "$disabled || undefined"
      },
      "data-checked": {
        if: "$options == undefined",
        then: "$fns.eq($_value, $onValue) || undefined",
        else: "$fns.isChecked($option.value) || undefined"
      }
    }
  })), Td = fe("optionHelp", () => ({
    $el: "div",
    if: "$option.help",
    attrs: {
      id: '$: "help-" + $option.attrs.id'
    }
  })), Ji = fe("label", "span"), dx = fe("input", () => ({
    $el: "button",
    bind: "$attrs",
    attrs: {
      type: "$type",
      disabled: "$disabled",
      name: "$node.name",
      id: "$id"
    }
  })), px = fe("default", null), hx = fe("input", () => ({
    $el: "input",
    bind: "$attrs",
    attrs: {
      type: "file",
      disabled: "$disabled",
      name: "$node.name",
      onChange: "$handlers.files",
      onBlur: "$handlers.blur",
      id: "$id",
      "aria-describedby": "$describedBy"
    }
  })), mx = fe("fileItem", () => ({
    $el: "li",
    for: ["file", "$value"]
  })), yx = fe("fileList", () => ({
    $el: "ul",
    if: "$value.length",
    attrs: {
      "data-has-multiple": {
        if: "$value.length > 1",
        then: "true"
      }
    }
  })), bx = fe("fileName", () => ({
    $el: "span",
    attrs: {
      class: "$classes.fileName"
    }
  })), ac = fe("fileRemove", () => ({
    $el: "button",
    attrs: {
      onClick: "$handlers.resetFiles"
    }
  })), vx = fe("noFiles", () => ({
    $el: "span",
    if: "$value.length == 0"
  })), Ox = fe("form", () => ({
    $el: "form",
    bind: "$attrs",
    attrs: {
      id: "$id",
      name: "$node.name",
      onSubmit: "$handlers.submit",
      "data-loading": "$state.loading || undefined"
    }
  }), !0), xx = fe("actions", () => ({
    $el: "div",
    if: "$actions"
  })), Vx = fe("submit", () => ({
    $cmp: "FormKit",
    bind: "$submitAttrs",
    props: {
      type: "submit",
      disabled: "$disabled",
      label: "$submitLabel"
    }
  })), Ed = fe("input", () => ({
    $el: "input",
    bind: "$attrs",
    attrs: {
      type: "$type",
      disabled: "$disabled",
      name: "$node.name",
      onInput: "$handlers.DOMInput",
      onBlur: "$handlers.blur",
      value: "$_value",
      id: "$id",
      "aria-describedby": "$describedBy"
    }
  })), jd = fe("wrapper", null, !0), Lx = fe("input", () => ({
    $el: "select",
    bind: "$attrs",
    attrs: {
      id: "$id",
      "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
      disabled: "$disabled",
      class: "$classes.input",
      name: "$node.name",
      onChange: "$handlers.onChange",
      onInput: "$handlers.selectInput",
      onBlur: "$handlers.blur",
      "aria-describedby": "$describedBy"
    }
  })), Ax = fe("option", () => ({
    $el: "option",
    for: ["option", "$options"],
    bind: "$option.attrs",
    attrs: {
      class: "$classes.option",
      value: "$option.value",
      selected: "$fns.isSelected($option)"
    }
  })), wx = () => ({
    $el: null,
    if: "$options.length",
    for: ["option", "$options"],
    children: "$slots.option"
  }), gx = fe("input", () => ({
    $el: "textarea",
    bind: "$attrs",
    attrs: {
      disabled: "$disabled",
      name: "$node.name",
      onInput: "$handlers.DOMInput",
      onBlur: "$handlers.blur",
      value: "$_value",
      id: "$id",
      "aria-describedby": "$describedBy"
    },
    children: "$initialValue"
  })), Ce = (e, t) => fe(`${e}Icon`, () => {
    const n = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
    return {
      if: `$${e}Icon && $${n}`,
      $el: `${t || "span"}`,
      attrs: {
        class: `$classes.${e}Icon + " formkit-icon"`,
        innerHTML: `$${n}`,
        onClick: `$handlers.iconClick(${e})`,
        for: {
          if: `${t === "label"}`,
          then: "$id"
        }
      }
    };
  })();
  function Sd(e) {
    return function(t, n) {
      return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map((r) => {
        var s;
        return !((s = r.attrs) === null || s === void 0) && s.id ? r : mr(r, {
          attrs: {
            id: `${e.name}-option-${vl(String(r.value))}`
          }
        });
      }), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
        Array.isArray(e.value) || e.input([], !1);
      }))), n(t);
    };
  }
  function Wx(e, t) {
    const n = t.target;
    if (n instanceof HTMLInputElement) {
      const r = Array.isArray(e.props.options) ? Br(e.props.options, n.value) : n.value;
      Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((s) => Qr(r, s)) ? e.input(e._value.filter((s) => !Qr(r, s))) : e.input([...e._value, r]) : e.input([r]) : n.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
    }
  }
  function Nx(e, t) {
    var n, r;
    return (n = e.context) === null || n === void 0 || n.value, (r = e.context) === null || r === void 0 || r._value, Array.isArray(e._value) ? e._value.some((s) => Qr(Br(e.props.options, t), s)) : !1;
  }
  function qx(e) {
    e.on("created", () => {
      var t, n;
      !((t = e.context) === null || t === void 0) && t.handlers && (e.context.handlers.toggleChecked = Wx.bind(null, e)), !((n = e.context) === null || n === void 0) && n.fns && (e.context.fns.isChecked = Nx.bind(null, e)), ae(e.props, "onValue") || (e.props.onValue = !0), ae(e.props, "offValue") || (e.props.offValue = !1);
    }), e.hook.prop(Sd(e));
  }
  function Lo(e) {
    e.on("created", () => {
      e.props.disabled = Pt(e.props.disabled);
    }), e.hook.prop(({ prop: t, value: n }, r) => (n = t === "disabled" ? Pt(n) : n, r({ prop: t, value: n }))), e.on("prop:disabled", ({ payload: t }) => {
      e.config.disabled = Pt(t);
    }), e.on("created", () => {
      e.config.disabled = Pt(e.props.disabled);
    });
  }
  function Ai(e, t) {
    return (n) => {
      n.store.set(Kt({
        key: e,
        type: "ui",
        value: t || e,
        meta: {
          localize: !0,
          i18nArgs: [n]
        }
      }));
    };
  }
  const lc = typeof window < "u";
  function Yd(e) {
    e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
  }
  function uc(e, t) {
    t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && Yd(t);
  }
  function Rx(e) {
    Ai("noFiles", "Select file")(e), Ai("removeAll", "Remove all")(e), Ai("remove")(e), lc && (window._FormKit_File_Drop || (window.addEventListener("dragover", uc.bind(null, "dragover")), window.addEventListener("drop", uc.bind(null, "drop")), window.addEventListener("dragleave", Yd), window._FormKit_File_Drop = !0)), e.hook.input((t, n) => n(Array.isArray(t) ? t : [])), e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (t) => {
        if (t.preventDefault(), e.input([]), e.props.id && lc) {
          const n = document.getElementById(e.props.id);
          n && (n.value = "");
        }
      }, e.context.handlers.files = (t) => {
        var n, r;
        const s = [];
        if (t.target instanceof HTMLInputElement && t.target.files) {
          for (let i = 0; i < t.target.files.length; i++) {
            let o;
            (o = t.target.files.item(i)) && s.push({ name: o.name, file: o });
          }
          e.input(s);
        }
        e.context && (e.context.files = s), typeof ((n = e.props.attrs) === null || n === void 0 ? void 0 : n.onChange) == "function" && ((r = e.props.attrs) === null || r === void 0 || r.onChange(t));
      });
    });
  }
  async function Fx(e, t) {
    t.preventDefault(), await e.settled;
    const n = (r) => r.store.set(Kt({
      key: "submitted",
      value: !0,
      visible: !1
    }));
    if (e.walk(n), n(e), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking"))
      typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && e.store.set(Kt({
        blocking: !1,
        key: "incomplete",
        meta: {
          localize: e.props.incompleteMessage === void 0,
          i18nArgs: [{ node: e }],
          showAsMessage: !0
        },
        type: "ui",
        value: e.props.incompleteMessage || "Form incomplete."
      }));
    else if (typeof e.props.onSubmit == "function") {
      const r = e.props.onSubmit(e.hook.submit.dispatch(Gr(e.value)), e);
      if (r instanceof Promise) {
        const s = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
        s && (e.props.disabled = !0), e.store.set(Kt({
          key: "loading",
          value: !0,
          visible: !1
        })), await r, s && (e.props.disabled = !1), e.store.remove("loading");
      }
    } else
      t.target instanceof HTMLFormElement && t.target.submit();
  }
  function Mx(e) {
    e.props.isForm = !0, e.on("created", () => {
      var t;
      !((t = e.context) === null || t === void 0) && t.handlers && (e.context.handlers.submit = Fx.bind(null, e)), ae(e.props, "actions") || (e.props.actions = !0);
    }), e.on("settled:blocking", () => e.store.remove("incomplete"));
  }
  function zx(e) {
    e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
  }
  function Tx(e) {
    e.on("created", () => {
      e.context && (e.context.initialValue = e.value || "");
    });
  }
  function Ex(e, t) {
    t.target instanceof HTMLInputElement && e.input(Br(e.props.options, t.target.value));
  }
  function jx(e, t) {
    var n, r;
    return (n = e.context) === null || n === void 0 || n.value, (r = e.context) === null || r === void 0 || r._value, Qr(Br(e.props.options, t), e._value);
  }
  function Sx(e) {
    e.on("created", () => {
      var t, n;
      Array.isArray(e.props.options) || Or(350, e), !((t = e.context) === null || t === void 0) && t.handlers && (e.context.handlers.toggleChecked = Ex.bind(null, e)), !((n = e.context) === null || n === void 0) && n.fns && (e.context.fns.isChecked = jx.bind(null, e));
    }), e.hook.prop(Sd(e));
  }
  function Yx(e, t) {
    e.context && e.context.value;
    const n = "__original" in t ? t.__original : t.value;
    function r() {
      return !e.props.options.some((s) => ("__original" in s ? s.__original : s.value) === null);
    }
    return Array.isArray(e._value) ? e._value.some((s) => Qr(s, n)) : (e._value === void 0 || e._value === null && r()) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : Qr(n, e._value);
  }
  async function Px(e, t) {
    var n;
    typeof ((n = e.props.attrs) === null || n === void 0 ? void 0 : n.onChange) == "function" && (await new Promise((r) => setTimeout(r, 0)), await e.settled, e.props.attrs.onChange(t));
  }
  function Ux(e, t) {
    const n = t.target, r = n.hasAttribute("multiple") ? Array.from(n.selectedOptions).map((s) => Br(e.props.options, s.value)) : Br(e.props.options, n.value);
    e.input(r);
  }
  function cc(e, t) {
    return e.some((n) => n.attrs && n.attrs["data-is-placeholder"]) ? e : [
      {
        label: t,
        value: "",
        attrs: {
          hidden: !0,
          disabled: !0,
          "data-is-placeholder": "true"
        }
      },
      ...e
    ];
  }
  function Hx(e) {
    e.on("created", () => {
      var t, n, r;
      const s = Pt((t = e.props.attrs) === null || t === void 0 ? void 0 : t.multiple);
      !s && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: i, value: o }, a) => (i === "options" && (o = cc(o, e.props.placeholder)), a({ prop: i, value: o }))), e.props.options = cc(e.props.options, e.props.placeholder)), s ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
        value: e._value
      }), e.on("input", ({ payload: i }) => {
        e.props.attrs = Object.assign({}, e.props.attrs, {
          value: i
        });
      })), !((n = e.context) === null || n === void 0) && n.handlers && (e.context.handlers.selectInput = Ux.bind(null, e), e.context.handlers.onChange = Px.bind(null, e)), !((r = e.context) === null || r === void 0) && r.fns && (e.context.fns.isSelected = Yx.bind(null, e), e.context.fns.showPlaceholder = (i, o) => {
        if (!Array.isArray(e.props.options))
          return !1;
        const a = e.props.options.some((l) => {
          if (l.attrs && "data-is-placeholder" in l.attrs)
            return !1;
          const f = "__original" in l ? l.__original : l.value;
          return Nt(i, f);
        });
        return o && !a ? !0 : void 0;
      });
    }), e.hook.input((t, n) => {
      var r, s, i;
      return !e.props.placeholder && t === void 0 && Array.isArray((r = e.props) === null || r === void 0 ? void 0 : r.options) && e.props.options.length && !Pt((i = (s = e.props) === null || s === void 0 ? void 0 : s.attrs) === null || i === void 0 ? void 0 : i.multiple) && (t = "__original" in e.props.options[0] ? e.props.options[0].__original : e.props.options[0].value), n(t);
    });
  }
  function kr(e, t) {
    return (n) => {
      n.props[`${e}Icon`] === void 0 && (n.props[`${e}Icon`] = `default:${t}`);
    };
  }
  function Gi(e) {
    return typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e);
  }
  function Ma(e) {
    return !!(Fr(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
  }
  function fs(e, t = {}) {
    return typeof e == "string" ? Gi(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Gi(t) ? t : e : mr(e, t);
  }
  function fe(e, t, n = !1) {
    return (...r) => {
      const s = (i) => {
        const o = !t || typeof t == "string" ? { $el: t } : t();
        return (Ra(o) || Fa(o)) && (o.meta || (o.meta = { section: e }), r.length && !o.children && (o.children = [
          ...r.map((a) => typeof a == "string" ? a : a(i))
        ]), Ra(o) && (o.attrs = {
          class: `$classes.${e}`,
          ...o.attrs || {}
        })), {
          if: `$slots.${e}`,
          then: `$slots.${e}`,
          else: e in i ? fs(o, i[e]) : o
        };
      };
      return s._s = e, n ? Pd(s) : s;
    };
  }
  function Pd(e) {
    return (t) => [e(t)];
  }
  function Ut(e, t, n) {
    const r = (s) => {
      const i = t(s);
      if (n || Gi(i) && "if" in i || Ma(i)) {
        const o = {
          if: e,
          then: i
        };
        return n && (o.else = n(s)), o;
      } else
        Ma(i) ? Object.assign(i.else, { if: e }) : Gi(i) && Object.assign(i, { if: e });
      return i;
    };
    return r._s = _r(), r;
  }
  function wi(e, t) {
    const n = (r) => {
      const s = e({});
      return Ma(s) ? (Array.isArray(s.else) || (s.else = fs(fs(s.else, t), e._s ? r[e._s] : {})), s) : fs(fs(s, t), e._s ? r[e._s] : {});
    };
    return n._s = e._s, n;
  }
  function kx(e) {
    return Pd(e);
  }
  const fc = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(In(Cn("$message.value")), Qs(dx(Ce("prefix"), Ln(), px("$label || $ui.submit.value"), An(), Ce("suffix"))), wn("$help")),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * The family of inputs this one belongs too. For example "text" and "email"
     * are both part of the "text" family. This is primary used for styling.
     */
    family: "button",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: [Ai("submit"), zx]
  }, Zx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(
      Ut(
        "$options == undefined",
        /**
         * Single checkbox structure.
         */
        Ci(Xn(Ln(), Ii(), Di(Ce("decorator")), An()), wi(Ji("$label"), {
          if: "$label"
        })),
        /**
         * Multi checkbox structure.
         */
        Rd(Fd("$label"), wn("$help"), zd(Md(Ci(Xn(Ln(), wi(Ii(), {
          bind: "$option.attrs",
          attrs: {
            id: "$option.attrs.id",
            value: "$option.value",
            checked: "$fns.isChecked($option.value)"
          }
        }), Di(Ce("decorator")), An()), wi(Ji("$option.label"), {
          if: "$option.label"
        })), Td("$option.help"))))
      ),
      // Help text only goes under the input when it is a single.
      Ut("$options == undefined && $help", wn("$help")),
      In(Cn("$message.value"))
    ),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * The family of inputs this one belongs too. For example "text" and "email"
     * are both part of the "text" family. This is primary used for styling.
     */
    family: "box",
    /**
     * An array of extra props to accept for this input.
     */
    props: ["options", "onValue", "offValue", "optionsLoader"],
    /**
     * Additional features that should be added to your input
     */
    features: [
      gl,
      qx,
      kr("decorator", "checkboxDecorator")
    ]
  }, Kx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(Qs(Vo("$label"), Xn(Ce("prefix", "label"), Ln(), hx(), yx(mx(Ce("fileItem"), bx("$file.name"), Ut("$value.length === 1", ac(Ce("fileRemove"), "$ui.remove.value")))), Ut("$value.length > 1", ac("$ui.removeAll.value")), vx(Ce("noFiles"), "$ui.noFiles.value"), An(), Ce("suffix"))), wn("$help"), In(Cn("$message.value"))),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * The family of inputs this one belongs too. For example "text" and "email"
     * are both part of the "text" family. This is primary used for styling.
     */
    family: "text",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: [
      Rx,
      kr("fileItem", "fileItem"),
      kr("fileRemove", "fileRemove"),
      kr("noFiles", "noFiles")
    ]
  }, Xx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: Ox("$slots.default", In(Cn("$message.value")), xx(Vx())),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "group",
    /**
     * An array of extra props to accept for this input.
     */
    props: [
      "actions",
      "submit",
      "submitLabel",
      "submitAttrs",
      "submitBehavior",
      "incompleteMessage"
    ],
    /**
     * Additional features that should be added to your input
     */
    features: [Mx, Lo]
  }, Dx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: jd("$slots.default"),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "group",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: [Lo]
  }, Ix = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: kx(Ed()),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: []
  }, Cx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: jd("$slots.default"),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "list",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: [Lo]
  }, Jx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(
      Ut(
        "$options == undefined",
        /**
         * Single radio structure.
         */
        Ci(Xn(Ln(), Ii(), Di(Ce("decorator")), An()), Ut("$label", Ji("$label"))),
        /**
         * Multi radio structure.
         */
        Rd(Fd("$label"), wn("$help"), zd(Md(Ci(Xn(Ln(), wi(Ii(), {
          bind: "$option.attrs",
          attrs: {
            id: "$option.attrs.id",
            value: "$option.value",
            checked: "$fns.isChecked($option.value)"
          }
        }), Di(Ce("decorator")), An()), Ut("$option.label", Ji("$option.label"))), Td("$option.help"))))
      ),
      // Help text only goes under the input when it is a single.
      Ut("$options === undefined && $help", wn("$help")),
      In(Cn("$message.value"))
    ),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * The family of inputs this one belongs too. For example "text" and "email"
     * are both part of the "text" family. This is primary used for styling.
     */
    family: "box",
    /**
     * An array of extra props to accept for this input.
     */
    props: ["options", "onValue", "offValue", "optionsLoader"],
    /**
     * Additional features that should be added to your input
     */
    features: [
      Lo,
      gl,
      Sx,
      kr("decorator", "radioDecorator")
    ]
  }, Gx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(Qs(Vo("$label"), Xn(Ce("prefix"), Ln(), Lx(Ut("$slots.default", () => "$slots.default", Ut("$slots.option", wx, Ax("$option.label")))), Ut("$attrs.multiple !== undefined", () => "", Ce("select")), An(), Ce("suffix"))), wn("$help"), In(Cn("$message.value"))),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * An array of extra props to accept for this input.
     */
    props: ["options", "placeholder", "optionsLoader"],
    /**
     * Additional features that should be added to your input
     */
    features: [gl, Hx, kr("select", "select")]
  }, Bx = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(Qs(Vo("$label"), Xn(Ce("prefix", "label"), Ln(), gx(), An(), Ce("suffix"))), wn("$help"), In(Cn("$message.value"))),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: [Tx]
  }, ut = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: xr(Qs(Vo("$label"), Xn(Ce("prefix", "label"), Ln(), Ed(), An(), Ce("suffix"))), wn("$help"), In(Cn("$message.value"))),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: "input",
    /**
     * The family of inputs this one belongs too. For example "text" and "email"
     * are both part of the "text" family. This is primary used for styling.
     */
    family: "text",
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that should be added to your input
     */
    features: []
  };
  var Qx = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    button: fc,
    submit: fc,
    checkbox: Zx,
    file: Kx,
    form: Xx,
    group: Dx,
    hidden: Ix,
    list: Cx,
    radio: Jx,
    select: Gx,
    textarea: Bx,
    text: ut,
    color: ut,
    date: ut,
    datetimeLocal: ut,
    email: ut,
    month: ut,
    number: ut,
    password: ut,
    search: ut,
    tel: ut,
    time: ut,
    url: ut,
    week: ut,
    range: ut
  });
  const Ud = function({ value: t }) {
    return ["yes", "on", "1", 1, !0, "true"].includes(t);
  };
  Ud.skipEmpty = !1;
  const _x = function({ value: e }, t = !1) {
    const n = Date.parse(t || /* @__PURE__ */ new Date()), r = Date.parse(String(e));
    return isNaN(r) ? !1 : r > n;
  }, $x = function({ value: e }, t = "default") {
    const n = {
      default: /^[a-zA-ZÀ-ÖØ-öø-ÿĄąĆćČčĎďĘęĚěŁłŃńŇňŘřŚśŠšŤťŮůŹźŻŽžż]+$/,
      latin: /^[a-zA-Z]+$/
    }, r = ae(n, t) ? t : "default";
    return n[r].test(String(e));
  }, eV = function({ value: e }, t = "default") {
    const n = {
      default: /^[a-zA-ZÀ-ÖØ-öø-ÿĄąĆćČčĎďĘęĚěŁłŃńŇňŘřŚśŠšŤťŮůŹźŻŽžż ]+$/,
      latin: /^[a-zA-Z ]+$/
    }, r = ae(n, t) ? t : "default";
    return n[r].test(String(e));
  }, tV = function({ value: e }, t = "default") {
    const n = {
      default: /^[a-zA-Z0-9À-ÖØ-öø-ÿĄąĆćĘęŁłŃńŚśŹźŻż]+$/,
      latin: /^[a-zA-Z0-9]+$/
    }, r = ae(n, t) ? t : "default";
    return n[r].test(String(e));
  }, nV = function({ value: e }, t = !1) {
    const n = Date.parse(t || /* @__PURE__ */ new Date()), r = Date.parse(String(e));
    return isNaN(r) ? !1 : r < n;
  }, rV = function({ value: t }, n, r) {
    if (!isNaN(t) && !isNaN(n) && !isNaN(r)) {
      const s = 1 * t;
      n = Number(n), r = Number(r);
      const [i, o] = n <= r ? [n, r] : [r, n];
      return s >= 1 * i && s <= 1 * o;
    }
    return !1;
  }, dc = /(_confirm(?:ed)?)$/, sV = function(t, n, r = "loose") {
    var s;
    n || (n = dc.test(t.name) ? t.name.replace(dc, "") : `${t.name}_confirm`);
    const i = (s = t.at(n)) === null || s === void 0 ? void 0 : s.value;
    return r === "strict" ? t.value === i : t.value == i;
  }, iV = function({ value: t }, n, r) {
    n = n instanceof Date ? n.getTime() : Date.parse(n), r = r instanceof Date ? r.getTime() : Date.parse(r);
    const s = t instanceof Date ? t.getTime() : Date.parse(String(t));
    if (n && !r)
      r = n, n = Date.now();
    else if (!n || !s)
      return !1;
    return s >= n && s <= r;
  }, oV = function({ value: t }, n) {
    return n && typeof n == "string" ? Xv(n).test(String(t)) : !isNaN(Date.parse(String(t)));
  }, aV = function({ value: t }) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t));
  }, lV = function({ value: t }, ...n) {
    return typeof t == "string" && n.length ? n.some((r) => t.endsWith(r)) : typeof t == "string" && n.length === 0;
  }, uV = function({ value: t }, ...n) {
    return n.some((r) => typeof r == "object" ? Nt(r, t) : r == t);
  }, cV = function({ value: t }, n = 0, r = 1 / 0) {
    n = parseInt(n), r = isNaN(parseInt(r)) ? 1 / 0 : parseInt(r);
    const s = n <= r ? n : r, i = r >= n ? r : n;
    if (typeof t == "string" || Array.isArray(t))
      return t.length >= s && t.length <= i;
    if (t && typeof t == "object") {
      const o = Object.keys(t).length;
      return o >= s && o <= i;
    }
    return !1;
  }, fV = function({ value: t }, ...n) {
    return n.some((r) => (typeof r == "string" && r.substr(0, 1) === "/" && r.substr(-1) === "/" && (r = new RegExp(r.substr(1, r.length - 2))), r instanceof RegExp ? r.test(String(t)) : r === t));
  }, dV = function({ value: t }, n = 10) {
    return Array.isArray(t) ? t.length <= n : Number(t) <= Number(n);
  }, pV = function({ value: t }, n = 1) {
    return Array.isArray(t) ? t.length >= n : Number(t) >= Number(n);
  }, hV = function({ value: t }, ...n) {
    return !n.some((r) => typeof r == "object" ? Nt(r, t) : r === t);
  }, mV = function({ value: t }) {
    return !isNaN(t);
  }, Hd = function({ value: t }, n = "default") {
    return n === "trim" && typeof t == "string" ? !Ps(t.trim()) : !Ps(t);
  };
  Hd.skipEmpty = !1;
  const yV = function({ value: t }, ...n) {
    return typeof t == "string" && n.length ? n.some((r) => t.startsWith(r)) : typeof t == "string" && n.length === 0;
  }, bV = function({ value: t }, ...n) {
    try {
      const r = n.length ? n : ["http:", "https:"], s = new URL(String(t));
      return r.includes(s.protocol);
    } catch {
      return !1;
    }
  }, vV = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    accepted: Ud,
    alpha: $x,
    alpha_spaces: eV,
    alphanumeric: tV,
    between: rV,
    confirm: sV,
    date_after: _x,
    date_before: nV,
    date_between: iV,
    date_format: oV,
    email: aV,
    ends_with: lV,
    is: uV,
    length: cV,
    matches: fV,
    max: dV,
    min: pV,
    not: hV,
    number: mV,
    required: Hd,
    starts_with: yV,
    url: bV
  }, Symbol.toStringTag, { value: "Module" })), kd = /* @__PURE__ */ new WeakSet();
  function Hs(e, t) {
    const n = t || Object.assign(/* @__PURE__ */ new Map(), { active: !1 }), r = /* @__PURE__ */ new Map(), s = function(c) {
      var u;
      n.active && (n.has(e) || n.set(e, /* @__PURE__ */ new Set()), (u = n.get(e)) === null || u === void 0 || u.add(c));
    }, i = function(c) {
      return new Proxy(c, {
        get(...u) {
          return typeof u[1] == "string" && s(`prop:${u[1]}`), Reflect.get(...u);
        }
      });
    }, o = function(c) {
      return new Proxy(c, {
        get(...u) {
          return u[1] === "value" ? (d) => (s(`count:${d}`), c.value(d)) : Reflect.get(...u);
        }
      });
    }, a = function(c, u) {
      return Bs(c) ? Hs(c, n) : (u === "value" && s("commit"), u === "props" ? i(c) : u === "ledger" ? o(c) : c);
    }, { proxy: l, revoke: f } = Proxy.revocable(e, {
      get(...c) {
        switch (c[1]) {
          case "_node":
            return e;
          case "deps":
            return n;
          case "watch":
            return (d, m) => Xd(l, d, m);
          case "observe":
            return () => {
              const d = new Map(n);
              return n.clear(), n.active = !0, d;
            };
          case "stopObserve":
            return () => {
              const d = new Map(n);
              return n.active = !1, d;
            };
          case "receipts":
            return r;
          case "kill":
            return () => {
              Kd(r), kd.add(c[2]), f();
            };
        }
        const u = Reflect.get(...c);
        return typeof u == "function" ? (...d) => {
          const m = u(...d);
          return a(m, c[1]);
        } : a(u, c[1]);
      }
    });
    return l;
  }
  function Zd(e, [t, n], r) {
    t.forEach((s, i) => {
      s.forEach((o) => {
        var a;
        e.receipts.has(i) || e.receipts.set(i, {}), e.receipts.set(i, Object.assign((a = e.receipts.get(i)) !== null && a !== void 0 ? a : {}, {
          [o]: i.on(o, r)
        }));
      });
    }), n.forEach((s, i) => {
      s.forEach((o) => {
        if (e.receipts.has(i)) {
          const a = e.receipts.get(i);
          a && ae(a, o) && (i.off(a[o]), delete a[o], e.receipts.set(i, a));
        }
      });
    });
  }
  function Kd(e) {
    e.forEach((t, n) => {
      for (const r in t)
        n.off(t[r]);
    });
  }
  function Xd(e, t, n) {
    const r = (o) => {
      const a = e.stopObserve();
      Zd(e, Dd(s, a), () => Xd(e, t, n)), n && n(o);
    }, s = new Map(e.deps);
    e.observe();
    const i = t(e);
    i instanceof Promise ? i.then((o) => r(o)) : r(i);
  }
  function Dd(e, t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    return t.forEach((s, i) => {
      if (!e.has(i))
        n.set(i, s);
      else {
        const o = /* @__PURE__ */ new Set(), a = e.get(i);
        s.forEach((l) => !(a != null && a.has(l)) && o.add(l)), n.set(i, o);
      }
    }), e.forEach((s, i) => {
      if (!t.has(i))
        r.set(i, s);
      else {
        const o = /* @__PURE__ */ new Set(), a = t.get(i);
        s.forEach((l) => !(a != null && a.has(l)) && o.add(l)), r.set(i, o);
      }
    }), [n, r];
  }
  function Id(e) {
    return kd.has(e);
  }
  const pc = Kt({
    type: "state",
    blocking: !0,
    visible: !1,
    value: !0,
    key: "validating"
  });
  function OV(e = {}) {
    return function(n) {
      let r = Yt(n.props.validationRules || {}), s = { ...e, ...r }, i = Hs(n);
      const o = { input: _r(), rerun: null, isPassing: !0 };
      let a = Yt(n.props.validation);
      n.on("prop:validation", ({ payload: f }) => l(f, s)), n.on("prop:validationRules", ({ payload: f }) => l(a, f));
      function l(f, c) {
        var u;
        Nt(Object.keys(r || {}), Object.keys(c || {})) && Nt(a, f) || (r = Yt(c), a = Yt(f), s = { ...e, ...r }, Kd(i.receipts), (u = n.props.parsedRules) === null || u === void 0 || u.forEach((d) => {
          var m;
          d.messageObserver = (m = d.messageObserver) === null || m === void 0 ? void 0 : m.kill();
        }), n.store.filter(() => !1, "validation"), n.props.parsedRules = mc(f, s), i.kill(), i = Hs(n), za(i, n.props.parsedRules, o));
      }
      n.props.parsedRules = mc(a, s), za(i, n.props.parsedRules, o);
    };
  }
  function za(e, t, n) {
    Id(e) || (n.input = _r(), n.isPassing = !0, e.store.filter((r) => !r.meta.removeImmediately, "validation"), t.forEach((r) => r.debounce && clearTimeout(r.timer)), t.length && (e.store.set(pc), Ta(0, t, e, n, !1, () => {
      e.store.remove(pc.key);
    })));
  }
  function Ta(e, t, n, r, s, i) {
    const o = t[e];
    if (!o)
      return i();
    const a = r.input;
    o.state = null;
    function l(f, c) {
      r.isPassing = r.isPassing && !!c, o.queued = !1;
      const u = n.stopObserve();
      Zd(n, Dd(o.deps, u), () => {
        o.queued = !0, r.rerun && clearTimeout(r.rerun), r.rerun = setTimeout(za, 0, n, t, r);
      }), o.deps = u, r.input === a && (o.state = c, c === !1 ? LV(n, o, s || f) : VV(n, o), t.length > e + 1 ? Ta(e + 1, t, n, r, s || f, i) : i());
    }
    (!Ps(n.value) || !o.skipEmpty) && (r.isPassing || o.force) ? o.queued ? xV(o, n, (f) => {
      f instanceof Promise ? f.then((c) => l(!0, c)) : l(!1, f);
    }) : Ta(e + 1, t, n, r, s, i) : Ps(n.value) && o.skipEmpty && r.isPassing ? (n.observe(), n.value, l(!1, r.isPassing)) : l(!1, null);
  }
  function xV(e, t, n) {
    e.debounce ? e.timer = setTimeout(() => {
      t.observe(), n(e.rule(t, ...e.args));
    }, e.debounce) : (t.observe(), n(e.rule(t, ...e.args)));
  }
  function VV(e, t) {
    const n = `rule_${t.name}`;
    t.messageObserver && (t.messageObserver = t.messageObserver.kill()), ae(e.store, n) && e.store.remove(n);
  }
  function LV(e, t, n) {
    Id(e) || (t.messageObserver || (t.messageObserver = Hs(e._node)), t.messageObserver.watch((r) => wV(r, t), (r) => {
      const s = AV(e, t, r), i = Kt({
        blocking: t.blocking,
        key: `rule_${t.name}`,
        meta: {
          /**
           * Use this key instead of the message root key to produce i18n validation
           * messages.
           */
          messageKey: t.name,
          /**
           * For messages that were created *by or after* a debounced or async
           * validation rule — we make note of it so we can immediately remove them
           * as soon as the next commit happens.
           */
          removeImmediately: n,
          /**
           * Determines if this message should be passed to localization.
           */
          localize: !s,
          /**
           * The arguments that will be passed to the validation rules
           */
          i18nArgs: r
        },
        type: "validation",
        value: s || "This field is not valid."
      });
      e.store.set(i);
    }));
  }
  function AV(e, t, n) {
    const r = e.props.validationMessages && ae(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
    return typeof r == "function" ? r(...n) : r;
  }
  function wV(e, t) {
    return [
      {
        node: e,
        name: gV(e),
        args: t.args
      }
    ];
  }
  function gV(e) {
    return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
  }
  const Cd = "(?:[\\*+?()0-9]+)", Jd = "[a-zA-Z][a-zA-Z0-9_]+", WV = new RegExp(`^(${Cd}?${Jd})(?:\\:(.*)+)?$`, "i"), NV = new RegExp(`^(${Cd})(${Jd})$`, "i"), qV = /([\*+?]+)?(\(\d+\))([\*+?]+)?/, hc = /\(\d+\)/, RV = {
    blocking: !0,
    debounce: 0,
    force: !1,
    skipEmpty: !0,
    name: ""
  };
  function mc(e, t) {
    return e ? (typeof e == "string" ? FV(e) : Gr(e)).reduce((r, s) => {
      let i = s.shift();
      const o = {};
      if (typeof i == "string") {
        const [a, l] = zV(i);
        ae(t, a) && (i = t[a], Object.assign(o, l));
      }
      return typeof i == "function" && r.push({
        rule: i,
        args: s,
        timer: 0,
        state: null,
        queued: !0,
        deps: /* @__PURE__ */ new Map(),
        ...RV,
        ...TV(o, i)
      }), r;
    }, []) : [];
  }
  function FV(e) {
    return e.split("|").reduce((t, n) => {
      const r = MV(n);
      return r && t.push(r), t;
    }, []);
  }
  function MV(e) {
    const t = e.trim();
    if (t) {
      const n = t.match(WV);
      if (n && typeof n[1] == "string") {
        const r = n[1].trim(), s = n[2] && typeof n[2] == "string" ? n[2].split(",").map((i) => i.trim()) : [];
        return [r, ...s];
      }
    }
    return !1;
  }
  function zV(e) {
    const t = e.match(NV);
    if (!t)
      return [e, { name: e }];
    const n = {
      "*": { force: !0 },
      "+": { skipEmpty: !1 },
      "?": { blocking: !1 }
    }, [, r, s] = t, i = hc.test(r) ? r.match(qV) || [] : [, r];
    return [
      s,
      [i[1], i[2], i[3]].reduce((o, a) => (a && (hc.test(a) ? o.debounce = parseInt(a.substr(1, a.length - 1)) : a.split("").forEach((l) => ae(n, l) && Object.assign(o, n[l]))), o), { name: s })
    ];
  }
  function TV(e, t) {
    return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce((n, r) => (ae(t, r) && !ae(n, r) && Object.assign(n, {
      [r]: t[r]
    }), n), e);
  }
  function Ee(e) {
    return e[0].toUpperCase() + e.substr(1);
  }
  function yc(e, t = "or") {
    return e.reduce((n, r, s) => (n += r, s <= e.length - 2 && e.length > 2 && (n += ", "), s === e.length - 2 && (n += `${e.length === 2 ? " " : ""}${t} `), n), "");
  }
  function fi(e) {
    const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
    return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
      dateStyle: "medium",
      timeZone: "UTC"
    }).format(t) : "(unknown)";
  }
  function EV(e, t) {
    return Number(e) >= Number(t) ? [t, e] : [e, t];
  }
  const jV = {
    /**
     * Shown on a button for adding additional items.
     */
    add: "Add",
    /**
     * Shown when a button to remove items is visible.
     */
    remove: "Remove",
    /**
     * Shown when there are multiple items to remove at the same time.
     */
    removeAll: "Remove all",
    /**
     * Shown when all fields are not filled out correctly.
     */
    incomplete: "Sorry, not all fields are filled out correctly.",
    /**
     * Shown in a button inside a form to submit the form.
     */
    submit: "Submit",
    /**
     * Shown when no files are selected.
     */
    noFiles: "No file chosen",
    /**
     * Shown on buttons that move fields up in a list.
     */
    moveUp: "Move up",
    /**
     * Shown on buttons that move fields down in a list.
     */
    moveDown: "Move down",
    /**
     * Shown when something is actively loading.
     */
    isLoading: "Loading...",
    /**
     * Shown when there is more to load.
     */
    loadMore: "Load more",
    /**
     * Show on buttons that navigate state forward
     */
    next: "Next",
    /**
     * Show on buttons that navigate state backward
     */
    prev: "Previous",
    /**
     * Shown when adding all values.
     */
    addAllValues: "Add all values",
    /**
     * Shown when adding selected values.
     */
    addSelectedValues: "Add selected values",
    /**
     * Shown when removing all values.
     */
    removeAllValues: "Remove all values",
    /**
     * Shown when removing selected values.
     */
    removeSelectedValues: "Remove selected values",
    /**
     * Shown when there is a date to choose.
     */
    chooseDate: "Choose date",
    /**
     * Shown when there is a date to change.
     */
    changeDate: "Change date",
    /**
     * Shown when the date is invalid.
     */
    invalidDate: "The selected date is invalid."
  }, SV = {
    /**
     * The value is not an accepted value.
     * @see {@link https://formkit.com/essentials/validation#accepted}
     */
    accepted({ name: e }) {
      return `Please accept the ${e}.`;
    },
    /**
     * The date is not after
     * @see {@link https://formkit.com/essentials/validation#date-after}
     */
    date_after({ name: e, args: t }) {
      return Array.isArray(t) && t.length ? `${Ee(e)} must be after ${fi(t[0])}.` : `${Ee(e)} must be in the future.`;
    },
    /**
     * The value is not a letter.
     * @see {@link https://formkit.com/essentials/validation#alpha}
     */
    alpha({ name: e }) {
      return `${Ee(e)} can only contain alphabetical characters.`;
    },
    /**
     * The value is not alphanumeric
     * @see {@link https://formkit.com/essentials/validation#alphanumeric}
     */
    alphanumeric({ name: e }) {
      return `${Ee(e)} can only contain letters and numbers.`;
    },
    /**
     * The value is not letter and/or spaces
     * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
     */
    alpha_spaces({ name: e }) {
      return `${Ee(e)} can only contain letters and spaces.`;
    },
    /**
     * The date is not before
     * @see {@link https://formkit.com/essentials/validation#date-before}
     */
    date_before({ name: e, args: t }) {
      return Array.isArray(t) && t.length ? `${Ee(e)} must be before ${fi(t[0])}.` : `${Ee(e)} must be in the past.`;
    },
    /**
     * The value is not between two numbers
     * @see {@link https://formkit.com/essentials/validation#between}
     */
    between({ name: e, args: t }) {
      if (isNaN(t[0]) || isNaN(t[1]))
        return "This field was configured incorrectly and can’t be submitted.";
      const [n, r] = EV(t[0], t[1]);
      return `${Ee(e)} must be between ${n} and ${r}.`;
    },
    /**
     * The confirmation field does not match
     * @see {@link https://formkit.com/essentials/validation#confirm}
     */
    confirm({ name: e }) {
      return `${Ee(e)} does not match.`;
    },
    /**
     * The value is not a valid date
     * @see {@link https://formkit.com/essentials/validation#date-format}
     */
    date_format({ name: e, args: t }) {
      return Array.isArray(t) && t.length ? `${Ee(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted";
    },
    /**
     * Is not within expected date range
     * @see {@link https://formkit.com/essentials/validation#date-between}
     */
    date_between({ name: e, args: t }) {
      return `${Ee(e)} must be between ${fi(t[0])} and ${fi(t[1])}`;
    },
    /**
     * Shown when the user-provided value is not a valid email address.
     * @see {@link https://formkit.com/essentials/validation#email}
     */
    email: "Please enter a valid email address.",
    /**
     * Does not end with the specified value
     * @see {@link https://formkit.com/essentials/validation#ends-with}
     */
    ends_with({ name: e, args: t }) {
      return `${Ee(e)} doesn’t end with ${yc(t)}.`;
    },
    /**
     * Is not an allowed value
     * @see {@link https://formkit.com/essentials/validation#is}
     */
    is({ name: e }) {
      return `${Ee(e)} is not an allowed value.`;
    },
    /**
     * Does not match specified length
     * @see {@link https://formkit.com/essentials/validation#length}
     */
    length({ name: e, args: [t = 0, n = 1 / 0] }) {
      const r = Number(t) <= Number(n) ? t : n, s = Number(n) >= Number(t) ? n : t;
      return r == 1 && s === 1 / 0 ? `${Ee(e)} must be at least one character.` : r == 0 && s ? `${Ee(e)} must be less than or equal to ${s} characters.` : r === s ? `${Ee(e)} should be ${s} characters long.` : r && s === 1 / 0 ? `${Ee(e)} must be greater than or equal to ${r} characters.` : `${Ee(e)} must be between ${r} and ${s} characters.`;
    },
    /**
     * Value is not a match
     * @see {@link https://formkit.com/essentials/validation#matches}
     */
    matches({ name: e }) {
      return `${Ee(e)} is not an allowed value.`;
    },
    /**
     * Exceeds maximum allowed value
     * @see {@link https://formkit.com/essentials/validation#max}
     */
    max({ name: e, node: { value: t }, args: n }) {
      return Array.isArray(t) ? `Cannot have more than ${n[0]} ${e}.` : `${Ee(e)} must be less than or equal to ${n[0]}.`;
    },
    /**
     * The (field-level) value does not match specified mime type
     * @see {@link https://formkit.com/essentials/validation#mime}
     */
    mime({ name: e, args: t }) {
      return t[0] ? `${Ee(e)} must be of the type: ${t[0]}` : "No file formats allowed.";
    },
    /**
     * Does not fulfill minimum allowed value
     * @see {@link https://formkit.com/essentials/validation#min}
     */
    min({ name: e, node: { value: t }, args: n }) {
      return Array.isArray(t) ? `Cannot have fewer than ${n[0]} ${e}.` : `Must be at least ${n[0]} ${e} .`;
    },
    /**
     * Is not an allowed value
     * @see {@link https://formkit.com/essentials/validation#not}
     */
    not({ name: e, node: { value: t } }) {
      return `“${t}” is not an allowed ${e}.`;
    },
    /**
     *  Is not a number
     * @see {@link https://formkit.com/essentials/validation#number}
     */
    number({ name: e }) {
      return `${Ee(e)} must be a number.`;
    },
    /**
     * Required field.
     * @see {@link https://formkit.com/essentials/validation#required}
     */
    required({ name: e }) {
      return `${Ee(e)} is required.`;
    },
    /**
     * Does not start with specified value
     * @see {@link https://formkit.com/essentials/validation#starts-with}
     */
    starts_with({ name: e, args: t }) {
      return `${Ee(e)} doesn’t start with ${yc(t)}.`;
    },
    /**
     * Is not a url
     * @see {@link https://formkit.com/essentials/validation#url}
     */
    url() {
      return "Please enter a valid URL.";
    }
  };
  var YV = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ui: jV,
    validation: SV
  });
  function PV(e) {
    return function(n) {
      let r = bc(n.config.locale, e), s = r ? e[r] : {};
      n.on("prop:locale", ({ payload: i }) => {
        r = bc(i, e), s = r ? e[r] : {}, n.store.touch();
      }), n.on("prop:label", () => n.store.touch()), n.on("prop:validationLabel", () => n.store.touch()), n.hook.text((i, o) => {
        var a, l;
        const f = ((a = i.meta) === null || a === void 0 ? void 0 : a.messageKey) || i.key;
        if (ae(s, i.type) && ae(s[i.type], f)) {
          const c = s[i.type][f];
          typeof c == "function" ? i.value = Array.isArray((l = i.meta) === null || l === void 0 ? void 0 : l.i18nArgs) ? c(...i.meta.i18nArgs) : c(i) : i.value = c;
        }
        return o(i);
      });
    };
  }
  function bc(e, t) {
    if (ae(t, e))
      return e;
    const [n] = e.split("-");
    if (ae(t, n))
      return n;
    for (const r in t)
      return r;
    return !1;
  }
  let Ht, Bt = null, Bi, Gd = !1, ds = !1;
  const UV = new Promise((e) => {
    Bi = () => {
      Gd = !0, e();
    };
  }), On = typeof window < "u" && typeof fetch < "u";
  Ht = On ? getComputedStyle(document.documentElement) : void 0;
  const jr = {}, Io = {};
  function HV(e, t, n, r) {
    t && Object.assign(jr, t), On && !ds && (Ht != null && Ht.getPropertyValue("--formkit-theme")) ? (Bi(), ds = !0) : e && !ds && On ? kV(e) : !ds && On && Bi();
    const s = function(o) {
      var a, l;
      o.addProps(["iconLoader", "iconLoaderUrl"]), o.props.iconHandler = ws(!((a = o.props) === null || a === void 0) && a.iconLoader ? o.props.iconLoader : r, !((l = o.props) === null || l === void 0) && l.iconLoaderUrl ? o.props.iconLoaderUrl : n), XV(o, o.props.iconHandler), o.on("created", () => {
        var f;
        !((f = o == null ? void 0 : o.context) === null || f === void 0) && f.handlers && (o.context.handlers.iconClick = (c) => {
          const u = `on${c.charAt(0).toUpperCase()}${c.slice(1)}IconClick`, d = o.props[u];
          if (d && typeof d == "function")
            return (m) => d(o, m);
        });
      });
    };
    return s.iconHandler = ws(r, n), s;
  }
  function kV(e) {
    if (!(!e || !On || typeof getComputedStyle != "function") && (ds = !0, Bt = document.getElementById("formkit-theme"), e && // if we have a window object
    On && // we don't have an existing theme OR the theme being set up is different
    (!(Ht != null && Ht.getPropertyValue("--formkit-theme")) && !Bt || Bt != null && Bt.getAttribute("data-theme") && (Bt == null ? void 0 : Bt.getAttribute("data-theme")) !== e))) {
      const n = `https://cdn.jsdelivr.net/npm/@formkit/themes@${Xi.startsWith("__") ? "latest" : Xi}/dist/${e}/theme.css`, r = document.createElement("link");
      r.type = "text/css", r.rel = "stylesheet", r.id = "formkit-theme", r.setAttribute("data-theme", e), r.onload = () => {
        Ht = getComputedStyle(document.documentElement), Bi();
      }, document.head.appendChild(r), r.href = n, Bt && Bt.remove();
    }
  }
  function ws(e, t) {
    return (n) => {
      if (typeof n == "boolean")
        return;
      if (n.startsWith("<svg"))
        return n;
      if (typeof n != "string")
        return;
      const r = n.startsWith("default:");
      n = r ? n.split(":")[1] : n;
      const s = n in jr;
      let i;
      if (s)
        return jr[n];
      if (!Io[n]) {
        if (i = ZV(n), i = On && typeof i > "u" ? Promise.resolve(i) : i, i instanceof Promise)
          Io[n] = i.then((o) => !o && typeof n == "string" && !r ? i = typeof e == "function" ? e(n) : KV(n, t) : o).then((o) => (typeof n == "string" && (jr[r ? `default:${n}` : n] = o), o));
        else if (typeof i == "string")
          return jr[r ? `default:${n}` : n] = i, i;
      }
      return Io[n];
    };
  }
  function ZV(e) {
    if (On)
      return Gd ? vc(e) : UV.then(() => vc(e));
  }
  function vc(e) {
    const t = Ht == null ? void 0 : Ht.getPropertyValue(`--fk-icon-${e}`);
    if (t) {
      const n = atob(t);
      if (n.startsWith("<svg"))
        return jr[e] = n, n;
    }
  }
  function KV(e, t) {
    const n = Xi.startsWith("__") ? "latest" : Xi, r = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${e}.svg`;
    if (On)
      return fetch(`${r}`).then(async (s) => {
        const i = await s.text();
        if (i.startsWith("<svg"))
          return i;
      }).catch((s) => {
        console.error(s);
      });
  }
  function XV(e, t) {
    const n = /^[a-zA-Z-]+(?:-icon|Icon)$/;
    Object.keys(e.props).filter((s) => n.test(s)).forEach((s) => DV(e, t, s));
  }
  function DV(e, t, n) {
    const r = e.props[n], s = t(r), i = `_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`, o = `on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;
    if (e.addProps([i, o]), e.on(`prop:${n}`, IV), s instanceof Promise)
      return s.then((a) => {
        e.props[i] = a;
      });
    e.props[i] = s;
  }
  function IV(e) {
    var t;
    const n = e.origin, r = e.payload, s = (t = n == null ? void 0 : n.props) === null || t === void 0 ? void 0 : t.iconHandler, i = e.name.split(":")[1], o = `_raw${i.charAt(0).toUpperCase()}${i.slice(1)}`;
    if (s && typeof s == "function") {
      const a = s(r);
      if (a instanceof Promise)
        return a.then((l) => {
          n.props[o] = l;
        });
      n.props[o] = a;
    }
  }
  let Wl = !1;
  const Oc = {
    /**
     * FormKit errors:
     */
    100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
    101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
    102: ({ data: [e, t] }) => `You cannot directly assign node.${t} (${e.name})`,
    103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
    104: ({ data: [e, t] }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
    105: ({ data: e }) => `Invalid schema expression: ${e}`,
    106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
    107: ({ data: [e, t] }) => `Cannot set ${e.name} to non object value: ${t}`,
    108: ({ data: [e, t] }) => `Cannot set ${e.name} to non array value: ${t}`,
    /**
     * Input specific errors:
     */
    300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
    /**
     * FormKit vue errors:
     */
    600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
    601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
  }, xc = {
    /**
     * Core warnings:
     */
    150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
    151: ({ data: e }) => `No form element with id: ${e}`,
    152: ({ data: e }) => `No input element with id: ${e}`,
    /**
     * Input specific warnings:
     */
    350: ({ data: e }) => `Invalid options prop for radio input (${e.name}). See https://formkit.com/inputs/radio`,
    /**
     * Vue warnings:
     */
    650: 'Schema "$get()" must use the id of an input to access.',
    651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
    652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
    /**
     * Deprecation warnings:
     */
    800: ({ data: e }) => `${e} is deprecated.`
  }, CV = (e, t) => {
    if (e.code in Oc) {
      const n = Oc[e.code];
      e.message = typeof n == "function" ? n(e) : n;
    }
    return t(e);
  };
  Wl || xl(CV);
  const JV = (e, t) => {
    if (e.code in xc) {
      const n = xc[e.code];
      e.message = typeof n == "function" ? n(e) : n;
    }
    return t(e);
  };
  Wl || Vl(JV);
  Wl = !0;
  const Co = {};
  let ot;
  const tr = /* @__PURE__ */ new Map(), GV = "__raw__", BV = /[a-zA-Z0-9\-][cC]lass$/;
  function QV(e, t) {
    const n = Xe(null);
    if (e === "get") {
      const s = {};
      return n.value = _V.bind(null, s), n;
    }
    const r = e.split(".");
    return hn(() => {
      n.value = Nl(ve(t) ? t.value : t, r);
    }), n;
  }
  function Nl(e, t) {
    if (Array.isArray(e)) {
      for (const s of e) {
        const i = s !== !1 && Nl(s, t);
        if (i !== void 0)
          return i;
      }
      return;
    }
    let n, r = e;
    for (const s in t) {
      const i = t[s];
      if (typeof r != "object" || r === null) {
        n = void 0;
        break;
      }
      const o = r[i];
      if (Number(s) === t.length - 1 && o !== void 0) {
        n = typeof o == "function" ? o.bind(r) : o;
        break;
      }
      r = o;
    }
    return n;
  }
  function _V(e, t) {
    if (typeof t != "string")
      return Or(650);
    if (t in e || (e[t] = Xe(void 0)), e[t].value === void 0) {
      e[t].value = null;
      const n = Gs(t);
      n && (e[t].value = n.context), mO(t, ({ payload: r }) => {
        e[t].value = Bs(r) ? r.context : r;
      });
    }
    return e[t].value;
  }
  function Vc(e, t) {
    function n(u, d) {
      const m = c(zt(d.if), { if: !0 }), L = l(u, d.then), O = d.else ? l(u, d.else) : null;
      return [m, L, O];
    }
    function r(u, d) {
      var m, L;
      const O = c(zt(u.if));
      let v = () => d, b = () => d;
      return typeof u.then == "object" ? b = s(u.then, void 0) : typeof u.then == "string" && (!((m = u.then) === null || m === void 0) && m.startsWith("$")) ? b = c(zt(u.then)) : b = () => u.then, ae(u, "else") && (typeof u.else == "object" ? v = s(u.else) : typeof u.else == "string" && (!((L = u.else) === null || L === void 0) && L.startsWith("$")) ? v = c(zt(u.else)) : v = () => u.else), () => O() ? b() : v();
    }
    function s(u, d, m = {}) {
      const L = new Set(Object.keys(u || {})), O = d ? c(zt(d)) : () => ({}), v = [
        (b) => {
          const A = O();
          for (const j in A)
            L.has(j) || (b[j] = A[j]);
        }
      ];
      if (u) {
        if (Fr(u))
          return r(u, m);
        for (let b in u) {
          const A = u[b];
          let j;
          const V = typeof A == "string";
          b.startsWith(GV) ? (b = b.substring(7), j = () => A) : V && A.startsWith("$") && A.length > 1 && !(A.startsWith("$reset") && BV.test(b)) ? j = c(zt(A)) : typeof A == "object" && Fr(A) ? j = r(A, void 0) : typeof A == "object" && hr(A) ? j = s(A) : j = () => A, v.push((w) => {
            w[b] = j();
          });
        }
      }
      return () => {
        const b = Array.isArray(u) ? [] : {};
        return v.forEach((A) => A(b)), b;
      };
    }
    function i(u, d) {
      let m = null, L = () => null, O = !1, v = null, b = null, A = null, j = !1;
      const V = ox(d);
      if (Ra(V) ? (m = V.$el, L = V.$el !== "text" ? s(V.attrs, V.bind) : () => null) : Fa(V) ? (typeof V.$cmp == "string" ? ae(u, V.$cmp) ? m = u[V.$cmp] : (m = V.$cmp, j = !0) : m = V.$cmp, L = s(V.props, V.bind)) : Fr(V) && ([O, v, b] = n(u, V)), !Fr(V) && "if" in V ? O = c(zt(V.if)) : !Fr(V) && m === null && (O = () => !0), "children" in V && V.children)
        if (typeof V.children == "string")
          if (V.children.startsWith("$slots."))
            m = m === "text" ? "slot" : m, v = c(zt(V.children));
          else if (V.children.startsWith("$") && V.children.length > 1) {
            const w = c(zt(V.children));
            v = () => String(w());
          } else
            v = () => String(V.children);
        else if (Array.isArray(V.children))
          v = l(u, V.children);
        else {
          const [w, M, y] = n(u, V.children);
          v = (E) => w && w() ? M && M(E) : y && y(E);
        }
      if (Fa(V))
        if (v) {
          const w = v;
          v = (M) => ({
            default(y, E) {
              var g, q, Z, X;
              const ye = ot;
              E && (ot = E), y && ((g = tr.get(ot)) === null || g === void 0 || g.unshift(y)), M && ((q = tr.get(ot)) === null || q === void 0 || q.unshift(M));
              const Ye = w(M);
              return y && ((Z = tr.get(ot)) === null || Z === void 0 || Z.shift()), M && ((X = tr.get(ot)) === null || X === void 0 || X.shift()), ot = ye, Ye;
            }
          }), v.slot = !0;
        } else
          v = () => ({});
      if ("for" in V && V.for) {
        const w = V.for.length === 3 ? V.for[2] : V.for[1];
        A = [
          typeof w == "string" && w.startsWith("$") ? c(zt(w)) : () => w,
          V.for[0],
          V.for.length === 3 ? String(V.for[1]) : null
        ];
      }
      return [O, m, L, v, b, A, j];
    }
    function o(u, d) {
      const m = u(d), L = ot;
      return Object.keys(m).reduce((O, v) => {
        const b = m && m[v];
        return O[v] = (A) => b && b(A, L) || null, O;
      }, {});
    }
    function a(u, d) {
      const [m, L, O, v, b, A, j] = i(u, d);
      let V = (w) => {
        if (m && L === null && v)
          return m() ? v(w) : b && b(w);
        if (L && (!m || m())) {
          if (L === "text" && v)
            return fl(String(v()));
          if (L === "slot" && v)
            return v(w);
          const M = j ? zf(L) : L, y = v != null && v.slot ? o(v, w) : null;
          return pr(M, O(), y || (v ? v(w) : []));
        }
        return typeof b == "function" ? b(w) : b;
      };
      if (A) {
        const w = V, [M, y, E] = A;
        V = () => {
          const g = M(), q = isNaN(g) ? g : Array(Number(g)).fill(0).map((Ye, Ae) => Ae), Z = [];
          if (typeof q != "object")
            return null;
          const X = tr.get(ot) || [], ye = Array.isArray(q);
          for (const Ye in q) {
            if (ye && Ye in Array.prototype)
              continue;
            const Ae = Object.defineProperty({
              ...X.reduce((_, D) => _.__idata ? { ..._, ...D } : D, {}),
              [y]: q[Ye],
              ...E !== null ? { [E]: ye ? Number(Ye) : Ye } : {}
            }, "__idata", { enumerable: !1, value: !0 });
            X.unshift(Ae), Z.push(w.bind(null, Ae)()), X.shift();
          }
          return Z;
        };
      }
      return V;
    }
    function l(u, d) {
      if (Array.isArray(d)) {
        const L = d.map(a.bind(null, u));
        return (O) => L.map((v) => v(O));
      }
      const m = a(u, d);
      return (L) => m(L);
    }
    const f = [];
    function c(u, d = {}) {
      const m = {};
      return f.push((L, O) => {
        m[O] = u.provide((v) => L(v, d));
      }), () => m[ot]();
    }
    return function(d, m) {
      const L = JSON.stringify(t), [O, v] = ae(Co, L) ? Co[L] : [l(e, t), f];
      return Co[L] = [O, v], v.forEach((b) => {
        b(d, m);
      }), () => (ot = m, O());
    };
  }
  function Bd(e, t) {
    const n = tr.get(ot) || [];
    let r;
    return n.length && (r = Nl(n, e.split("."))), r === void 0 ? t : r;
  }
  function $V(e, t) {
    return new Proxy(e, {
      get(...n) {
        let r;
        const s = n[1];
        if (typeof s == "string") {
          const i = ot;
          ot = t, r = Bd(s, void 0), ot = i;
        }
        return r !== void 0 ? r : Reflect.get(...n);
      }
    });
  }
  function Lc(e, t, n) {
    return e((r, s = {}) => r.reduce((i, o) => {
      if (o.startsWith("slots.")) {
        const a = o.substring(6), l = () => t.slots && ae(t.slots, a) && typeof t.slots[a] == "function";
        if (s.if)
          i[o] = l;
        else if (t.slots) {
          const f = $V(t, n);
          i[o] = () => l() ? t.slots[a](f) : null;
        }
      } else {
        const a = QV(o, t);
        i[o] = () => Bd(o, a.value);
      }
      return i;
    }, {}), n);
  }
  let Ac = 0;
  const ql = Se({
    name: "FormKitSchema",
    props: {
      schema: {
        type: [Array, Object],
        required: !0
      },
      data: {
        type: Object,
        default: () => ({})
      },
      library: {
        type: Object,
        default: () => ({})
      }
    },
    setup(e, t) {
      const n = Js();
      let r = Symbol(String(Ac++));
      tr.set(r, []);
      let s = Vc(e.library, e.schema), i, o;
      return pt(() => e.schema, (a, l) => {
        var f;
        r = Symbol(String(Ac++)), s = Vc(e.library, e.schema), i = Lc(s, o, r), a === l && ((f = n == null ? void 0 : n.proxy) === null || f === void 0 ? void 0 : f.$forceUpdate)();
      }, { deep: !0 }), hn(() => {
        o = Object.assign(Wt(e.data), {
          slots: t.slots
        }), i = Lc(s, o, r);
      }), () => i();
    }
  }), eL = {
    config: {
      type: Object,
      default: {}
    },
    classes: {
      type: Object,
      required: !1
    },
    delay: {
      type: Number,
      required: !1
    },
    errors: {
      type: Array,
      default: []
    },
    inputErrors: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    modelValue: {
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    parent: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      default: []
    },
    sectionsSchema: {
      type: Object,
      default: {}
    },
    type: {
      type: [String, Object],
      default: "text"
    },
    validation: {
      type: [String, Array],
      required: !1
    },
    validationMessages: {
      type: Object,
      required: !1
    },
    validationRules: {
      type: Object,
      required: !1
    },
    validationLabel: {
      type: [String, Function],
      required: !1
    }
  }, tL = eL, Qi = Symbol("FormKitParent"), _s = Se({
    props: tL,
    emits: {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      input: (e, t) => !0,
      inputRaw: (e, t) => !0,
      "update:modelValue": (e) => !0,
      node: (e) => !!e,
      submit: (e, t) => !0,
      submitRaw: (e, t) => !0,
      submitInvalid: (e) => !0
      /* eslint-enable @typescript-eslint/no-unused-vars */
    },
    inheritAttrs: !1,
    setup(e, t) {
      const n = uL(e, t);
      if (n.props.definition || vt(600, n), n.props.definition.component)
        return () => {
          var o;
          return pr((o = n.props.definition) === null || o === void 0 ? void 0 : o.component, {
            context: n.context
          }, { ...t.slots });
        };
      const r = Xe([]), s = () => {
        var o, a;
        const l = (a = (o = n.props) === null || o === void 0 ? void 0 : o.definition) === null || a === void 0 ? void 0 : a.schema;
        l || vt(601, n), r.value = typeof l == "function" ? l({ ...e.sectionsSchema }) : l;
      };
      s(), n.on("schema", s), t.emit("node", n);
      const i = n.props.definition.library;
      return t.expose({ node: n }), () => pr(ql, { schema: r.value, data: n.context, library: i }, { ...t.slots });
    }
  });
  function nL(e, t) {
    return e.component(t.alias || "FormKit", _s).component(t.schemaAlias || "FormKitSchema", ql), {
      get: Gs,
      setLocale: (n) => {
        var r;
        !((r = t.config) === null || r === void 0) && r.rootConfig && (t.config.rootConfig.locale = n);
      },
      clearErrors: ux,
      setErrors: lx,
      submit: xd,
      reset: Vd
    };
  }
  const Rl = Symbol.for("FormKitOptions"), rL = Symbol.for("FormKitConfig"), sL = {
    install(e, t) {
      const n = Object.assign({
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      }, typeof t == "function" ? t() : t), r = yO(n.config || {});
      n.config = { rootConfig: r }, e.config.globalProperties.$formkit = nL(e, n), e.provide(Rl, n), e.provide(rL, r);
    }
  }, Ea = Symbol();
  function iL(e, t) {
    const n = {}, r = (o) => {
      for (const a of o)
        a.__str in n && n[a.__str](), n[a.__str] = pt(aL.bind(null, e, a), i.bind(null, a), { deep: !1 });
    }, i = oL(e, t, r, (o) => {
      if (o.length)
        for (const a in n)
          `${a}`.startsWith(`${o.__str}.`) && (n[a](), delete n[a]);
    });
    r(Fl(e));
  }
  function oL(e, t, n, r) {
    return (s) => {
      const i = Qd(e, s);
      i !== Ea && (s.__deep && r(s), typeof i == "object" && n(Fl(i, [s], ...s)), t(s, i, e));
    };
  }
  function aL(e, t) {
    const n = Qd(e, t);
    return n && typeof n == "object" ? Object.keys(n) : n;
  }
  function Qd(e, t) {
    if (ve(e)) {
      if (t.length === 0)
        return e.value;
      e = e.value;
    }
    return t.reduce((n, r) => n === Ea ? n : n === null || typeof n != "object" ? Ea : n[r], e);
  }
  function Fl(e, t = [], ...n) {
    if (e === null)
      return t;
    if (!n.length) {
      const r = Object.defineProperty([], "__str", {
        value: ""
      });
      if (e = ve(e) ? e.value : e, e && typeof e == "object")
        Object.defineProperty(r, "__deep", { value: !0 }), t.push(r);
      else
        return [r];
    }
    if (e === null || typeof e != "object")
      return t;
    for (const r in e) {
      const s = n.concat(r);
      Object.defineProperty(s, "__str", { value: s.join(".") });
      const i = e[r];
      hr(i) || Array.isArray(i) ? (t.push(Object.defineProperty(s, "__deep", { value: !0 })), t = t.concat(Fl(i, [], ...s))) : t.push(s);
    }
    return t;
  }
  function gi(e) {
    return e === null || typeof e != "object" || (dt(e) ? e = ee(e) : ve(e) && (e = dt(e.value) ? gi(e.value) : e.value)), e;
  }
  const Jo = [
    "help",
    "label",
    "ignore",
    "disabled",
    "preserve",
    /^preserve(-e|E)rrors/,
    /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
    /^[a-zA-Z-]+(?:-class|Class)$/,
    "prefixIcon",
    "suffixIcon",
    /^[a-zA-Z-]+(?:-icon|Icon)$/
  ];
  function wc(e, t) {
    t.classes && Object.keys(t.classes).forEach((n) => {
      typeof n == "string" && (e.props[`_${n}Class`] = t.classes[n], ga(t.classes[n]) && n === "inner" && Object.values(t.classes[n]));
    });
  }
  function lL(e) {
    return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce((n, r) => {
      const s = `on${r}`;
      return s in e && typeof e[s] == "function" && (n[s] = e[s]), n;
    }, {}) : {};
  }
  function uL(e, t, n = {}) {
    var r;
    const s = Object.assign({}, $e(Rl) || {}, n), i = Js(), o = lL(i == null ? void 0 : i.vnode.props), a = "modelValue" in ((r = i == null ? void 0 : i.vnode.props) !== null && r !== void 0 ? r : {}), l = e.modelValue !== void 0 ? e.modelValue : Yt(t.attrs.value);
    function f() {
      const w = {
        ...Wr(e),
        ...o
      }, M = tc(Wr(t.attrs), Jo);
      M.key || (M.key = _r()), w.attrs = M;
      const y = nc(Wr(t.attrs), Jo);
      for (const g in y)
        w[Hr(g)] = y[g];
      const E = { props: {} };
      return wc(E, e), Object.assign(w, E.props), typeof w.type != "string" && (w.definition = w.type, delete w.type), w;
    }
    const c = f(), u = c.ignore ? null : e.parent || $e(Qi, null), d = sx(mr(s || {}, {
      name: e.name || void 0,
      value: l,
      parent: u,
      plugins: (s.plugins || []).concat(e.plugins),
      config: e.config,
      props: c,
      index: e.index
    }, !1, !0));
    d.props.definition || vt(600, d);
    const m = Xe(new Set(d.props.definition.props || []));
    d.on("added-props", ({ payload: w }) => {
      Array.isArray(w) && w.forEach((M) => m.value.add(M));
    });
    const L = Fe(() => Jo.concat([...m.value]).reduce((w, M) => (typeof M == "string" ? (w.push(Hr(M)), w.push(md(M))) : w.push(M), w), []));
    hn(() => wc(d, e));
    const O = Wr(e);
    for (const w in O)
      pt(() => e[w], () => {
        e[w] !== void 0 && (d.props[w] = e[w]);
      });
    const v = /* @__PURE__ */ new Set(), b = Wr(t.attrs);
    hn(() => {
      A(nc(b, L.value));
    });
    function A(w) {
      v.forEach((M) => {
        M(), v.delete(M);
      });
      for (const M in w) {
        const y = Hr(M);
        v.add(pt(() => t.attrs[M], () => {
          d.props[y] = t.attrs[M];
        }));
      }
    }
    if (hn(() => {
      const w = tc(Wr(t.attrs), L.value);
      "multiple" in w && (w.multiple = Pt(w.multiple)), d.props.attrs = Object.assign({}, d.props.attrs || {}, w);
    }), hn(() => {
      const w = e.errors.map((M) => Kt({
        key: vl(M),
        type: "error",
        value: M,
        meta: { source: "prop" }
      }));
      d.store.apply(w, (M) => M.type === "error" && M.meta.source === "prop");
    }), d.type !== "input") {
      const w = `${d.name}-prop`;
      hn(() => {
        const M = Object.keys(e.inputErrors);
        M.length || d.clearErrors(!0, w);
        const y = M.reduce((E, g) => {
          let q = e.inputErrors[g];
          return typeof q == "string" && (q = [q]), Array.isArray(q) && (E[g] = q.map((Z) => Kt({
            key: Z,
            type: "error",
            value: Z,
            meta: { source: w }
          }))), E;
        }, {});
        d.store.apply(y, (E) => E.type === "error" && E.meta.source === w);
      });
    }
    hn(() => Object.assign(d.config, e.config)), d.type !== "input" && bs(Qi, d);
    let j;
    const V = /* @__PURE__ */ new WeakSet();
    return d.on("modelUpdated", () => {
      var w, M;
      if (t.emit("inputRaw", (w = d.context) === null || w === void 0 ? void 0 : w.value, d), clearTimeout(j), j = setTimeout(t.emit, 20, "input", (M = d.context) === null || M === void 0 ? void 0 : M.value, d), a && d.context) {
        const y = gi(d.context.value);
        ga(y) && gi(e.modelValue) !== y && V.add(y), t.emit("update:modelValue", y);
      }
    }), a && (iL(ms(e, "modelValue"), (w, M) => {
      var y;
      const E = gi(M);
      if (ga(E) && V.has(E))
        return V.delete(E);
      w.length ? (y = d.at(w)) === null || y === void 0 || y.input(M, !1) : d.input(M, !1);
    }), d.value !== l && d.emit("modelUpdated")), Rf(() => d.destroy()), d;
  }
  const cL = fe("messages", () => ({
    $el: "ul",
    if: "$fns.length($messages)"
  }), !0), fL = fe("message", () => ({
    $el: "li",
    for: ["message", "$messages"],
    attrs: {
      key: "$message.key",
      id: "$id + '-' + $message.key",
      "data-message-type": "$message.type"
    }
  })), dL = cL(fL("$message.value"));
  Se({
    props: {
      node: {
        type: Object,
        required: !1
      },
      sectionsSchema: {
        type: Object,
        default: {}
      },
      defaultPosition: {
        type: [String, Boolean],
        default: !1
      }
    },
    setup(e, t) {
      const n = Fe(() => e.node || $e(Qi, void 0));
      pt(n, () => {
        var i;
        !((i = n.value) === null || i === void 0) && i.context && !Pt(e.defaultPosition) && (n.value.context.defaultMessagePlacement = !1);
      }, { immediate: !0 });
      const r = dL(e.sectionsSchema || {}), s = Fe(() => {
        var i, o, a, l, f, c;
        return {
          messages: ((o = (i = n.value) === null || i === void 0 ? void 0 : i.context) === null || o === void 0 ? void 0 : o.messages) || {},
          fns: ((l = (a = n.value) === null || a === void 0 ? void 0 : a.context) === null || l === void 0 ? void 0 : l.fns) || {},
          classes: ((c = (f = n.value) === null || f === void 0 ? void 0 : f.context) === null || c === void 0 ? void 0 : c.classes) || {}
        };
      });
      return () => {
        var i;
        return !((i = n.value) === null || i === void 0) && i.context ? pr(ql, { schema: r, data: s.value }, { ...t.slots }) : null;
      };
    }
  });
  const pL = function(t) {
    t.ledger.count("blocking", (y) => y.blocking);
    const n = Xe(!t.ledger.value("blocking"));
    t.ledger.count("errors", (y) => y.type === "error");
    const r = Xe(!!t.ledger.value("errors"));
    let s = !1;
    zs(() => {
      s = !0;
    });
    const i = Wt(t.store.reduce((y, E) => (E.visible && (y[E.key] = E), y), {})), o = Xe(t.props.validationVisibility || "blur");
    t.on("prop:validationVisibility", ({ payload: y }) => {
      o.value = y;
    });
    const a = Xe(o.value === "live"), l = Fe(() => {
      if (A.state.submitted)
        return !0;
      if (!a.value && !A.state.settled)
        return !1;
      switch (o.value) {
        case "live":
          return !0;
        case "blur":
          return A.state.blurred;
        case "dirty":
          return A.state.dirty;
        default:
          return !1;
      }
    }), f = Fe(() => c.value ? n.value && !r.value : A.state.dirty && !Ps(A.value)), c = Xe(Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0);
    t.on("prop:parsedRules", ({ payload: y }) => {
      c.value = Array.isArray(y) && y.length > 0;
    });
    const u = Fe(() => {
      const y = {};
      for (const E in i) {
        const g = i[E];
        (g.type !== "validation" || l.value) && (y[E] = g);
      }
      return y;
    }), d = Wt(t.store.reduce((y, E) => (E.type === "ui" && E.visible && (y[E.key] = E), y), {})), m = Wt({}), L = new Proxy(m, {
      get(...y) {
        const [E, g] = y;
        let q = Reflect.get(...y);
        return !q && typeof g == "string" && !ae(E, g) && !g.startsWith("__v") && Hs(t).watch((X) => {
          const ye = typeof X.config.rootClasses == "function" ? X.config.rootClasses(g, X) : {}, Ye = X.config.classes ? Li(g, X, X.config.classes[g]) : {}, Ae = Li(g, X, X.props[`_${g}Class`]), _ = Li(g, X, X.props[`${g}Class`]);
          q = ax(X, g, ye, Ye, Ae, _), E[g] = q ?? "";
        }), q;
      }
    }), O = Fe(() => {
      const y = [];
      A.help && y.push(`help-${t.props.id}`);
      for (const E in u.value)
        y.push(`${t.props.id}-${E}`);
      return y.length ? y.join(" ") : void 0;
    }), v = Xe(t.value), b = Xe(t.value), A = Wt({
      _value: b,
      attrs: t.props.attrs,
      disabled: t.props.disabled,
      describedBy: O,
      fns: {
        length: (y) => Object.keys(y).length,
        number: (y) => Number(y),
        string: (y) => String(y),
        json: (y) => JSON.stringify(y),
        eq: Nt
      },
      handlers: {
        blur: (y) => {
          t.store.set(Kt({ key: "blurred", visible: !1, value: !0 })), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(y);
        },
        touch: () => {
          var y;
          const E = A.dirtyBehavior === "compare";
          if (!((y = t.store.dirty) === null || y === void 0) && y.value && !E)
            return;
          const g = !Nt(t.props._init, t._value);
          !g && !E || t.store.set(Kt({ key: "dirty", visible: !1, value: g }));
        },
        DOMInput: (y) => {
          t.input(y.target.value), t.emit("dom-input-event", y);
        }
      },
      help: t.props.help,
      id: t.props.id,
      label: t.props.label,
      messages: u,
      node: At(t),
      options: t.props.options,
      defaultMessagePlacement: !0,
      state: {
        blurred: !1,
        complete: f,
        dirty: !1,
        submitted: !1,
        settled: t.isSettled,
        valid: n,
        errors: r,
        rules: c,
        validationVisible: l
      },
      type: t.props.type,
      family: t.props.family,
      ui: d,
      value: v,
      classes: L
    });
    t.on("created", () => {
      Nt(A.value, t.value) || (b.value = t.value, v.value = t.value, li(v), li(b)), (async () => (await t.settled, t.props._init = Yt(t.value)))();
    }), t.on("settled", ({ payload: y }) => {
      A.state.settled = y;
    });
    function j(y) {
      y.forEach((E) => {
        E = Hr(E), !ae(A, E) && ae(t.props, E) && (A[E] = t.props[E]), t.on(`prop:${E}`, ({ payload: g }) => {
          A[E] = g;
        });
      });
    }
    j((() => {
      const y = [
        "help",
        "label",
        "disabled",
        "options",
        "type",
        "attrs",
        "preserve",
        "preserveErrors",
        "id",
        "dirtyBehavior"
      ], E = /^[a-zA-Z-]+(?:-icon|Icon)$/, g = Object.keys(t.props).filter((q) => E.test(q));
      return y.concat(g);
    })());
    function w(y) {
      y.props && j(y.props);
    }
    t.props.definition && w(t.props.definition), t.on("added-props", ({ payload: y }) => j(y)), t.on("input", ({ payload: y }) => {
      t.type !== "input" && !ve(y) && !dt(y) ? b.value = rc(y) : (b.value = y, li(b));
    }), t.on("commit", ({ payload: y }) => {
      t.type !== "input" && !ve(y) && !dt(y) ? v.value = b.value = rc(y) : (v.value = b.value = y, li(v)), t.emit("modelUpdated"), (!A.state.dirty || A.dirtyBehavior === "compare") && t.isCreated && s && A.handlers.touch(), f && t.type === "input" && r.value && !Pt(t.props.preserveErrors) && t.store.filter((E) => {
        var g;
        return !(E.type === "error" && ((g = E.meta) === null || g === void 0 ? void 0 : g.autoClear) === !0);
      });
    });
    const M = async (y) => {
      y.type === "ui" && y.visible && !y.meta.showAsMessage ? d[y.key] = y : y.visible ? i[y.key] = y : y.type === "state" && (A.state[y.key] = !!y.value);
    };
    t.on("message-added", (y) => M(y.payload)), t.on("message-updated", (y) => M(y.payload)), t.on("message-removed", ({ payload: y }) => {
      delete d[y.key], delete i[y.key], delete A.state[y.key];
    }), t.on("settled:blocking", () => {
      n.value = !0;
    }), t.on("unsettled:blocking", () => {
      n.value = !1;
    }), t.on("settled:errors", () => {
      r.value = !1;
    }), t.on("unsettled:errors", () => {
      r.value = !0;
    }), pt(l, (y) => {
      y && (a.value = !0);
    }), t.context = A, t.emit("context", t, !1);
  }, hL = (e = {}) => {
    const { rules: t = {}, locales: n = {}, inputs: r = {}, messages: s = {}, locale: i = void 0, theme: o = void 0, iconLoaderUrl: a = void 0, iconLoader: l = void 0, icons: f = {}, ...c } = e, u = OV({
      ...vV,
      ...t || {}
    }), d = PV(mr({ en: YV, ...n || {} }, s)), m = cx(Qx, r), L = HV(o, f, a, l);
    return mr({
      plugins: [m, L, pL, d, u],
      ...i ? { config: { locale: i } } : {}
    }, c || {}, !0);
  };
  Se({
    name: "FormKitIcon",
    props: {
      icon: {
        type: String,
        default: ""
      },
      iconLoader: {
        type: Function,
        default: null
      },
      iconLoaderUrl: {
        type: Function,
        default: null
      }
    },
    setup(e) {
      var t, n;
      const r = Xe(void 0), s = $e(Rl, {}), i = $e(Qi, null);
      let o;
      function a() {
        if (!o || typeof o != "function")
          return;
        const l = o(e.icon);
        l instanceof Promise ? l.then((f) => {
          r.value = f;
        }) : r.value = l;
      }
      if (e.iconLoader && typeof e.iconLoader == "function")
        o = ws(e.iconLoader);
      else if (i && (!((t = i.props) === null || t === void 0) && t.iconLoader))
        o = ws(i.props.iconLoader);
      else if (e.iconLoaderUrl && typeof e.iconLoaderUrl == "function")
        o = ws(o, e.iconLoaderUrl);
      else {
        const l = (n = s == null ? void 0 : s.plugins) === null || n === void 0 ? void 0 : n.find((f) => typeof f.iconHandler == "function");
        l && (o = l.iconHandler);
      }
      return pt(() => e.icon, () => {
        a();
      }, { immediate: !0 }), () => e.icon && r.value ? pr("span", {
        class: "formkit-icon",
        innerHTML: r.value
      }) : null;
    }
  });
  const mL = { class: "form-group" }, yL = /* @__PURE__ */ Se({
    __name: "Form",
    props: {
      submitAttrs: null,
      buttonColor: { default: "info" }
    },
    setup(e) {
      const t = e, n = Fe(
        () => ({
          inputClass: "px-4 py-2 text-center border rounded text-white bg-info",
          // デフォルトデザイン
          ...t.submitAttrs
          // 引数反映
        })
      );
      return (r, s) => (We(), Ge(re(_s), {
        type: "form",
        submitAttrs: re(n)
      }, {
        default: bt(() => [
          St("div", mL, [
            Dr(r.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["submitAttrs"]));
    }
  }), Ml = /* @__PURE__ */ Se({
    __name: "InputText",
    props: {
      classes: null
    },
    setup(e) {
      const t = e, n = Fe(() => ({
        input: "form-control border-input",
        message: "form-control-feedback",
        ...t.classes
      }));
      return (r, s) => (We(), Ge(re(_s), {
        classes: re(n),
        type: "text"
      }, null, 8, ["classes"]));
    }
  }), bL = /* @__PURE__ */ Se({
    __name: "InputDay",
    props: {
      classes: null
    },
    setup(e) {
      const t = e, n = Fe(() => ({
        input: "form-control border-input",
        message: "form-control-feedback",
        ...t.classes
      }));
      return (r, s) => (We(), Ge(re(_s), {
        classes: re(n),
        type: "date"
      }, null, 8, ["classes"]));
    }
  }), vL = /* @__PURE__ */ Se({
    __name: "Radio",
    props: {
      classes: null
    },
    setup(e) {
      const t = e, n = Fe(() => ({
        message: "form-control-feedback",
        option: "form-check form-check-radio",
        wrapper: "form-check-label",
        input: "form-check-input",
        decorator: "form-check-sign",
        ...t.classes
      }));
      return (r, s) => (We(), Ge(re(_s), {
        type: "radio",
        classes: re(n)
      }, null, 8, ["classes"]));
    }
  }), OL = /* @__PURE__ */ Se({
    __name: "InputBirthday",
    setup(e) {
      return (t, n) => (We(), Ge(re(bL), { validation: [["required"], ["date_after", "1900-01-01"]] }));
    }
  });
  var zl = /* @__PURE__ */ ((e) => (e.FURIGANA = "/^[ぁ-んー]+$/", e.EMAIL = "/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\\.)+[a-zA-Z]{2,}$/", e))(zl || {});
  const xL = /* @__PURE__ */ Se({
    __name: "InputEMail",
    setup(e) {
      return (t, n) => (We(), Ge(re(Ml), {
        validation: [["required"], ["matches", zl.EMAIL]]
      }, null, 8, ["validation"]));
    }
  });
  var ps = /* @__PURE__ */ ((e) => (e[e.MEN = 0] = "MEN", e[e.WOMEN = 1] = "WOMEN", e[e.OTHER = 2] = "OTHER", e[e.NO_ANSWER = 3] = "NO_ANSWER", e))(ps || {});
  const VL = /* @__PURE__ */ Se({
    __name: "InputGender",
    setup(e) {
      const t = { [ps.MEN]: "男性", [ps.WOMEN]: "女性", [ps.OTHER]: "その他", [ps.NO_ANSWER]: "無回答" };
      return (n, r) => (We(), Ge(re(vL), {
        options: t,
        validation: [["required"]]
      }));
    }
  }), gc = /* @__PURE__ */ Se({
    __name: "InputName",
    setup(e) {
      return (t, n) => (We(), Ge(re(Ml), { validation: [["required"], ["length", "1", "15"]] }));
    }
  }), Wc = /* @__PURE__ */ Se({
    __name: "InputNameKana",
    setup(e) {
      return (t, n) => (We(), Ge(re(Ml), {
        validation: [["required"], ["length", "1", "15"], ["matches", zl.FURIGANA]]
      }, null, 8, ["validation"]));
    }
  });
  var _d = !1;
  function di(e, t, n) {
    return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
  }
  function Go(e, t) {
    if (Array.isArray(e)) {
      e.splice(t, 1);
      return;
    }
    delete e[t];
  }
  /*!
    * pinia v2.0.34
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let hs;
  const ks = (e) => hs = e, $d = {}.NODE_ENV !== "production" ? Symbol("pinia") : (
    /* istanbul ignore next */
    Symbol()
  );
  function yr(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var nn;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(nn || (nn = {}));
  const Ao = typeof window < "u", gs = ({}.NODE_ENV !== "production" || !1) && {}.NODE_ENV !== "test" && Ao, Nc = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
  function LL(e, { autoBom: t = !1 } = {}) {
    return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
  }
  function Tl(e, t, n) {
    const r = new XMLHttpRequest();
    r.open("GET", e), r.responseType = "blob", r.onload = function() {
      np(r.response, t, n);
    }, r.onerror = function() {
      console.error("could not download file");
    }, r.send();
  }
  function ep(e) {
    const t = new XMLHttpRequest();
    t.open("HEAD", e, !1);
    try {
      t.send();
    } catch {
    }
    return t.status >= 200 && t.status <= 299;
  }
  function Wi(e) {
    try {
      e.dispatchEvent(new MouseEvent("click"));
    } catch {
      const n = document.createEvent("MouseEvents");
      n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
    }
  }
  const Ni = typeof navigator == "object" ? navigator : { userAgent: "" }, tp = /* @__PURE__ */ (() => /Macintosh/.test(Ni.userAgent) && /AppleWebKit/.test(Ni.userAgent) && !/Safari/.test(Ni.userAgent))(), np = Ao ? (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !tp ? AL : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in Ni ? wL : (
        // Fallback to using FileReader and a popup
        gL
      )
    )
  ) : () => {
  };
  function AL(e, t = "download", n) {
    const r = document.createElement("a");
    r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? ep(r.href) ? Tl(e, t, n) : (r.target = "_blank", Wi(r)) : Wi(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
      URL.revokeObjectURL(r.href);
    }, 4e4), setTimeout(function() {
      Wi(r);
    }, 0));
  }
  function wL(e, t = "download", n) {
    if (typeof e == "string")
      if (ep(e))
        Tl(e, t, n);
      else {
        const r = document.createElement("a");
        r.href = e, r.target = "_blank", setTimeout(function() {
          Wi(r);
        });
      }
    else
      navigator.msSaveOrOpenBlob(LL(e, n), t);
  }
  function gL(e, t, n, r) {
    if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
      return Tl(e, t, n);
    const s = e.type === "application/octet-stream", i = /constructor/i.test(String(Nc.HTMLElement)) || "safari" in Nc, o = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((o || s && i || tp) && typeof FileReader < "u") {
      const a = new FileReader();
      a.onloadend = function() {
        let l = a.result;
        if (typeof l != "string")
          throw r = null, new Error("Wrong reader.result type");
        l = o ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
      }, a.readAsDataURL(e);
    } else {
      const a = URL.createObjectURL(e);
      r ? r.location.assign(a) : location.href = a, r = null, setTimeout(function() {
        URL.revokeObjectURL(a);
      }, 4e4);
    }
  }
  function Ie(e, t) {
    const n = "🍍 " + e;
    typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
  }
  function El(e) {
    return "_a" in e && "install" in e;
  }
  function rp() {
    if (!("clipboard" in navigator))
      return Ie("Your browser doesn't support the Clipboard API", "error"), !0;
  }
  function sp(e) {
    return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ie('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
  }
  async function WL(e) {
    if (!rp())
      try {
        await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ie("Global state copied to clipboard.");
      } catch (t) {
        if (sp(t))
          return;
        Ie("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
      }
  }
  async function NL(e) {
    if (!rp())
      try {
        e.state.value = JSON.parse(await navigator.clipboard.readText()), Ie("Global state pasted from clipboard.");
      } catch (t) {
        if (sp(t))
          return;
        Ie("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
      }
  }
  async function qL(e) {
    try {
      np(new Blob([JSON.stringify(e.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (t) {
      Ie("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
    }
  }
  let un;
  function RL() {
    un || (un = document.createElement("input"), un.type = "file", un.accept = ".json");
    function e() {
      return new Promise((t, n) => {
        un.onchange = async () => {
          const r = un.files;
          if (!r)
            return t(null);
          const s = r.item(0);
          return t(s ? { text: await s.text(), file: s } : null);
        }, un.oncancel = () => t(null), un.onerror = n, un.click();
      });
    }
    return e;
  }
  async function FL(e) {
    try {
      const n = await (await RL())();
      if (!n)
        return;
      const { text: r, file: s } = n;
      e.state.value = JSON.parse(r), Ie(`Global state imported from "${s.name}".`);
    } catch (t) {
      Ie("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
    }
  }
  function Tt(e) {
    return {
      _custom: {
        display: e
      }
    };
  }
  const ip = "🍍 Pinia (root)", ja = "_root";
  function ML(e) {
    return El(e) ? {
      id: ja,
      label: ip
    } : {
      id: e.$id,
      label: e.$id
    };
  }
  function zL(e) {
    if (El(e)) {
      const n = Array.from(e._s.keys()), r = e._s;
      return {
        state: n.map((i) => ({
          editable: !0,
          key: i,
          value: e.state.value[i]
        })),
        getters: n.filter((i) => r.get(i)._getters).map((i) => {
          const o = r.get(i);
          return {
            editable: !1,
            key: i,
            value: o._getters.reduce((a, l) => (a[l] = o[l], a), {})
          };
        })
      };
    }
    const t = {
      state: Object.keys(e.$state).map((n) => ({
        editable: !0,
        key: n,
        value: e.$state[n]
      }))
    };
    return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
      editable: !1,
      key: n,
      value: e[n]
    }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
      editable: !0,
      key: n,
      value: e[n]
    }))), t;
  }
  function TL(e) {
    return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    }) : {
      operation: Tt(e.type),
      key: Tt(e.key),
      oldValue: e.oldValue,
      newValue: e.newValue
    } : {};
  }
  function EL(e) {
    switch (e) {
      case nn.direct:
        return "mutation";
      case nn.patchFunction:
        return "$patch";
      case nn.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let Sr = !0;
  const qi = [], $n = "pinia:mutations", Qe = "pinia", { assign: jL } = Object, _i = (e) => "🍍 " + e;
  function SL(e, t) {
    ml({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes: qi,
      app: e
    }, (n) => {
      typeof n.now != "function" && Ie("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
        id: $n,
        label: "Pinia 🍍",
        color: 15064968
      }), n.addInspector({
        id: Qe,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              WL(t);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await NL(t), n.sendInspectorTree(Qe), n.sendInspectorState(Qe);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              qL(t);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await FL(t), n.sendInspectorTree(Qe), n.sendInspectorState(Qe);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (r) => {
              const s = t._s.get(r);
              s ? s._isOptionsAPI ? (s.$reset(), Ie(`Store "${r}" reset.`)) : Ie(`Cannot reset "${r}" store because it's a setup store.`, "warn") : Ie(`Cannot reset "${r}" store because it wasn't found.`, "warn");
            }
          }
        ]
      }), n.on.inspectComponent((r, s) => {
        const i = r.componentInstance && r.componentInstance.proxy;
        if (i && i._pStores) {
          const o = r.componentInstance.proxy._pStores;
          Object.values(o).forEach((a) => {
            r.instanceData.state.push({
              type: _i(a.$id),
              key: "state",
              editable: !0,
              value: a._isOptionsAPI ? {
                _custom: {
                  value: ee(a.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => a.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(a.$state).reduce((l, f) => (l[f] = a.$state[f], l), {})
              )
            }), a._getters && a._getters.length && r.instanceData.state.push({
              type: _i(a.$id),
              key: "getters",
              editable: !1,
              value: a._getters.reduce((l, f) => {
                try {
                  l[f] = a[f];
                } catch (c) {
                  l[f] = c;
                }
                return l;
              }, {})
            });
          });
        }
      }), n.on.getInspectorTree((r) => {
        if (r.app === e && r.inspectorId === Qe) {
          let s = [t];
          s = s.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? s.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(r.filter.toLowerCase()) : ip.toLowerCase().includes(r.filter.toLowerCase())) : s).map(ML);
        }
      }), n.on.getInspectorState((r) => {
        if (r.app === e && r.inspectorId === Qe) {
          const s = r.nodeId === ja ? t : t._s.get(r.nodeId);
          if (!s)
            return;
          s && (r.state = zL(s));
        }
      }), n.on.editInspectorState((r, s) => {
        if (r.app === e && r.inspectorId === Qe) {
          const i = r.nodeId === ja ? t : t._s.get(r.nodeId);
          if (!i)
            return Ie(`store "${r.nodeId}" not found`, "error");
          const { path: o } = r;
          El(i) ? o.unshift("state") : (o.length !== 1 || !i._customProperties.has(o[0]) || o[0] in i.$state) && o.unshift("$state"), Sr = !1, r.set(i, o, r.state.value), Sr = !0;
        }
      }), n.on.editComponentState((r) => {
        if (r.type.startsWith("🍍")) {
          const s = r.type.replace(/^🍍\s*/, ""), i = t._s.get(s);
          if (!i)
            return Ie(`store "${s}" not found`, "error");
          const { path: o } = r;
          if (o[0] !== "state")
            return Ie(`Invalid path for store "${s}":
${o}
Only state can be modified.`);
          o[0] = "$state", Sr = !1, r.set(i, o, r.state.value), Sr = !0;
        }
      });
    });
  }
  function YL(e, t) {
    qi.includes(_i(t.$id)) || qi.push(_i(t.$id)), ml({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes: qi,
      app: e,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: !0
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (n) => {
      const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
      t.$onAction(({ after: o, onError: a, name: l, args: f }) => {
        const c = op++;
        n.addTimelineEvent({
          layerId: $n,
          event: {
            time: r(),
            title: "🛫 " + l,
            subtitle: "start",
            data: {
              store: Tt(t.$id),
              action: Tt(l),
              args: f
            },
            groupId: c
          }
        }), o((u) => {
          nr = void 0, n.addTimelineEvent({
            layerId: $n,
            event: {
              time: r(),
              title: "🛬 " + l,
              subtitle: "end",
              data: {
                store: Tt(t.$id),
                action: Tt(l),
                args: f,
                result: u
              },
              groupId: c
            }
          });
        }), a((u) => {
          nr = void 0, n.addTimelineEvent({
            layerId: $n,
            event: {
              time: r(),
              logType: "error",
              title: "💥 " + l,
              subtitle: "end",
              data: {
                store: Tt(t.$id),
                action: Tt(l),
                args: f,
                error: u
              },
              groupId: c
            }
          });
        });
      }, !0), t._customProperties.forEach((o) => {
        pt(() => re(t[o]), (a, l) => {
          n.notifyComponentUpdate(), n.sendInspectorState(Qe), Sr && n.addTimelineEvent({
            layerId: $n,
            event: {
              time: r(),
              title: "Change",
              subtitle: o,
              data: {
                newValue: a,
                oldValue: l
              },
              groupId: nr
            }
          });
        }, { deep: !0 });
      }), t.$subscribe(({ events: o, type: a }, l) => {
        if (n.notifyComponentUpdate(), n.sendInspectorState(Qe), !Sr)
          return;
        const f = {
          time: r(),
          title: EL(a),
          data: jL({ store: Tt(t.$id) }, TL(o)),
          groupId: nr
        };
        nr = void 0, a === nn.patchFunction ? f.subtitle = "⤵️" : a === nn.patchObject ? f.subtitle = "🧩" : o && !Array.isArray(o) && (f.subtitle = o.type), o && (f.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: o
          }
        }), n.addTimelineEvent({
          layerId: $n,
          event: f
        });
      }, { detached: !0, flush: "sync" });
      const s = t._hotUpdate;
      t._hotUpdate = At((o) => {
        s(o), n.addTimelineEvent({
          layerId: $n,
          event: {
            time: r(),
            title: "🔥 " + t.$id,
            subtitle: "HMR update",
            data: {
              store: Tt(t.$id),
              info: Tt("HMR update")
            }
          }
        }), n.notifyComponentUpdate(), n.sendInspectorTree(Qe), n.sendInspectorState(Qe);
      });
      const { $dispose: i } = t;
      t.$dispose = () => {
        i(), n.notifyComponentUpdate(), n.sendInspectorTree(Qe), n.sendInspectorState(Qe), n.getSettings().logStoreChanges && Ie(`Disposed "${t.$id}" store 🗑`);
      }, n.notifyComponentUpdate(), n.sendInspectorTree(Qe), n.sendInspectorState(Qe), n.getSettings().logStoreChanges && Ie(`"${t.$id}" store installed 🆕`);
    });
  }
  let op = 0, nr;
  function qc(e, t) {
    const n = t.reduce((r, s) => (r[s] = ee(e)[s], r), {});
    for (const r in n)
      e[r] = function() {
        const s = op, i = new Proxy(e, {
          get(...o) {
            return nr = s, Reflect.get(...o);
          },
          set(...o) {
            return nr = s, Reflect.set(...o);
          }
        });
        return n[r].apply(i, arguments);
      };
  }
  function PL({ app: e, store: t, options: n }) {
    if (!t.$id.startsWith("__hot:")) {
      if (n.state && (t._isOptionsAPI = !0), typeof n.state == "function") {
        qc(
          // @ts-expect-error: can cast the store...
          t,
          Object.keys(n.actions)
        );
        const r = t._hotUpdate;
        ee(t)._hotUpdate = function(s) {
          r.apply(this, arguments), qc(t, Object.keys(s._hmrPayload.actions));
        };
      }
      YL(
        e,
        // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
        t
      );
    }
  }
  function UL() {
    const e = Jc(!0), t = e.run(() => Xe({}));
    let n = [], r = [];
    const s = At({
      install(i) {
        ks(s), s._a = i, i.provide($d, s), i.config.globalProperties.$pinia = s, gs && SL(i, s), r.forEach((o) => n.push(o)), r = [];
      },
      use(i) {
        return !this._a && !_d ? r.push(i) : n.push(i), this;
      },
      _p: n,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return gs && typeof Proxy < "u" && s.use(PL), s;
  }
  function ap(e, t) {
    for (const n in t) {
      const r = t[n];
      if (!(n in e))
        continue;
      const s = e[n];
      yr(s) && yr(r) && !ve(r) && !dt(r) ? e[n] = ap(s, r) : e[n] = r;
    }
    return e;
  }
  const lp = () => {
  };
  function Rc(e, t, n, r = lp) {
    e.push(t);
    const s = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), r());
    };
    return !n && Gc() && Lh(s), s;
  }
  function Nr(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  function Sa(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const r = t[n], s = e[n];
      yr(s) && yr(r) && e.hasOwnProperty(n) && !ve(r) && !dt(r) ? e[n] = Sa(s, r) : e[n] = r;
    }
    return e;
  }
  const HL = {}.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
    /* istanbul ignore next */
    Symbol()
  );
  function kL(e) {
    return !yr(e) || !e.hasOwnProperty(HL);
  }
  const { assign: Lt } = Object;
  function Fc(e) {
    return !!(ve(e) && e.effect);
  }
  function Mc(e, t, n, r) {
    const { state: s, actions: i, getters: o } = t, a = n.state.value[e];
    let l;
    function f() {
      !a && ({}.NODE_ENV === "production" || !r) && (n.state.value[e] = s ? s() : {});
      const c = {}.NODE_ENV !== "production" && r ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        hu(Xe(s ? s() : {}).value)
      ) : hu(n.state.value[e]);
      return Lt(c, i, Object.keys(o || {}).reduce((u, d) => ({}.NODE_ENV !== "production" && d in c && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), u[d] = At(Fe(() => {
        ks(n);
        const m = n._s.get(e);
        return o[d].call(m, m);
      })), u), {}));
    }
    return l = Ya(e, f, t, n, r, !0), l;
  }
  function Ya(e, t, n = {}, r, s, i) {
    let o;
    const a = Lt({ actions: {} }, n);
    if ({}.NODE_ENV !== "production" && !r._e.active)
      throw new Error("Pinia destroyed");
    const l = {
      deep: !0
      // flush: 'post',
    };
    ({}).NODE_ENV !== "production" && !_d && (l.onTrigger = (g) => {
      f ? m = g : f == !1 && !y._hotUpdating && (Array.isArray(m) ? m.push(g) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
    });
    let f, c, u = At([]), d = At([]), m;
    const L = r.state.value[e];
    !i && !L && ({}.NODE_ENV === "production" || !s) && (r.state.value[e] = {});
    const O = Xe({});
    let v;
    function b(g) {
      let q;
      f = c = !1, {}.NODE_ENV !== "production" && (m = []), typeof g == "function" ? (g(r.state.value[e]), q = {
        type: nn.patchFunction,
        storeId: e,
        events: m
      }) : (Sa(r.state.value[e], g), q = {
        type: nn.patchObject,
        payload: g,
        storeId: e,
        events: m
      });
      const Z = v = Symbol();
      zs().then(() => {
        v === Z && (f = !0);
      }), c = !0, Nr(u, q, r.state.value[e]);
    }
    const A = i ? function() {
      const { state: q } = n, Z = q ? q() : {};
      this.$patch((X) => {
        Lt(X, Z);
      });
    } : (
      /* istanbul ignore next */
      {}.NODE_ENV !== "production" ? () => {
        throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
      } : lp
    );
    function j() {
      o.stop(), u = [], d = [], r._s.delete(e);
    }
    function V(g, q) {
      return function() {
        ks(r);
        const Z = Array.from(arguments), X = [], ye = [];
        function Ye(D) {
          X.push(D);
        }
        function Ae(D) {
          ye.push(D);
        }
        Nr(d, {
          args: Z,
          name: g,
          store: y,
          after: Ye,
          onError: Ae
        });
        let _;
        try {
          _ = q.apply(this && this.$id === e ? this : y, Z);
        } catch (D) {
          throw Nr(ye, D), D;
        }
        return _ instanceof Promise ? _.then((D) => (Nr(X, D), D)).catch((D) => (Nr(ye, D), Promise.reject(D))) : (Nr(X, _), _);
      };
    }
    const w = /* @__PURE__ */ At({
      actions: {},
      getters: {},
      state: [],
      hotState: O
    }), M = {
      _p: r,
      // _s: scope,
      $id: e,
      $onAction: Rc.bind(null, d),
      $patch: b,
      $reset: A,
      $subscribe(g, q = {}) {
        const Z = Rc(u, g, q.detached, () => X()), X = o.run(() => pt(() => r.state.value[e], (ye) => {
          (q.flush === "sync" ? c : f) && g({
            storeId: e,
            type: nn.direct,
            events: m
          }, ye);
        }, Lt({}, l, q)));
        return Z;
      },
      $dispose: j
    }, y = Wt({}.NODE_ENV !== "production" || gs ? Lt(
      {
        _hmrPayload: w,
        _customProperties: At(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      M
      // must be added later
      // setupStore
    ) : M);
    r._s.set(e, y);
    const E = r._e.run(() => (o = Jc(), o.run(() => t())));
    for (const g in E) {
      const q = E[g];
      if (ve(q) && !Fc(q) || dt(q))
        ({}).NODE_ENV !== "production" && s ? di(O.value, g, ms(E, g)) : i || (L && kL(q) && (ve(q) ? q.value = L[g] : Sa(q, L[g])), r.state.value[e][g] = q), {}.NODE_ENV !== "production" && w.state.push(g);
      else if (typeof q == "function") {
        const Z = {}.NODE_ENV !== "production" && s ? q : V(g, q);
        E[g] = Z, {}.NODE_ENV !== "production" && (w.actions[g] = q), a.actions[g] = q;
      } else
        ({}).NODE_ENV !== "production" && Fc(q) && (w.getters[g] = i ? (
          // @ts-expect-error
          n.getters[g]
        ) : q, Ao && (E._getters || // @ts-expect-error: same
        (E._getters = At([]))).push(g));
    }
    if (Lt(y, E), Lt(ee(y), E), Object.defineProperty(y, "$state", {
      get: () => ({}).NODE_ENV !== "production" && s ? O.value : r.state.value[e],
      set: (g) => {
        if ({}.NODE_ENV !== "production" && s)
          throw new Error("cannot set hotState");
        b((q) => {
          Lt(q, g);
        });
      }
    }), {}.NODE_ENV !== "production" && (y._hotUpdate = At((g) => {
      y._hotUpdating = !0, g._hmrPayload.state.forEach((q) => {
        if (q in y.$state) {
          const Z = g.$state[q], X = y.$state[q];
          typeof Z == "object" && yr(Z) && yr(X) ? ap(Z, X) : g.$state[q] = X;
        }
        di(y, q, ms(g.$state, q));
      }), Object.keys(y.$state).forEach((q) => {
        q in g.$state || Go(y, q);
      }), f = !1, c = !1, r.state.value[e] = ms(g._hmrPayload, "hotState"), c = !0, zs().then(() => {
        f = !0;
      });
      for (const q in g._hmrPayload.actions) {
        const Z = g[q];
        di(y, q, V(q, Z));
      }
      for (const q in g._hmrPayload.getters) {
        const Z = g._hmrPayload.getters[q], X = i ? (
          // special handling of options api
          Fe(() => (ks(r), Z.call(y, y)))
        ) : Z;
        di(y, q, X);
      }
      Object.keys(y._hmrPayload.getters).forEach((q) => {
        q in g._hmrPayload.getters || Go(y, q);
      }), Object.keys(y._hmrPayload.actions).forEach((q) => {
        q in g._hmrPayload.actions || Go(y, q);
      }), y._hmrPayload = g._hmrPayload, y._getters = g._getters, y._hotUpdating = !1;
    })), gs) {
      const g = {
        writable: !0,
        configurable: !0,
        // avoid warning on devtools trying to display this property
        enumerable: !1
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((q) => {
        Object.defineProperty(y, q, Lt({ value: y[q] }, g));
      });
    }
    return r._p.forEach((g) => {
      if (gs) {
        const q = o.run(() => g({
          store: y,
          app: r._a,
          pinia: r,
          options: a
        }));
        Object.keys(q || {}).forEach((Z) => y._customProperties.add(Z)), Lt(y, q);
      } else
        Lt(y, o.run(() => g({
          store: y,
          app: r._a,
          pinia: r,
          options: a
        })));
    }), {}.NODE_ENV !== "production" && y.$state && typeof y.$state == "object" && typeof y.$state.constructor == "function" && !y.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${y.$id}".`), L && i && n.hydrate && n.hydrate(y.$state, L), f = !0, c = !0, y;
  }
  function ZL(e, t, n) {
    let r, s;
    const i = typeof t == "function";
    typeof e == "string" ? (r = e, s = i ? n : t) : (s = e, r = e.id);
    function o(a, l) {
      const f = Js();
      if (a = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      ({}.NODE_ENV === "test" && hs && hs._testing ? null : a) || f && $e($d, null), a && ks(a), {}.NODE_ENV !== "production" && !hs)
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      a = hs, a._s.has(r) || (i ? Ya(r, t, s, a) : Mc(r, s, a), {}.NODE_ENV !== "production" && (o._pinia = a));
      const c = a._s.get(r);
      if ({}.NODE_ENV !== "production" && l) {
        const u = "__hot:" + r, d = i ? Ya(u, t, s, a, !0) : Mc(u, Lt({}, s), a, !0);
        l._hotUpdate(d), delete a.state.value[u], a._s.delete(u);
      }
      if ({}.NODE_ENV !== "production" && Ao && f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const u = f.proxy, d = "_pStores" in u ? u._pStores : u._pStores = {};
        d[r] = c;
      }
      return c;
    }
    return o.$id = r, o;
  }
  function KL(e) {
    return typeof e == "object" && e !== null;
  }
  function zc(e, t) {
    return e = KL(e) ? e : /* @__PURE__ */ Object.create(null), new Proxy(e, {
      get(n, r, s) {
        return r === "key" ? Reflect.get(n, r, s) : Reflect.get(n, r, s) || Reflect.get(t, r, s);
      }
    });
  }
  function XL(e, t) {
    return t.reduce((n, r) => n == null ? void 0 : n[r], e);
  }
  function DL(e, t, n) {
    return t.slice(0, -1).reduce((r, s) => /^(__proto__)$/.test(s) ? {} : r[s] = r[s] || {}, e)[t[t.length - 1]] = n, e;
  }
  function IL(e, t) {
    return t.reduce((n, r) => {
      const s = r.split(".");
      return DL(n, s, XL(e, s));
    }, {});
  }
  function Tc(e, { storage: t, serializer: n, key: r, debug: s }) {
    try {
      const i = t == null ? void 0 : t.getItem(r);
      i && e.$patch(n == null ? void 0 : n.deserialize(i));
    } catch (i) {
      s && console.error(i);
    }
  }
  function Ec(e, { storage: t, serializer: n, key: r, paths: s, debug: i }) {
    try {
      const o = Array.isArray(s) ? IL(e, s) : e;
      t.setItem(r, n.serialize(o));
    } catch (o) {
      i && console.error(o);
    }
  }
  function CL(e = {}) {
    return (t) => {
      const { auto: n = !1 } = e, {
        options: { persist: r = n },
        store: s
      } = t;
      if (!r)
        return;
      const i = (Array.isArray(r) ? r.map((o) => zc(o, e)) : [zc(r, e)]).map(
        ({
          storage: o = localStorage,
          beforeRestore: a = null,
          afterRestore: l = null,
          serializer: f = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key: c = s.$id,
          paths: u = null,
          debug: d = !1
        }) => {
          var m;
          return {
            storage: o,
            beforeRestore: a,
            afterRestore: l,
            serializer: f,
            key: ((m = e.key) != null ? m : (L) => L)(c),
            paths: u,
            debug: d
          };
        }
      );
      s.$persist = () => {
        i.forEach((o) => {
          Ec(s.$state, o);
        });
      }, s.$hydrate = ({ runHooks: o = !0 } = {}) => {
        i.forEach((a) => {
          const { beforeRestore: l, afterRestore: f } = a;
          o && (l == null || l(t)), Tc(s, a), o && (f == null || f(t));
        });
      }, i.forEach((o) => {
        const { beforeRestore: a, afterRestore: l } = o;
        a == null || a(t), Tc(s, o), l == null || l(t), s.$subscribe(
          (f, c) => {
            Ec(c, o);
          },
          {
            detached: !0
          }
        );
      });
    };
  }
  //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var up;
  function k() {
    return up.apply(null, arguments);
  }
  function JL(e) {
    up = e;
  }
  function Xt(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function cr(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function Oe(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function jl(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
      if (Oe(e, t))
        return !1;
    return !0;
  }
  function ft(e) {
    return e === void 0;
  }
  function gn(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function $s(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function cp(e, t) {
    var n = [], r, s = e.length;
    for (r = 0; r < s; ++r)
      n.push(t(e[r], r));
    return n;
  }
  function jn(e, t) {
    for (var n in t)
      Oe(t, n) && (e[n] = t[n]);
    return Oe(t, "toString") && (e.toString = t.toString), Oe(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }
  function on(e, t, n, r) {
    return Ep(e, t, n, r, !0).utc();
  }
  function GL() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    };
  }
  function ie(e) {
    return e._pf == null && (e._pf = GL()), e._pf;
  }
  var Pa;
  Array.prototype.some ? Pa = Array.prototype.some : Pa = function(e) {
    var t = Object(this), n = t.length >>> 0, r;
    for (r = 0; r < n; r++)
      if (r in t && e.call(this, t[r], r, t))
        return !0;
    return !1;
  };
  function Sl(e) {
    if (e._isValid == null) {
      var t = ie(e), n = Pa.call(t.parsedDateParts, function(s) {
        return s != null;
      }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = r;
      else
        return r;
    }
    return e._isValid;
  }
  function wo(e) {
    var t = on(NaN);
    return e != null ? jn(ie(t), e) : ie(t).userInvalidated = !0, t;
  }
  var jc = k.momentProperties = [], Bo = !1;
  function Yl(e, t) {
    var n, r, s, i = jc.length;
    if (ft(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ft(t._i) || (e._i = t._i), ft(t._f) || (e._f = t._f), ft(t._l) || (e._l = t._l), ft(t._strict) || (e._strict = t._strict), ft(t._tzm) || (e._tzm = t._tzm), ft(t._isUTC) || (e._isUTC = t._isUTC), ft(t._offset) || (e._offset = t._offset), ft(t._pf) || (e._pf = ie(t)), ft(t._locale) || (e._locale = t._locale), i > 0)
      for (n = 0; n < i; n++)
        r = jc[n], s = t[r], ft(s) || (e[r] = s);
    return e;
  }
  function ei(e) {
    Yl(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Bo === !1 && (Bo = !0, k.updateOffset(this), Bo = !1);
  }
  function Dt(e) {
    return e instanceof ei || e != null && e._isAMomentObject != null;
  }
  function fp(e) {
    k.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
  }
  function qt(e, t) {
    var n = !0;
    return jn(function() {
      if (k.deprecationHandler != null && k.deprecationHandler(null, e), n) {
        var r = [], s, i, o, a = arguments.length;
        for (i = 0; i < a; i++) {
          if (s = "", typeof arguments[i] == "object") {
            s += `
[` + i + "] ";
            for (o in arguments[0])
              Oe(arguments[0], o) && (s += o + ": " + arguments[0][o] + ", ");
            s = s.slice(0, -2);
          } else
            s = arguments[i];
          r.push(s);
        }
        fp(
          e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
        ), n = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var Sc = {};
  function dp(e, t) {
    k.deprecationHandler != null && k.deprecationHandler(e, t), Sc[e] || (fp(t), Sc[e] = !0);
  }
  k.suppressDeprecationWarnings = !1;
  k.deprecationHandler = null;
  function an(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function BL(e) {
    var t, n;
    for (n in e)
      Oe(e, n) && (t = e[n], an(t) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function Ua(e, t) {
    var n = jn({}, e), r;
    for (r in t)
      Oe(t, r) && (cr(e[r]) && cr(t[r]) ? (n[r] = {}, jn(n[r], e[r]), jn(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e)
      Oe(e, r) && !Oe(t, r) && cr(e[r]) && (n[r] = jn({}, n[r]));
    return n;
  }
  function Pl(e) {
    e != null && this.set(e);
  }
  var Ha;
  Object.keys ? Ha = Object.keys : Ha = function(e) {
    var t, n = [];
    for (t in e)
      Oe(e, t) && n.push(t);
    return n;
  };
  var QL = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function _L(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return an(r) ? r.call(t, n) : r;
  }
  function sn(e, t, n) {
    var r = "" + Math.abs(e), s = t - r.length, i = e >= 0;
    return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Ul = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, pi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Qo = {}, Zr = {};
  function B(e, t, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), e && (Zr[e] = s), t && (Zr[t[0]] = function() {
      return sn(s.apply(this, arguments), t[1], t[2]);
    }), n && (Zr[n] = function() {
      return this.localeData().ordinal(
        s.apply(this, arguments),
        e
      );
    });
  }
  function $L(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function eA(e) {
    var t = e.match(Ul), n, r;
    for (n = 0, r = t.length; n < r; n++)
      Zr[t[n]] ? t[n] = Zr[t[n]] : t[n] = $L(t[n]);
    return function(s) {
      var i = "", o;
      for (o = 0; o < r; o++)
        i += an(t[o]) ? t[o].call(s, e) : t[o];
      return i;
    };
  }
  function Ri(e, t) {
    return e.isValid() ? (t = pp(t, e.localeData()), Qo[t] = Qo[t] || eA(t), Qo[t](e)) : e.localeData().invalidDate();
  }
  function pp(e, t) {
    var n = 5;
    function r(s) {
      return t.longDateFormat(s) || s;
    }
    for (pi.lastIndex = 0; n >= 0 && pi.test(e); )
      e = e.replace(
        pi,
        r
      ), pi.lastIndex = 0, n -= 1;
    return e;
  }
  var tA = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function nA(e) {
    var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(Ul).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[e]);
  }
  var rA = "Invalid date";
  function sA() {
    return this._invalidDate;
  }
  var iA = "%d", oA = /\d{1,2}/;
  function aA(e) {
    return this._ordinal.replace("%d", e);
  }
  var lA = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function uA(e, t, n, r) {
    var s = this._relativeTime[n];
    return an(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
  }
  function cA(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return an(n) ? n(t) : n.replace(/%s/i, t);
  }
  var Ws = {};
  function tt(e, t) {
    var n = e.toLowerCase();
    Ws[n] = Ws[n + "s"] = Ws[t] = e;
  }
  function Rt(e) {
    return typeof e == "string" ? Ws[e] || Ws[e.toLowerCase()] : void 0;
  }
  function Hl(e) {
    var t = {}, n, r;
    for (r in e)
      Oe(e, r) && (n = Rt(r), n && (t[n] = e[r]));
    return t;
  }
  var hp = {};
  function nt(e, t) {
    hp[e] = t;
  }
  function fA(e) {
    var t = [], n;
    for (n in e)
      Oe(e, n) && t.push({ unit: n, priority: hp[n] });
    return t.sort(function(r, s) {
      return r.priority - s.priority;
    }), t;
  }
  function go(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  function gt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function ue(e) {
    var t = +e, n = 0;
    return t !== 0 && isFinite(t) && (n = gt(t)), n;
  }
  function $r(e, t) {
    return function(n) {
      return n != null ? (mp(this, e, n), k.updateOffset(this, t), this) : $i(this, e);
    };
  }
  function $i(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function mp(e, t, n) {
    e.isValid() && !isNaN(n) && (t === "FullYear" && go(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ue(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
      n,
      e.month(),
      Mo(n, e.month())
    )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function dA(e) {
    return e = Rt(e), an(this[e]) ? this[e]() : this;
  }
  function pA(e, t) {
    if (typeof e == "object") {
      e = Hl(e);
      var n = fA(e), r, s = n.length;
      for (r = 0; r < s; r++)
        this[n[r].unit](e[n[r].unit]);
    } else if (e = Rt(e), an(this[e]))
      return this[e](t);
    return this;
  }
  var yp = /\d/, xt = /\d\d/, bp = /\d{3}/, kl = /\d{4}/, Wo = /[+-]?\d{6}/, Te = /\d\d?/, vp = /\d\d\d\d?/, Op = /\d\d\d\d\d\d?/, No = /\d{1,3}/, Zl = /\d{1,4}/, qo = /[+-]?\d{1,6}/, es = /\d+/, Ro = /[+-]?\d+/, hA = /Z|[+-]\d\d:?\d\d/gi, Fo = /Z|[+-]\d\d(?::?\d\d)?/gi, mA = /[+-]?\d+(\.\d{1,3})?/, ti = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, eo;
  eo = {};
  function K(e, t, n) {
    eo[e] = an(t) ? t : function(r, s) {
      return r && n ? n : t;
    };
  }
  function yA(e, t) {
    return Oe(eo, e) ? eo[e](t._strict, t._locale) : new RegExp(bA(e));
  }
  function bA(e) {
    return yt(
      e.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(t, n, r, s, i) {
          return n || r || s || i;
        }
      )
    );
  }
  function yt(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var ka = {};
  function Ne(e, t) {
    var n, r = t, s;
    for (typeof e == "string" && (e = [e]), gn(t) && (r = function(i, o) {
      o[t] = ue(i);
    }), s = e.length, n = 0; n < s; n++)
      ka[e[n]] = r;
  }
  function ni(e, t) {
    Ne(e, function(n, r, s, i) {
      s._w = s._w || {}, t(n, s._w, s, i);
    });
  }
  function vA(e, t, n) {
    t != null && Oe(ka, e) && ka[e](t, n._a, n, e);
  }
  var et = 0, yn = 1, en = 2, De = 3, kt = 4, bn = 5, rr = 6, OA = 7, xA = 8;
  function VA(e, t) {
    return (e % t + t) % t;
  }
  var Ue;
  Array.prototype.indexOf ? Ue = Array.prototype.indexOf : Ue = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e)
        return t;
    return -1;
  };
  function Mo(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var n = VA(t, 12);
    return e += (t - n) / 12, n === 1 ? go(e) ? 29 : 28 : 31 - n % 7 % 2;
  }
  B("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  B("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e);
  });
  B("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e);
  });
  tt("month", "M");
  nt("month", 8);
  K("M", Te);
  K("MM", Te, xt);
  K("MMM", function(e, t) {
    return t.monthsShortRegex(e);
  });
  K("MMMM", function(e, t) {
    return t.monthsRegex(e);
  });
  Ne(["M", "MM"], function(e, t) {
    t[yn] = ue(e) - 1;
  });
  Ne(["MMM", "MMMM"], function(e, t, n, r) {
    var s = n._locale.monthsParse(e, r, n._strict);
    s != null ? t[yn] = s : ie(n).invalidMonth = e;
  });
  var LA = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), xp = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Vp = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, AA = ti, wA = ti;
  function gA(e, t) {
    return e ? Xt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Vp).test(t) ? "format" : "standalone"][e.month()] : Xt(this._months) ? this._months : this._months.standalone;
  }
  function WA(e, t) {
    return e ? Xt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Vp.test(t) ? "format" : "standalone"][e.month()] : Xt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function NA(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        i = on([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
          i,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (s = Ue.call(this._shortMonthsParse, o), s !== -1 ? s : null) : (s = Ue.call(this._longMonthsParse, o), s !== -1 ? s : null) : t === "MMM" ? (s = Ue.call(this._shortMonthsParse, o), s !== -1 ? s : (s = Ue.call(this._longMonthsParse, o), s !== -1 ? s : null)) : (s = Ue.call(this._longMonthsParse, o), s !== -1 ? s : (s = Ue.call(this._shortMonthsParse, o), s !== -1 ? s : null));
  }
  function qA(e, t, n) {
    var r, s, i;
    if (this._monthsParseExact)
      return NA.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = on([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
        "^" + this.months(s, "").replace(".", "") + "$",
        "i"
      ), this._shortMonthsParse[r] = new RegExp(
        "^" + this.monthsShort(s, "").replace(".", "") + "$",
        "i"
      )), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
        return r;
      if (!n && this._monthsParse[r].test(e))
        return r;
    }
  }
  function Lp(e, t) {
    var n;
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = ue(t);
      else if (t = e.localeData().monthsParse(t), !gn(t))
        return e;
    }
    return n = Math.min(e.date(), Mo(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }
  function Ap(e) {
    return e != null ? (Lp(this, e), k.updateOffset(this, !0), this) : $i(this, "Month");
  }
  function RA() {
    return Mo(this.year(), this.month());
  }
  function FA(e) {
    return this._monthsParseExact ? (Oe(this, "_monthsRegex") || wp.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Oe(this, "_monthsShortRegex") || (this._monthsShortRegex = AA), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function MA(e) {
    return this._monthsParseExact ? (Oe(this, "_monthsRegex") || wp.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Oe(this, "_monthsRegex") || (this._monthsRegex = wA), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function wp() {
    function e(o, a) {
      return a.length - o.length;
    }
    var t = [], n = [], r = [], s, i;
    for (s = 0; s < 12; s++)
      i = on([2e3, s]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
    for (t.sort(e), n.sort(e), r.sort(e), s = 0; s < 12; s++)
      t[s] = yt(t[s]), n[s] = yt(n[s]);
    for (s = 0; s < 24; s++)
      r[s] = yt(r[s]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._monthsShortStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  B("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? sn(e, 4) : "+" + e;
  });
  B(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  B(0, ["YYYY", 4], 0, "year");
  B(0, ["YYYYY", 5], 0, "year");
  B(0, ["YYYYYY", 6, !0], 0, "year");
  tt("year", "y");
  nt("year", 1);
  K("Y", Ro);
  K("YY", Te, xt);
  K("YYYY", Zl, kl);
  K("YYYYY", qo, Wo);
  K("YYYYYY", qo, Wo);
  Ne(["YYYYY", "YYYYYY"], et);
  Ne("YYYY", function(e, t) {
    t[et] = e.length === 2 ? k.parseTwoDigitYear(e) : ue(e);
  });
  Ne("YY", function(e, t) {
    t[et] = k.parseTwoDigitYear(e);
  });
  Ne("Y", function(e, t) {
    t[et] = parseInt(e, 10);
  });
  function Ns(e) {
    return go(e) ? 366 : 365;
  }
  k.parseTwoDigitYear = function(e) {
    return ue(e) + (ue(e) > 68 ? 1900 : 2e3);
  };
  var gp = $r("FullYear", !0);
  function zA() {
    return go(this.year());
  }
  function TA(e, t, n, r, s, i, o) {
    var a;
    return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, s, i, o), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, s, i, o), a;
  }
  function Zs(e) {
    var t, n;
    return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function to(e, t, n) {
    var r = 7 + t - n, s = (7 + Zs(e, 0, r).getUTCDay() - t) % 7;
    return -s + r - 1;
  }
  function Wp(e, t, n, r, s) {
    var i = (7 + n - r) % 7, o = to(e, r, s), a = 1 + 7 * (t - 1) + i + o, l, f;
    return a <= 0 ? (l = e - 1, f = Ns(l) + a) : a > Ns(e) ? (l = e + 1, f = a - Ns(e)) : (l = e, f = a), {
      year: l,
      dayOfYear: f
    };
  }
  function Ks(e, t, n) {
    var r = to(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, o;
    return s < 1 ? (o = e.year() - 1, i = s + xn(o, t, n)) : s > xn(e.year(), t, n) ? (i = s - xn(e.year(), t, n), o = e.year() + 1) : (o = e.year(), i = s), {
      week: i,
      year: o
    };
  }
  function xn(e, t, n) {
    var r = to(e, t, n), s = to(e + 1, t, n);
    return (Ns(e) - r + s) / 7;
  }
  B("w", ["ww", 2], "wo", "week");
  B("W", ["WW", 2], "Wo", "isoWeek");
  tt("week", "w");
  tt("isoWeek", "W");
  nt("week", 5);
  nt("isoWeek", 5);
  K("w", Te);
  K("ww", Te, xt);
  K("W", Te);
  K("WW", Te, xt);
  ni(
    ["w", "ww", "W", "WW"],
    function(e, t, n, r) {
      t[r.substr(0, 1)] = ue(e);
    }
  );
  function EA(e) {
    return Ks(e, this._week.dow, this._week.doy).week;
  }
  var jA = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function SA() {
    return this._week.dow;
  }
  function YA() {
    return this._week.doy;
  }
  function PA(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function UA(e) {
    var t = Ks(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  B("d", 0, "do", "day");
  B("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e);
  });
  B("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e);
  });
  B("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e);
  });
  B("e", 0, 0, "weekday");
  B("E", 0, 0, "isoWeekday");
  tt("day", "d");
  tt("weekday", "e");
  tt("isoWeekday", "E");
  nt("day", 11);
  nt("weekday", 11);
  nt("isoWeekday", 11);
  K("d", Te);
  K("e", Te);
  K("E", Te);
  K("dd", function(e, t) {
    return t.weekdaysMinRegex(e);
  });
  K("ddd", function(e, t) {
    return t.weekdaysShortRegex(e);
  });
  K("dddd", function(e, t) {
    return t.weekdaysRegex(e);
  });
  ni(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var s = n._locale.weekdaysParse(e, r, n._strict);
    s != null ? t.d = s : ie(n).invalidWeekday = e;
  });
  ni(["d", "e", "E"], function(e, t, n, r) {
    t[r] = ue(e);
  });
  function HA(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function kA(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function Kl(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var ZA = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Np = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), KA = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), XA = ti, DA = ti, IA = ti;
  function CA(e, t) {
    var n = Xt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? Kl(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function JA(e) {
    return e === !0 ? Kl(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function GA(e) {
    return e === !0 ? Kl(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function BA(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        i = on([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
          i,
          ""
        ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
          i,
          ""
        ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (s = Ue.call(this._weekdaysParse, o), s !== -1 ? s : null) : t === "ddd" ? (s = Ue.call(this._shortWeekdaysParse, o), s !== -1 ? s : null) : (s = Ue.call(this._minWeekdaysParse, o), s !== -1 ? s : null) : t === "dddd" ? (s = Ue.call(this._weekdaysParse, o), s !== -1 || (s = Ue.call(this._shortWeekdaysParse, o), s !== -1) ? s : (s = Ue.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : t === "ddd" ? (s = Ue.call(this._shortWeekdaysParse, o), s !== -1 || (s = Ue.call(this._weekdaysParse, o), s !== -1) ? s : (s = Ue.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : (s = Ue.call(this._minWeekdaysParse, o), s !== -1 || (s = Ue.call(this._weekdaysParse, o), s !== -1) ? s : (s = Ue.call(this._shortWeekdaysParse, o), s !== -1 ? s : null));
  }
  function QA(e, t, n) {
    var r, s, i;
    if (this._weekdaysParseExact)
      return BA.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = on([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
        "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._shortWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._minWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
        "i"
      )), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
        return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
        return r;
      if (!n && this._weekdaysParse[r].test(e))
        return r;
    }
  }
  function _A(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null ? (e = HA(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function $A(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function e1(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = kA(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function t1(e) {
    return this._weekdaysParseExact ? (Oe(this, "_weekdaysRegex") || Xl.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Oe(this, "_weekdaysRegex") || (this._weekdaysRegex = XA), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function n1(e) {
    return this._weekdaysParseExact ? (Oe(this, "_weekdaysRegex") || Xl.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Oe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = DA), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function r1(e) {
    return this._weekdaysParseExact ? (Oe(this, "_weekdaysRegex") || Xl.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Oe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = IA), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function Xl() {
    function e(c, u) {
      return u.length - c.length;
    }
    var t = [], n = [], r = [], s = [], i, o, a, l, f;
    for (i = 0; i < 7; i++)
      o = on([2e3, 1]).day(i), a = yt(this.weekdaysMin(o, "")), l = yt(this.weekdaysShort(o, "")), f = yt(this.weekdays(o, "")), t.push(a), n.push(l), r.push(f), s.push(a), s.push(l), s.push(f);
    t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    ), this._weekdaysShortStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._weekdaysMinStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function Dl() {
    return this.hours() % 12 || 12;
  }
  function s1() {
    return this.hours() || 24;
  }
  B("H", ["HH", 2], 0, "hour");
  B("h", ["hh", 2], 0, Dl);
  B("k", ["kk", 2], 0, s1);
  B("hmm", 0, 0, function() {
    return "" + Dl.apply(this) + sn(this.minutes(), 2);
  });
  B("hmmss", 0, 0, function() {
    return "" + Dl.apply(this) + sn(this.minutes(), 2) + sn(this.seconds(), 2);
  });
  B("Hmm", 0, 0, function() {
    return "" + this.hours() + sn(this.minutes(), 2);
  });
  B("Hmmss", 0, 0, function() {
    return "" + this.hours() + sn(this.minutes(), 2) + sn(this.seconds(), 2);
  });
  function qp(e, t) {
    B(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  qp("a", !0);
  qp("A", !1);
  tt("hour", "h");
  nt("hour", 13);
  function Rp(e, t) {
    return t._meridiemParse;
  }
  K("a", Rp);
  K("A", Rp);
  K("H", Te);
  K("h", Te);
  K("k", Te);
  K("HH", Te, xt);
  K("hh", Te, xt);
  K("kk", Te, xt);
  K("hmm", vp);
  K("hmmss", Op);
  K("Hmm", vp);
  K("Hmmss", Op);
  Ne(["H", "HH"], De);
  Ne(["k", "kk"], function(e, t, n) {
    var r = ue(e);
    t[De] = r === 24 ? 0 : r;
  });
  Ne(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  });
  Ne(["h", "hh"], function(e, t, n) {
    t[De] = ue(e), ie(n).bigHour = !0;
  });
  Ne("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[De] = ue(e.substr(0, r)), t[kt] = ue(e.substr(r)), ie(n).bigHour = !0;
  });
  Ne("hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[De] = ue(e.substr(0, r)), t[kt] = ue(e.substr(r, 2)), t[bn] = ue(e.substr(s)), ie(n).bigHour = !0;
  });
  Ne("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[De] = ue(e.substr(0, r)), t[kt] = ue(e.substr(r));
  });
  Ne("Hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[De] = ue(e.substr(0, r)), t[kt] = ue(e.substr(r, 2)), t[bn] = ue(e.substr(s));
  });
  function i1(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var o1 = /[ap]\.?m?\.?/i, a1 = $r("Hours", !0);
  function l1(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var Fp = {
    calendar: QL,
    longDateFormat: tA,
    invalidDate: rA,
    ordinal: iA,
    dayOfMonthOrdinalParse: oA,
    relativeTime: lA,
    months: LA,
    monthsShort: xp,
    week: jA,
    weekdays: ZA,
    weekdaysMin: KA,
    weekdaysShort: Np,
    meridiemParse: o1
  }, je = {}, as = {}, Xs;
  function u1(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
      if (e[n] !== t[n])
        return n;
    return r;
  }
  function Yc(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function c1(e) {
    for (var t = 0, n, r, s, i; t < e.length; ) {
      for (i = Yc(e[t]).split("-"), n = i.length, r = Yc(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = zo(i.slice(0, n).join("-")), s)
          return s;
        if (r && r.length >= n && u1(i, r) >= n - 1)
          break;
        n--;
      }
      t++;
    }
    return Xs;
  }
  function f1(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function zo(e) {
    var t = null, n;
    if (je[e] === void 0 && typeof zi < "u" && zi && zi.exports && f1(e))
      try {
        t = Xs._abbr, n = require, n("./locale/" + e), Pn(t);
      } catch {
        je[e] = null;
      }
    return je[e];
  }
  function Pn(e, t) {
    var n;
    return e && (ft(t) ? n = Nn(e) : n = Il(e, t), n ? Xs = n : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), Xs._abbr;
  }
  function Il(e, t) {
    if (t !== null) {
      var n, r = Fp;
      if (t.abbr = e, je[e] != null)
        dp(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), r = je[e]._config;
      else if (t.parentLocale != null)
        if (je[t.parentLocale] != null)
          r = je[t.parentLocale]._config;
        else if (n = zo(t.parentLocale), n != null)
          r = n._config;
        else
          return as[t.parentLocale] || (as[t.parentLocale] = []), as[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return je[e] = new Pl(Ua(r, t)), as[e] && as[e].forEach(function(s) {
        Il(s.name, s.config);
      }), Pn(e), je[e];
    } else
      return delete je[e], null;
  }
  function d1(e, t) {
    if (t != null) {
      var n, r, s = Fp;
      je[e] != null && je[e].parentLocale != null ? je[e].set(Ua(je[e]._config, t)) : (r = zo(e), r != null && (s = r._config), t = Ua(s, t), r == null && (t.abbr = e), n = new Pl(t), n.parentLocale = je[e], je[e] = n), Pn(e);
    } else
      je[e] != null && (je[e].parentLocale != null ? (je[e] = je[e].parentLocale, e === Pn() && Pn(e)) : je[e] != null && delete je[e]);
    return je[e];
  }
  function Nn(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return Xs;
    if (!Xt(e)) {
      if (t = zo(e), t)
        return t;
      e = [e];
    }
    return c1(e);
  }
  function p1() {
    return Ha(je);
  }
  function Cl(e) {
    var t, n = e._a;
    return n && ie(e).overflow === -2 && (t = n[yn] < 0 || n[yn] > 11 ? yn : n[en] < 1 || n[en] > Mo(n[et], n[yn]) ? en : n[De] < 0 || n[De] > 24 || n[De] === 24 && (n[kt] !== 0 || n[bn] !== 0 || n[rr] !== 0) ? De : n[kt] < 0 || n[kt] > 59 ? kt : n[bn] < 0 || n[bn] > 59 ? bn : n[rr] < 0 || n[rr] > 999 ? rr : -1, ie(e)._overflowDayOfYear && (t < et || t > en) && (t = en), ie(e)._overflowWeeks && t === -1 && (t = OA), ie(e)._overflowWeekday && t === -1 && (t = xA), ie(e).overflow = t), e;
  }
  var h1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, m1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, y1 = /Z|[+-]\d\d(?::?\d\d)?/, hi = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1]
  ], _o = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], b1 = /^\/?Date\((-?\d+)/i, v1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, O1 = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function Mp(e) {
    var t, n, r = e._i, s = h1.exec(r) || m1.exec(r), i, o, a, l, f = hi.length, c = _o.length;
    if (s) {
      for (ie(e).iso = !0, t = 0, n = f; t < n; t++)
        if (hi[t][1].exec(s[1])) {
          o = hi[t][0], i = hi[t][2] !== !1;
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
      if (s[3]) {
        for (t = 0, n = c; t < n; t++)
          if (_o[t][1].exec(s[3])) {
            a = (s[2] || " ") + _o[t][0];
            break;
          }
        if (a == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!i && a != null) {
        e._isValid = !1;
        return;
      }
      if (s[4])
        if (y1.exec(s[4]))
          l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = o + (a || "") + (l || ""), Gl(e);
    } else
      e._isValid = !1;
  }
  function x1(e, t, n, r, s, i) {
    var o = [
      V1(e),
      xp.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return i && o.push(parseInt(i, 10)), o;
  }
  function V1(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function L1(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function A1(e, t, n) {
    if (e) {
      var r = Np.indexOf(e), s = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (r !== s)
        return ie(n).weekdayMismatch = !0, n._isValid = !1, !1;
    }
    return !0;
  }
  function w1(e, t, n) {
    if (e)
      return O1[e];
    if (t)
      return 0;
    var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
    return i * 60 + s;
  }
  function zp(e) {
    var t = v1.exec(L1(e._i)), n;
    if (t) {
      if (n = x1(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !A1(t[1], n, e))
        return;
      e._a = n, e._tzm = w1(t[8], t[9], t[10]), e._d = Zs.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ie(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function g1(e) {
    var t = b1.exec(e._i);
    if (t !== null) {
      e._d = /* @__PURE__ */ new Date(+t[1]);
      return;
    }
    if (Mp(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (zp(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    e._strict ? e._isValid = !1 : k.createFromInputFallback(e);
  }
  k.createFromInputFallback = qt(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function Mr(e, t, n) {
    return e ?? t ?? n;
  }
  function W1(e) {
    var t = new Date(k.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Jl(e) {
    var t, n, r = [], s, i, o;
    if (!e._d) {
      for (s = W1(e), e._w && e._a[en] == null && e._a[yn] == null && N1(e), e._dayOfYear != null && (o = Mr(e._a[et], s[et]), (e._dayOfYear > Ns(o) || e._dayOfYear === 0) && (ie(e)._overflowDayOfYear = !0), n = Zs(o, 0, e._dayOfYear), e._a[yn] = n.getUTCMonth(), e._a[en] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[De] === 24 && e._a[kt] === 0 && e._a[bn] === 0 && e._a[rr] === 0 && (e._nextDay = !0, e._a[De] = 0), e._d = (e._useUTC ? Zs : TA).apply(
        null,
        r
      ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[De] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (ie(e).weekdayMismatch = !0);
    }
  }
  function N1(e) {
    var t, n, r, s, i, o, a, l, f;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, o = 4, n = Mr(
      t.GG,
      e._a[et],
      Ks(ze(), 1, 4).year
    ), r = Mr(t.W, 1), s = Mr(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, f = Ks(ze(), i, o), n = Mr(t.gg, e._a[et], f.year), r = Mr(t.w, f.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : s = i), r < 1 || r > xn(n, i, o) ? ie(e)._overflowWeeks = !0 : l != null ? ie(e)._overflowWeekday = !0 : (a = Wp(n, r, s, i, o), e._a[et] = a.year, e._dayOfYear = a.dayOfYear);
  }
  k.ISO_8601 = function() {
  };
  k.RFC_2822 = function() {
  };
  function Gl(e) {
    if (e._f === k.ISO_8601) {
      Mp(e);
      return;
    }
    if (e._f === k.RFC_2822) {
      zp(e);
      return;
    }
    e._a = [], ie(e).empty = !0;
    var t = "" + e._i, n, r, s, i, o, a = t.length, l = 0, f, c;
    for (s = pp(e._f, e._locale).match(Ul) || [], c = s.length, n = 0; n < c; n++)
      i = s[n], r = (t.match(yA(i, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && ie(e).unusedInput.push(o), t = t.slice(
        t.indexOf(r) + r.length
      ), l += r.length), Zr[i] ? (r ? ie(e).empty = !1 : ie(e).unusedTokens.push(i), vA(i, r, e)) : e._strict && !r && ie(e).unusedTokens.push(i);
    ie(e).charsLeftOver = a - l, t.length > 0 && ie(e).unusedInput.push(t), e._a[De] <= 12 && ie(e).bigHour === !0 && e._a[De] > 0 && (ie(e).bigHour = void 0), ie(e).parsedDateParts = e._a.slice(0), ie(e).meridiem = e._meridiem, e._a[De] = q1(
      e._locale,
      e._a[De],
      e._meridiem
    ), f = ie(e).era, f !== null && (e._a[et] = e._locale.erasConvertYear(f, e._a[et])), Jl(e), Cl(e);
  }
  function q1(e, t, n) {
    var r;
    return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
  }
  function R1(e) {
    var t, n, r, s, i, o, a = !1, l = e._f.length;
    if (l === 0) {
      ie(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (s = 0; s < l; s++)
      i = 0, o = !1, t = Yl({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Gl(t), Sl(t) && (o = !0), i += ie(t).charsLeftOver, i += ie(t).unusedTokens.length * 10, ie(t).score = i, a ? i < r && (r = i, n = t) : (r == null || i < r || o) && (r = i, n = t, o && (a = !0));
    jn(e, n || t);
  }
  function F1(e) {
    if (!e._d) {
      var t = Hl(e._i), n = t.day === void 0 ? t.date : t.day;
      e._a = cp(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function(r) {
          return r && parseInt(r, 10);
        }
      ), Jl(e);
    }
  }
  function M1(e) {
    var t = new ei(Cl(Tp(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function Tp(e) {
    var t = e._i, n = e._f;
    return e._locale = e._locale || Nn(e._l), t === null || n === void 0 && t === "" ? wo({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Dt(t) ? new ei(Cl(t)) : ($s(t) ? e._d = t : Xt(n) ? R1(e) : n ? Gl(e) : z1(e), Sl(e) || (e._d = null), e));
  }
  function z1(e) {
    var t = e._i;
    ft(t) ? e._d = new Date(k.now()) : $s(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? g1(e) : Xt(t) ? (e._a = cp(t.slice(0), function(n) {
      return parseInt(n, 10);
    }), Jl(e)) : cr(t) ? F1(e) : gn(t) ? e._d = new Date(t) : k.createFromInputFallback(e);
  }
  function Ep(e, t, n, r, s) {
    var i = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (cr(e) && jl(e) || Xt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = n, i._i = e, i._f = t, i._strict = r, M1(i);
  }
  function ze(e, t, n, r) {
    return Ep(e, t, n, r, !1);
  }
  var T1 = qt(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = ze.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : wo();
    }
  ), E1 = qt(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = ze.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : wo();
    }
  );
  function jp(e, t) {
    var n, r;
    if (t.length === 1 && Xt(t[0]) && (t = t[0]), !t.length)
      return ze();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function j1() {
    var e = [].slice.call(arguments, 0);
    return jp("isBefore", e);
  }
  function S1() {
    var e = [].slice.call(arguments, 0);
    return jp("isAfter", e);
  }
  var Y1 = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, ls = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function P1(e) {
    var t, n = !1, r, s = ls.length;
    for (t in e)
      if (Oe(e, t) && !(Ue.call(ls, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
        return !1;
    for (r = 0; r < s; ++r)
      if (e[ls[r]]) {
        if (n)
          return !1;
        parseFloat(e[ls[r]]) !== ue(e[ls[r]]) && (n = !0);
      }
    return !0;
  }
  function U1() {
    return this._isValid;
  }
  function H1() {
    return It(NaN);
  }
  function To(e) {
    var t = Hl(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, a = t.hour || 0, l = t.minute || 0, f = t.second || 0, c = t.millisecond || 0;
    this._isValid = P1(t), this._milliseconds = +c + f * 1e3 + // 1000
    l * 6e4 + // 1000 * 60
    a * 1e3 * 60 * 60, this._days = +o + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = Nn(), this._bubble();
  }
  function Fi(e) {
    return e instanceof To;
  }
  function Za(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function k1(e, t, n) {
    var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, o;
    for (o = 0; o < r; o++)
      (n && e[o] !== t[o] || !n && ue(e[o]) !== ue(t[o])) && i++;
    return i + s;
  }
  function Sp(e, t) {
    B(e, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + sn(~~(n / 60), 2) + t + sn(~~n % 60, 2);
    });
  }
  Sp("Z", ":");
  Sp("ZZ", "");
  K("Z", Fo);
  K("ZZ", Fo);
  Ne(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0, n._tzm = Bl(Fo, e);
  });
  var Z1 = /([\+\-]|\d\d)/gi;
  function Bl(e, t) {
    var n = (t || "").match(e), r, s, i;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(Z1) || ["-", 0, 0], i = +(s[1] * 60) + ue(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function Ql(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(), r = (Dt(e) || $s(e) ? e.valueOf() : ze(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), k.updateOffset(n, !1), n) : ze(e).local();
  }
  function Ka(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  k.updateOffset = function() {
  };
  function K1(e, t, n) {
    var r = this._offset || 0, s;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = Bl(Fo, e), e === null)
          return this;
      } else
        Math.abs(e) < 16 && !n && (e = e * 60);
      return !this._isUTC && t && (s = Ka(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? Up(
        this,
        It(e - r, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, k.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? r : Ka(this);
  }
  function X1(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function D1(e) {
    return this.utcOffset(0, e);
  }
  function I1(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ka(this), "m")), this;
  }
  function C1() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Bl(hA, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function J1(e) {
    return this.isValid() ? (e = e ? ze(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function G1() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function B1() {
    if (!ft(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return Yl(e, this), e = Tp(e), e._a ? (t = e._isUTC ? on(e._a) : ze(e._a), this._isDSTShifted = this.isValid() && k1(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function Q1() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function _1() {
    return this.isValid() ? this._isUTC : !1;
  }
  function Yp() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var $1 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ew = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function It(e, t) {
    var n = e, r = null, s, i, o;
    return Fi(e) ? n = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : gn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = $1.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: ue(r[en]) * s,
      h: ue(r[De]) * s,
      m: ue(r[kt]) * s,
      s: ue(r[bn]) * s,
      ms: ue(Za(r[rr] * 1e3)) * s
      // the millisecond decimal point is included in the match
    }) : (r = ew.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Bn(r[2], s),
      M: Bn(r[3], s),
      w: Bn(r[4], s),
      d: Bn(r[5], s),
      h: Bn(r[6], s),
      m: Bn(r[7], s),
      s: Bn(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (o = tw(
      ze(n.from),
      ze(n.to)
    ), n = {}, n.ms = o.milliseconds, n.M = o.months), i = new To(n), Fi(e) && Oe(e, "_locale") && (i._locale = e._locale), Fi(e) && Oe(e, "_isValid") && (i._isValid = e._isValid), i;
  }
  It.fn = To.prototype;
  It.invalid = H1;
  function Bn(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Pc(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }
  function tw(e, t) {
    var n;
    return e.isValid() && t.isValid() ? (t = Ql(t, e), e.isBefore(t) ? n = Pc(e, t) : (n = Pc(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
  }
  function Pp(e, t) {
    return function(n, r) {
      var s, i;
      return r !== null && !isNaN(+r) && (dp(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), i = n, n = r, r = i), s = It(n, r), Up(this, s, e), this;
    };
  }
  function Up(e, t, n, r) {
    var s = t._milliseconds, i = Za(t._days), o = Za(t._months);
    e.isValid() && (r = r ?? !0, o && Lp(e, $i(e, "Month") + o * n), i && mp(e, "Date", $i(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && k.updateOffset(e, i || o));
  }
  var nw = Pp(1, "add"), rw = Pp(-1, "subtract");
  function Hp(e) {
    return typeof e == "string" || e instanceof String;
  }
  function sw(e) {
    return Dt(e) || $s(e) || Hp(e) || gn(e) || ow(e) || iw(e) || e === null || e === void 0;
  }
  function iw(e) {
    var t = cr(e) && !jl(e), n = !1, r = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], s, i, o = r.length;
    for (s = 0; s < o; s += 1)
      i = r[s], n = n || Oe(e, i);
    return t && n;
  }
  function ow(e) {
    var t = Xt(e), n = !1;
    return t && (n = e.filter(function(r) {
      return !gn(r) && Hp(e);
    }).length === 0), t && n;
  }
  function aw(e) {
    var t = cr(e) && !jl(e), n = !1, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], s, i;
    for (s = 0; s < r.length; s += 1)
      i = r[s], n = n || Oe(e, i);
    return t && n;
  }
  function lw(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function uw(e, t) {
    arguments.length === 1 && (arguments[0] ? sw(arguments[0]) ? (e = arguments[0], t = void 0) : aw(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var n = e || ze(), r = Ql(n, this).startOf("day"), s = k.calendarFormat(this, r) || "sameElse", i = t && (an(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(
      i || this.localeData().calendar(s, this, ze(n))
    );
  }
  function cw() {
    return new ei(this);
  }
  function fw(e, t) {
    var n = Dt(e) ? e : ze(e);
    return this.isValid() && n.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function dw(e, t) {
    var n = Dt(e) ? e : ze(e);
    return this.isValid() && n.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
  }
  function pw(e, t, n, r) {
    var s = Dt(e) ? e : ze(e), i = Dt(t) ? t : ze(t);
    return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
  }
  function hw(e, t) {
    var n = Dt(e) ? e : ze(e), r;
    return this.isValid() && n.isValid() ? (t = Rt(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
  }
  function mw(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function yw(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function bw(e, t, n) {
    var r, s, i;
    if (!this.isValid())
      return NaN;
    if (r = Ql(e, this), !r.isValid())
      return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Rt(t), t) {
      case "year":
        i = Mi(this, r) / 12;
        break;
      case "month":
        i = Mi(this, r);
        break;
      case "quarter":
        i = Mi(this, r) / 3;
        break;
      case "second":
        i = (this - r) / 1e3;
        break;
      case "minute":
        i = (this - r) / 6e4;
        break;
      case "hour":
        i = (this - r) / 36e5;
        break;
      case "day":
        i = (this - r - s) / 864e5;
        break;
      case "week":
        i = (this - r - s) / 6048e5;
        break;
      default:
        i = this - r;
    }
    return n ? i : gt(i);
  }
  function Mi(e, t) {
    if (e.date() < t.date())
      return -Mi(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, i;
    return t - r < 0 ? (s = e.clone().add(n - 1, "months"), i = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), i = (t - r) / (s - r)), -(n + i) || 0;
  }
  k.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  k.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function vw() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Ow(e) {
    if (!this.isValid())
      return null;
    var t = e !== !0, n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Ri(
      n,
      t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    ) : an(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ri(n, "Z")) : Ri(
      n,
      t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function xw() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", n, r, s, i;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + s + i);
  }
  function Vw(e) {
    e || (e = this.isUtc() ? k.defaultFormatUtc : k.defaultFormat);
    var t = Ri(this, e);
    return this.localeData().postformat(t);
  }
  function Lw(e, t) {
    return this.isValid() && (Dt(e) && e.isValid() || ze(e).isValid()) ? It({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Aw(e) {
    return this.from(ze(), e);
  }
  function ww(e, t) {
    return this.isValid() && (Dt(e) && e.isValid() || ze(e).isValid()) ? It({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function gw(e) {
    return this.to(ze(), e);
  }
  function kp(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = Nn(e), t != null && (this._locale = t), this);
  }
  var Zp = qt(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function Kp() {
    return this._locale;
  }
  var no = 1e3, Kr = 60 * no, ro = 60 * Kr, Xp = (365 * 400 + 97) * 24 * ro;
  function Xr(e, t) {
    return (e % t + t) % t;
  }
  function Dp(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Xp : new Date(e, t, n).valueOf();
  }
  function Ip(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Xp : Date.UTC(e, t, n);
  }
  function Ww(e) {
    var t, n;
    if (e = Rt(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Ip : Dp, e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= Xr(
          t + (this._isUTC ? 0 : this.utcOffset() * Kr),
          ro
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= Xr(t, Kr);
        break;
      case "second":
        t = this._d.valueOf(), t -= Xr(t, no);
        break;
    }
    return this._d.setTime(t), k.updateOffset(this, !0), this;
  }
  function Nw(e) {
    var t, n;
    if (e = Rt(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Ip : Dp, e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += ro - Xr(
          t + (this._isUTC ? 0 : this.utcOffset() * Kr),
          ro
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += Kr - Xr(t, Kr) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += no - Xr(t, no) - 1;
        break;
    }
    return this._d.setTime(t), k.updateOffset(this, !0), this;
  }
  function qw() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function Rw() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Fw() {
    return new Date(this.valueOf());
  }
  function Mw() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond()
    ];
  }
  function zw() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }
  function Tw() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Ew() {
    return Sl(this);
  }
  function jw() {
    return jn({}, ie(this));
  }
  function Sw() {
    return ie(this).overflow;
  }
  function Yw() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  B("N", 0, 0, "eraAbbr");
  B("NN", 0, 0, "eraAbbr");
  B("NNN", 0, 0, "eraAbbr");
  B("NNNN", 0, 0, "eraName");
  B("NNNNN", 0, 0, "eraNarrow");
  B("y", ["y", 1], "yo", "eraYear");
  B("y", ["yy", 2], 0, "eraYear");
  B("y", ["yyy", 3], 0, "eraYear");
  B("y", ["yyyy", 4], 0, "eraYear");
  K("N", _l);
  K("NN", _l);
  K("NNN", _l);
  K("NNNN", Jw);
  K("NNNNN", Gw);
  Ne(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(e, t, n, r) {
      var s = n._locale.erasParse(e, r, n._strict);
      s ? ie(n).era = s : ie(n).invalidEra = e;
    }
  );
  K("y", es);
  K("yy", es);
  K("yyy", es);
  K("yyyy", es);
  K("yo", Bw);
  Ne(["y", "yy", "yyy", "yyyy"], et);
  Ne(["yo"], function(e, t, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[et] = n._locale.eraYearOrdinalParse(e, s) : t[et] = parseInt(e, 10);
  });
  function Pw(e, t) {
    var n, r, s, i = this._eras || Nn("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) {
      switch (typeof i[n].since) {
        case "string":
          s = k(i[n].since).startOf("day"), i[n].since = s.valueOf();
          break;
      }
      switch (typeof i[n].until) {
        case "undefined":
          i[n].until = 1 / 0;
          break;
        case "string":
          s = k(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
          break;
      }
    }
    return i;
  }
  function Uw(e, t, n) {
    var r, s, i = this.eras(), o, a, l;
    for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
      if (o = i[r].name.toUpperCase(), a = i[r].abbr.toUpperCase(), l = i[r].narrow.toUpperCase(), n)
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (a === e)
              return i[r];
            break;
          case "NNNN":
            if (o === e)
              return i[r];
            break;
          case "NNNNN":
            if (l === e)
              return i[r];
            break;
        }
      else if ([o, a, l].indexOf(e) >= 0)
        return i[r];
  }
  function Hw(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0 ? k(e.since).year() : k(e.since).year() + (t - e.offset) * n;
  }
  function kw() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].name;
    return "";
  }
  function Zw() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].narrow;
    return "";
  }
  function Kw() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].abbr;
    return "";
  }
  function Xw() {
    var e, t, n, r, s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
      if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
        return (this.year() - k(s[e].since).year()) * n + s[e].offset;
    return this.year();
  }
  function Dw(e) {
    return Oe(this, "_erasNameRegex") || $l.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function Iw(e) {
    return Oe(this, "_erasAbbrRegex") || $l.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function Cw(e) {
    return Oe(this, "_erasNarrowRegex") || $l.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function _l(e, t) {
    return t.erasAbbrRegex(e);
  }
  function Jw(e, t) {
    return t.erasNameRegex(e);
  }
  function Gw(e, t) {
    return t.erasNarrowRegex(e);
  }
  function Bw(e, t) {
    return t._eraYearOrdinalRegex || es;
  }
  function $l() {
    var e = [], t = [], n = [], r = [], s, i, o = this.eras();
    for (s = 0, i = o.length; s < i; ++s)
      t.push(yt(o[s].name)), e.push(yt(o[s].abbr)), n.push(yt(o[s].narrow)), r.push(yt(o[s].name)), r.push(yt(o[s].abbr)), r.push(yt(o[s].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    );
  }
  B(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  B(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function Eo(e, t) {
    B(0, [e, e.length], 0, t);
  }
  Eo("gggg", "weekYear");
  Eo("ggggg", "weekYear");
  Eo("GGGG", "isoWeekYear");
  Eo("GGGGG", "isoWeekYear");
  tt("weekYear", "gg");
  tt("isoWeekYear", "GG");
  nt("weekYear", 1);
  nt("isoWeekYear", 1);
  K("G", Ro);
  K("g", Ro);
  K("GG", Te, xt);
  K("gg", Te, xt);
  K("GGGG", Zl, kl);
  K("gggg", Zl, kl);
  K("GGGGG", qo, Wo);
  K("ggggg", qo, Wo);
  ni(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, r) {
      t[r.substr(0, 2)] = ue(e);
    }
  );
  ni(["gg", "GG"], function(e, t, n, r) {
    t[r] = k.parseTwoDigitYear(e);
  });
  function Qw(e) {
    return Cp.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function _w(e) {
    return Cp.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function $w() {
    return xn(this.year(), 1, 4);
  }
  function e0() {
    return xn(this.isoWeekYear(), 1, 4);
  }
  function t0() {
    var e = this.localeData()._week;
    return xn(this.year(), e.dow, e.doy);
  }
  function n0() {
    var e = this.localeData()._week;
    return xn(this.weekYear(), e.dow, e.doy);
  }
  function Cp(e, t, n, r, s) {
    var i;
    return e == null ? Ks(this, r, s).year : (i = xn(e, r, s), t > i && (t = i), r0.call(this, e, t, n, r, s));
  }
  function r0(e, t, n, r, s) {
    var i = Wp(e, t, n, r, s), o = Zs(i.year, 0, i.dayOfYear);
    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
  }
  B("Q", 0, "Qo", "quarter");
  tt("quarter", "Q");
  nt("quarter", 7);
  K("Q", yp);
  Ne("Q", function(e, t) {
    t[yn] = (ue(e) - 1) * 3;
  });
  function s0(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
  }
  B("D", ["DD", 2], "Do", "date");
  tt("date", "D");
  nt("date", 9);
  K("D", Te);
  K("DD", Te, xt);
  K("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  });
  Ne(["D", "DD"], en);
  Ne("Do", function(e, t) {
    t[en] = ue(e.match(Te)[0]);
  });
  var Jp = $r("Date", !0);
  B("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  tt("dayOfYear", "DDD");
  nt("dayOfYear", 4);
  K("DDD", No);
  K("DDDD", bp);
  Ne(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = ue(e);
  });
  function i0(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  B("m", ["mm", 2], 0, "minute");
  tt("minute", "m");
  nt("minute", 14);
  K("m", Te);
  K("mm", Te, xt);
  Ne(["m", "mm"], kt);
  var o0 = $r("Minutes", !1);
  B("s", ["ss", 2], 0, "second");
  tt("second", "s");
  nt("second", 15);
  K("s", Te);
  K("ss", Te, xt);
  Ne(["s", "ss"], bn);
  var a0 = $r("Seconds", !1);
  B("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  B(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  B(0, ["SSS", 3], 0, "millisecond");
  B(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  B(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  B(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  B(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  B(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  B(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  tt("millisecond", "ms");
  nt("millisecond", 16);
  K("S", No, yp);
  K("SS", No, xt);
  K("SSS", No, bp);
  var Sn, Gp;
  for (Sn = "SSSS"; Sn.length <= 9; Sn += "S")
    K(Sn, es);
  function l0(e, t) {
    t[rr] = ue(("0." + e) * 1e3);
  }
  for (Sn = "S"; Sn.length <= 9; Sn += "S")
    Ne(Sn, l0);
  Gp = $r("Milliseconds", !1);
  B("z", 0, 0, "zoneAbbr");
  B("zz", 0, 0, "zoneName");
  function u0() {
    return this._isUTC ? "UTC" : "";
  }
  function c0() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var z = ei.prototype;
  z.add = nw;
  z.calendar = uw;
  z.clone = cw;
  z.diff = bw;
  z.endOf = Nw;
  z.format = Vw;
  z.from = Lw;
  z.fromNow = Aw;
  z.to = ww;
  z.toNow = gw;
  z.get = dA;
  z.invalidAt = Sw;
  z.isAfter = fw;
  z.isBefore = dw;
  z.isBetween = pw;
  z.isSame = hw;
  z.isSameOrAfter = mw;
  z.isSameOrBefore = yw;
  z.isValid = Ew;
  z.lang = Zp;
  z.locale = kp;
  z.localeData = Kp;
  z.max = E1;
  z.min = T1;
  z.parsingFlags = jw;
  z.set = pA;
  z.startOf = Ww;
  z.subtract = rw;
  z.toArray = Mw;
  z.toObject = zw;
  z.toDate = Fw;
  z.toISOString = Ow;
  z.inspect = xw;
  typeof Symbol < "u" && Symbol.for != null && (z[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  z.toJSON = Tw;
  z.toString = vw;
  z.unix = Rw;
  z.valueOf = qw;
  z.creationData = Yw;
  z.eraName = kw;
  z.eraNarrow = Zw;
  z.eraAbbr = Kw;
  z.eraYear = Xw;
  z.year = gp;
  z.isLeapYear = zA;
  z.weekYear = Qw;
  z.isoWeekYear = _w;
  z.quarter = z.quarters = s0;
  z.month = Ap;
  z.daysInMonth = RA;
  z.week = z.weeks = PA;
  z.isoWeek = z.isoWeeks = UA;
  z.weeksInYear = t0;
  z.weeksInWeekYear = n0;
  z.isoWeeksInYear = $w;
  z.isoWeeksInISOWeekYear = e0;
  z.date = Jp;
  z.day = z.days = _A;
  z.weekday = $A;
  z.isoWeekday = e1;
  z.dayOfYear = i0;
  z.hour = z.hours = a1;
  z.minute = z.minutes = o0;
  z.second = z.seconds = a0;
  z.millisecond = z.milliseconds = Gp;
  z.utcOffset = K1;
  z.utc = D1;
  z.local = I1;
  z.parseZone = C1;
  z.hasAlignedHourOffset = J1;
  z.isDST = G1;
  z.isLocal = Q1;
  z.isUtcOffset = _1;
  z.isUtc = Yp;
  z.isUTC = Yp;
  z.zoneAbbr = u0;
  z.zoneName = c0;
  z.dates = qt(
    "dates accessor is deprecated. Use date instead.",
    Jp
  );
  z.months = qt(
    "months accessor is deprecated. Use month instead",
    Ap
  );
  z.years = qt(
    "years accessor is deprecated. Use year instead",
    gp
  );
  z.zone = qt(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    X1
  );
  z.isDSTShifted = qt(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    B1
  );
  function f0(e) {
    return ze(e * 1e3);
  }
  function d0() {
    return ze.apply(null, arguments).parseZone();
  }
  function Bp(e) {
    return e;
  }
  var xe = Pl.prototype;
  xe.calendar = _L;
  xe.longDateFormat = nA;
  xe.invalidDate = sA;
  xe.ordinal = aA;
  xe.preparse = Bp;
  xe.postformat = Bp;
  xe.relativeTime = uA;
  xe.pastFuture = cA;
  xe.set = BL;
  xe.eras = Pw;
  xe.erasParse = Uw;
  xe.erasConvertYear = Hw;
  xe.erasAbbrRegex = Iw;
  xe.erasNameRegex = Dw;
  xe.erasNarrowRegex = Cw;
  xe.months = gA;
  xe.monthsShort = WA;
  xe.monthsParse = qA;
  xe.monthsRegex = MA;
  xe.monthsShortRegex = FA;
  xe.week = EA;
  xe.firstDayOfYear = YA;
  xe.firstDayOfWeek = SA;
  xe.weekdays = CA;
  xe.weekdaysMin = GA;
  xe.weekdaysShort = JA;
  xe.weekdaysParse = QA;
  xe.weekdaysRegex = t1;
  xe.weekdaysShortRegex = n1;
  xe.weekdaysMinRegex = r1;
  xe.isPM = i1;
  xe.meridiem = l1;
  function so(e, t, n, r) {
    var s = Nn(), i = on().set(r, t);
    return s[n](i, e);
  }
  function Qp(e, t, n) {
    if (gn(e) && (t = e, e = void 0), e = e || "", t != null)
      return so(e, t, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++)
      s[r] = so(e, r, n, "month");
    return s;
  }
  function eu(e, t, n, r) {
    typeof e == "boolean" ? (gn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, gn(t) && (n = t, t = void 0), t = t || "");
    var s = Nn(), i = e ? s._week.dow : 0, o, a = [];
    if (n != null)
      return so(t, (n + i) % 7, r, "day");
    for (o = 0; o < 7; o++)
      a[o] = so(t, (o + i) % 7, r, "day");
    return a;
  }
  function p0(e, t) {
    return Qp(e, t, "months");
  }
  function h0(e, t) {
    return Qp(e, t, "monthsShort");
  }
  function m0(e, t, n) {
    return eu(e, t, n, "weekdays");
  }
  function y0(e, t, n) {
    return eu(e, t, n, "weekdaysShort");
  }
  function b0(e, t, n) {
    return eu(e, t, n, "weekdaysMin");
  }
  Pn("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10, n = ue(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      return e + n;
    }
  });
  k.lang = qt(
    "moment.lang is deprecated. Use moment.locale instead.",
    Pn
  );
  k.langData = qt(
    "moment.langData is deprecated. Use moment.localeData instead.",
    Nn
  );
  var cn = Math.abs;
  function v0() {
    var e = this._data;
    return this._milliseconds = cn(this._milliseconds), this._days = cn(this._days), this._months = cn(this._months), e.milliseconds = cn(e.milliseconds), e.seconds = cn(e.seconds), e.minutes = cn(e.minutes), e.hours = cn(e.hours), e.months = cn(e.months), e.years = cn(e.years), this;
  }
  function _p(e, t, n, r) {
    var s = It(t, n);
    return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
  }
  function O0(e, t) {
    return _p(this, e, t, 1);
  }
  function x0(e, t) {
    return _p(this, e, t, -1);
  }
  function Uc(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function V0() {
    var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, i, o, a, l;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Uc(Xa(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = gt(e / 1e3), r.seconds = s % 60, i = gt(s / 60), r.minutes = i % 60, o = gt(i / 60), r.hours = o % 24, t += gt(o / 24), l = gt($p(t)), n += l, t -= Uc(Xa(l)), a = gt(n / 12), n %= 12, r.days = t, r.months = n, r.years = a, this;
  }
  function $p(e) {
    return e * 4800 / 146097;
  }
  function Xa(e) {
    return e * 146097 / 4800;
  }
  function L0(e) {
    if (!this.isValid())
      return NaN;
    var t, n, r = this._milliseconds;
    if (e = Rt(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + r / 864e5, n = this._months + $p(t), e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (t = this._days + Math.round(Xa(this._months)), e) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function A0() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ue(this._months / 12) * 31536e6 : NaN;
  }
  function qn(e) {
    return function() {
      return this.as(e);
    };
  }
  var w0 = qn("ms"), g0 = qn("s"), W0 = qn("m"), N0 = qn("h"), q0 = qn("d"), R0 = qn("w"), F0 = qn("M"), M0 = qn("Q"), z0 = qn("y");
  function T0() {
    return It(this);
  }
  function E0(e) {
    return e = Rt(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function Vr(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var j0 = Vr("milliseconds"), S0 = Vr("seconds"), Y0 = Vr("minutes"), P0 = Vr("hours"), U0 = Vr("days"), H0 = Vr("months"), k0 = Vr("years");
  function Z0() {
    return gt(this.days() / 7);
  }
  var pn = Math.round, Yr = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function K0(e, t, n, r, s) {
    return s.relativeTime(t || 1, !!n, e, r);
  }
  function X0(e, t, n, r) {
    var s = It(e).abs(), i = pn(s.as("s")), o = pn(s.as("m")), a = pn(s.as("h")), l = pn(s.as("d")), f = pn(s.as("M")), c = pn(s.as("w")), u = pn(s.as("y")), d = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || o <= 1 && ["m"] || o < n.m && ["mm", o] || a <= 1 && ["h"] || a < n.h && ["hh", a] || l <= 1 && ["d"] || l < n.d && ["dd", l];
    return n.w != null && (d = d || c <= 1 && ["w"] || c < n.w && ["ww", c]), d = d || f <= 1 && ["M"] || f < n.M && ["MM", f] || u <= 1 && ["y"] || ["yy", u], d[2] = t, d[3] = +e > 0, d[4] = r, K0.apply(null, d);
  }
  function D0(e) {
    return e === void 0 ? pn : typeof e == "function" ? (pn = e, !0) : !1;
  }
  function I0(e, t) {
    return Yr[e] === void 0 ? !1 : t === void 0 ? Yr[e] : (Yr[e] = t, e === "s" && (Yr.ss = t - 1), !0);
  }
  function C0(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var n = !1, r = Yr, s, i;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Yr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), i = X0(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
  }
  var $o = Math.abs;
  function qr(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function jo() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = $o(this._milliseconds) / 1e3, t = $o(this._days), n = $o(this._months), r, s, i, o, a = this.asSeconds(), l, f, c, u;
    return a ? (r = gt(e / 60), s = gt(r / 60), e %= 60, r %= 60, i = gt(n / 12), n %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = a < 0 ? "-" : "", f = qr(this._months) !== qr(a) ? "-" : "", c = qr(this._days) !== qr(a) ? "-" : "", u = qr(this._milliseconds) !== qr(a) ? "-" : "", l + "P" + (i ? f + i + "Y" : "") + (n ? f + n + "M" : "") + (t ? c + t + "D" : "") + (s || r || e ? "T" : "") + (s ? u + s + "H" : "") + (r ? u + r + "M" : "") + (e ? u + o + "S" : "")) : "P0D";
  }
  var me = To.prototype;
  me.isValid = U1;
  me.abs = v0;
  me.add = O0;
  me.subtract = x0;
  me.as = L0;
  me.asMilliseconds = w0;
  me.asSeconds = g0;
  me.asMinutes = W0;
  me.asHours = N0;
  me.asDays = q0;
  me.asWeeks = R0;
  me.asMonths = F0;
  me.asQuarters = M0;
  me.asYears = z0;
  me.valueOf = A0;
  me._bubble = V0;
  me.clone = T0;
  me.get = E0;
  me.milliseconds = j0;
  me.seconds = S0;
  me.minutes = Y0;
  me.hours = P0;
  me.days = U0;
  me.weeks = Z0;
  me.months = H0;
  me.years = k0;
  me.humanize = C0;
  me.toISOString = jo;
  me.toString = jo;
  me.toJSON = jo;
  me.locale = kp;
  me.localeData = Kp;
  me.toIsoString = qt(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    jo
  );
  me.lang = Zp;
  B("X", 0, 0, "unix");
  B("x", 0, 0, "valueOf");
  K("x", Ro);
  K("X", mA);
  Ne("X", function(e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  Ne("x", function(e, t, n) {
    n._d = new Date(ue(e));
  });
  //! moment.js
  k.version = "2.29.4";
  JL(ze);
  k.fn = z;
  k.min = j1;
  k.max = S1;
  k.now = Y1;
  k.utc = on;
  k.unix = f0;
  k.months = p0;
  k.isDate = $s;
  k.locale = Pn;
  k.invalid = wo;
  k.duration = It;
  k.isMoment = Dt;
  k.weekdays = m0;
  k.parseZone = d0;
  k.localeData = Nn;
  k.isDuration = Fi;
  k.monthsShort = h0;
  k.weekdaysMin = b0;
  k.defineLocale = Il;
  k.updateLocale = d1;
  k.locales = p1;
  k.weekdaysShort = y0;
  k.normalizeUnits = Rt;
  k.relativeTimeRounding = D0;
  k.relativeTimeThreshold = I0;
  k.calendarFormat = lw;
  k.prototype = z;
  k.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  //! moment.js locale configuration
  k.defineLocale("ja", {
    eras: [
      {
        since: "2019-05-01",
        offset: 1,
        name: "令和",
        narrow: "㋿",
        abbr: "R"
      },
      {
        since: "1989-01-08",
        until: "2019-04-30",
        offset: 1,
        name: "平成",
        narrow: "㍻",
        abbr: "H"
      },
      {
        since: "1926-12-25",
        until: "1989-01-07",
        offset: 1,
        name: "昭和",
        narrow: "㍼",
        abbr: "S"
      },
      {
        since: "1912-07-30",
        until: "1926-12-24",
        offset: 1,
        name: "大正",
        narrow: "㍽",
        abbr: "T"
      },
      {
        since: "1873-01-01",
        until: "1912-07-29",
        offset: 6,
        name: "明治",
        narrow: "㍾",
        abbr: "M"
      },
      {
        since: "0001-01-01",
        until: "1873-12-31",
        offset: 1,
        name: "西暦",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "紀元前",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    eraYearOrdinalRegex: /(元|\d+)年/,
    eraYearOrdinalParse: function(e, t) {
      return t[1] === "元" ? 1 : parseInt(t[1] || e, 10);
    },
    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
      "_"
    ),
    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日 dddd HH:mm",
      l: "YYYY/MM/DD",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日(ddd) HH:mm"
    },
    meridiemParse: /午前|午後/i,
    isPM: function(e) {
      return e === "午後";
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "午前" : "午後";
    },
    calendar: {
      sameDay: "[今日] LT",
      nextDay: "[明日] LT",
      nextWeek: function(e) {
        return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
      },
      lastDay: "[昨日] LT",
      lastWeek: function(e) {
        return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
      },
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function(e, t) {
      switch (t) {
        case "y":
          return e === 1 ? "元年" : e + "年";
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        default:
          return e;
      }
    },
    relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "数秒",
      ss: "%d秒",
      m: "1分",
      mm: "%d分",
      h: "1時間",
      hh: "%d時間",
      d: "1日",
      dd: "%d日",
      M: "1ヶ月",
      MM: "%dヶ月",
      y: "1年",
      yy: "%d年"
    }
  });
  k.locale("ja");
  var eh = /* @__PURE__ */ ((e) => (e.DAY = "Y-MM-DD", e))(eh || {});
  const th = (e = /* @__PURE__ */ new Date()) => k(typeof e == "string" ? e.replace(/-/g, "/") : e), nh = (e = /* @__PURE__ */ new Date(), t = "Y-MM-DD") => th(e).format(t), J0 = () => nh(
    /* @__PURE__ */ new Date(),
    "Y-MM-DD"
    /* DAY */
  ), G0 = (e = /* @__PURE__ */ new Date(), t = 1) => th(e).subtract(t, "years").toDate(), B0 = {
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    email: "",
    gender: null,
    birthday: nh(G0(J0(), 20), eh.DAY)
  }, Q0 = ZL("multi-step-form", () => {
    const e = Xe(B0), t = Xe(!1), n = Xe({}), r = Fe(() => t.value);
    return {
      state: e,
      errors: n,
      isProcessing: r,
      updateForm: (i) => (e.value = { ...e.value, ...i }, e),
      persist: !0
      // データ永続化 利用
    };
  }), rh = UL();
  rh.use(CL({
    storage: sessionStorage,
    // 保存先 TODO:cookieか？
    key: (e) => `my-example-app@${e}`
    // 保存しておく際のキー名 接頭辞ふよ
  }));
  const tu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t)
      n[r] = s;
    return n;
  }, _0 = {}, $0 = {
    type: "button",
    class: "btn btn-round btn-block btn-light col-3"
  };
  function eg(e, t) {
    return We(), tn("button", $0, "Previous");
  }
  const tg = /* @__PURE__ */ tu(_0, [["render", eg]]), ng = {}, rg = {
    type: "submit",
    class: "btn btn-round btn-block btn-primary col-3"
  };
  function sg(e, t) {
    return We(), tn("button", rg, "Next");
  }
  const ig = /* @__PURE__ */ tu(ng, [["render", sg]]), og = { class: "mx-auto text-white" }, ag = { class: "mt-5 d-flex align-items-center" }, nu = /* @__PURE__ */ Se({
    __name: "MultiStepFormLayout",
    props: {
      step: { default: 1 },
      title: null
    },
    emits: ["click-previous", "submit", "submit-invalid"],
    setup(e, { emit: t }) {
      const n = e, r = Q0(), s = Fe(() => n.step ? `Step${n.step}: ${n.title ?? "設問"}` : n.title);
      let i = Wt(r.state);
      const o = () => {
        r.updateForm(i), t("click-previous", i);
      }, a = (f) => {
        r.updateForm(f), t("submit", i);
      }, l = () => t("submit-invalid", i);
      return (f, c) => (We(), tn("div", og, [
        St("h2", null, Ia(re(s)), 1),
        Le(re(yL), {
          onSubmit: a,
          onSubmitInvalid: l,
          actions: !1,
          value: re(r).state,
          modelValue: re(i),
          "onUpdate:modelValue": c[0] || (c[0] = (u) => ve(i) ? i.value = u : i = u)
        }, {
          default: bt(() => [
            Dr(f.$slots, "default"),
            St("div", ag, [
              e.step > 1 && e.step < 3 ? (We(), Ge(re(tg), {
                key: 0,
                onClick: o,
                class: "me-4"
              })) : pa("", !0),
              e.step < 3 ? (We(), Ge(re(ig), {
                key: 1,
                class: "me-4"
              })) : pa("", !0)
            ])
          ]),
          _: 3
        }, 8, ["value", "modelValue"])
      ]));
    }
  }), lg = /* @__PURE__ */ Se({
    __name: "EntryForm",
    setup(e) {
      const t = bl(), n = async () => {
        await t.push({ name: "second" });
      };
      return (r, s) => (We(), Ge(re(nu), {
        step: 1,
        title: "はじめの画面",
        onSubmit: n
      }, {
        default: bt(() => [
          Le(re(As), { label: "名前" }, {
            default: bt(() => [
              Le(re(gc), {
                name: "last_name",
                "outer-class": "col-3",
                "validation-label": "名前（姓）"
              }),
              Le(re(gc), {
                name: "first_name",
                "outer-class": "col-3 ms-4",
                "validation-label": "名前（名）"
              })
            ]),
            _: 1
          }),
          Le(re(As), { label: "ふりがな" }, {
            default: bt(() => [
              Le(re(Wc), {
                name: "last_name_kana",
                "outer-class": "col-3",
                "validation-label": "ふりがな（姓）"
              }),
              Le(re(Wc), {
                name: "first_name_kana",
                "outer-class": "col-3 ms-4",
                "validation-label": "ふりがな（名）"
              })
            ]),
            _: 1
          }),
          Le(re(As), null, {
            default: bt(() => [
              Le(re(xL), {
                name: "email",
                "outer-class": "col-3",
                label: "メールアドレス"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }));
    }
  }), ug = /* @__PURE__ */ Se({
    __name: "SecondForm",
    setup(e) {
      const t = bl(), n = async () => {
        await t.push({ name: "final" });
      }, r = async () => await t.push({ name: "entry" });
      return (s, i) => (We(), Ge(re(nu), {
        step: 2,
        title: "2番目の画面",
        onSubmit: n,
        onClickPrevious: r
      }, {
        default: bt(() => [
          Le(re(As), null, {
            default: bt(() => [
              Le(re(VL), {
                name: "gender",
                "outer-class": "col-3",
                label: "性別",
                help: "あてはまる内容を一つお選びください。"
              })
            ]),
            _: 1
          }),
          Le(re(As), null, {
            default: bt(() => [
              Le(re(OL), {
                name: "birthday",
                "outer-class": "col-3",
                label: "生年月日"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }));
    }
  }), cg = /* @__PURE__ */ St("h2", null, "完了！", -1), fg = /* @__PURE__ */ Se({
    __name: "Complete",
    setup(e) {
      return bl(), (t, n) => (We(), Ge(re(nu), {
        step: 3,
        title: "完了画面"
      }, {
        default: bt(() => [
          cg
        ]),
        _: 1
      }));
    }
  }), dg = [
    { path: "/", name: "entry", component: lg },
    // エントリーポイント
    { path: "/second", name: "second", component: ug },
    // 2番目のポイント
    { path: "/complete", name: "complete", component: fg }
    // 3番目のポイント
  ], pg = "/multi-step-form/v1", hg = Ev({
    history: Tb(pg),
    // HTML5 History モード
    routes: dg
    vg
  ];
  function xg(e, t) {
    return We(), tn("footer", bg, Og);
  }
  const Vg = /* @__PURE__ */ tu(yg, [["render", xg]]), Lg = { class: "wrapper wrapper-full-page" }, Ag = { class: "full-page section-image" }, wg = { class: "content" }, gg = { class: "container" }, Wg = /* @__PURE__ */ Se({
    __name: "MainLayout",
    setup(e) {
      return (t, n) => (We(), tn("div", Lg, [
        St("div", Ag, [
          St("div", wg, [
            St("div", gg, [
              Dr(t.$slots, "default")
            ])
          ]),
          Le(Vg),
          St("div", {
            class: "full-page-background",
            style: io({ "background-image": `url(${re(mg)})` })
          }, null, 4)
        ])
      ]));
    }
  }), Ng = /* @__PURE__ */ Se({
    __name: "App",
    setup(e) {
      return (t, n) => {
        const r = zf("router-view");
        return We(), Ge(re(Wg), null, {
          default: bt(() => [
            Le(r)
          ]),
          _: 1
        });
      };
    }
  }), qg = hL({
    // plugins: [ // プラグイン
    //     createMultiStepPlugin(), // マルチステップの画面入力 TODO:これあれば vuexとかvue-routerいらない？
    // ],
    // locales: {ja}, // TODO:活性化すると tsエラー => いらない?
    locale: "ja"
  });
  sb(Ng).use(hg).use(sL, qg).use(rh).mount("#app");
});
export default Rg();