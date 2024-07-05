class EventUtils {
  hideHeaderOnScroll(lastTop: number, currentTop: number) {
    const header = document.getElementById('main-header');
    if (header) {
      if (lastTop - currentTop <= -10) {
        header.classList.remove('translate-y-0');
        header.classList.add('-translate-y-40');
      }

      if (lastTop - currentTop >= 10) {
        header.classList.remove('-translate-y-40');
        header.classList.add('translate-y-0');
      }
    }
  }
}

const util = new EventUtils();
export default util;
