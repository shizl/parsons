<?php

/**
 * Add body classes if certain regions have content.
 */
function parsons_preprocess_html(&$variables) {
  if (!empty($variables['page']['featured'])) {
    $variables['classes_array'][] = 'featured';
  }

  if (!empty($variables['page']['triptych_first'])
    || !empty($variables['page']['triptych_middle'])
    || !empty($variables['page']['triptych_last'])) {
    $variables['classes_array'][] = 'triptych';
  }

  if (!empty($variables['page']['footer_firstcolumn'])
    || !empty($variables['page']['footer_secondcolumn'])
    || !empty($variables['page']['footer_thirdcolumn'])
    || !empty($variables['page']['footer_fourthcolumn'])) {
    $variables['classes_array'][] = 'footer-columns';
  }

  // Add conditional stylesheets for IE
  drupal_add_css(path_to_theme() . '/css/ie.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));
  drupal_add_css(path_to_theme() . '/css/ie6.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 6', '!IE' => FALSE), 'preprocess' => FALSE));
}

/**
 * Override or insert variables into the page template for HTML output.
 */
function parsons_process_html(&$variables) {
  // Hook into color.module.
  if (module_exists('color')) {
    _color_html_alter($variables);
  }
}

/**
 * Override or insert variables into the page template.
 */
function parsons_process_page(&$variables) {
  // Hook into color.module.
  if (module_exists('color')) {
    _color_page_alter($variables);
  }
  // Always print the site name and slogan, but if they are toggled off, we'll
  // just hide them visually.
  $variables['hide_site_name']   = theme_get_setting('toggle_name') ? FALSE : TRUE;
  $variables['hide_site_slogan'] = theme_get_setting('toggle_slogan') ? FALSE : TRUE;
  if ($variables['hide_site_name']) {
    // If toggle_name is FALSE, the site_name will be empty, so we rebuild it.
    $variables['site_name'] = filter_xss_admin(variable_get('site_name', 'Drupal'));
  }
  if ($variables['hide_site_slogan']) {
    // If toggle_site_slogan is FALSE, the site_slogan will be empty, so we rebuild it.
    $variables['site_slogan'] = filter_xss_admin(variable_get('site_slogan', ''));
  }
  // Since the title and the shortcut link are both block level elements,
  // positioning them next to each other is much simpler with a wrapper div.
  if (!empty($variables['title_suffix']['add_or_remove_shortcut']) && $variables['title']) {
    // Add a wrapper div using the title_prefix and title_suffix render elements.
    $variables['title_prefix']['shortcut_wrapper'] = array(
      '#markup' => '<div class="shortcut-wrapper clearfix">',
      '#weight' => 100,
    );
    $variables['title_suffix']['shortcut_wrapper'] = array(
      '#markup' => '</div>',
      '#weight' => -99,
    );
    // Make sure the shortcut link is the first item in title_suffix.
    $variables['title_suffix']['add_or_remove_shortcut']['#weight'] = -100;
  }
}

/**
 * Implements hook_preprocess_maintenance_page().
 */
function parsons_preprocess_maintenance_page(&$variables) {
  // By default, site_name is set to Drupal if no db connection is available
  // or during site installation. Setting site_name to an empty string makes
  // the site and update pages look cleaner.
  // @see template_preprocess_maintenance_page
  if (!$variables['db_is_active']) {
    $variables['site_name'] = '';
  }
  drupal_add_css(drupal_get_path('theme', 'bartik') . '/css/maintenance-page.css');
}

/**
 * Override or insert variables into the maintenance page template.
 */
function parsons_process_maintenance_page(&$variables) {
  // Always print the site name and slogan, but if they are toggled off, we'll
  // just hide them visually.
  $variables['hide_site_name']   = theme_get_setting('toggle_name') ? FALSE : TRUE;
  $variables['hide_site_slogan'] = theme_get_setting('toggle_slogan') ? FALSE : TRUE;
  if ($variables['hide_site_name']) {
    // If toggle_name is FALSE, the site_name will be empty, so we rebuild it.
    $variables['site_name'] = filter_xss_admin(variable_get('site_name', 'Drupal'));
  }
  if ($variables['hide_site_slogan']) {
    // If toggle_site_slogan is FALSE, the site_slogan will be empty, so we rebuild it.
    $variables['site_slogan'] = filter_xss_admin(variable_get('site_slogan', ''));
  }
}

/**
 * Override or insert variables into the node template.
 */
function parsons_preprocess_node(&$variables) {
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
    $variables['classes_array'][] = 'node-full';
  }
}

/**
 * Override or insert variables into the block template.
 */
function parsons_preprocess_block(&$variables) {
  // In the header region visually hide block titles.
  if ($variables['block']->region == 'header') {
    $variables['title_attributes_array']['class'][] = 'element-invisible';
  }
}

/**
 * Implements theme_menu_tree().
 */
function parsons_menu_tree($variables) {
  return '<ul class="menu clearfix">' . $variables['tree'] . '</ul>';
}

/**
 * Implements theme_field__field_type().
 */
function parsons_field__taxonomy_term_reference($variables) {
  $output = '';

  // Render the label, if it's not hidden.
  if (!$variables['label_hidden']) {
    $output .= '<h3 class="field-label">' . $variables['label'] . ': </h3>';
  }

  // Render the items.
  $output .= ($variables['element']['#label_display'] == 'inline') ? '<ul class="links inline">' : '<ul class="links">';
  foreach ($variables['items'] as $delta => $item) {
    $output .= '<li class="taxonomy-term-reference-' . $delta . '"' . $variables['item_attributes'][$delta] . '>' . drupal_render($item) . '</li>';
  }
  $output .= '</ul>';

  // Render the top-level DIV.
  $output = '<div class="' . $variables['classes'] . (!in_array('clearfix', $variables['classes_array']) ? ' clearfix' : '') . '"' . $variables['attributes'] .'>' . $output . '</div>';

  return $output;
}
function parsons_pager($variables) {
 
$tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $quantity = $variables['quantity'];
  global $pager_page_array, $pager_total;

 $pre = theme('pager_previous', array('text' => (isset($tags[1]) ? $tags[1] : t('‹ previous')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));

$next = theme('pager_next', array('text' => (isset($tags[3]) ? $tags[3] : t('next ›')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));

$allpage = $pager_total[0];

$page = "";


if(isset($_GET['field_culturee_type_value'])){

 

          if($allpage <=6){
for($i=1; $i<=$allpage; $i++){

$page .= '<a class="  page-item-'.($i-1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.($i-1).'"> '.$i.'</a>';
}
}else{

 if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] < $allpage-3)){

    $page = '<a class=" page-item-0" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=0">1</a>
        <p class="omit">....</p>
       

        <a class=" page-item-'.((int)$_GET['page']-1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$_GET['page']-1).'"> '.$_GET['page'].'</a>
        <a class=" page-item-'.$_GET['page'].'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.$_GET['page'].'"> '.((int)$_GET['page']+1).'</a>
        <a class=" page-item-'.((int)$_GET['page']+1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$_GET['page']+1).'"> '.((int)$_GET['page']+2).'</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     
}

    else if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] >= $allpage-3)){


$page = '<a class=" page-item-0" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=0">1</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-4).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-4).'"> '.((int)$allpage-3).'</a>
        <a class=" page-item-'.((int)$allpage-3).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-3).'"> '.((int)$allpage-2).'</a>
        <a class=" page-item-'.((int)$allpage-2).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-2).'"> '.((int)$allpage-1).'</a>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     

}else{

$page = '<a class=" page-item-0" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=0">1</a>
         <a class=" page-item-1" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=1">2</a>
         <a class=" page-item-2" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=2">3</a>
         <a class=" page-item-3" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page=3">4</a>
        <p class="omit">....</p>
        
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_culturee_type_value='.$_GET['field_culturee_type_value'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     



}

}


}


 else if(isset($_GET['field_new_type_tid'])){

 

          if($allpage <=6){
for($i=1; $i<=$allpage; $i++){

$page .= '<a class="  page-item-'.($i-1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.($i-1).'"> '.$i.'</a>';
}
}else{

 if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] < $allpage-3)){

    $page = '<a class=" page-item-0" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=0">1</a>
        <p class="omit">....</p>
       

        <a class=" page-item-'.((int)$_GET['page']-1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$_GET['page']-1).'"> '.$_GET['page'].'</a>
        <a class=" page-item-'.$_GET['page'].'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.$_GET['page'].'"> '.((int)$_GET['page']+1).'</a>
        <a class=" page-item-'.((int)$_GET['page']+1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$_GET['page']+1).'"> '.((int)$_GET['page']+2).'</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     
}

    else if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] >= $allpage-3)){


$page = '<a class=" page-item-0" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=0">1</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-4).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-4).'"> '.((int)$allpage-3).'</a>
        <a class=" page-item-'.((int)$allpage-3).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-3).'"> '.((int)$allpage-2).'</a>
        <a class=" page-item-'.((int)$allpage-2).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-2).'"> '.((int)$allpage-1).'</a>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     

}else{

$page = '<a class=" page-item-0" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=0">1</a>
         <a class=" page-item-1" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=1">2</a>
         <a class=" page-item-2" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=2">3</a>
         <a class=" page-item-3" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page=3">4</a>
        <p class="omit">....</p>
        
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?field_new_type_tid='.$_GET['field_new_type_tid'].'&page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     



}

}


}else{

if($allpage <=6){
for($i=1; $i<=$allpage; $i++){

if(!isset($_GET['page']) && $i== 1){

$page .= '<a class="active page-item-'.($i-1).'" > '.$i.'</a>';

}else if(isset($_GET['page']) && ($i-1)== $_GET['page']){
$page .= '<a class="active page-item-'.($i-1).'" > '.$i.'</a>';
}else{
 
 if($i==1){
	$page .= '<a class=" page-item-'.($i-1).'" href="/'.current_path().'"> '.$i.'</a>';
 }else{
 	 $page .= '<a class=" page-item-'.($i-1).'" href="/'.current_path().'?page='.($i-1).'"> '.$i.'</a>';
 }

}

}
}else{

 if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] < $allpage-3)){

    $page = '<a class=" page-item-0" href="/'.current_path().'">1</a>
        <p class="omit">....</p>
       

        <a class=" page-item-'.((int)$_GET['page']-1).'" href="/'.current_path().'?page='.((int)$_GET['page']-1).'"> '.$_GET['page'].'</a>
        <a class=" page-item-'.$_GET['page'].'" href="/'.current_path().'?page='.$_GET['page'].'"> '.((int)$_GET['page']+1).'</a>
        <a class=" page-item-'.((int)$_GET['page']+1).'" href="/'.current_path().'?page='.((int)$_GET['page']+1).'"> '.((int)$_GET['page']+2).'</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     
}else if(isset($_GET['page']) && ($_GET['page'] >2) && ($_GET['page'] >= $allpage-3)){


$page = '<a class=" page-item-0" href="/'.current_path().'">1</a>
        <p class="omit">....</p>
        <a class=" page-item-'.((int)$allpage-4).'" href="/'.current_path().'?page='.((int)$allpage-4).'"> '.((int)$allpage-3).'</a>
        <a class=" page-item-'.((int)$allpage-3).'" href="/'.current_path().'?page='.((int)$allpage-3).'"> '.((int)$allpage-2).'</a>
        <a class=" page-item-'.((int)$allpage-2).'" href="/'.current_path().'?page='.((int)$allpage-2).'"> '.((int)$allpage-1).'</a>
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     

}else{

$page = '<a class=" page-item-0" href="/'.current_path().'">1</a>
         <a class=" page-item-1" href="/'.current_path().'?page=1">2</a>
         <a class=" page-item-2" href="/'.current_path().'?page=2">3</a>
         <a class=" page-item-3" href="/'.current_path().'?page=3">4</a>
        <p class="omit">....</p>
        
        <a class=" page-item-'.((int)$allpage-1).'" href="/'.current_path().'?page='.((int)$allpage-1).'"> '.$allpage.'</a>
';     



}

}
}

//echo '<pre>';
//print_r(arg(0));exit;

$output = '<div class="parsons-pager">

<div class="parsons-pre-page">'.$pre.'</div>
<div class="parsons-page">'.$page.'</div>
<div class="parsons-next-page">'.$next.'</div>
<div class="parsons-all-page">共<span id="parsons-total">'.$allpage.'</span>页</div>
<div class="parsons-tiaozhuan">
<p>到第&nbsp;<input type="text" 　name="ye" />&nbsp;页</p>
<a class="parsons-submit">确定</a>

</div>
</div>

<script type="text/javascript">

jQuery(document).ready(function(){

/*
jQuery(".parsons-pager .parsons-page a").each(function(){

var href = jQuery(this).attr("href");


var url = document.URL;



if(url.indexOf("page=")<0){

jQuery(".parsons-pager .parsons-page .page-item-0").addClass("active");

}
if(url.indexOf(href)>0 && url.indexOf("page=")>0){

jQuery(this).addClass("active");

}

if(url.indexOf(href)<0 && url.indexOf("page=")>0){

jQuery(this).removeClass("active");

}


});
*/

jQuery(".parsons-pager .parsons-tiaozhuan .parsons-submit").click(function(){

var val = jQuery(".parsons-pager .parsons-tiaozhuan input").val();

var val2 = parseInt(val) - 1 ;

var r = /^[0-9]*[1-9][0-9]*$/;

var total = parseInt(jQuery(".parsons-pager .parsons-all-page #parsons-total").text());

var ur = window.location.href;

if(r.test(val) == false){

jQuery(".parsons-pager .parsons-tiaozhuan input").val("");

}

if(r.test(val) == true && ur.indexOf("page=")<0 && val > total){

location.href = ur+"?page=0";

}

if(r.test(val) == true && ur.indexOf("page=")<0 && val <= total){

location.href = ur+"?page="+val2;

}

if(r.test(val) == true && ur.indexOf("page=")>0 && val > total ){

location.href = ur.replace(ur.substr(ur.indexOf("page="),10),"page=0");

}

if(r.test(val) == true && ur.indexOf("page=")>0 && val <= total ){

location.href = ur.replace(ur.substr(ur.indexOf("page="),10),"page="+val2);


}

});
});
</script>

<style type="text/css">

 .parsons-pager{

clear:both;

overflow:hidden;
width: auto;
float: right;
margin-top: 20px;
margin-right:10px;
}
 .parsons-pager div{

float:left;
    overflow: hidden;
}

.parsons-pager a,
.parsons-pager .parsons-page p{

padding: 3px 10px 3px 10px;
background: #4b4b4b;
color:#fff;
margin-left: 5px;
text-decoration: none;
display: block;
    float: left;
}
 .parsons-pager .parsons-page .active{

background:#017518;
}
 .parsons-pager .parsons-all-page{

padding-top: 5px;
margin-left: 8px;
}
 .parsons-pager .parsons-tiaozhuan{

margin-left: 10px;
}
 .parsons-pager .parsons-tiaozhuan p,
 .parsons-pager .parsons-tiaozhuan a{

display:block;
float: left;
}
 .parsons- pager .parsons-tiaozhuan p{

margin-top: 6px;
}
.parsons-pager .parsons-tiaozhuan input{

width: 21px;
    height: 20px;
margin-top: 6px;
}
 .parsons-pager .parsons-tiaozhuan a{

background: #017518;
}
 .parsons-pager .parsons-page .omit{

background:none;
color:#000;
padding: 0px;
}
</style>
';


return $output;
}
