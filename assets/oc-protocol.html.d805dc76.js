import{e as n}from"./app.39480b94.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="objective-c-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#objective-c-\u534F\u8BAE" aria-hidden="true">#</a> Objective-C \u534F\u8BAE</h1><p>\u534F\u8BAE\uFF08Protocol\uFF09\u548C\u5176\u5B83\u8BED\u8A00\u4E2D\u7684\u63A5\u53E3\uFF08Interface\uFF09\u7C7B\u4F3C\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E9B\u65B9\u6CD5\u7684\u58F0\u660E\u3002</p><p>\u4E0E\u5176\u5B83\u8BED\u8A00\u4E0D\u540C\u7684\u662F\uFF0C\u5728 OC \u4E2D\u7684\u534F\u8BAE\u9664\u4E86\u53EF\u4EE5\u58F0\u660E\u54EA\u4E9B\u65B9\u6CD5\u5FC5\u987B\u5B9E\u73B0\u5916\uFF0C\u8FD8\u53EF\u4EE5\u58F0\u660E\u54EA\u4E9B\u65B9\u6CD5\u53EF\u9009\u5B9E\u73B0\uFF0C\u4F46\u90FD\u4E0D\u662F\u5F3A\u5236\u6027\u7684\uFF0C\u5C31\u7B97\u4E0D\u5B9E\u73B0\u4E5F\u53EF\u4EE5\u7F16\u8BD1\uFF0C\u53EA\u662F\u4F1A\u6709\u8B66\u544A\u3002</p><h2 id="\u8BED\u6CD5\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u683C\u5F0F" aria-hidden="true">#</a> \u8BED\u6CD5\u683C\u5F0F</h2><p>\u4E0B\u9762\u4EE3\u7801\u4E2D <code>PersonProtocol</code> \u4E3A\u534F\u8BAE\u540D\u79F0\uFF0C<code>NSObject</code> \u4E3A\u8BE5\u534F\u8BAE\u7EE7\u627F\u7684\u534F\u8BAE\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@protocol</span> PersonProtocol <span class="token operator">&lt;</span>NSObject<span class="token operator">&gt;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p><strong>PersonProtocol.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@protocol</span> PersonProtocol <span class="token operator">&lt;</span>NSObject<span class="token operator">&gt;</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say<span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>play<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Person.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;PersonProtocol.h&quot;</span></span>

<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject <span class="token operator">&lt;</span>PersonProtocol<span class="token operator">&gt;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Person.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person.h&quot;</span></span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u5B9E\u73B0\u4E86 say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>play
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u5B9E\u73B0\u4E86 play&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u7C7B\u578B\u9650\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u9650\u5B9A" aria-hidden="true">#</a> \u7C7B\u578B\u9650\u5B9A</h2><p>\u5728\u7C7B\u578B\u540E\u9762\u6DFB\u52A0 <code>&lt;XXProtocol&gt;</code> \u53EF\u4E3A\u7C7B\u578B\u6DFB\u52A0\u534F\u8BAE\u9650\u5B9A\uFF0C\u8868\u660E\u53EA\u6709\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u534F\u8BAE\u7684\u5BF9\u8C61\u624D\u88AB\u63A5\u53D7\uFF0C\u4F46\u540C\u6837\u8FD9\u4E5F\u4E0D\u662F\u5F3A\u5236\u6027\u7684\uFF0C\u5982\u679C\u4F20\u9012\u7684\u5BF9\u8C61\u6CA1\u6709\u5B9E\u73B0\u8FD9\u4E2A\u534F\u8BAE\uFF0C\u53EA\u4F1A\u7ED9\u51FA\u8B66\u544A\u3002</p><p><strong>main.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Dog.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;WifeCondition.h&quot;</span></span>

<span class="token keyword">void</span> <span class="token function">marry</span><span class="token punctuation">(</span>id<span class="token operator">&lt;</span>WifeCondition<span class="token operator">&gt;</span> wifi<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span>wifi cook<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>wifi wash<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u6240\u4EE5\uFF0C\u6211\u548C %@ \u7ED3\u5A5A&quot;</span><span class="token punctuation">,</span> wifi<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dog <span class="token operator">*</span>dog <span class="token operator">=</span> <span class="token punctuation">[</span>Dog new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">marry</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>WifeCondition.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">WifeCondition_h</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">WifeCondition_h</span></span>

<span class="token keyword">@protocol</span> WifeCondition <span class="token operator">&lt;</span>NSObject<span class="token operator">&gt;</span>

<span class="token operator">-</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name<span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>cook<span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>wash<span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* WifeCondition_h */</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>Dog.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;WifeCondition.h&quot;</span></span>

<span class="token keyword">@interface</span> Dog <span class="token punctuation">:</span> NSObject <span class="token operator">&lt;</span>WifeCondition<span class="token operator">&gt;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>Dog.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Dog.h&quot;</span></span>

<span class="token keyword">@implementation</span> Dog

<span class="token operator">-</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>name
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">@&quot;\u72D7&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>cook
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u72D7\u4F1A\u505A\u996D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>wash
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u72D7\u4F1A\u6D17\u8863\u670D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u9009\u62E9\u6027\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6027\u5B9E\u73B0" aria-hidden="true">#</a> \u9009\u62E9\u6027\u5B9E\u73B0</h2><p>\u4F7F\u7528 <code>@required</code> \u548C <code>@optional</code> \u53EF\u6807\u8BB0\u65B9\u6CD5\u662F\u5426\u5FC5\u987B\u5B9E\u73B0\u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u6807\u8BB0\uFF0C\u9ED8\u8BA4\u4E3A <code>@required</code>\u3002</p><p><strong>PersonProtocol.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>

<span class="token keyword">@protocol</span> PersonProtocol <span class="token operator">&lt;</span>NSObject<span class="token operator">&gt;</span>

<span class="token operator">@</span>required  <span class="token comment">// \u4E0B\u9762\u5F00\u59CB\u7684\u65B9\u6CD5\u5FC5\u987B\u5B9E\u73B0</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say<span class="token punctuation">;</span>

<span class="token operator">@</span>optional  <span class="token comment">// \u4E0B\u9762\u5F00\u59CB\u7684\u65B9\u6CD5\u53EF\u9009\u5B9E\u73B0</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>play<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>Person.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Person.h&quot;</span></span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>say
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u8BF4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53\u8C03\u7528\u4E00\u4E2A\u672A\u5B9E\u73B0\u7684\u65B9\u6CD5\u65F6\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u5F02\u5E38\u3002\u6240\u4EE5\u5BF9\u4E8E\u53EF\u9009\u5B9E\u73B0\u7684\u65B9\u6CD5\u5728\u4F7F\u7528\u65F6\u9700\u8981\u68C0\u67E5\u662F\u5426\u5B9E\u73B0\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>p say<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>p play<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// \u7531\u4E8E\u4E0A\u9762\u6CA1\u6709\u5B9E\u73B0\uFF0C\u7A0B\u5E8F\u5F02\u5E38</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4FEE\u6539\u4E3A\u4EE5\u4E0B\u4EE3\u7801\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>p say<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// \u68C0\u67E5\u662F\u5426\u5B9E\u73B0 play \u65B9\u6CD5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>p respondsToSelector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>play<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>p play<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u6CA1\u6709\u5B9E\u73B0 play&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,33);function e(o,t){return p}var r=s(a,[["render",e]]);export{r as default};
