// Object of plugins to add to Globals.PLUGINS
Globals.PLUGINS.themePluginJpanelMenu = function(context) {
  // ----------------------------------------------------------------
  // Plugin: jPanel Menu
  // data-toggle=jpanel-menu must be present on .navbar-btn
  // @todo - allow options to be passed via data- attr
  // @see: http://jpanelmenu.com/
  // ----------------------------------------------------------------
  var $jpanelMenus = context.find('[data-toggle=jpanel-menu]');
  if ($jpanelMenus.length > 0) {
    var themePluginJpanelMenuInit = function() {
      var jpanelMenuTrigger = $jpanelMenus;
      var jpanelMenuState = '';
      var direction = jpanelMenuTrigger.data('direction') || 'right';
      var target = jpanelMenuTrigger.data('target');
      var $target = $(target);
      var $window = $(window);
      var $headerSticky = $('#header .is-sticky');
      var $html = $('html');
      var $closeLinks = $target.find('[data-dismiss="jpanel-menu"]') || null;
      var triggerActive = function($trigger) {
        if ($trigger.css("display") === "block" || $trigger.css("display") === "inline-block") {
          return true;
        }
        return false;
      };

      $html.addClass('jpanel-menu-' + direction);

      var jPM = jQuery.jPanelMenu({
        menu: target,
        direction: direction,
        trigger: '.' + jpanelMenuTrigger.attr('class'),
        excludedPanelContent: '.jpanel-menu-exclude',
        openPosition: '280px',
        clone: true,
        keepEventHandlers: true,
        afterOpen: function() {
          jpanelMenuTrigger.addClass('open');
          $html.addClass('jpanel-menu-open');
          $window.trigger('resize');
        },
        afterClose: function() {
          jpanelMenuTrigger.removeClass('open');
          $html.removeClass('jpanel-menu-open');
          $window.trigger('resize');
        },
        beforeOpen: function() {
          if ($headerSticky.length > 0) {
            $html.addClass('jpanel-menu-opening');
            $headerSticky.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
              $html.removeClass('jpanel-menu-opening');
            });
          }
        }
      });

      // Resize event trigger JPMenu on off based on trigger visibility
      $window.on("debouncedresize", function() {
        var triggerState = triggerActive(jpanelMenuTrigger);
        if (triggerState === true && jpanelMenuState !== 'on') {
          jPM.on();
          var $menu = jPM.getMenu();
          $menu.themeRefresh();
          jpanelMenuState = 'on';

          // Internal click not working
          jpanelMenuTrigger.on('click.jpm', function() {
            jPM.trigger(true);
            return false;
          });
        } else if (triggerState === false && jpanelMenuState !== 'off') {
          jPM.off();
          jpanelMenuTrigger.off('click.jpm');
          jpanelMenuState = 'off';
        }
      });

      $window.trigger('resize');

      if ($closeLinks !== null) {
        $closeLinks.on('click', function() {
          alert('kjhj');
          jPM.close(true);
        });
      }
    };
    $document.themeLoadPlugin(["jPanelMenu/jquery.jpanelmenu.min.js", "https://cdn.jsdelivr.net/jquery.smartresize/0.1/jquery.debouncedresize.js"], [], themePluginJpanelMenuInit);
  }
};


