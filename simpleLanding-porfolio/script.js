const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  [entry] = entries;
  if (entry.isIntersecting) {
    console.log(entry);
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }

  /*   entry.target.classList.remove("section--hidden");
  console.log(entry); */
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/////////////////

const allImages = document.querySelectorAll("img.img__hidden");
console.log(allImages);

const imgCallback = function (entries, observer) {
  [entry] = entries;
  console.log(entry);
  entry.target.classList.remove("img__hidden");
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0.5,
});

allImages.forEach((img) => imgObserver.observe(img));
