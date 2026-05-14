import React from 'react'

const footerLinks = [
  'Каталог авто',
  'Авто с пробегом',
  'Кредит и рассрочка',
  'Спецпредложения',
  'Такси в кредит',
]

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:px-6 sm:py-6">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-[0.85rem] font-semibold uppercase tracking-[0.22em] text-white/90 sm:gap-6">
            {footerLinks.map((link) => (
              <span key={link} className="transition-colors duration-200 hover:text-white">
                {link}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer