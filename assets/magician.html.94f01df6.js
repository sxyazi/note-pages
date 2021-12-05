import{e as n}from"./app.39480b94.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5FAA\u73AF\u94FE\u8868-\u9B54\u672F\u5E08\u53D1\u724C\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u94FE\u8868-\u9B54\u672F\u5E08\u53D1\u724C\u95EE\u9898" aria-hidden="true">#</a> \u5FAA\u73AF\u94FE\u8868\uFF1A\u9B54\u672F\u5E08\u53D1\u724C\u95EE\u9898</h1><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">int</span> Elem<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Elem elem<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Node<span class="token punctuation">;</span>


Node <span class="token operator">*</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Node <span class="token operator">*</span>n<span class="token punctuation">,</span> <span class="token operator">*</span>h<span class="token punctuation">,</span> <span class="token operator">*</span>t<span class="token punctuation">;</span>
    h <span class="token operator">=</span> n <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token operator">-&gt;</span>elem <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        n<span class="token operator">-&gt;</span>next <span class="token operator">=</span> t<span class="token punctuation">;</span>
        n <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    t<span class="token operator">-&gt;</span>next <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token keyword">return</span> h<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Node <span class="token operator">*</span>n <span class="token operator">=</span> h<span class="token punctuation">;</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token operator">-&gt;</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> n<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Node <span class="token operator">*</span>n<span class="token punctuation">,</span> <span class="token operator">*</span>h<span class="token punctuation">;</span>
    h <span class="token operator">=</span> n <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// \u7B2C\u4E00\u5F20\u724C\u662F 1</span>
    h<span class="token operator">-&gt;</span>elem <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4ECE\u7B2C\u4E8C\u5F20\u724C\u5F00\u59CB</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">13</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            n <span class="token operator">=</span> n<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">-&gt;</span>elem <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j <span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        n<span class="token operator">-&gt;</span>elem <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6253\u5370\u51FA\u7ED3\u679C</span>
    <span class="token function">print</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div>`,2);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
