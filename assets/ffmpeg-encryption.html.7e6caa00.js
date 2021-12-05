import{e as s}from"./app.39480b94.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=s(`<h1 id="ffmpeg-\u52A0\u5BC6\u6BCF\u4E2A-hls-\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#ffmpeg-\u52A0\u5BC6\u6BCF\u4E2A-hls-\u7247\u6BB5" aria-hidden="true">#</a> FFmpeg \u52A0\u5BC6\u6BCF\u4E2A HLS \u7247\u6BB5</h1><p>\u8F6C\u6362\u4E00\u4E2A\u89C6\u9891\u4E3A\u591A\u4E2A TS \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ffmpeg -i test.mp4 -c:a aac -c:v copy -bsf:v h264_mp4toannexb <span class="token punctuation">\\</span>
  -map <span class="token number">0</span>:v:0 -map <span class="token number">0</span>:a? -f segment -segment_list out.m3u8 -segment_time <span class="token number">10</span> out%03d.ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F7F\u7528 OpenSSL \u521B\u5EFA\u4E00\u4E2A\u968F\u673A\u5BC6\u94A5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl rand <span class="token number">16</span> <span class="token operator">&gt;</span> enc.key
<span class="token function">cat</span> enc.key <span class="token operator">|</span> hexdump -e <span class="token string">&#39;1/1 &quot;%02x&quot;&#39;</span>  <span class="token comment">#\u67E5\u770B\u5BC6\u94A5Hex</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0B\u4E00\u6B65\u662F\u521B\u5EFA IV\u3002\u6B64\u6B65\u9AA4\u662F\u53EF\u9009\u7684\uFF0C\u5982\u672A\u63D0\u4F9B\u5219\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684\u6BB5\u5E8F\u5217\u53F7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl rand -hex <span class="token number">16</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 OpenSSL \u52A0\u5BC6\u6BCF\u4E2A TS \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4F7F\u7528\u6BB5\u5E8F\u53F7</span>
openssl aes-128-cbc -e -in out001.ts -out enc.out001.ts -p -nosalt -iv <span class="token number">0</span> -K AES_KEY

<span class="token comment">#\u4F7F\u7528\u968F\u673A\u5411\u91CF</span>
openssl aes-128-cbc -e -in out001.ts -out enc.out001.ts -p -nosalt -iv IV -K AES_KEY
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6700\u7EC8\u7684\u64AD\u653E\u5217\u8868\u6587\u4EF6\u5185\u5BB9\u5E94\u8BE5\u7C7B\u4F3C\u4E8E\u8FD9\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:15
#EXT-X-KEY:METHOD=AES-128,URI=&quot;KEY_URL1&quot;,IV=0xIV1
#EXTINF:10
out001.ts
#EXT-X-KEY:METHOD=AES-128,URI=&quot;KEY_URL2&quot;,IV=0xIV2
#EXTINF:10
out002.ts
#EXT-X-ENDLIST
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,11);function p(l,r){return a}var o=n(e,[["render",p]]);export{o as default};
