import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Discord",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Meta",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 3.034 2.023 1.13 1.69 1.746 4.05 1.746 6.344 0 1.023-.13 1.848-.394 2.366-.18.354-.4.513-.663.513-.473 0-.94-.467-1.756-1.467-.646-.794-1.363-1.726-2.189-2.9l-1.194-1.681-.036-.047c-1.03-1.378-1.923-2.478-2.457-2.478-.251 0-.614.266-1.089.995-.217.333-.477.753-.808 1.286l-1.026 1.652-.353.567c-1.09 1.75-1.62 2.6-2.177 3.282-.858 1.048-1.297 1.313-1.788 1.313-.478 0-.783-.207-.98-.554a2.948 2.948 0 0 1-.227-.596 7.128 7.128 0 0 1-.18-.847 10.81 10.81 0 0 1-.073-1.32c0-2.23.583-4.654 1.645-6.48.775-1.333 1.665-1.977 2.567-1.977.572 0 1.097.26 1.682.756a9.596 9.596 0 0 1 1.012.946l.26.278.054.059-.015-.02c.794-1.074 1.923-2.469 3.413-2.469z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]">
      {/* Main Hero Section */}
      <div className="container mx-auto px-6 pt-12 md:pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#52483E] mb-6 tracking-tight">
            Sound. Presence. Purpose.
          </h2>
          <p className="text-[#8B8782] text-base sm:text-lg leading-relaxed mb-8">
            Focused on crafting immersive audio experiences.
            <br />
            We believe sound should not just be heard—it should move you.
          </p>
          
          {/* Product Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/tech-specs"
              className="
                px-8 py-3
                rounded-full
                border border-[#8B8782]
                text-[#52483E]
                font-medium
                bg-white/60
                hover:bg-white
                hover:border-[#52483E]
                transition-all
                duration-300
              "
            >
              Aura Pro II
            </Link>
            <Link
              to="/compare"
              className="
                px-8 py-3
                rounded-full
                border border-[#8B8782]
                text-[#52483E]
                font-medium
                bg-white/60
                hover:bg-white
                hover:border-[#52483E]
                transition-all
                duration-300
              "
            >
              Flow II
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C0BAB2]">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-[#52483E]"
          >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          </svg>
              <span className="font-semibold text-lg text-[#52483E]">
                Resonance
              </span>
            </div>

            {/* Copyright and Social Links */}
            <div className="flex items-center gap-6">
              <p className="text-sm text-[#8B8782]">
                Developed with{" "}
                <span className="text-red-500">❤</span> by Raed Alturki
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                      text-[#6B6560]
                      hover:text-[#52483E]
                      transition-colors
                      duration-300
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
