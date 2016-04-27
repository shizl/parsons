<div id="page-wrapper"><div id="page">

  <div id="header" class="<?php print $secondary_menu ? 'with-secondary-menu': 'without-secondary-menu'; ?>"><div class="section clearfix">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    <?php endif; ?>

    <?php if ($main_menu): ?>
      <div id="main-menu" class="navigation">
        <?php print theme('links__system_main_menu', array(
          'links' => $main_menu,
          'attributes' => array(
            'id' => 'main-menu-links',
            'class' => array('links', 'clearfix'),
          ),
          'heading' => array(
            'text' => t('Main menu'),
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </div> <!-- /#main-menu -->
     <?php endif; ?>
    <?php if ($page['page-top']): ?>
    <?php print render($page['page-top']); ?>
    <?php endif; ?>

    <?php if ($main_menu): ?>
      <div id="responsive-main-menu" class="navigation">
        <?php print theme('links__system_main_menu', array(
          'links' => $main_menu,
          'attributes' => array(
            'id' => 'main-menu-links',
            'class' => array('links', 'clearfix'),
          ),
          'heading' => array(
            'text' => t('Main menu'),
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </div> <!-- /#responsive-main-menu -->
    <?php endif; ?>

  </div></div> <!-- /.section, /#header -->

  <?php if ($messages): ?>
    <div id="messages"><div class="section clearfix">
      <?php print $messages; ?>
    </div></div> <!-- /.section, /#messages -->
  <?php endif; ?>

  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

    <div id="content" class="column"><div class="section">
      <?php if ($tabs): ?>
        <div class="tabs">
          <?php print render($tabs); ?>
        </div>
      <?php endif; ?>

      <?php if ($page['content-banner']) : ?>
        <?php print render($page['content-banner']);?>
      <?php endif; ?>

      <?php if ($page['content-middle']) : ?>
        <?php print render($page['content-middle']);?>
      <?php endif; ?>

      <?php if($page['content']): ?>
      <?php print render($page['content']); ?>
      <?php endif;  ?>

      <?php if ($page['content-bottom']) : ?>
        <?php print render($page['content-bottom']);?>
      <?php endif; ?>

    </div></div> <!-- /.section, /#content -->


  </div></div> <!-- /#main, /#main-wrapper -->

  <div id="footer-wrapper"><div class="section">
    <?php if ($page['footer']): ?>
      <div id="footer" class="clearfix">
        <?php print render($page['footer']); ?> 
        <?php print render($page['footer-bottom']); ?>
      </div> <!-- /#footer -->
    <?php endif; ?>

  </div></div> <!-- /.section, /#footer-wrapper -->

</div></div> <!-- /#page, /#page-wrapper -->
<div id="more-link-content" style="display:none;"><span class="close">×</span>
<div class="title"></div>
<div class="content"></div>
<div class="control"><span class="prv">< 上一篇</span><span class="next">下一篇 ></span></div>
</div>

<div id="more-link-content2" style="display:none;"><span class="close">×</span>
<div class="title"></div>
<div class="content"></div>
<!--<div class="control"><span class="prv">上一篇</span><span class="next">下一篇</span></div>-->
</div>

<div class="for-freetiaokuan">
<div class="free-content">
<div class="closee">×</div>
<?php
global $language;
if ($language->language =="en"){
print "<div class='title'>
Exemption clause
</div>
<div class='content'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.
</div> ";
}else if($language->language =="zh-hans") {
print "<div class='title'>
免责条款
</div>
<div class='content'>
本站点载列的数据由柏斯音乐集团编制，只供一般参考之用。柏斯音乐集团力求确保该等数据准确，但对于该等数据在任何特定情况下使用时的准确性或恰当性，并没有作出任何明示或隐含的陈述、申述、保证或担保。
使用者可从柏斯音乐集团网站连结至由其他人士或机构所提供的网站。柏斯音乐集团并没有核准或认可由其他人士或机构在柏斯音乐集团网站或与柏斯音乐集团网站连结的其他网站上所提供的资料，柏斯音乐集团不会承担任何由该等数据引致的责任或法律责任。
柏斯音乐集团保留权利，可随时运用其绝对酌情决定权，省略、暂停或编辑柏斯音乐集团网站所载的数据，而无须给予任何理由，亦无须事先通知。使用者有责任自行评价柏斯音乐集团网站所载的一切数据，并宜加以核实或征询独立意见。
</div> ";
}else{


print "<div class='title'>
免責條款
</div>
<div class='content'>
本網站載列的資料由柏斯音樂集團編製，只供一般參考之用。柏斯音樂集團力求確保該等資料準確，但對於該等資料在任何特定情況下使用時的準確性或恰當性，並沒有作出任何明示或隱含的陳述、申述、保證或擔保。
使用者可從柏斯音樂集團網站連結至由其他人士或機構所提供的網站。柏斯音樂集團並沒有核准或認可由其他人士或機構在柏斯音樂集團網站或與柏斯音樂集團網站連結的其他網站上所提供的資料，柏斯音樂集團不會承擔任何由該等資料引致的責任或法律責任。
柏斯音樂集團保留權利，可隨時運用其絕對酌情決定權，省略、暫停或編輯柏斯音樂集團網站所載的資料，而無須給予任何理由，亦無須事先通知。使用者有責任自行評估柏斯音樂集團網站所載的一切資料，並宜加以核實或徵詢獨立意見。
</div> ";

}
?>
</div>
</div>


