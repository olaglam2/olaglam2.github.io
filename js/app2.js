// =====================
  // Ajax Load More
  // =====================

  var $load_posts_button = $('.js-load-posts');

  $load_posts_button.click(function(e) {
    e.preventDefault();

    var request_next_link = pagination_next_url.split('/page')[0] + '/page' + pagination_next_page_number + '/';

    $.ajax({
      url: request_next_link,
      beforeSend: function() {
        $load_posts_button.text('Loading');
        $load_posts_button.addClass('c-btn--loading');
      }
    }).done(function(data) {
      var posts = $('.js-post-card-wrap', data);

      $('.js-grid').append(posts);

      $('.js-fadein').viewportChecker({
        classToAdd: 'is-inview', // Class to add to the elements when they are visible
        offset: 100,
        removeClassAfterAnimation: true
      });

      $load_posts_button.text('More Stories');
      $load_posts_button.removeClass('c-btn--loading');

      pagination_next_page_number++;

      // If you are on the last pagination page, hide the load more button
      if (pagination_next_page_number > pagination_available_pages_number) {
        $load_posts_button.addClass('c-btn--disabled').attr('disabled', true);
      }
    });
  });
