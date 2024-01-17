
  /* for the carousel */
  const items = document.querySelectorAll('.carousel .carousel-item');
  
  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i = i+1) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      const cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
  