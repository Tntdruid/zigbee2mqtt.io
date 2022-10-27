"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99338],{70700:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-4ce67332",path:"/devices/SNZB-02_EFEKTA.html",title:"Custom devices (DiY) SNZB-02_EFEKTA control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) SNZB-02_EFEKTA control via MQTT",description:"Integrate your Custom devices (DiY) SNZB-02_EFEKTA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-09-06T00:31:40.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Additional functions:",slug:"additional-functions",children:[]},{level:3,title:"Build guide",slug:"build-guide",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Report_delay (numeric)",slug:"report-delay-numeric",children:[]},{level:3,title:"Enable_temperature (binary)",slug:"enable-temperature-binary",children:[]},{level:3,title:"High_temperature (numeric)",slug:"high-temperature-numeric",children:[]},{level:3,title:"Low_temperature (numeric)",slug:"low-temperature-numeric",children:[]},{level:3,title:"Enable_humidity (binary)",slug:"enable-humidity-binary",children:[]},{level:3,title:"High_humidity (numeric)",slug:"high-humidity-numeric",children:[]},{level:3,title:"Low_humidity (numeric)",slug:"low-humidity-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SNZB-02_EFEKTA.md",git:{updatedTime:1666897866e3}}},88113:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var a=i(66252);const d=(0,a.uE)('<h1 id="custom-devices-diy-snzb-02-efekta" tabindex="-1"><a class="header-anchor" href="#custom-devices-diy-snzb-02-efekta" aria-hidden="true">#</a> Custom devices (DiY) SNZB-02_EFEKTA</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SNZB-02_EFEKTA</td></tr><tr><td>Vendor</td><td>Custom devices (DiY)</td></tr><tr><td>Description</td><td>Alternative firmware for the SONOFF SNZB-02 sensor from EfektaLab, DIY</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, report_delay, enable_temperature, high_temperature, low_temperature, enable_humidity, high_humidity, low_humidity, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02_EFEKTA.jpg" alt="Custom devices (DiY) SNZB-02_EFEKTA"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="additional-functions" tabindex="-1"><a class="header-anchor" href="#additional-functions" aria-hidden="true">#</a> Additional functions:</h3><p>binding to clusters of temperature, air humidity, OnOff, direct control of external relays by data on temperature and humidity, direct sending of data on temperature and humidity to other devices.</p><h3 id="build-guide" tabindex="-1"><a class="header-anchor" href="#build-guide" aria-hidden="true">#</a> Build guide</h3>',6),o=(0,a.Uk)("Instructions on how to build this device can be found "),r={href:"https://github.com/smartboxchannel/SONOFF-SNZB-02-Temperature-and-humidity-sensor",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("here"),n=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),c=(0,a.Uk)("How to use device type specific configuration"),l=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric" aria-hidden="true">#</a> Report_delay (numeric)</h3><p>Adjust Report Delay. Setting the time in minutes, by default 5 minutes. Value can be found in the published state on the <code>report_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>Minutes</code>.</p><h3 id="enable-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-temperature-binary" aria-hidden="true">#</a> Enable_temperature (binary)</h3><p>Enable Temperature Control. Value can be found in the published state on the <code>enable_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_temperature is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-numeric" aria-hidden="true">#</a> High_temperature (numeric)</h3><p>Setting High Temperature Border. Value can be found in the published state on the <code>high_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>50</code>. The unit of this value is <code>C</code>.</p><h3 id="low-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-numeric" aria-hidden="true">#</a> Low_temperature (numeric)</h3><p>Setting Low Temperature Border. Value can be found in the published state on the <code>low_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>50</code>. The unit of this value is <code>C</code>.</p><h3 id="enable-humidity-binary" tabindex="-1"><a class="header-anchor" href="#enable-humidity-binary" aria-hidden="true">#</a> Enable_humidity (binary)</h3><p>Enable Humidity Control. Value can be found in the published state on the <code>enable_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_humidity is ON, if <code>OFF</code> OFF.</p><h3 id="high-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#high-humidity-numeric" aria-hidden="true">#</a> High_humidity (numeric)</h3><p>Setting High Humidity Border. Value can be found in the published state on the <code>high_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>C</code>.</p><h3 id="low-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#low-humidity-numeric" aria-hidden="true">#</a> Low_humidity (numeric)</h3><p>Setting Low Humidity Border. Value can be found in the published state on the <code>low_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),h={},s=(0,i(83744).Z)(h,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),h=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[o,(0,a._)("a",r,[u,(0,a.Wm)(i)])]),n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(h,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);