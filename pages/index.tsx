import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Создавайте&nbsp;</span>
          <span className={title({ color: "violet" })}>красивые&nbsp;</span>
          <br />
          <span className={title()}>
            онлайн-резюме.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Красиво, быстро и технологично.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Создать онлайн-резюме
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
           Создать резюме .pdf .docx
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
