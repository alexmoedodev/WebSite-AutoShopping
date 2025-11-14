// Import Componets
import { LinkNavegation } from "@/src/components/ux/Link";

//data navHeader
import { LinksNavHeader } from "@/src/data/dataNavHeader";

export function NavDesktop() {
  return (
    <>
      {/* Navegation Desktop */}
      <nav>
        <ul className="hidden md:flex items-center gap-4 text-md text-gray-600">
          {LinksNavHeader.map((link, index) => (
            <li key={index}>
              <LinkNavegation variant="gray" href={link.href}>
                {link.label}
              </LinkNavegation>
            </li>
          ))}
          
        </ul>
      </nav>
    </>
  );
}
