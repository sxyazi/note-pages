import{c as s,o as n,e as a}from"./app.39480b94.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const p={},l={class:"language-bash ext-sh line-numbers-mode"},r=a(`<pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u89C4\u5219</span>
iptables -t filter -A INPUT -s <span class="token number">192.168</span>.1.2 -j DROP

<span class="token comment"># \u5217\u51FA\u6240\u6709\u89C4\u5219</span>
iptables -L

<span class="token comment"># \u63D2\u5165\u4E00\u4E2A\u89C4\u5219</span>
iptables -I INPUT <span class="token number">2</span> -p tcp --dport <span class="token number">22</span> -j ACCEPT

<span class="token comment"># \u5220\u9664\u4E00\u4E2A\u89C4\u5219</span>
iptables -D INPUT <span class="token number">2</span>
iptables -D INPUT -s <span class="token number">192.168</span>.1.2 -j DROP

<span class="token comment"># \u5220\u9664\u6240\u6709\u89C4\u5219</span>
iptables -F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div>`,2),c=[r];function t(b,m){return n(),s("div",l,c)}var u=e(p,[["render",t]]);export{u as default};
