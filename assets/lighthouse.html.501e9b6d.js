import{e as n}from"./app.39480b94.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="lighthouse-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#lighthouse-\u4F7F\u7528" aria-hidden="true">#</a> Lighthouse \u4F7F\u7528</h1><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h2><h3 id="\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u670D\u52A1\u7AEF</h3><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token punctuation">{</span>
    // <span class="token attr-name">me</span><span class="token punctuation">:</span> <span class="token class-name">User</span> <span class="token directive function">@auth</span>
    <span class="token attr-name">role</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token scalar">ID</span> <span class="token directive function">@eq</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Role</span> <span class="token directive function">@find</span> <span class="token directive function">@can</span><span class="token punctuation">(</span><span class="token attr-name">ability</span><span class="token punctuation">:</span> <span class="token string">&quot;view&quot;</span><span class="token punctuation">,</span> <span class="token attr-name">find</span><span class="token punctuation">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>
    <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token operator">!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h3><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">query</span> <span class="token punctuation">{</span>
  <span class="token property-query">role</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">name</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation</h2><h3 id="\u670D\u52A1\u7AEF-1" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF-1" aria-hidden="true">#</a> \u670D\u52A1\u7AEF</h3><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>
  <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token operator">!</span>
<span class="token punctuation">}</span>

<span class="token keyword">input</span> <span class="token atom-input class-name">RoleInput</span> <span class="token punctuation">{</span>
  <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token operator">!</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">createRole</span><span class="token punctuation">(</span><span class="token attr-name">input</span><span class="token punctuation">:</span> <span class="token atom-input class-name">RoleInput</span> <span class="token directive function">@spread</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Role</span><span class="token operator">!</span> <span class="token directive function">@create</span> <span class="token directive function">@can</span><span class="token punctuation">(</span><span class="token attr-name">ability</span><span class="token punctuation">:</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5BA2\u6237\u7AEF-1" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF-1" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h3><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">mutation</span> <span class="token punctuation">{</span>
  <span class="token property-query property-mutation">createRole</span><span class="token punctuation">(</span><span class="token attr-name">input</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,11);function p(t,c){return e}var r=a(s,[["render",p]]);export{r as default};
