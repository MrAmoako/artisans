import React from 'react'

function Navbar() {
  return (
    <div>
        <nav
  class="p-5 absolute inset-x-0 top-0 h-8  ">
  <div className="">
    

    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-twe-collapse-item>

      <a
        className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="#">
        <img
          src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
          style={{height: '15px'}}
          alt="TE Logo"
          loading="lazy" />
      </a>

      <ul
        className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
        data-twe-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>

          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            data-twe-nav-link-ref
            >Dashboard</a
          >
        </li>

        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            data-twe-nav-link-ref
            >Services</a
          >
        </li>

        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="#"
            data-twe-nav-link-ref
            >Become an artisan</a
          >
        </li>
      </ul>
 
    </div>


    
 
  </div>
</nav>
    </div>
  )
}

export default Navbar