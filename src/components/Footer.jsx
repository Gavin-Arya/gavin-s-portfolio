const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="mx-4 md:mx-19.25">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-primaryText/60 text-sm">© 2025 Gavin. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            
            <a
              href="https://www.linkedin.com/in/gavin-arya/"
              target="_blank"
              rel="nooopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-accentGreen hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer