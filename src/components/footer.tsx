import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#1A1A1A] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-[#C8A96E] mb-2">tanner.</p>
            <p className="text-sm text-[#555]">Content creator & creative director.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-[#E8E4DF] mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#content" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="#partnership" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-[#E8E4DF] mb-4">Connect</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/tanner.mccartney99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-[#C8A96E] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-[#C8A96E] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-[#999] hover:text-[#C8A96E] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-semibold text-[#E8E4DF] mb-4">Info</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#999] hover:text-[#C8A96E] transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1A1A1A] pt-8">
          <p className="text-sm text-[#555] text-center">
            © {currentYear} Tanner McCártney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
