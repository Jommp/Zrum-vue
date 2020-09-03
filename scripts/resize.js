Vue.directive('showon', {

   inserted: function (el, binding) {
      el.resizeEvent = function () {

         windowW = window.innerWidth;
         var viewportSize;

         if(windowW < 576){
            viewportSize = 'xs';
         }
         if(windowW >= 576 && windowW < 768){
            viewportSize = 'sm';
         }
         if(windowW >= 768 && windowW < 992 ){
            viewportSize = 'md';
         }
         if(windowW >= 992 && windowW < 1200){
            viewportSize = 'lg';
         }
         if(windowW >= 1200){
            viewportSize = 'xl';
         }

         size = binding.modifiers;

         if(size.xs && viewportSize =='xs' || 
            size.sm && viewportSize == 'sm' ||
            size.md && viewportSize == 'md' || 
            size.lg && viewportSize == 'lg' || 
            size.xl && viewportSize == 'xl'){

            el.style.display = "block";
         }else{
            el.style.display = "none";
         }
      }
      
      window.addEventListener('load', el.resizeEvent);
      window.addEventListener('resize', el.resizeEvent);
   }
});
/* Vue.directive('showOn', {
   bind: function(el, binding) {
      el.handleResize = function(){
         const size = binding.modifiers;
         if(window.innerWidth >= )
      }

      window.addEventListener('resize', handleResize)

      

      function viewportSize(){
         if(window.innerWidth < 576)
            return 'XS';
         if(window.innerWidth >= 576 && windowW < 768)
            return 'SM';
         if(window.innerWidth >= 768 && windowW < 992)
            return 'MD';
         if(window.innerWidth >= 992 && windowW < 1200)
            return 'LG';
         if(window.innerWidth > 1200)
            return 'XL';
      }

      

      if (size == viewportSize()){
         el.focus()
      }
   }
}) */

/* Vue.directive('focus', {
   inserted: function (el){
      el.focus()
   }
}) 

//change size

   //data
   var windowW = window.innerWidth
      
   //mounted
   window.addEventListener('resize', this.handleResize)
   this.handleResize();

   //methods
   handleResize() {
      this.windowW = window.innerWidth;
   }
      
   //computed
   viewportSize(){
      if(this.windowW < 576)
        return 'XS';
      if(this.windowW >= 576 && this.windowW < 768)
        return 'SM';
      if(this.windowW >= 768 && this.windowW < 992)
        return 'MD';
      if(this.windowW >= 992 && this.windowW < 1200)
        return 'LG';
      if(this.windowW > 1200)
        return 'XL';
   }
   

  Vue.directive('resize',{
   inserted:function(el){
      el.onresize
   }
})

Vue.directive("visibleOn", function(el, binding, vnode){
   function resize(){
      windowW = window.innerWidth
   }
   
   window.onresize = resize

   function viewportSize(){
      if(windowW < 576)
        return 'XS';
      if(windowW >= 576 && this.windowW < 768)
        return 'SM';
      if(windowW >= 768 && this.windowW < 992)
        return 'MD';
      if(windowW >= 992 && this.windowW < 1200)
        return 'LG';
      if(windowW > 1200)
        return 'XL';
   }

   const size = binding.modifiers;
   if (size.md){
      el.style.textDecoration = "underline";
   }

})
*/

 /* el.handleResize = function () {
         let windowW = window.innerWidth
         const size = binding.modifiers

         window.addEventListener('resize', this.handleResize)
         this.handleResize();

         handleResize() {
            this.windowW = window.innerWidth;
         }


         if (size.md)
            el.style.Display = "none";
         if (window.innerWidth >= binding.value.minWidth) {
            if (binding.arg == 'top' && window.scrollY >= offset) {
               el.style.position = 'fixed';
               el.classList.add("el-fixed");
            } else {
               el.style.position = 'relative';
               el.classList.remove("el-fixed");
            }
         }
      }
      window.addEventListener('resize', el.handleResize); */