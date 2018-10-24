for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
}