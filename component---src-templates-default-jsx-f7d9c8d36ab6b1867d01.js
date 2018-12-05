(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",function(){return r});n(0);var i=n(188),a=n(216);t.default=function(t){return e.createElement(i.a,null,e.createElement(a.a,{title:t.data.markdownRemark.frontmatter.title,description:t.data.markdownRemark.frontmatter.description}),e.createElement("h1",null,t.data.markdownRemark.frontmatter.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.data.markdownRemark.html}}))};var r="2161783213"}.call(this,n(52))},176:function(e,t,n){"use strict";var i=n(184),a=n.n(i);n.d(t,"a",function(){return a.a});n(185);var r=n(186),o=n.n(r);n.d(t,"b",function(){return o.a});var l=n(187),c=n.n(l);n.d(t,"c",function(){return c.a})},178:function(e,t,n){"use strict";(function(e){var i=n(53),a=n.n(i),r=(n(0),n(182));t.a=function(t){return""===t.to?e.createElement("a",t,t.children):/^\/(?!\/)/.test(t.to)?e.createElement(r.Link,a()({to:t.to},t),t.children):e.createElement("a",a()({href:t.to,target:"_blank",rel:"noopener noreferrer"},t),t.children)}}).call(this,n(52))},182:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(177),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(183),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(49);n.d(t,"parsePath",function(){return u.a});var m=a.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(52))},183:function(e,t,n){var i;e.exports=(i=n(200))&&i.default||i},184:function(e,t){e.exports={site_name:"Bastion Docs",site_url:"https://docs.bastionbot.org",title:"Bastion Docs",description:"Welcome to the documentation website of the Bastion bot.",logo:"https://resources.bastionbot.org/logos/Bastion_Logotype_CD.png",feedback:"https://github.com/TheBastionBot/BastionDocs/issues",copyright:"Copyright © 2018 - The Bastion Bot Project",color:"#40c4fb"}},185:function(e,t){e.exports={repo:"https://github.com/TheBastionBot/BastionDocs",branch:"",dest:"",message:""}},186:function(e,t){e.exports=[{title:"Home",link:"https://bastionbot.org"},{title:"Bastion HQ",link:"https://discord.gg/fzx8fkt"}]},187:function(e,t){e.exports=[{title:"Intro",link:"/"},{title:null},{title:"Prerequisites",link:"/prerequisites"},{title:"Get API Keys",link:"/api-keys"},{title:null},{title:"INSTALL"},{title:"Linux",link:"/install/linux"},{title:"macOS",link:"/install/macos"},{title:"Windows",link:"/install/windows"},{title:"Glitch",link:"/install/glitch"},{title:"Heroku",link:"/install/heroku"},{title:null},{title:"Configure",link:"/configure"},{title:null},{title:"RUN"},{title:"Linux",link:"/run/linux"},{title:"macOS",link:"/run/macos"},{title:"Windows",link:"/run/windows"},{title:null},{title:"UPDATE"},{title:"Linux",link:"/update/linux"},{title:"macOS",link:"/update/macos"},{title:"Windows",link:"/update/windows"}]},188:function(e,t,n){"use strict";(function(e){var i=n(0),a=n.n(i),r=n(179),o=n.n(r),l=n(196),c=n(202),s=n(208),d=n(176);n(214),n(215);t.a=function(t){return e.createElement(a.a.Fragment,null,e.createElement(o.a,{title:d.a.title,description:d.a.description}),e.createElement(l.a,null),e.createElement(s.a,null,t.children),e.createElement(c.a,null))}}).call(this,n(52))},196:function(e,t,n){"use strict";(function(e){n(0);var i=n(197),a=n(201);t.a=function(t){return e.createElement("header",{css:{display:"block",position:"fixed",top:0,right:0,left:0,marginBottom:"4rem",backgroundColor:"#FFFFFF",boxShadow:"0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.07)",zIndex:500,opacity:.95}},e.createElement("div",{css:{display:"flex",maxWidth:"128rem",margin:"0 auto",padding:".8rem 4rem",justifyContent:"space-between",alignItems:"center",flexWrap:"noWrap",flex:"1 1 auto"}},e.createElement(a.a,null),e.createElement(i.a,null)))}}).call(this,n(52))},197:function(e,t,n){"use strict";(function(e){n(181),n(0);var i=n(178),a=n(176);t.a=function(t){return e.createElement("div",{css:{display:"flex",alignItems:"center",flex:"1 1 auto",overflowX:"auto"}},e.createElement("div",{css:{display:"flex",alignItems:"center",marginRight:"15px",zIndex:10}},e.createElement("ul",{css:{listStyle:"none",margin:0,padding:0}},a.b.map(function(t,n){return e.createElement(i.a,{to:t.link,key:n},e.createElement("li",{css:{padding:"10px 15px",display:"inline-block",color:"#5d7079",borderRadius:"3px",transform:"translateZ(0px)",transition:"color .2s ease",":hover":{color:a.a.color||"#3eb0ef"}}},t.title))}))))}}).call(this,n(52))},200:function(e,t,n){"use strict";n.r(t);n(56);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(74),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},201:function(e,t,n){"use strict";(function(e){n(0);var i=n(178),a=n(176);t.a=function(t){return e.createElement("div",{css:{display:"flex",position:"relative",width:"22rem",padding:"1.2rem 0",paddingRight:"3.2rem",alignItems:"center"}},e.createElement(i.a,{to:"/",css:{position:"relative"}},a.a.logo?e.createElement("img",{src:a.a.logo,height:"25",width:"auto",alt:"Logo",css:{display:"flex",alignItems:"center"}}):a.a.title),e.createElement(i.a,{to:"/",css:{position:"relative",marginLeft:"1.6rem",paddingLeft:"1.6rem",":before":{content:" ",position:"absolute",top:-3.5,left:1,display:"block",width:1,height:23,background:"#d3e4ee",transform:"rotate(25deg)"}}},"Docs"))}}).call(this,n(52))},202:function(e,t,n){"use strict";(function(e){n(0);var i=n(203),a=n(207);t.a=function(t){return e.createElement("footer",{css:{display:"block",padding:"4vw 0",borderTop:"1px solid #e5eff5",backgroundColor:"#ffffff"}},e.createElement(a.a,null),e.createElement(i.a,null))}}).call(this,n(52))},203:function(e,t,n){"use strict";(function(e){n(0);var i=n(204),a=n(205);t.a=function(t){return e.createElement("section",{css:{display:"block",margin:"4vw auto 0 auto",padding:"0 4rem",maxWidth:"128rem"}},e.createElement("div",{css:{display:"flex",paddingTop:"1.6rem",justifyContent:"space-between",alignItems:"center",borderTop:"1px dashed #e5eff5","@media (max-width: 768px)":{flexDirection:"column"}}},e.createElement(i.a,null),e.createElement(a.a,null)))}}).call(this,n(52))},204:function(e,t,n){"use strict";(function(e){n(0);var i=n(176);t.a=function(t){return e.createElement("div",{css:{opacity:.5}},i.a.copyright)}}).call(this,n(52))},205:function(e,t,n){"use strict";(function(e){n(0);var i=n(178),a=n(206);t.a=function(t){return e.createElement(i.a,{to:"https://github.com/AwesomeDocs",title:"Build awesome documentation sites with AwesomeDocs",css:{display:"flex",alignItems:"center",filter:"saturate(0%)",opacity:.5,transition:"filter .2s ease-in, opacity .2s ease-in",":hover":{opacity:1,filter:"saturate(100%)"}}},e.createElement("span",{css:{marginRight:8}},"Powered by"),e.createElement(a.a,{size:25}))}}).call(this,n(52))},206:function(e,t,n){"use strict";(function(e){n(0);t.a=function(t){return e.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAAG0OVFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAADdkSURBVHjapJO/S1xBEMc/u08Pz914HqchNiJiExCsnmglKFiaCAoWFocSQdNYBfUfUBArkatU1CtFTrFSSJFKEEQwlYVBRAt/EpUL6nmb4j29W99hcwMDu/PjO7Mz3xXGGIoRSZFSArD062/AEU9eGHYWcobOcRb7lCgIoMtDljFWUQrpQztSCKLlElEI4Ow6bRl7Zv94g7k/B/0RPrcD8HX61iS+aREAqPukbdhnf7CtQ3CQgtoW714lqXrzCgnwnMm8atfMgclvm+sTK6E3cWdUWPCiEiCqHaLaoalB5ar7sr69bJf8IFEhCDmeSgBV5qDKHOpHdu3sq4enmkrgwTa3zd2bSNgQCRsP4OzqEffHXoBRm9NuqLlpmPXvOrA+d+LOHF/6HRydptsosTllkq7oH5yEWIQv3WMMujpuBVRLOhoFwhiDGL0wlIZzTqVhbSJIu8YukI5fIQsq5lM5PxkKJwP83sgjloR/Nx7Az6G85W5NvU/+/dXX48pAg5AAWSG8aaTGvNYABJAt8FOlAzvzcPNIXa3yZlCM/AcAAP//xJU9LENRFMd/970+ihIEQUgMYlGJRAxmiUUsYmnCYmMQJvE1EWGzmCxIxMCCGMRgIGkakUjUhEEkbbS+Ek9V2/eeRd2+99gkxnvvOefmf//n/K74fx78xAJVIW9gePEjdyY212ZFMvODhO3ThGuzbylsEb2E+BcTAvPwqLMz6O5Ij5MFVhYZNc2ywJMOAiIvpluCkwW2cTYykJIXDK28WlujJXagGBkprMir2se5tRdq/XJdoVLoFYicEkqWBWU+la75C7und0mXT92rupVlQZ4KSpYF0ys3u059e8sdIjTqeLgMNFTANw8ijyliz2lOoome3LixzpqB0tJ8YjoQMWw1Gud06/YBbh9AhGMG/rEzVzv674/Eh1ejrrIEjzA5LA/YYwRcjvuEoD9kUd8G6Xd5eLgApsOydBLaAjI7nYCqDpSDifYmW/L+jDsZQPNCfvF3t6AVcD2rCSWum1fSJh94Cn5v/NN1ML9s1xSC588o1eUqwRGfwDBhY1L+BwDvKXhLgmXJvfAeAMdTLaKh/g948AkAAP//zFZfSFNRHP7u3ZybdzbnlFDMgrT1EIaWFjMFQ/pDvQihPYiCD6EUIliipIhkI3yR8EWFDIkKW4F/6I/5EKSoIzWnUpZ/Ygab1lKkO928ek8Ppzal7Tqxh+7bub/vnPOd3/nO7/vteoF/0h409ywGBBYJUHTHROCw+gedMaI8bZ3ZEYE5x1pA4NstUwTRSYD9E1XFX/lkAIbHmFVelxIvLwv4Cu71OrcFVrVMfrMLYiSlHQyMtFE5btb5hRqPWNpyOXZFAAmIwEMzLwlqeGY1mW0rl7b8VIUB5vtejzx7EyBbn/zwdTUz94NsT6Cuc8EvwPRmoW/ouzvVZ9DpAGZ6gWwjsOz7EJ0FHPPRJkoTaB9Y9hnMqrQQRKkkT9B4JTm9sIt/K4V5lKU6Fq7BiF8C5inX1gZTJEitGiNQSJtu7eWDTLJeg/4PYmZNn7tHEmzfELsr98h8Engy5E1fpDYYp6tHpS9OzqKj5DDjdos4eigULAvoOCC8gifbNRGmPG6zoVECLyZoMb54Y4QQnUJatotrsDQdZ4orWmFbdmJqeh4ZBj1OZhiQeESP7MdOAlF6iVuZqoSUONm4h0D3pAvnav/YKUPVLLgBZSigjgA4LX33zlmgqxEICQZYxlujRULHLoGOTxVQgSo4gNMBah2dL7i8T1cOGM9zDO1vy3mCDakSKALtZQAXHniN3VgDEnOkMV9XaMswWKxmsOQnb0ECNdidbA4AMgUw0QEoNT7DMUGyz+YHBpqBpgG6eWEzTxDxW/msHHhtpL3Vbr+fdsBQ5KmS9TkHkhRK9r1HA182edHVltWGl8a8a4qYeHIiYX+NNiykTh8ftTo9Mw9hXUR0tBYdr0YhC5KjNDcdpXef42l9PvJLWpGZpodGw6F/eBax+yIQu1cDUSRx78atVdNWR54AJXhLNbOwJPw/dvyLPTOLjaqM4vjvLrPcaWcp01Ja2kKhLjEkArUCQQKCMQZfTJAmRjEBjQsEwxKNpBBj0uJETNweKCYiDSYNARExEUUNRilbhVLREgVKpbaWDtB2OsPMdObe68Od0pnpbOgDL57kPEy+k++ce76z/M+ZO26AyB2mO26AnCsaAjjWfr2uaXdT/a1BMpkGenhv9y6hb0jN3QCLRcpZuKnFW4/fa1S3VLRkLQ2HAoNvL7e5cjbgQk8wJ8HJhWbIM8FDq6FtT2o4VjITrx5ydvVrCSNURgNm3eXMSfDJLad13BaIhgwElPwM17qMM6BAEWdUFou/5mTAYFDLKmSWRSi0xpqPCNEwSKZEoWcaGe2C6/b6z32yyp6TD+SbwVBWoR2He48SXy8WrIFjH8XlkgzRWEcEyBMpcQhcvpb94+QJTkvmPBUEWq+NJGJCvxdCPrA6jN82J4iJGf1Y/ZD++euOrF6QHYopo8D7+7r2EU3xJTUr4NwXBn54ZD0Ek9YVxRKlDoFsqFg+3zWYqVLz/ZXhZZnOGegerzxGczb7dM+KvIwJId9dlp/28LltHVdJVyYEEcpnwVMNxh4lFRWJzK+SxOFwepAmEo6SiitcEjckJmb0n98NvsxDzYIPhlUtpCJG0nCB20Iyu9wWqledzNomuw8uEjZWW1ZniWLqD4/skK0SqVi0CpDMPT3BEspsmbX3h9h2sI/HZ0vbyRLrJ/rVFypcoEb0cSy0/pk4GStmiRmb2nQiWsbYO761WvAORCiZaCEQ0EsXNQZ6MlrRp3LK4xCSI1Lu7A/H30vtuladqfkZ76qUpRPdvQGiGrgUCy5F6MWrQVGG7j5JovGHyKqlM007E17IKgmM8vGzg3OyKUcU+HDDffMURearb0/SHYCOPp3T72QvOjvbRz62yQKo3GJZNhlW5+dJvPvj3yeyXfKb537BbjfxpmcfB775hY6OP7BpYdbUracgyo0BmfT4XYel24f1w6/YhdHKLk4ptlBeZGZh3dmsIxXnfew5eIznX2vCah0b4SqmlDJ86Qy10y+6EbMkj0ng0c1DepkLylwgvHVogE1bzujcY4/bdoSNQpM/wRjNrA5jomp+FUwSWExG/5dEo0NqulE/bGbovQyLXwaTGRQn5BeBrcDYz6ljcHxJibxp8WyLR5j29NFTnYq7Bvc0w0fqSCwck2j/xvRIKJlm1SYoG7eyNCtQOJ3mlwoEcf7DNftxlRmK1Uhq5Xmm3JUDtH82/u+Q+JWnroP3Iu7QTcSVC80eohneTcmDAw23B3U1FVoaSQteAel6GLMiItpscK4uDXpRNWheO7ZfvR2yOqD10zTaBdp2zRMUq4R88a8YhO5VoTSp9TW/CEWV/x70W+0QHDQ2anG0fLqjof28z0hDvyrgVwW+3OJM9MKZ5v+mfJQuHAFHScK6dcGD7s2+iIYvoiFXxZVPp8qVIYkKtCHwXh5X/9FjrGkQUcEaS8dwBGTJSMvRDUh8WLXsgLkrIXCdtm3Vgj80NrgInXGQySRD+XZ0GjdQXur6qXhSwRv5duWIqqr4w1HunVrI1y2/s6SmiqrKIjyN30FEZdkTDxAMjtDZeRWbYmFudSVHf+5CjUSRdO3Zrt6Brb4bNydTVculPdXC/9NxPP1DvrnGNnWecfz3+vhux44TnECApqRcSipSwtY1I1y2DmiXrIhOJS1hQ4JWYioNQt1YJzbtw8rooCsFTZo2Oq0ajMtoaaeWW1lXYFsHCbcSIIVSEgiBJJB7YseOzznvPpwsIZAQJ3bEBx7J8hefx36f97n+n7/vuQXue3jgnsMTANuOR4ZEuT/VwpxJSyQPDB+kf0LOd58/tXxR1hRNH0IDtLYE4q7Y47YwZ1mJZG4RHNvS+4Lproc3AOujPJK98Kb2mD9ROTZkBrA5lLgqVUyCtTvKD5NoM5oc/1hovn7X3uBOsKsKfvQXaGyjaLNesu/nHlHXGv98JaSUXGmMn39JCbs/q3u+6L3K7V1UAIcXDr5l9KXRSs4PwTPS6IsBqjQiW73iausQGGDl5uvxOTygIBLX7b7SiPU2r3IkwuENfW4OeiAO7iTIfQmk2iMfOMIy8pM5Tms4IuNrgLUf1cVFWVqSjUWrTxtAYm+u0d4MXx28u5LmanjhHWht6zUpZrrF2Rdm2ibFq3oLKSVXG7WYFY32KYjphyTprru4iA5VJ6HpWu/5oLEKXtrcN9YEoMD305V9axfY8+JhBGNrf6g5tsOn2nmyqFgy3BFFhjTDqXc7s/wtJwi1QsGbEI6CwqDATL955+KZ9udiNYKQUnLqcsegFWSkWUn8Tj8339uwdngDOHzd2WP6UnAkdSe9KIzwvZHK3jXz7fnIWEOgbXAPp7rBNutf0d38HXP+MGMb6kmFyXNh2IRurmPU9RYmu8TZAz91TQqpMRhg/5n2AT2kS0lLi5q0YENZPfYYeojEVLhQDJOe7JwlB9ct0qBHStd4rDWDiGSD1qtE/1JN8Mnx+sUL/vRlbIdXBMsnsji8f77gegw+LAGfyZJV1CQz00AgEWIALyklR8qj8x+3QyH/1RPnrppEZq97kwHIqlkj8h7P8u0zO1084IdJK5olw2PsSOt0an/vEbUtRL0oFFJK/lnWfwiMSXPw0OxPeyKYgxFV5++vTHw4Y6TjgtkkOHNDQdPB7xHMXtMiSYpxQFVgRba1cO7XLdtFtAbYcrTv/lLXQap64uK3yhpxmWP7cU1hvtiUY2oOalIIUASU3rR2EaftVkHR5ramRiveWDI7JrA1yeC+VQmu2uYouGtNod4/5LQKpi7//PiJNvVrdwVPo5GqAOff/5ZoaO64xbgSX4qN6hrZBQibhGD9x6G/7q5UFxJrf1avEd7kFa0d/Rjg4/OhXhBAnaeWHe+XOxdVlq4Ps/e3j4ma+jA2mxVd11n+yjrUiE5rIEx6mofcGZNZsjSfuhsSYRJU1qhTVu5pP4EiYg6JHJ+y67UCx7MdWh8GKL7SDYi0tmv8atPFD/7d0DEv1kSHxUTeaNfWFYUZP6gor+HtLR9x6XIdhXnZHCi5RHV1I22BMFMeTcfrtDEi2c2294/yxi+eZda8XBJMMLaoWZIah3G9TuODH3vEGL/gVkOYAZK9FiI6BEIqs188Lkm1DeB6O8FiXTcg/P/3pu2CdYUusWXrfk5mfMO+Y+eR4cmjkrxS012RYIdT13S3lJgQmPSIFtY6VE0NRwLYbUGb3dz6m9d3Nv1t19Ebi/ImiGPJS8u+aIlMNFh9GMw+XbtlnpDQ36Z0mMIz2wIyLShKKze4Hq0Kdj4lpeT1vQ2s2nAuQprTjKobbAxdA4vNII87fWBzg81JF7VQU/sGOPxu2LgQktPjhFyaje3QmKl9X4CmdV+A2QJWt4FDODxg71x7ahHjXCGdwiz7+Nxsy0WDurhMlSRoneupKKzZZ8kAKg5CeYnxRfGWlmrIX22gS7EkJakDHWT7XP/pgsXF/GbJgzHEWoob3iyAlLFDD2SPmgyJowY+O3SpEGwqSM/Pn+Hfa1C4P9WwWQS/fC8QbLEJx4BqsC6MW79UfAeHfEil5Trk/dp4H4gEVNa/OM6pStq7qsCuUtkFxP7xYOjDA9e1p/utwVJCagKsXxCfLd6gblIB5zB4KLcnttBnLxKkbMc0UVbZ3rMMXmi4ddKDPSWR51YeDu/o0whON+xcYeB7WoR7LqFmmP6yAbn1FRYXW9GKnxBf3sZiE1JK9l26fdyFYFD6Ct5ua8Aueia5utNw4sPBx99QiRBGcsx7zUiWPRqxjshnf8ix1rdEem+E3jmi9TpljksxMWN1i8QHeK3w55fBm9o5aknjH3AR1XgPRzC7bQibBYdiKh/uc192eB2ViU5bxbmKG9dMumzInfzgzaNl1wKFT2cH/S5n5Gcb90SwKBDskFt/t9j+7oHT9n98ctaZ+/hYn0XTkkq/qklO9nsn1NY2j9A1LSMQUseFVM2tqlrPnbTV3F24hBnUdshZAmqQR5yWQysL0r8d0XoPEeOPxrL3Cay6Frav8YrV8159Q09K2Zj5zKyqlGEJ/LfkItO+OZ7ikxWMSPFwo76NrMxRnDt/jaREJ1U3Wxnl95DgtpHgcVJaXotiEihWM0KAxaxgsfT0IJvVjNIJiphtZsxSweW2kzUhjbNAayDE3KfGc6HiJnUNAR7O8PP52Spm5ozjzIVrjE7z0djSTmNjgCdyJ3D63OFc+8jsaVOnZa6tCvYzC9zPct9vh//H3plHV1Xde/yzzzl3HjJARhLGQCLzVOVhFIoPBLXUkdiB91ZF31Prk6pLC1at2kIrPhWr7VN8C6UqiraPihWxiIiESSGIyhTGhBAykuTmzveec94fJwFCppvcS9u15LfWb+Wv7Lv37/z2b+/f8P3tixrwbdeAiwK4KIBvOSkXqjxGFvDi8q0lxVv+Nq7DdhGxUHkVHxxeLk5XXZjF/3gkKN6G5gsyeP90K8XlaeNorutZqeuZ80mCyVfx8tvhhwtypMWSuACTHKmg6PKF2QUlh5ovJSVsQDDPzwTHQiEvjLmRNXuDi+6+2r240X+BtoBVSbxoLWaJx1aUr0fTYeDlULat54P4G8BhA0+UGo9mVnXCiV++hKSbJBLNDpeZmqqgGwRkDQdvfQ/nJUHBNGjwglOw9OPQeotZoJgSywDK4eOJLZHTgbf3VSwh02Z4iUFPz7eB3wMTb4VIBDQoORC50j/FQkVDgosFxygod8xMT+iYuckS8hUHHmRgS8FENAxDp8KhT3uw/31gtRgCAEiX8Pu1ormT5VWCxG5ZZeeRUEIH/FNlYBQD7G0DFWn5RlmMMy22MNfY66DJcxYWqMG9K/1vj89zr6r3Jm6ug5JA2b6vIWEDmk0SS1eX7cIitS2Y99ZC3yEQau5+GzRVwcQb2uPinBJ/LVGTNfTGRM139nAFpWBQUsIEYDcJ4Q9FTZjPbwyhQf502PUWKOauw1o2FwQ72Otm+OOOwMGnixwZ4WgCt0BdYyAhAwkEz3x44muSLB00ChMGgCTs61oAug6Fdxh3gPOLpXSorNPSBTr13kQZQwXFbkmMURmYYWX/oeYRZFg7P9fzroRT+zrPH9SXwaBLOq8TTJVY+lGw+CeF1sJE2UJRfjp+fZKE4J4XStf+5Yh3Vpd1BM40WL/YqBBrN4gCWUNh+A1du2iVKtqbSeJwQ/yBnKEpAvHG9vh9gdx0G1PmFetk27vbJ3DwY0PFzzeGzbUw75VOmwSdo7VMTVPe+dlMS1G8Irh+uEAJBuJLZ+nAo8tKV9HfQbdVJDow4jrYvrwttk8IcPUFXwzaGIVPvw7N+cVsa1FFAg4wJT3VGtcAg7Ms3PHEl3PoZ4/ZXLb7+tEwzFpgNIuLpbwrXebJ9wLvzp9uvSW+kKZAyXGLeP6fhS/sX8sAJzFXk4T9MPp62P/R2cV668HVB7wx3nI02FwSvnndfBtHauPbCMr6r3qvR5f0d/D+ltpZPaojEsJIbfvqDXCwEDD9AfB42jWE6NrwyEx52r/5lsssV/S2omxUlowo7yUMxWqG6Q/s+WaPJzICtYdjaBp4q6DsC6g7Bve82XWJfGdUpxF+1S1OeWMvjGwjQwcou0p77g3qOrhtsrTnuHcESeZenJsSZI+BvR/AlDuhrodf/4wtkMi631u9er4zw9sLlyZ3GChWU89/OD3FxITbdwRJM9PrgkZPFTgLYPwVUN1LD0eDelVPP1WnpyS7RENvtEAJensWaFFVna9O+iaQajLFVc1pUvj1gzePe+SDpt3kxJFqNwuKnm8+vf9plyir6+kVWUYx9VCFR/a3MXTGJzsZHGfNcJmPGZP7fSm7tPsWbg89RzwX0n4S//tZ5N+vHmta0VMtkJyKIFZOsUjMfXLvMvLj9CAlwSPz8n7kC4WZeblpKeVx1hZF4Zk1gdcGZwoQAhEjA4itR2LLC2g6ZCYr5BVt1smM7/JEdYCtL/+LqG2KoDjsbN4XvfW324JvEY+Tp8BAXezd+LBjpDcYozang9heGps7PCTbStrMT1UGOaS4Jirg9slZk91uZZtJkbj2sjSS7TD6oWa9y2YwsVBE59U5juyMZHEqlmj/jAKB+Hhv9wF3XYc1xbU/eGFbzcq4qsYFcDJA/YdXisr6KKoG39TICAGNHm3CT9f4dxJvBuSYStlrSeJodffznDpEtO8n1BGluBTybtikk+OIb3JBlVUPjEy1OUwNwtiuZKZZ0HVId0PB/c16wC2I63RRoDBZfv+l22yzA90gTCdmC5T9lcFuznwzhXdt9TPASY9vfG1OHEGGTakeMcDa4GvxQDUddh3Vz1TEvzzPafm3V5tDOKS4DGJxeeR7u8styZIsGru6X03MBsXSRWZIAO+sP3VbqI/FFtfiAaoCLH9qQubeE4EzwRxJEkwfZUFtOQSsJsLDU5Wv9kW10XGBJewSc/+7uWHT00mitjvESENnvf10cJkFyozNOllxWn2TxOVptj88d8/Qn0ZbBKnrkJlh5vBJkM9pwZSfLcj9jyadrDjrEBUYrkg7dz1u/46vk2tyHzvIk296kLK6SDuu8mgM++FWnX62+PYkwBEPG1669NLymgiBCEQ0idO+KIXj78GcbOHyaXnUN0FEh1MeSE2S676oVq+J63c1qA1q2UGvtE5XpJPH6uH46bY8PEMg1u1vfwyaFcFjyw7/ubgmeGPcqJGwyvK7CvKjkigVQG6/JJ7//XscOXSI0qO1uJw2FKGzYuVjRFWZaAT6uOBfn/ToekoCMtd1KmsWuoXcwelyTR5IalTnXNZUnc92N44uLvPGv3hZ0EeSKqaNcpZOHe5C8lRw712LCTTV4nTaQQdd0+iTlsSfl73L/zzzJpkZcKJK4407nWZ8CQh/p8l8f0mznmwHRbRlAKmPS6GVM1NM+P0qj798cA+mBEj/SDPb/jAx95tqldffKWbez//I0CHZHSaHLFYLZccrmX/nUvootUwokCJTBirvEydSDx30NImHVwRWKwJSbGfZ8AXsMq08KEvh5vsSgBQDkGDpI+NvXP3hHp575nVys1yYFLmbOIlGenoKC3++glVvbuKx2+yzOZoADEIUNtVFr//qeHSKzQwOi8EAiqXlS+ckQ17R53sY5oJwLKrXitfBgKC0gph0HXSNsbkDdm9a8+7q1R/tl4puuiw9GIokA241ErWp4ahTi6gSAouuo2mqpkUCYa+maX5V1XyKSW4yW8xVC+5YGny26HJx/87v6JijbX9L0zjb3SuG26MkuO91/6e7lriF28qZ13/E4rUNIEl8vLFiwSfVgd902lFSDbfggISR3jLbDbY4jBY5stlgSUCKDIuLIG0AWBSjD7umGX3aVa3lfQbOxrFaGwNKwgiuyhIEQi3r02HsNFCcRvJESMbvm2xGbz6z3fhrsreU8GsQjbTggjoQzrEo655KFrsrdBZMEYjfr69hS4ln6ModtaXYZGORrSAIq9MARdiSjIUqppbJRg2UVodfQIKdr0NjZeLAFN4amPlLI4rUmQaqrYsWhlCsLqNxi81lCExrQcPJQI0WXTzXYVr4XRnx1qZKfrBor05mX6Oay55sDIBuxOs7k2RnwU6zCv/3uCGwRJGQDFRI4d1GVqlHIayI8cGE3NJmsg+4khksW7448ivpUjFyUWjzNwGpkFDorAR7S+lOeHaO0Tgp0SQkSM+HtGG9C6CeqzVqBGq86BtmCOn5OeYrOOZrydbEsXirHZb/DDIKuCCka1D+uQGE1LXen4kAFjM/vnrIAgApPwOWzXNcG1fRrKob/YHMzt51wIyVLC7YsASSsuMbZ18Trz805CkA6UgdXDVeWSvX91KqmgZuM+x4J44v0wNKzoFNvzOsfq+iRiofvTJp2CctiHlp+zGVP+1SWfIjh51ALxaQ6YaX5hrG5e9Bmmq8PnSypOPHsrq5CySpInCgOnRo12HDmCpTCozbmc1MIGe9XFqh6cNi9sVdTnjpPyEz/8Jghbu0B7sga5TRqzdWCF91kOI3Jtt9AfVsTKKiTqeiTufQSZ2/3efIP//VtM4NqgwbXwF35t938WdcVjt89jtIyiEmf12RmDGp7/ulx/1UVIU4UWUECaRgUCMY1AiGNEqOqdxymWURpu6MngaNh6Cm9B+LHHVnwbpfgiuGjpVHm1lwS//Zfl+EgN9gAHHgvKcAhqaCPKdRZ0AnbpiqGkbvtfng7ss/nCTFeFVv0rzOL0myYMl1ObdeNzVt1bld3gv6SoiXtrZV36gKuqqP/a81/t3tQtRnANO3Qtpg/mlIyEatweDC9ieRAKqC/GXJeHGyrm0A+O7pfVD6p7e/APR18SVv6hGSRdsEaIYLni0yegT8M8HtdNXACzdVgDOjrVH0RXn7V+NShCKRm9X+ei6ZdTifmzyw41G3maZzpJnihBd/Ylj8rhbf6uW1qlprlXjrkRWJGq8rnpvFDIRbPEbdsC/njtU6RneXVCEZjbSFOHsZkwVJZrk8P9famGqXSbFJbRhAKa/t2IIrMozKljd+HdS/i8UJb9wPqf1Bi5x1xMJRY8JRFSwmFEXGZpK9dotySJKlo5mZKZW1NY2lY/Iy66KK0rB5+6GGGTPH+udcPSb4w3teDWI3CyIqv31gtqnG6ze99dfd9knD+zm2fHk8TRUidfjA9JymQGhg0BPoX9XgHRhQtcF6KELUGzLcbFkyGnLLwpCWyQ6fvwZXzjfamleHee+FSQO+OODtUH6FQ8woU/M7P0NvetQxzXF7RKdkEfgEJimMzSSf7JedssEEG8aOHrC15OsThyeO7k/J/kr6pjq4JC+ddRv34XZaGZOfzTZ/EMVmPuPAyLKExdzWwJpMMibFSJHJZgUhCVRVZ9iwLLzeAD5fCHtdM4Oykqk77WXSxCF8sbsMh0Ox1VR5Jllt5iuPH6u+qtobLAxHbYK1v4Hrn2DWQN+Lg9Mlcvt27pkqKw90vZevHXZwYSCaunnMqPFbPik+SGqqk2SXlROVDSiyhD8QxuMLEo2qRKMqkYjaq3qdbre5rhOJqqiqRmOTn0AwjN2uBHRJbBw9Imejp9n/xHWzxlFT52XfgZM50tfL7p27bPFDK7YFOp3PL64xXcQOX0SOXhTAt5z+n70zD6+qOvf/Z+29z5x5niCEEAIoikgQHBGsVqvW2qcqYi1qe+299lp7vVWv+nu0ah3aXqpUrW1vrRcVx14BxXkqyEVAEcokCCSRnMzjycmZ916/P9aOBIQaQpITrqznOc8hecI+66z3u955+NrzgKM34Og6CoCj6ygAjq6v6TIAnlwTP6I2LSWUljr408Nvznv6oSe/z7jSzkN2jx/21dFgR03GZTfNf/Kqn531dG0tiCOM+D88zgZAS2vnEbVxj0tj5WpR9uzOvKcYU6oq7R12MHtYVGcBoS4YV8aLwTPOOW4Nq7J8Vk04dqTdf00BwCmOHEtAE4JUl8aDb9W8ZlpOGH8ybFw28CjhQFekG069moTh4E8fBF+/8SzPhHBcDjsjGhQAmIZ+RGxXSijNd/PnZXWP7djeXUmJBzwToaga6jepoMBQh6Y1Ddr3QOWZMO4E6AxSXWtVvr018diP5zh/XNMih8QXOKQ6QGG2d8Rv1JKS0Xlulqxomrv8b03XUtKnO03ZySoYEg+D4R46USCEuvnphTDtEgiaqsFsgcaS1ZFrJ43S/nbJSY5natsk4ghBgQFQ19wzsm8+4HPr7KnvKV/wUs1ict3q4IVQGW++LCg7Fba8bE/UHcLNhLrgrKvA54XOgApEWUCWzgOvRxanOrV1aT6xsydmjXil8ILxugJAZbFnRG/U7dSIxCzj6r/sWmcmJHj7VBMJoerPCycpLrBnvWrQMdiiQNNVZ5NjvwkVU6C1e98kPQeYUclDb4fXLPphSr7bSSIck0cGBwiGR+5GNQE+l8ad/71zZXNjOJMCz5d78whNtaYZe5qa0RfuVOmpgzaIT0BPO+SVw/S50BnjywkTQKpGY6uVdcuLoZX3XuyZ2dytRNfIXUIBwN8SHZHbk1IyOt/D/U9V/+WjDe0zKPEdvFzPTIBDg4ozYcMLKgdhsOSwZY8ROflq9UwzeuBnW0COxvrt8RkPv6X9+drZrmtq2xjRSqEBkJtmjLiNWRLGFHhY/Jr/9jc+aJpP6Vd05hFCJZFnjVYd+7a9Aan5hy8KNANadsEZP4KiUV/d4MICCnReWRu9ujhV7J53muuX1a0STYxgADjcxsgjfp6HZe83zPvj0s/v7ldbpl5R0N0Mo05U7/6Nh6cPaDq01cAx34DJs6A12L/kfBMo1PnD25F78jO06ktOdiyuaR2Z5qEB0BMcOSJASkl+pos3VjWe+ZvFu5+ixHtoVdpCU/K6Yg4EW6GnVdXLHKosFprq/FhYCafMh47ooUVObE5w19Lw05ZGw4xx+nsNXSMNBLo9Vufj4Ii5+UU5LtZsDky78cGt68h3DUyASqmqyMwYrH8GEKqCrb/2oRAQC6u/v/AucPgg0jPwvbRKfne1b9qplfrH/o6RA4LzKoUCwHs7oiOC+AVZTv6+o3vC5b/YuI1spypmlANmJaoorNMPG18Ad0b/CSilEiHn3Qr55dAd6P/444Nxg3aLRdelTJg2Ttve0DkydIJZpTYAnlubXA4gJWSnO/mstmfsdQ9t3UWasbeS9bBQZUFqHvg3wNblqorgq/QBTYfW3TDrJ3DMTGjtGpwRUibQbfHQvJTyikJtd2sw+dbBFVNtHSART+7Nz8twsm1XsPynD2/dSYaTwx4q+gUxNehuglFTlct490pVUnKweh7NgOadMP1SmDwTmgODNz9MV36Cnz4T3PWb76WMK84Wu1qDMskJGZriAFvr40m7+cU5DlZuDEy48D82bCPPPXjE3+eDLFXIteUVqNsIaXlfLq/TDGirhomzYfZV0BIcmnQZE+iweOfm1AknV4rtdR3J4wTlmXZS6Kt/70kC8SWF2S5WbOia+rP/3PoxQ+6Olqp388a/Khbvy94rDjQdOvxQOgW+eT10hG1KDd1WaLb4/Q99J86aoK+v70yOYnhmha0DPP1h97B+sBCQk6Gz7P3WWY88U/0eo3zDU24lhGr98MnzqpzKk6HSeLqalLL3rVugOwIyMQx7ARpNfnyed9ZFVcbfWrqH32V8xRQ7H0Bo2jDefCjKdbPsvca5jzxTvZhSH4fdkOxQPjzaDVO+q4YahLuUqZhZAufeDD2x4SF+Lxco0nlseeh9r+Gde+FJjmfrO4YfBAZAZ0dk2D6wMNvNo8/t/n8vvFl/F2MOofX2oGmdCWXjT50LKx9WJfcX3A6RhPLxD2cQ1wRKdBYsCz3jb3ePm3eK6576zuEMI9siYKt/6JVAXYPCbAdX3LfjmZffa7gsKcT/QuET0BVncqlra6xgItsbmYTbHLaUwgNaCH6TC2e6nnn2Wvfl/o7hYYqVubYS+MSKriHldF6XRjgiuenR7Z+0BKJTyHdzWC1YD5f4nTFy0pz1T/7bxOLjy3xU3d/T7u80M8mwkzuSsQygxaIgTfvkoSu8Uz1OCA1xkumlU20z8K4lLUP2IU6HTiJuuRc8u7u1I2r6SHEkr75eF9ASYXS+Z8+y248dHbYgbjgRCP2C3wWbOiNWNila8jiBAEIWWU4teOuFnlzdEJFoXA6ZVLp5lh0L2NRgDsm3yc3UeHN1xwnX3L9lfSLTCQ6RRDYroCnM2OKUz9769Qnj4yb0RC1CCQ2PvbWzFwTrmgJWcVI5AUBCogckj/+T74TzpuobWgNDc2cm5vSKgPc6Bv3h+ZkuFr/VcONTy/f85rD7Lg/SzR9b4vvo55eNqdrTEiUcNUlx68w9Kx+fW6ALcDngpDt7tu1uMCeQk2QQ2HrB98/03HjZyc4FTV2Dv5mrTrJFwIc7B8cK6E3edOiCa3617Z3VmzpmU+JLnrIHKqZQG+T06TnvLLy+8qy6lhhSqnbNMVOwrtFJ1FQA0DUYk6Nx99Lw6j2NiRnkakPqD+oXCJotThzrePcP8z1zEBCMDJ7T6PSxthXQ3ykK/9CisSSl+U62V4fTzr9lfWPMo3lIcTDgqcqDRfyabr5zTvF/L7yhYn5NY2Jvm01b5KZ49L7dN9EFFGYKvvdI+KX3P4pdRKkOiSSCQABhiTsiw8tuTCmoLNYCta2SwRiHfHJvNHBt7eGFg6WEscUuHnmx4ZJfLNj2HBNTk8s+QbWG3hPi27MKbzv31Lx7m9pj+9yceELicWqcc1I2HtWtZx9DoTgLrvlD9P6XPojcnHQQ9AJht8kd8z2XXvdN5/O7mw6fE0wvsgHw55WBAbF7gDSvjselc9tjO17dtK3jXEancNDWw8Np6n3WzW//fdJ3/vW7+UuqD9ALShNKLemK6ljyywEZKWFCMTz8auIHtz3V8wRj9OSKg15TscHi2DLHa/fN9ZwXNyFwGBndP5hqA6AzcugP0TRBmhMefbW1+Lr7t3xOgUvDbSSX5QsgZiECcZ6+dfIxRUXerXXNEQ7UOF/pAYKifC+6fmAtW0oozhQs/8is+snjwbXka8kP4gsgJqFDWr+a5xv987N1f2d03wZr/V3ZHtsKeO6D/juCLKkKNcqLPdz3RPWdz75edwcVaSPj1gdiZHkc3fdcPS7XcIho5EAd4CX4UtwUFnhZ/PwqJoxJ4/q5k/msGcJhviRbLQmF6bBpj0y9eGGwxXRJF54k+gr6Koifm1x6mvsXt17kunN3s0U0wSFlGn2v1xG0ru6rBVxvE/eyQoNPq2OuWdetrZUeLZ9MV3K1/F553xQhL8e95o6rK2a4DY1wL/Htq+3xekhPdfHplu0sWfo2H737d9Xx1pLQ0sHZV53L2d+qYtyEMmJxCIf282Y6weuAa//Ys9nfZh5DrpZ8vUAHAhZGTDS9ektq6eg8ojUtNgj6AYRvlPVygE96vlLJczo0xha6ufX3O657bbn/YSrTkmvb99X0q7u5cE7hA4/dVHlLa6dFPCHRNY2xRYLmAPx16TpaG5p4b91O2oIJsjJ8bP+sgaA9WifF56KyopC2jiDZXoOTpowjs7CAOedVkeKD2loLTRMYBhSkC/796cjvV26K/pjiEaAcgkpcqTW54AzPTx6Y53xkVyvE418trS4abwPgzU0HHqVmWeB0CEoLPbS0hF1zblhfHdIpJMs9MKEzFKsuxA2XjT3j4jNzV/SELFLTvGiEeWn5B/z67r+C28G3L6xiVGEGm3Y1U9/aTarPxY6djfsAYPy4AgLBCKPy0qkYlUUkZvListWEAnF+/dsfccrMY0lLF3R1wahMePzd+LfuXNTzCmVG8i2eXm7QaeE1Rf37t6eW5WcTq22GqHlwsTB7nB0OHlPi+dKNF0KQmwnVTRbfv2vzTas/bHmA8anq1ieb+LoK6HgSsvu9v5yaX1Wmh2u7Te7+z5fZsGY78+edzsZt9TgKs/B5nCRM65BdqYmESVFRHjtlO2+/ux4jFOC/Fq3k+BnjueVn3+bG8x3Lp43NyDz/gUAj6cKFRyQXCCaQqhHSKZp+U2d0xvHumx/+kftXk7OgpVtJOnEQ5kE4Jvd5SQThuMnvXmzIn375qsDq2u4HqEwdZpZ/EEGmA7Uhvj2r/LnqZaekPfHkK2E99RoWPbsKaYFhOMnISMGwm14IAQ5Dx2W389V0DV3X9mGPQqgutpqmYRg6LpeB02mgaSp2YRg6WVmpeD0uHJrG0pdWkZp+DX9e9FLnZwt97stnpr5OowDNOpj2NLxAKDP4sCH2wIyfBwIPvW3mRyToBsTZ9wW2CFi2OfKFxpvmFphmgnsfr1n0/oct32dcijI7BkRAue9BSEvJld45S0jbJSdU3r2mqeRMTVc7Fn3+rekgHJCazXGtb6zrWPvq5vpYxqTReWne2kDIm6Vr3jBkREzT6dY0PSYlcUtl3RqmhUxYWLpA2kSVmobsnaFkgbAsECAsiWZJpBBYuoalazgEOIUgYlmmW9djbujsSFjh0nRPT21zMJQj2jZnnHh21Y702ceRaO/zHRzqXdP3/q73vbeptuw9G/t8ZN/z6etxGciwaGUpzD7B+eTt33VfKTRBICbR7GedX2EDYOG7ASxLkpnuZPOW9vMXPrv75ViGC5x92ZrYd0PSUtk1XwyyQhFRd6hxRbpDZdv0vnSHfSCGTVzNxojcK3f6DOD6AiCg0ri9qSBi8NxN6ueUbLszuOiVWXsBNdSMaf/PFLrqHKIbMONqdSaxnj7FJPsTWH6ZwEKzge6w353gcO57fr3n2ve5lk2HL+od9gOMABISR8Dip+f6Lji2wnilI6gKU66faTuCFv1vO40dZNz7x+1bu2SikDRdtXaXqFup2xtxuO1hXR5wuOyhYcbetvBSqv71lrmfZ+UwUGxakJ8GWz+ENxdAXsXI6te/PzoC9XDcxVB8PHT5FeAHhrJ9OegX3NPce9ZCqOcbTkWP3qFqhlv9bDhtKS+VeOqIkY5suPViz6SCfL3zymNtAEy8Yefbn34em0NpDuhuG3GGLb56x+OZ+6F2iD1iUqovkOGCJfeDfxvkjEnunJJ+mWSGKkbJHA3T5kGofS+nGnLW1Ic+lmkPubPUr3VD0dXjgYCXyrHudz69t+AsIaXkhU9k1iULuxtJFQ7cIvleLtOEnHTw74Qld0BG8d7pfUfCEkI1lAi1w7TLIXMMdDcOkBsMsrc0ZEJHPL70l5MLLpyR3i6klNS2K0Yx44FgXX2HVUxmspIhpFLzc72w/FHYuUqNaDGPrE6m+3CDQAMUTIQplygQJDkdrjjH7f/owaklFlCUpSkz8POApCksef2GlJJJBcYKmk0YbrCaFmSkQrwFFl6pavRyyo5c4oNi/an5qm/RG3epkZzerOGfNWZo4A8xaVTKitfunVJS1x1nV2tsrx/A5xRoQiAFvHGz94wzjnE9wp5hAoGU6qYUpMFrD8ELt0Femd3uzeKIX9JSmntqAax5XJWmpRcpy2E4ZK1DucrPqMp95PUFU86wBAih4XXre/0AK2pk37gJE4oED74a++f7nw8/SukQxsETtoZfswWW3QNZo9Rh/V8dYtE71CrYCifOhZxxSkQMlW6gq7yIW6+t+JcbLyv5/bba8D5GxikVHrs28JMvH3heGiz/JHHaQ6+EVpCrDa4Wa1ng9oFXhxdvh/Z6Rfwjmd0fqm4QbAZfLpw0X/kM4uHDa0JxoFUf4qdXlJ9+3syclc0dUcR+NJx3cpodDv78wJy5OAve2mQVXPXHYD0ZQuAcBAvBElDgg7WvwoonoGD8/w1WP2C/gR8qz4Hy01Wjy8MFgQCiFrTH5F9unVz0jaqMRn9L/ICRwaoye27Y0s3yoOI5zQ1CYsz9Q09jU8jKJm2AFoJpQVaaUoiev001cvRmJGf46ojiBppqd5+IwklXgTdTNacaiFjQBHTEyEsx2p6+bXKBFCQCIfOg0cDvTEtRAFi8/h9fa48TEgnBDU/1rKvvMqeRcwjJEJalRoynGPA/d0PDZ5Bb9vVh94fkQGqA9GKY/gPlWj4UsWAIaIxQkuv+aOG/VlYZDkE4+o8v1yUz0u20cH//gFqYCT95PPLUK6uj8yj+KuVQgtShwAurlsDqxZD/dWb3h6Aodvph/GwYf5YSC301t4OZeTXdnDen6OkF14+/oqEl2q/UzNkVLgWAP63tHxuWQGGmxov/G/v5onciv6LoICDo9d/XboWlv4S0fMXyk83uRT8sr/78zZDvU1PD0cOdyp2cU37wuIIu4PMerryo9KbvfaPo1/UtkX63qv/R6akKAG9s6f831oQk3SdYsjZ+9n2vhN8gX997YKYFmWkQaYfnblPx5fT8f8zuRZ9Tl30IIKXSNSxLPVcT6nmxuBqZG7djE5YEnwvdoSMicUyXA92UaBrEdQ2BwNBUGoGhCWlJZI9pmQe4UtKna7oGIoEUplRWqkTiMC0sS2LqGno0jnQ7MeMJ6ImqfQkBDjuA5nTs3aveG+Jm7wxkeYDvfNDD1iHUqf7vzGtUv8KePvqBEOAPcdu8Med8d07+m13d8UPC7pmTbR1gdd2hQd6SKjdut98q/9Zve3bG3RZkpIML+Osd0FKj5Hw8qmYrW/ZpWmrWsvC60R06hqFJhxDNKS6HX3ca9ekZ3qYUr6uurTVYl5ftbRWG0ZyW6morKcxsW7+tvj0ajlqTK4up2dPG8ROLcDscOHxOXnvr7/jbg8ypKueDj6uZMW0sHkNn2esbycxN49Tp5VSW5jBzyhh272rhX+54Hpy6IhooMMVMHv3FJYwZm8uHG2rY8XkrH6zdRWdLgAu+eTyheII1H1dz6ollvL1mF6NyUjjrzMmYkRjheIKtn9YzelQ2m7f7cXhc2tTKwix/c1d2IBDJlolEXnNbKCc7J6UkGIqWdHWG8hOxRFFPNF4clzIvkbCEGTeRoYgaXK1p9jvq3XBAoElx0unzlW7Q3YXRI3n5nuMrSsek7Gzer/ClP+v0cqfy9b2/bWBy2eUQu355qdf74Eqzp+n1R0Wq/4Mm16hJ20pnVm0zY+b2WDyxY/Ixo3bWNXXWmjEzVl6WS0lxNu+u3IYETphYTFNbNxs215GXl0ZxfjrZ2amsWrcbdB3d0NE1DSEEpmkRicTpDkaIRON0BSNEjARO0ySeUKIlHkuoMctxE8O+XJY9djkaS9ATjhGOxg8sTgWEo3FC4RjRWIJ4wsSSEgnE42ostJSSeExpv/GESaA7TDwSI5owCUftvUXiaE6HJYRo1TWtVTd0ElLi9Dg5blIJbW3d+JsCNDd3UVU1lqLsNDZ86kcAs0+bSJ2/jV01LWiG5hxVkFG6aUvdOKfDGK878ypr93RMjL5734Ru3/iCvBMvkDdeme/9rCkR2VzXPiD6nV6edXR07Nfe+Dh6BEcBcHQdBcDRdRQAR9fXcv3/AQCDLjmsv6RqYAAAAABJRU5ErkJggg==",height:t.size,width:t.size,alt:"Awesome Icon"})}}).call(this,n(52))},207:function(e,t,n){"use strict";(function(e){n(0);var i=n(178),a=n(176);t.a=function(t){return e.createElement("section",{css:{margin:"0 auto",padding:"0 4rem",maxWidth:"128rem",textAlign:"center"}},e.createElement(i.a,{onClick:function(){return window.scroll({top:0,behavior:"smooth"})},css:{position:"relative",cursor:"pointer"}},a.a.logo?e.createElement("img",{src:a.a.logo,height:"50",width:"auto",alt:"Back to top",title:"Back to top",css:{}}):"Back to Top"))}}).call(this,n(52))},208:function(e,t,n){"use strict";(function(e){n(0);var i=n(209),a=n(210);t.a=function(t){return e.createElement("main",{css:{display:"flex",flexDirection:"row",justifyContent:"flex-start",position:"relative",margin:"9.8rem auto 0 auto",padding:"0 4rem 4rem 4rem",minHeight:"100vh",maxWidth:"128rem","@media (max-width: 768px)":{padding:"0 0 4rem 0"}}},e.createElement(i.a,null),e.createElement(a.a,null,t.children))}}).call(this,n(52))},209:function(e,t,n){"use strict";(function(e){n(181),n(0);var i=n(178),a=n(176);t.a=function(t){return e.createElement("div",{css:{display:"block",position:"relative",width:"22rem",paddingRight:"4rem",flexShrink:0,"@media (max-width: 768px)":{display:"none"}}},e.createElement("div",{css:{marginRight:"-1.2rem",position:"sticky",top:"10rem"}},e.createElement("nav",{css:{display:"block"}},e.createElement("ol",{css:{margin:0,padding:0,listStyle:"none"}},a.c.map(function(t,n){return e.createElement("li",{key:n,css:{fontSize:"1.45rem",lineHeight:"1.65rem","& > a.active":{color:a.a.color||"#3eb0ef",fontWeight:500}}},e.createElement(i.a,{className:"undefined"!=typeof document&&document.location.pathname===t.link?"active":"",to:t.link,css:{display:"inline-block",width:"100%",height:"100%",padding:"6px 0",color:"#738a94",lineHeight:"1.5em"}},t.title))})))))}}).call(this,n(52))},210:function(e,t,n){"use strict";(function(e){var i=n(0),a=n.n(i),r=n(211),o=n(213),l=n(176);t.a=function(t){return e.createElement("div",{css:{maxWidth:"calc(100% - 22rem)","@media (max-width: 768px)":{maxWidth:"100%"}}},e.createElement(r.a,null,t.children),l.a.feedback?e.createElement(o.a,null):e.createElement(a.a.Fragment,null))}}).call(this,n(52))},211:function(e,t,n){"use strict";(function(e){n(0),n(212);var i=n(176);t.a=function(t){return e.createElement("div",{css:{width:"100%",maxWidth:"76rem",borderRadius:".5rem",backgroundColor:"#ffffff",boxShadow:"0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)","@media (max-width: 768px)":{borderRadius:0}}},e.createElement("article",{css:{padding:"4rem 6rem",flex:"1 1 auto",lineHeight:"2rem","@media (max-width: 768px)":{padding:"4rem"},"& a":{color:i.a.color||"#3eb0ef",fontWeight:500,position:"relative","::before":{content:" ",position:"absolute",bottom:-4,left:0,width:"100%",height:1.5,opacity:0,backgroundColor:i.a.color||"#3eb0ef",transition:"width 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)"},"::after":{content:" ",position:"absolute",bottom:-4,left:0,right:0,height:1.5,backgroundColor:i.a.color||"#3eb0ef",opacity:.1},":hover::before":{opacity:1,width:"42%"}}}},t.children))}}).call(this,n(52))},212:function(e,t,n){},213:function(e,t,n){"use strict";(function(e){n(0);var i=n(178),a=n(176);t.a=function(t){return e.createElement("div",{css:{display:"block",position:"relative",maxWidth:"76rem",margin:"4rem auto 0 auto",padding:"6rem",borderRadius:".5rem",backgroundColor:"#ffffff",boxShadow:"0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)","@media (max-width: 768px)":{padding:"4rem",borderRadius:0}}},e.createElement("h4",{css:{marginTop:"0 !important"}},"Hey!",e.createElement("span",{role:"img","aria-label":"hello"},"👋"),"Was this page helpful?"),e.createElement("div",null,e.createElement("p",null,"We're always looking to make our docs better, please let us know if you have any suggestions or advice about what's working and what's not!"),e.createElement("div",null,e.createElement(i.a,{to:a.a.feedback},e.createElement("button",null,"Send Feedback")))))}}).call(this,n(52))},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";(function(e){n(0);var i=n(179),a=n.n(i),r=n(176);t.a=function(t){return e.createElement(a.a,{defaultTitle:r.a.site_name,titleTemplate:r.a.site_name?"%s - "+r.a.site_name:"%s",title:t.title,meta:[{name:"twitter:title",property:"og:title",content:t.title||r.a.title},{name:"description",content:t.description||r.a.description},{name:"twitter:description",property:"og:description",content:t.description||r.a.description}]})}}).call(this,n(52))}}]);
//# sourceMappingURL=component---src-templates-default-jsx-f7d9c8d36ab6b1867d01.js.map