<template>
  <div>

    <mt-card title="广告文本">
      <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
      <p>Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat adipiscing tortor non luctus. Vivamus venenatis vitae metus et aliquet. Praesent vitae justo purus. In hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque nisi tellus, rhoncus quis est sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis ante in nisl molestie fringilla. Nunc vitae ante id magna feugiat condimentum. Maecenas sit amet urna massa.</p>
      <p>Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin nisl. Quisque viverra sodales lectus nec ultrices. Fusce elit dolor, dignissim a nunc id, varius suscipit turpis. Cras porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed nec scelerisque magna, et adipiscing est. Proin lobortis lectus eu sem ullamcorper, commodo malesuada quam fringilla. Curabitur ac nunc dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sagittis enim eu est lacinia, ut egestas ligula imperdiet.</p>
    </mt-card>

    <mt-card title="标题">
      <h1>标题 1</h1>
      <p>Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.</p>
      <div class="clearfix"></div>
      <h2>标题 2</h2>
      <p>In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.</p>
      <div class="clearfix"></div>
      <h3>标题 3</h3>
      <p>Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>
      <div class="clearfix"></div>
      <h4>标题 4</h4>
      <p>Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.</p>
      <div class="clearfix"></div>
      <h5>标题 5</h5>
      <p>Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.</p>
      <div class="clearfix"></div>
      <h6>标题 6</h6>
      <p>Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>
    </mt-card>

    <mt-card title="内联文本样式" cardBg="lightgreen">
      <div class="row">
        <div class="col-sm-4 m-b-25">
            <p class="c-black">标记文字</p>
            <p>为了突出文本的重要性，可使用mark标签。</p>
            <mark>这是一个mark标签</mark>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">被删除文字</p>
            <p>用于提示被删除的文本，可使用del标签。</p>
            <del>这是一个del标签</del>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">删除线文字</p>
            <p>用于提示不再使用的文本，可使用s标签</p>
            <s>这是一个s标签</s>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">被插入文字</p>
            <p>用于提示这是一段插入的文本，可使用ins标签。</p>
            <ins>这是一个ins标签</ins>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">下划线文字</p>
            <p>下划线文本可使用u标签。</p>
            <u>这是一个u标签</u>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">这是一个小号文字</p>
            <p>为了减少内联或文本块，使用small标签。</p>
            <small>这是一个small标签</small>
        </div>
        <div class="col-sm-4">
            <p class="c-black">加粗文字</p>
            <p>用于强调的文本，可使用strong标签</p>
            <strong>这是一个strong标签</strong>
        </div>
        <div class="col-sm-4">
            <p class="c-black">强调文字</p>
            <p>用于强调的斜体文字，可使用em标签。</p>
            <em>这是一个em标签</em>
        </div>
      </div>
    </mt-card>

    <div class="row">
      <div class="col-sm-6">  
        <mt-card title="Helper Classes">
          <p class="c-black">Alignment Classes</p>
          <p>Easily realign text to components with text alignment classes.</p>
          <p class="text-left">Left aligned text.</p>
          <p class="text-center">Center aligned text.</p>
          <p class="text-right">Right aligned text.</p>
          <p class="text-justify">Justified text.</p>
          <p class="text-nowrap">No wrap text.</p>
          <p class="c-black m-t-25">Transformation classes</p>
          <p>Transform text in components with text capitalization classes.</p>
          <p class="text-lowercase">Lowercased text.</p>
          <p class="text-uppercase">Uppercased text.</p>
          <p class="text-capitalize">Capitalized text.</p>
        </mt-card>
      </div>
      <div class="col-sm-6">  
        <mt-card title="You can put anything here">
          <p>Stylized implementation of HTML's 'abbr' element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a 'title' attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover and to users of assistive technologies.</p>
          <p class="c-black m-t-20">Basic abbreviation</p>
          <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          <p class="c-black m-t-20">Initialism</p>
          <p>Add <abbr title="Initialism" class="initialism">Initialism</abbr> to an abbreviation for a slightly smaller font-size.</p>
        </mt-card>
      </div>
    </div>

    <mt-card title="Blockquotes">
      <p class="m-b-25">For quoting blocks of content from another source within yourdocument.</p>
      <blockquote class="m-b-25">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      </blockquote>
      <blockquote class="m-b-25">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <blockquote class="blockquote-reverse m-b-25">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
    </mt-card>

    <mt-card title="List">
      <div class="row">
        <div class="col-sm-4 m-b-25">
          <p class="c-black">Unordered</p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">Ordered</p>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
              <li>Integer molestie lorem at massa</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Spretium nisl aliquet lorem ipsum</li>
              <li>Linking best ttoth bellorem</li>
            </ol>
        </div>
        <div class="col-sm-4 m-b-25">
            <p class="c-black">Ordered - Roman</p>
            <ol type="i">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 m-b-25">
          <p class="c-black">Custom - 1</p>
          <ul class="clist clist-angle">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <div class="col-sm-4 m-b-25">
          <p class="c-black">Custom - 2</p>
          <ul class="clist clist-check">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <div class="col-sm-4 m-b-25">
          <p class="c-black">Custom - 3</p>
          <ul class="clist clist-star">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
      </div>
    </mt-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>