/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const docFrag = document.createDocumentFragment()
const navBar = document.querySelector(".page__header")
const newNavItem = document.createElement("li")
const navBarList = document.querySelector("#navbar__list")
const sections = document.querySelectorAll("section")
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
navItem = (id, name) => {
  const navHTML = `<a class="menu__link" data-id="${id}">${name}</a>`
  return navHTML
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildTheNav = () => {
  sections.forEach(section => {
    const newNavItem = document.createElement("li")
    const navId = section.id
    const navTitle = section.dataset.nav

    newNavItem.innerHTML = navItem(navId, navTitle)
    docFrag.appendChild(newNavItem)
  })
  navBarList.appendChild(docFrag)
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
scrollLinks = () => {
  const links = document.querySelectorAll(".menu__link")

  links.forEach(link => {
    link.addEventListener("click", e => {
      // e.preventDefault()
      const dataId = e.currentTarget.dataset.id
      const section = document.querySelector("#" + dataId)
      const navBarHeight = navBar.getBoundingClientRect().height
      const windowHeight = window.innerHeight - navBarHeight
      const sectionHeight = section.getBoundingClientRect().height
      const topGap = windowHeight - sectionHeight
      let sectionPosition = section.offsetTop
      window.scrollTo({
        top: sectionPosition - topGap,
        left: 0,
        behavior: "smooth"
      })
    })
  })
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.body.onload = buildTheNav()
// Scroll to section on link click
document.body.onload = scrollLinks()
// Set sections as active
