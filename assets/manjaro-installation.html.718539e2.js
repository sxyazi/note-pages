import{e as n}from"./app.39480b94.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5B89\u88C5-manjaro-\u540E\u8981\u505A\u7684\u4E8B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-manjaro-\u540E\u8981\u505A\u7684\u4E8B" aria-hidden="true">#</a> \u5B89\u88C5 Manjaro \u540E\u8981\u505A\u7684\u4E8B</h1><p><strong>\u66F4\u65B0\u7CFB\u7EDF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -Syu
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u5B89\u88C5 yay \u4EE3\u66FF pacman</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S yay
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u5B89\u88C5\u4E0A\u7F51\u5DE5\u5177</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S v2ray
yay -S google-chrome-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u5B89\u88C5\u57FA\u672C\u5F00\u53D1\u5305</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S base-devel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u5B89\u88C5\u4E2D\u6587\u8F93\u5165\u6CD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S fcitx
yay -S fcitx-im
yay -S fcitx-googlepinyin
yay -S fcitx-configtool
yay -S fcitx-skin-material

<span class="token comment"># \u5728 ~/.xprofile \u4E2D\u52A0\u5165</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GTK_IM_MODULE</span><span class="token operator">=</span>fcitx
<span class="token builtin class-name">export</span> <span class="token assign-left variable">QT_IM_MODULE</span><span class="token operator">=</span>fcitx
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">XMODIFIERS</span></span><span class="token operator">=</span><span class="token string">&quot;@im=fcitx&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u5B89\u88C5\u5F00\u53D1\u5DE5\u5177</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S sublime-text-3-imfix
yay -S code
yay -S intellij-idea-ultimate-edition-jre
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u5B89\u88C5\u901A\u8BAF\u5DE5\u5177</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># QQ</span>
yay -S deepin-wine
yay -S deepin.com.qq.office

<span class="token comment"># \u4FEE\u6539 /opt/deepinwine/tools/run.sh \u6587\u4EF6\u4E2D\u7684\u8BED\u8A00\u9009\u9879</span>
<span class="token assign-left variable">WINE_CMD</span><span class="token operator">=</span><span class="token string">&quot;LC_ALL=zh_CN.UTF-8 deepin-wine&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>\u5B89\u88C5\u7EC8\u7AEF\u5DE5\u5177</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S fish
chsh -s <span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> fish<span class="token variable">\`</span></span> <span class="token comment">#\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4 shell</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u5B89\u88C5\u7CFB\u7EDF\u5C0F\u90E8\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S gnome-tweaks
yay -S gnome-shell-extension-topicons-plus-git
yay -S neofetch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u5B89\u88C5\u5176\u4ED6\u5E38\u7528\u8F6F\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S tig
yay -S wine
yay -S aria2
yay -S typora
yay -S gitkraken
yay -S postman-bin
yay -S telegram-desktop
yay -S proxychains-ng

<span class="token comment"># \u4E3A proxychains \u8BBE\u7F6E\u77ED\u522B\u540D</span>
<span class="token builtin class-name">alias</span> pc proxychains
funcsave pc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Navicat \u5B89\u88C5\u4E0E\u7834\u89E3\u6B65\u9AA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5230\u5B98\u7F51\u4E0B\u8F7D Linux \u7248\u672C\uFF0C\u89E3\u538B\u5230 /opt/navicat</span>

<span class="token comment"># \u7F16\u8F91 start_navicat \u6587\u4EF6</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
<span class="token comment"># to:</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>

<span class="token comment"># \u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u542F\u52A8\u56FE\u6807\u6587\u4EF6</span>
<span class="token comment"># ~/.local/share/applications/navicat.desktop</span>
<span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Navicat
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>Database Admin Tool
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/bin/sh <span class="token string">&quot;/home/ika/Applications/navicat/start_navicat&quot;</span>
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>/home/ika/Applications/navicat/icon.png
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Wine<span class="token punctuation">;</span>
<span class="token assign-left variable">StartupNotify</span><span class="token operator">=</span>true

<span class="token comment"># \u7834\u89E3\u8FC7\u7A0B</span>
<span class="token function">git</span> clone https://github.com/DoubleLabyrinth/navicat-keygen.git
<span class="token builtin class-name">cd</span> navicat-keygen
wine ./navicat-patcher.exe /opt/navicat/Navicat
wine ./navicat-keygen.exe -text ./RegPrivateKey.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>\u6DFB\u52A0\u4E00\u4E9B\u51FD\u6570</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> svnrms
    svn st <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^!&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print &quot; --force &quot;$2}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> svn <span class="token function">rm</span>
end
funcsave svnrms


<span class="token keyword">function</span> lgit
    <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
    <span class="token function">git</span> commit -a -m <span class="token string">&quot;<span class="token variable">$argv</span>[1]&quot;</span>
    <span class="token function">git</span> push
end
funcsave lgit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,25);function p(l,r){return e}var t=s(a,[["render",p]]);export{t as default};
