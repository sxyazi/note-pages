import{e as n}from"./app.39480b94.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="objective-c-property-\u4E0E\u81EA\u52A8\u91CA\u653E" tabindex="-1"><a class="header-anchor" href="#objective-c-property-\u4E0E\u81EA\u52A8\u91CA\u653E" aria-hidden="true">#</a> Objective-C @property \u4E0E\u81EA\u52A8\u91CA\u653E</h1><p>\u5728\u5B66\u4E60 OC \u5185\u5B58\u7BA1\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230\u4E00\u4E2A\u5F88\u5947\u602A\u7684\u95EE\u9898\uFF0C\u8BB0\u5F55\u4E00\u4E0B\u3002\u4EE5\u4E0B\u4EE3\u7801\u8FD0\u884C\u5E76\u6D4B\u8BD5\u4E8E ARC \u6A21\u5F0F\u4E0B\uFF0CMRC \u540C\u6837\u9002\u7528\u3002</p><h2 id="\u6837\u677F\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6837\u677F\u4EE3\u7801" aria-hidden="true">#</a> \u6837\u677F\u4EE3\u7801</h2><p><strong>main.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>

    p<span class="token punctuation">.</span>dog <span class="token operator">=</span> <span class="token punctuation">[</span>Dog new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    p<span class="token punctuation">.</span>dog <span class="token operator">=</span> nil<span class="token punctuation">;</span>

    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u8FDB\u7A0B\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Dog.m</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@implementation</span> Dog

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>dealloc
<span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Dog \u88AB\u9500\u6BC1\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>Person.h</strong></p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@class</span> Dog<span class="token punctuation">;</span>

<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span><span class="token punctuation">(</span>strong<span class="token punctuation">)</span> Dog<span class="token operator">*</span> dog<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\u4F1A\u6709\u5982\u4E0B\u6253\u5370\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2020-10-01 21:10:00.114880+0800 oc[59329:2648135] Dog \u88AB\u9500\u6BC1\u4E86
2020-10-01 21:10:00.115209+0800 oc[59329:2648135] \u8FDB\u7A0B\u7ED3\u675F
Program ended with exit code: 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u95EE\u9898\u590D\u73B0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u590D\u73B0" aria-hidden="true">#</a> \u95EE\u9898\u590D\u73B0</h2><p>\u5F53\u5C06\u4E0A\u9762 <code>main.m</code> \u6587\u4EF6\u4E2D\u7684\u4EE3\u7801\u4F5C\u51FA\u5982\u4E0B\u4FEE\u6539\u65F6\uFF0C\u6253\u5370\u4FE1\u606F <code>Dog \u88AB\u9500\u6BC1\u4E86</code> \u795E\u5947\u822C\u5730\u6D88\u5931\u4E86\uFF0C\u800C\u8FD9\u4E00\u5207\u4EC5\u4EC5\u662F\u56E0\u4E3A\u52A0\u4E86\u4E00\u884C <code>NSLog</code> \u800C\u5DF2\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>

    p<span class="token punctuation">.</span>dog <span class="token operator">=</span> <span class="token punctuation">[</span>Dog new<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token punctuation">.</span>dog <span class="token operator">=</span> nil<span class="token punctuation">;</span>

    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u8FDB\u7A0B\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6253\u5370\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2020-10-01 21:14:12.221301+0800 oc[59537:2652438] &lt;Dog: 0x10297ce50&gt;
2020-10-01 21:14:12.221646+0800 oc[59537:2652438] \u8FDB\u7A0B\u7ED3\u675F
Program ended with exit code: 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u95EE\u9898\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u5206\u6790" aria-hidden="true">#</a> \u95EE\u9898\u5206\u6790</h2><p>\u6839\u636E <code>Person.h</code> \u4E2D\u5BF9 <code>dog</code> \u7684\u58F0\u660E\uFF0C\u4E3A atomic \u7C7B\u578B\u3002OC \u4E3A\u4E86\u4FDD\u8BC1\u5176\u539F\u5B50\u6027\u5BF9 getter \u4E0E setter \u65B9\u6CD5\u505A\u4E86\u5927\u6982\u5982\u4E0B\u7684\u5904\u7406\uFF0C\u5BF9 dog retain \u5E76\u6DFB\u52A0\u4E86\u81EA\u52A8\u91CA\u653E\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token operator">-</span> <span class="token punctuation">(</span>Dog <span class="token operator">*</span><span class="token punctuation">)</span> dog <span class="token punctuation">{</span>
    Dog <span class="token operator">*</span>d <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    <span class="token operator">@</span><span class="token function">synchronized</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>_dog retain<span class="token punctuation">]</span> autorelease<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> setDog<span class="token punctuation">:</span><span class="token punctuation">(</span>Dog <span class="token operator">*</span><span class="token punctuation">)</span>dog <span class="token punctuation">{</span>
    <span class="token operator">@</span><span class="token function">synchronized</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>dog retain<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>_dog release<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _dog <span class="token operator">=</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u800C\u7531\u4E8E\u6211\u5C06 main \u51FD\u6570\u4E2D\u9ED8\u8BA4\u7684 <code>@autoreleasepool</code> \u6807\u8BB0\u5220\u6389\u4E86\uFF0C\u6240\u4EE5\u624D\u5BFC\u81F4\u6CA1\u6709\u81EA\u52A8\u91CA\u653E\u7684\u95EE\u9898\u3002\u52A0\u56DE\u53BB\u5C31\u597D\u4E86\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">@</span>autoreleasepool <span class="token punctuation">{</span>
        Person <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">[</span>Person new<span class="token punctuation">]</span><span class="token punctuation">;</span>

        p<span class="token punctuation">.</span>dog <span class="token operator">=</span> <span class="token punctuation">[</span>Dog new<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span>dog <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u8FDB\u7A0B\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6216\u8005\u5C06 dog \u8BBE\u7F6E\u4E3A <code>nonatomic</code> \u4E5F\u53EF\u4EE5\u6B63\u5E38\u91CA\u653E\u3002</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token keyword">@class</span> Dog<span class="token punctuation">;</span>

<span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span><span class="token punctuation">(</span>strong<span class="token punctuation">,</span> nonatomic<span class="token punctuation">)</span> Dog<span class="token operator">*</span> dog<span class="token punctuation">;</span>

<span class="token keyword">@end</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6253\u5370\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2020-10-01 21:18:23.371382+0800 oc[60210:2679413] &lt;Dog: 0x1005b4860&gt;
2020-10-01 21:18:23.371811+0800 oc[60210:2679413] Dog \u88AB\u9500\u6BC1\u4E86
2020-10-01 21:18:23.371869+0800 oc[60210:2679413] \u8FDB\u7A0B\u7ED3\u675F
Program ended with exit code: 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,25);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
