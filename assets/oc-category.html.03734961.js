import{e as n}from"./app.39480b94.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="objective-c-\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#objective-c-\u5206\u7C7B" aria-hidden="true">#</a> Objective-C \u5206\u7C7B</h1><p>\u5206\u7C7B\u53EF\u4EE5\u5728\u4EE5\u4E0D\u4FEE\u6539\u539F\u6709\u7C7B\u4E3A\u524D\u63D0\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u8FD9\u4E2A\u7C7B\u6269\u5C55\u4E00\u4E9B\u65B9\u6CD5\u3002\u4F7F\u7528\u5206\u7C7B\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u6A21\u5757\u5316\u5F00\u53D1\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u5206\u7C7B\u7684\u7279\u5F81\u5982\u4E0B\uFF1A</p><ul><li>\u5206\u7C7B\u53EA\u80FD\u4E3A\u7C7B\u6269\u5145\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u6269\u5145\u5C5E\u6027\uFF1B</li><li>\u5982\u679C\u5728\u5206\u7C7B\u4E2D\u6269\u5145 @property\uFF0C\u5219\u53EA\u6709\u5BF9\u5E94\u58F0\u660E\uFF0C\u6CA1\u6709\u5B9E\u73B0\uFF1B</li><li>\u5206\u7C7B\u4E2D\u82E5\u6709\u4E0E\u539F\u6709\u7C7B\u76F8\u540C\u540D\u5B57\u7684\u65B9\u6CD5\uFF0C\u5219\u4F18\u5148\u8C03\u7528\u5206\u7C7B\u4E2D\u7684\u65B9\u6CD5\uFF1B</li><li>\u82E5\u591A\u4E2A\u5206\u7C7B\u4E2D\u90FD\u542B\u6709\u76F8\u540C\u540D\u5B57\u7684\u65B9\u6CD5\uFF0C\u5219\u6267\u884C\u6700\u540E\u4E00\u4E2A\u88AB\u7F16\u8BD1\u5206\u7C7B\u4E2D\u7684\u65B9\u6CD5\uFF1B</li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u5206\u7C7B\u7684\u6587\u4EF6\u540D\u4E2D\u4E00\u822C\u5305\u542B\u88AB\u6269\u5C55\u7684\u539F\u7C7B\u540D\uFF0C\u5728\u8FD9\u91CC\u6211\u8981\u6269\u5C55 <code>Person</code> \u7C7B\uFF0C\u6211\u7684\u5206\u7C7B\u6587\u4EF6\u540D\u662F <code>Person+Utils</code>\u3002\u5176\u4E2D <code>Utils</code> \u4E3A\u8BE5\u5206\u7C7B\u7684\u7528\u9014\u8BF4\u660E\u3002</p><p><strong>main.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person+Utils.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>p say<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>Person+Utils.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;Person.h&quot;</span></span>

<span class="token keyword">@class</span> Person<span class="token punctuation">;</span>

<span class="token keyword">@interface</span> <span class="token function">Person</span> <span class="token punctuation">(</span>Utils<span class="token punctuation">)</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Person+Utils.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token string">&quot;Person+Utils.h&quot;</span></span>

<span class="token keyword">@implementation</span> <span class="token function">Person</span> <span class="token punctuation">(</span>Utils<span class="token punctuation">)</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u533F\u540D\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u5206\u7C7B" aria-hidden="true">#</a> \u533F\u540D\u5206\u7C7B</h2><p>\u533F\u540D\u5206\u7C7B\u5373\u6CA1\u6709\u540D\u5B57\u7684\u5206\u7C7B\uFF0C\u5728\u533F\u540D\u5206\u7C7B\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4E14\u4E00\u822C\u7528\u4E8E\u6269\u5C55\u7C7B\u7684\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p><strong>main.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>p setAge<span class="token punctuation">:</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>p age<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>Person.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>age<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setAge<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>age<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Person.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person.h&quot;</span></span>

<span class="token keyword">@interface</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> _age<span class="token punctuation">;</span>  <span class="token comment">// \u79C1\u6709\u5C5E\u6027</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Person
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>age
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> _age <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>setAge<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>age
<span class="token punctuation">{</span>
    _age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,19);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
