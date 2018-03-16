// Object of plugins to add to Globals.PLUGINS
Globals.PLUGINS.themePluginFixTo = function(context) {
  // ----------------------------------------------------------------
  // Plugin: fixto(sticky navbar)
  // @see: https://bbarakaci.github.io/fixto/
  // ----------------------------------------------------------------
  var $fixTos = context.find('[data-toggle=clingify], [data-toggle=sticky]');
  if ($fixTos.length > 0) {
    var themePluginFixToInit = function() {
      var stickySetSettings = function(sticky) {
        var stickySettings = sticky.data('settings') || {};
        stickySettings.className = 'is-sticky';
        stickySettings.useNativeSticky = false;
        sticky.data('stickSettings', stickySettings);
      };

      var stickyStart = function(sticky, state) {
        stickySetSettings(sticky);
        var stickySettings = sticky.data('stickSettings');
        var stickyParent = stickySettings.parent || 'body';
        var stickyPersist = stickySettings.persist || false;
        var stickyDelay = stickySettings.delay || false;
        var stickyBreakpoint = stickySettings.breakpoint || false;
        var isStickyHeader = sticky.find('.header') || false;
        var $window = $(window);
        state = state || 'init';

        // Init
        sticky.addClass('sticky').fixTo(stickyParent, stickySettings);

        // Sticky from the start - @todo
        if (stickyPersist) {
          stickySetPersist(sticky, stickySettings);
        }

        $window.scroll(function() {
          // Make header unsticky when at the top
          var scroll = $(window).scrollTop();
          if (isStickyHeader && scroll === 0) {
            if (sticky.data('fixto-instance') !== '') {
              sticky.fixTo('refresh');
            }
          }
        });

        $window.on('resize', function() {
          setTimeout(function() {
            if (stickyBreakpoint) {
              if ($(window).width() <= stickyBreakpoint) {
                sticky.fixTo('destroy');
                sticky.data('fixto-instance', '');
              } else {
                if (sticky.data('fixto-instance') === '') {
                  sticky.addClass('sticky').fixTo(stickyParent, sticky.data('stickSettings'));
                }
              }
            }

            if (stickyPersist) {
              stickySetPersist(sticky, stickySettings);
            }
          }, 400);
        });

        $window.on('orientationchange', function() {
          if (isStickyHeader) {
            if (sticky.data('fixto-instance') !== '') {
              setTimeout(function() {
                sticky.fixTo('refresh');
              }, 400);
            }
          }
        });
      };

      var stickySetPersist = function(sticky, stickySettings) {
        var persistTop = sticky[0].getBoundingClientRect().top;
        if (stickySettings.mind !== '') {
          $(stickySettings.mind).each(function(key, value) {
            var $this = $(value);
            if ($this.length > 0) {
              persistTop -= $this.outerHeight();
            }
          });
        }
        if (sticky.data('fixto-instance') !== '') {
          sticky.fixTo('setOptions', {
            top: persistTop
          });
        } else {
          sticky.attr('style', 'top: auto;');
        }
      };

      $fixTos.each(function(i) {
        stickyStart($(this));
      });
    };
    $document.themeLoadPlugin(["https://cdnjs.cloudflare.com/ajax/libs/fixto/0.5.0/fixto.js"], ["plugin-css/plugin-sticky-classes.min.css"], themePluginFixToInit);
  }
};


